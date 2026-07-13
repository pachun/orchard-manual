# Trackpad and keyboard

## The trackpad has no click

On the XPS, pressing the trackpad does nothing. That is on purpose.

The pad is a haptic sensor — no hinge, no switch, just a surface that measures
force. A firm press anywhere fires a click, and the heel of a hand resting on it
while you type presses hard enough to do it. The usual defence doesn't apply:
disable-while-typing suppresses taps and motion, but deliberately never gates a
*physical button*, on the assumption that a real button press is always intentional.
On a hinged clickpad that holds. On a force sensor it doesn't.

So the button is turned off. Every click is a tap:

| | |
|---|---|
| One finger | Left click |
| Two fingers | Right click |
| Three fingers | Middle click |
| Three-finger swipe | Change desktop |

## Typing doesn't click any more

Disable-while-typing ignores the pad while you type and for a moment after. It was
silently dead for a long time: the key remapper takes an **exclusive grab** on the
real keyboard, so the compositor was watching a device that could never deliver it
another keystroke. It reported itself as enabled the whole time. It's now paired
with the keyboard your keys actually come out of.

## Caps Lock is Ctrl

Done at the input layer rather than in the keymap, so that everything downstream —
including the Mac-style shortcut rewriting — sees a real Ctrl when you press it.

## The keyboard backlight stays on

It used to go dark sixty seconds after your last keystroke, which is exactly wrong
for the one case where you need it: sitting in a dark room, not typing, hunting for
the volume key.

That was never software. The Dell firmware runs its own timer, and it ships set to
one minute. It's now set to twelve hours — the longest this BIOS will accept.
There is no "never"; `0` is rejected, and so is anything past `12h`.

It costs about 0.7 W, which is roughly one hour off an eleven-hour battery.
