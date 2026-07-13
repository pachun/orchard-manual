# The dotfiles

Every feature is a folder. That's the whole architecture.

```
configuration/
├── cli/          things a terminal needs — zsh, tmux, nvim, git, mise…
└── desktop/      things a screen needs  — waybar, themes, notifications…
```

Each folder is self-contained:

```
configuration/desktop/waybar/
├── install.sh          what to install, and where to link it
├── config/             files that get symlinked into ~/.config
└── bin/                scripts that get symlinked into ~/.local/bin
```

Adding a feature means creating a folder. Removing one means deleting it. There is
no central list to keep in step, no registry to update, nothing to forget — the
installer walks the directories and runs every `install.sh` it finds.

## The files are symlinks

`~/.config/waybar/config.jsonc` is not a copy of the repo's file. It **is** the
repo's file.

Edit it in `~/.config`, and you've edited the repo. `git diff` shows your change.
There is no step where you remember to copy it back, because there is nothing to
copy — which is the only reason a dotfiles repo ever stays current.

The same goes for `~/.local/bin`: every command in **The shell** is a symlink into
`configuration/*/bin/`.

## Writing an install.sh

```bash
#!/usr/bin/env bash
set -euo pipefail
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

sudo pacman -S --needed --noconfirm the-thing

bash "$TOOLS/link.sh" "$HERE/config" "$HOME/.config/the-thing"
bash "$TOOLS/link.sh" "$HERE/bin"    "$HOME/.local/bin"
```

Two rules, and they are not style preferences:

**It must be idempotent.** `install.sh` runs on a fresh machine and on a machine
that already has everything. Both have to work, because you will run `./install`
again and you should not have to think about whether it's safe.

**Paths must be absolute.** `link.sh` takes absolute paths and garbage-collects any
symlink that points into its source and no longer resolves. Hand it a relative path
and it will create the links, find them dangling, and delete them again — quietly,
and with a clean exit code.

## Two machines, one configuration

Anything that differs between the XPS and the Asahi Mac is decided inside the
component, not by you. `tools/machine.sh` answers "is this an Apple?" and the
component acts on it — the bar picks a layout, the key remapper decides whether to
swap Alt and Super, the trackpad quirk scopes itself by DMI.

There is no branch, no fork, and no per-machine config file. There is one repo, and
it knows where it woke up.
