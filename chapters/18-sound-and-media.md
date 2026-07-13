# Sound and media

## Choosing where sound goes

`Cmd+Shift+S`, or click the speaker in the bar.

The list shows what's actually available and nothing else — an output whose port
reports itself as unplugged doesn't appear, so you can't send music to headphones
that aren't there. The laptop's own speakers are listed as **This Computer**,
because that's what they are.

Picking an output does the thing you meant: it becomes the default *and* everything
already playing moves to it. Choosing a speaker while music plays should move the
music.

## AirPlay

HomePods and Apple TVs show up in that same list, alongside everything else. There
is no separate AirPlay menu, because it isn't a separate question — it's just
another place sound can go.

This is also why Spotify runs as a web app rather than a terminal client. A browser's
audio is an ordinary stream, and an ordinary stream can be sent to a HomePod. The TUI
we used to run couldn't.

## Bluetooth

`Cmd+Shift+B`. Pair, connect, disconnect. The icon pulses while it's scanning.

## The media keys

| | |
|---|---|
| `F7` / `F8` / `F9` | Previous, play/pause, next |
| `F10` | Mute |
| `F11` / `F12` | Volume down / up |

Volume up and down also **unmute**, which is what you meant when you reached for
them. They control whatever is playing — Spotify, a browser tab, a video — through
MPRIS, so there is nothing to configure and no "which app" to choose.
