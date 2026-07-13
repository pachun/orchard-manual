# Welcome

Orchard is an Arch Linux desktop that behaves like a Mac.

Not a theme that looks like one — a desktop where `Cmd+C` copies, `Cmd+Q` quits,
`Cmd+Space` is a launcher, and the key under your left thumb is Command no matter
whose laptop you're holding. Underneath it's Hyprland on Wayland, and everything
in it is a file in a git repository.

There's a garden outside Apple's. This is the map of it.

## What it runs on

Two machines, one configuration:

- A **Dell XPS 14**, where a key swap makes the thumb key Command.
- An **M1 or M2 Mac** under **Asahi**, where it already is.

Anything that differs between them is handled in the setup, not by you.

## How to read this

The manual is a reference, not a book. Press <code>/</code> from anywhere to search it —
the same instinct the desktop rewards. If you're looking for a key, it's in
**Hotkeys**, and that's the chapter most people never leave.

## How it's put together

Every feature is a folder under `configuration/desktop/` with an `install.sh`
inside it. Adding a feature means creating a folder; removing one means deleting
it. There is no central list to keep in step, which is the entire trick.

```
configuration/desktop/waybar/
├── install.sh          what to install and where to link it
├── config/             files that get symlinked into ~/.config
└── bin/                scripts that get symlinked into ~/.local/bin
```

The files in `config/` are **symlinks** into the repo, not copies. Edit the file
in `~/.config`, and you have edited the repo. There is no step where you remember
to copy your changes back, because there is nothing to copy.
