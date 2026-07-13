# tmux

The prefix is **`Ctrl+A`**, not `Ctrl+B`. It's under your left hand, and Caps Lock
is Ctrl, so the whole chord happens on the home row.

Below, `⌃A` means "press the prefix, then the key".

## Panes

| | |
|---|---|
| `⌃A` then `\|` | Split left/right |
| `⌃A` then `_` | Split top/bottom |
| `⌃A` then `⌃T` | A short pane along the bottom, 8 lines — for a test run or a log |
| `⌃A` then `+` | Zoom this pane full-screen, and back |

New panes and windows open **in the directory you were already in**, which is
almost always the one you wanted.

## Moving between panes

`Ctrl+H` `Ctrl+J` `Ctrl+K` `Ctrl+L` — **no prefix**. Just the chord.

And they cross the boundary: the same four keys move between tmux panes *and*
Neovim splits, and the right thing happens depending on where you are. A Neovim
split next to a shell pane is one continuous space, not two programs that happen to
be adjacent.

## Windows

| | |
|---|---|
| `⌃A` then `c` | New window, right here (not at the end) |
| `⌃A` then `⌃H` / `⌃L` | Previous / next window — hold `⌃` and repeat |
| `⌃A` then `o` / `p` | Drag this window left / right in the list |

## Sessions

| | |
|---|---|
| `⌃A` then `t` | Pick a session from a list |
| `⌃A` then `d` | Detach |
| `⌃A` then `r` | Reload the config |

From the shell, `t <name>` is usually quicker — see **The shell**.

## Scrolling

Just scroll. The wheel enters copy mode on its own, and a full-screen program
(`less`, `htop`, Neovim) gets the scroll events instead, because that's what it
wanted.
