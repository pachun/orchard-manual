# Trackpad and keyboard

## Clicking

Press it or tap it — either one clicks.

| | |
|---|---|
| One finger | Left click |
| Two fingers | Right click |
| Three fingers | Middle click |
| Three-finger swipe | Change desktop |
| `Cmd` + click | Add to a selection, or open a link in a new tab |

The pad is a haptic sensor — no hinge, no switch, just a surface that measures
force — so a press anywhere on it counts, and there is no dead zone at the top.

## Typing doesn't click

Disable-while-typing ignores the pad while you type and for a moment after, so a
resting palm doesn't click mid-sentence. It has to be pointed at the right keyboard:
the key remapper takes an **exclusive grab** on the physical one, so the setting
watches the remapper's virtual keyboard — the device your keystrokes actually come out
of — instead. Aimed at the physical keyboard, it would see nothing and do nothing.

One honest limit: disable-while-typing suppresses *taps*, but deliberately never
gates the *physical button*, on the assumption that a real press is always
intentional. On a hinged clickpad that holds. On a force sensor it is a guess — so
if a resting palm ever presses hard enough to click while you type, that is the
gap, and it is a gap by design rather than a bug.

## Caps Lock is Ctrl

Done at the input layer rather than in the keymap, so that everything downstream —
including the Mac-style shortcut rewriting — sees a real Ctrl when you press it.

## The keyboard backlight stays on

The Dell firmware runs its own backlight timer — never software — and it ships set to
one minute, which is exactly wrong for the one case you need it: sitting in a dark
room, not typing, hunting for the volume key. It's set to twelve hours here, the
longest this BIOS will accept. There is no "never"; `0` is rejected, and so is anything
past `12h`.

It costs about 0.7 W, which is roughly one hour off an eleven-hour battery.
