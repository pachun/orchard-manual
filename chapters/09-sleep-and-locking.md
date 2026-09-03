# Sleep and locking

| | |
|---|---|
| **5 minutes** | the screen dims |
| **10 minutes** | it locks |
| **10 minutes, 30 seconds** | the panel turns off |

`Cmd+Delete` locks it now. So does `Cmd+,` → **Lock**.

## Unlocking with a finger

On the Framework, the fingerprint reader is the power button. Rest an enrolled
finger on it at the lock screen and it unlocks; the line under the password field
says what the reader is doing. The password still works, always.

Enrolling is the one step that can't be automated — it's ten taps of your finger:

```
cd ~/code/orchard
./connect fingerprint
```

Machines without a reader never see any of this. The lock screen is the same one,
minus the line.

## Why there's no screensaver

Because the XPS's screen is OLED, and a screensaver is the wrong tool for it.

Screensavers exist because CRT phosphor burned where the beam sat still, and the
fix was to keep the image moving. OLED doesn't work like that — every lit pixel
ages, moving or not. A screensaver would light the panel for twenty minutes to
protect it from a failure mode this display cannot have. The panel going **off** is
the only real protection, and that's what the ten-and-a-half-minute mark is for.

The thing genuinely at risk is the bar: static, same pixels, every waking hour. The
dark themes are doing real work there, since a dark pixel on OLED is largely an off
pixel.

The Framework's panel is an LCD and has none of this to fear. It keeps the same
timings anyway — a lit panel nobody is looking at is battery, whatever it's made of.

## Why the lock lands before the panel

Thirty seconds before, and not at the same time. Fire both at once and they race:
the panel can win, and then the lock screen is painting into a display that's
already dark. Wake it and you get a frame or two of your unlocked desktop before
the lock appears.

It also locks on the way *into* sleep rather than on the way out — a machine that
suspends unlocked is showing its desktop the instant the lid opens.

## Why Delete and not Backspace

`Cmd+Delete` is the dedicated Delete key, in the top corner, not the big key above
Return. That one is what a Mac calls Delete, and macOS already uses it with Cmd to
delete to the start of a line. Binding it would turn a lifetime of text-editing
habit into an accidental lock, mid-sentence.

The cost is that Apple keyboards have no dedicated Delete key and must reach it
through `Fn`. A chord that's slightly awkward on one machine beats one that fires by
accident on both.
