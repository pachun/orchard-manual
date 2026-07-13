# Neovim

Leader is **Space**.

## Getting around

| | |
|---|---|
| `<leader>ff` | Find a file |
| `<leader>fr` | Recent files |
| `<leader>fs` | Search inside files |
| `<leader>ee` | Toggle the file tree |
| `<leader>ef` | The file tree, focused on the file you're in |
| `gd` | Go to definition |
| `gr` | Find references |

## Splits

`Ctrl+H` `Ctrl+J` `Ctrl+K` `Ctrl+L` move between them — the same keys that move
between tmux panes, so a split and a pane feel like the same thing.

| | |
|---|---|
| `<leader>d\|` | Split left/right |
| `<leader>d_` | Split top/bottom |
| `<leader>d+` | Zoom this split |
| `<leader>de` | Even them out |

## Tests

| | |
|---|---|
| `<leader>s` | The test under the cursor |
| `<leader>t` | Every test in this file |
| `<leader>a` | All of them |

They run in a tmux pane along the bottom — the 8-line one — so the results sit
under the code instead of covering it.

## The rest

| | |
|---|---|
| `jj` | Leave insert mode |
| `<leader>w` / `<leader>q` | Save / quit |
| `<leader>rn` | Rename the symbol under the cursor |
| `<leader>d` | Show the diagnostic on this line |
| `[d` / `]d` | Previous / next diagnostic |
| `[c` / `]c` | Previous / next git hunk |
| `<leader>gb` | Git blame this line |
| `<leader>nh` | Clear the search highlight |
| `<leader>R` | Reload the Neovim config, in place |
| `:md` | Preview this markdown as GitHub will render it |

`:W` and `:Q` work too. Holding Shift a beat too long shouldn't be an error.

## It follows the theme

Switch the desktop theme and the Neovim you have open right now repaints — same
buffers, same cursor, new colours. It does not restart, and it does not ask.
