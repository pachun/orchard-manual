# The orchard manual

The manual for [orchard](https://github.com/pachun/orchard), as a static site.

```
./build          # chapters/*.md  ->  site/
```

Then open `site/index.html`. No server needed, and no server wanted — a manual you
can't read without infrastructure is a manual you won't read. It serves from
anywhere too, so `site/` can go straight to GitHub Pages.

## Writing a chapter

Add a numbered markdown file to `chapters/`. The number orders it in the contents
and is stripped from the URL; the first line is the title.

```
chapters/11-printing.md   ->   site/printing.html
```

That's all the configuration there is. There is no list of chapters to keep in
step, which is the same trick orchard itself uses.

## Two things the build does for you

**Hotkeys become keys.** Any `` `Cmd+Shift+D` `` in the markdown is rendered as
keycaps. Write the chord in backticks and it comes out looking like the thing your
hands do.

**The manual wears orchard's themes.** Dark is catppuccin-frappe, light is rose-pine-dawn,
and the palettes are the real ones from the theme folders. The toggle names the
theme rather than drawing a sun, because those are themes you can actually be
running. It follows the system preference until you pick one.

Press `/` to search, from any page.

## Fonts

[iA Writer](https://github.com/iaolo/iA-Fonts) Quattro and Mono, bundled under the
SIL Open Font License. Quattro is duospaced — proportional enough to read for an
hour, monospaced enough to still belong to a terminal.
