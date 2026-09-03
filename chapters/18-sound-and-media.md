# Sound and media

## Choosing where sound goes

`Cmd+Shift+A`, or click the speaker in the bar.

The list shows what's actually available and nothing else — an output whose port
reports itself as unplugged doesn't appear, so you can't send music to headphones
that aren't there. The laptop's own speakers are listed as **This Computer**,
because that's what they are.

Picking an output does the thing you meant: it becomes the default *and* everything
already playing moves to it. Choosing a speaker while music plays should move the
music.

## The Framework's microphone

The Framework 13's internal mic is wired to its audio codec, but the sound card
profile Linux picks on its own routes the mic slot through a second capture
controller that isn't connected to anything on this board — it records a flat,
silent constant. The setup pins the profile with the working route and hides the
dead one, so the only mic on offer is the one that hears you.

## AirPlay

HomePods and Apple TVs show up in that same list, alongside everything else. There
is no separate AirPlay menu, because it isn't a separate question — it's just
another place sound can go.

Spotify's audio can go to a HomePod for the same reason: it's an ordinary stream, and
an ordinary stream can be sent anywhere sound goes.

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
