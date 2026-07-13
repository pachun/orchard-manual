# Coming from a Mac

Most of what you already know still works. This is the list of what was done so it
would.

## The key under your thumb is Command

Whatever the keycap says. On the MacBook it says Cmd. On the XPS it says **Alt** —
and it is Command anyway, because the two are swapped before anything else on the
system sees the key.

That one decision is what makes everything below possible: your left thumb lands in
the same place on both machines, and every shortcut is the shortcut you already know.

**Caps Lock is Ctrl**, which you probably did on the Mac too.

## The shortcuts you have in your fingers

They are rewritten at the input layer, before the application sees them, so *every*
app gets them — not just the ones that thought to implement them.

| | |
|---|---|
| `Cmd+C` `Cmd+V` `Cmd+X` | Copy, paste, cut |
| `Cmd+A` `Cmd+Z` `Cmd+S` `Cmd+F` | Select all, undo, save, find |
| `Cmd+T` `Cmd+W` `Cmd+Shift+T` | New tab, close tab, reopen the one you just closed |
| `Cmd+Shift+[` / `Cmd+Shift+]` | Previous / next tab |
| `Cmd+Left` / `Cmd+Right` | Back / forward |
| `Cmd+Option+I` | Web inspector |
| `Cmd+Q` | Quit |
| `Cmd+,` | Settings |
| `Cmd+Ctrl+Space` | Emoji |
| `Cmd+Shift+3` / `4` / `5` | Screenshot, region, record |
| `Cmd+click` | Add to a selection — or open a link in a new tab |

The terminal is deliberately left out, so `Ctrl+C` there is still an interrupt. It
implements `Cmd+C` and friends itself.

## Switching windows and spaces

| | |
|---|---|
| `Cmd+Tab` | Next window **on this desktop** |
| `` Cmd+` `` | Previous window — the same ring, backwards, so overshooting is recoverable |
| `Ctrl+Left` / `Ctrl+Right` | Previous / next desktop |
| Three-finger swipe | Previous / next desktop |
| `Cmd+1`–`5` | Straight to a desktop |

`Cmd+Tab` stays on the current desktop rather than gathering every window on the
machine, which is the one place this deliberately differs from macOS. Crossing spaces
is already its own gesture; this key is for "what else is *here*".

The trackpad scrolls naturally and taps to click, as you'd expect.

## Your Apple things still work

Three of them, and each one has a catch worth knowing before you need it.

**Photos** — `Cmd+Shift+P` opens Apple Photos as its own window, no browser chrome.
It's the real iCloud photo library. Nothing was synced or copied.

**Messages** — `Cmd+I` opens [BlueBubbles](https://bluebubbles.app), which is iMessage.
Really iMessage — blue bubbles, tapbacks, the lot. **It needs a Mac.** BlueBubbles is a
client, and it talks to a server that has to run on an always-on Mac signed into your
Apple ID: a Mac mini in a cupboard is the usual answer. That server is reached over
Tailscale, so it works from anywhere, not just at home. See **Connecting things**.

**Files** — `~/icloud` is your real iCloud Drive, mounted over SSH from that same Mac,
across the tailnet. It shows up in the Files sidebar because it's genuinely mounted —
which also means that if the tailnet is down, it isn't there. `icloud` opens it in the
terminal.

## What you can't have, and what to do instead

**Apple Music and Apple TV will not play on Linux.** Not "aren't packaged" — *will not*.
They're DRM-locked in a way that has no Linux path, and no amount of configuration
changes that.

So don't fight it. Own your media instead: [pachun/depot](https://github.com/pachun/depot)
sets up a home media server on a NAS, which plays anywhere, forever, and asks no
permission.

For music, Spotify runs as an app (`Cmd+M`) — and it runs in a browser deliberately,
because a browser's audio is an ordinary stream and an ordinary stream can be sent to a
**HomePod**. The terminal client we used to run couldn't. See **Sound and media**.

## Things that are quietly the same

The bar is at the top. The clock is in the middle of it — which macOS can't do, and
which is where a clock wants to be. On the MacBook it sits beside the notch instead,
because the middle of that screen is behind it.

The font is SF Pro. The window corners are rounded, and they're *squircles* — the
superellipse Apple uses, not a plain circular arc, because that shape is more of the
Mac feeling than most people can name.
