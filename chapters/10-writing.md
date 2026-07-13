# Writing

## Markdown, as GitHub will show it

Type `:md` in Neovim and the file opens beside the editor, rendered, and re-renders
every time you save.

It is not an approximation. The preview posts the file to **GitHub's own Markdown
API** and shows what comes back — so alerts, task lists, autolinks and the table
quirks are exactly what the repo page will show, and they stay right when GitHub
changes its engine. The price is honest: no network, no preview.

Clicking the clock opens Google Calendar. Clicking a notification opens whatever
sent it. Neither of those has anything to do with writing, but you will click them.

## The command is `:Md`

Vim keeps lowercase names for its own commands, so the real one has to be
capitalised. `:md` reaches it through an abbreviation that only fires when `md` is
the whole line, so `:e md.txt` still opens a file.

## Screenshots

| | |
|---|---|
| `Cmd+Shift+3` | The whole screen |
| `Cmd+Shift+4` | Drag a region |
| `Cmd+Shift+5` | Record |

They land in `~/pictures/screenshots` and go to the clipboard at the same time, so
you can paste one straight into a message. The notification is clickable — it opens
Files with the shot already selected.
