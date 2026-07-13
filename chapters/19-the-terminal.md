# The terminal

**ghostty**, and `Cmd+Return` opens it — or focuses it, if it's already there.

It starts inside tmux, so a terminal is never just a terminal: close the window and
the session is still running, and `t <name>` picks it back up. See **tmux**.

The terminal is the one place the Mac-style shortcut rewriting is deliberately turned
off, so `Ctrl+C` is still an interrupt. ghostty implements `Cmd+C`, `Cmd+V`, `Cmd+T`
and `Cmd+W` itself, which is why they work anyway.

## Files, two ways

**`Cmd+E`** opens Nautilus — a new window every time, on the desktop you're already
on. It's the one app that doesn't focus-if-running, because browsing files is
something you do several of at once, next to whatever you were doing.

**`yazi`** is the terminal one. It previews images, video and PDFs inline, and it's
what `icloud` opens the Mac mini's drive in.

## The sidebar is short on purpose

Nautilus shows Home, Trash, and your mounts. Recent, Starred and Network are gone —
not hidden behind a setting, but collapsed to nothing, because GTK4 has no way to
simply not show them.

## foot

A second, smaller terminal, kept because it starts instantly and has no dependencies
worth speaking of. If ghostty ever fails to start, foot is how you fix it.
