
// The manual is keyboard-first, like the desktop it documents. `/` puts you in
// the search box from anywhere; Escape gets you out.
const find = document.getElementById("find");
const results = document.getElementById("results");
const hits = document.getElementById("hits");
const nothing = document.getElementById("nothing");

addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== find) {
    event.preventDefault();
    find.focus();
    find.select();
  }
  if (event.key === "Escape") {
    find.value = "";
    show(false);
    find.blur();
  }
});

function show(open) {
  results.hidden = !open;
  document.body.style.overflow = open ? "hidden" : "";
}

// A line of the chapter with the term still in it, so you can see why it matched.
function excerpt(text, term) {
  const at = text.toLowerCase().indexOf(term);
  const from = Math.max(0, at - 60);
  const slice = text.slice(from, at + term.length + 100);
  const safe = (s) => s.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
  return (from ? "…" : "")
    + safe(slice.slice(0, at - from))
    + "<mark>" + safe(slice.slice(at - from, at - from + term.length)) + "</mark>"
    + safe(slice.slice(at - from + term.length)) + "…";
}

find.addEventListener("input", () => {
  const term = find.value.trim().toLowerCase();
  if (term.length < 2) return show(false);

  const found = CHAPTERS
    .map((c) => ({ chapter: c, at: c.text.toLowerCase().indexOf(term) }))
    .filter((r) => r.at > -1 || r.chapter.title.toLowerCase().includes(term));

  hits.innerHTML = found.map(({ chapter, at }) => `
    <li><a href="${chapter.slug}.html">
      <span class="where">${chapter.title}</span>
      <span class="line">${at > -1 ? excerpt(chapter.text, term) : "This chapter"}</span>
    </a></li>`).join("");

  nothing.hidden = found.length > 0;
  nothing.textContent = found.length ? "" : `Nothing in the manual mentions "${find.value.trim()}".`;
  show(true);
});

// The toggle names the theme rather than drawing a sun, because these are real
// themes you can actually be running on the desktop.
const THEMES = ["everforest", "rose-pine-dawn"];
const button = document.getElementById("theme");
const root = document.documentElement;

function wear(theme) {
  root.dataset.theme = theme;
  localStorage.setItem("orchard-manual-theme", theme);
  button.textContent = theme;
}

button.addEventListener("click", () => {
  wear(THEMES[(THEMES.indexOf(root.dataset.theme) + 1) % THEMES.length]);
});

const remembered = localStorage.getItem("orchard-manual-theme");
const prefersLight = matchMedia("(prefers-color-scheme: light)").matches;
wear(remembered || (prefersLight ? "rose-pine-dawn" : "everforest"));
