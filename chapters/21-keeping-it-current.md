# Keeping it current

The bar counts how many packages are out of date. Click it — or `Cmd+,` → **Update** —
and it opens a terminal and does them.

```
sudo pacman -Syu
yay -Sua
```

Repo packages first, then the AUR, as two separate steps on purpose: one AUR
package that won't build — a missing signing key, a failed compile — used to abort
the whole run before a single repo package had been upgraded, and the machine
would quietly drift behind. Now it costs only that package.

It runs in a tmux session called `system-update`, in its own window, and waits for a
keypress before closing so you can read what happened. Run it again while it's going
and you get the same window back rather than a second update fighting the first.
Everything it printed is also in `~/.local/state/system-update.log`, for the times
you closed the window first and wondered later.

AUR packages that build from source use every core, and their signing keys come
from a keyserver that actually has them; both are set up once by the installer, so
a kernel or a driver from the AUR is minutes, not hours.

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
