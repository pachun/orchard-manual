# Keeping it current

The bar counts how many packages are out of date. Click it — or `Cmd+,` → **Update** —
and it opens a terminal and does them.

```
yay -Syu
```

It runs in a tmux session called `system-update`, in its own window, and waits for a
keypress before closing so you can read what happened. Run it again while it's going
and you get the same window back rather than a second update fighting the first.

Nothing updates itself in the background. A machine that changes underneath you while
you work is a machine you can't debug.

## The configuration itself

```
cd ~/code/orchard
git pull
./install desktop
```

`install.sh` is idempotent everywhere, so running it on a machine that already has
everything is the expected case, not a recovery step. That's what makes pulling
someone else's change safe.

## What updating won't do

Reload libinput's quirks. Those are read once, when the compositor starts — so a
change to the trackpad or the keyboard integration needs a log out, not an install.
The installer tells you when it's done something like that.
