# Odds and ends

## The clipboard remembers

`Cmd+Shift+X` opens everything you've copied. Pick one and it's on the clipboard
again.

It records images too, not just text — copy a screenshot, copy three other things,
and the screenshot is still in there.

## Emoji

`Cmd+Ctrl+Space`, as on a Mac. Search, pick, and it's typed into whatever you were in.

## The weather

`Cmd+Shift+W`, or click the temperature in the bar.

It works out what town you're in from your IP address, and it has to, because Arch's
chromium ships without Google API keys — so the browser's own geolocation is dead and
cannot be revived. The bar's temperature comes from the same guess.

## The screen is calibrated

The XPS's OLED panel ships with an uncalibrated, green-tinted white balance on Linux
— Windows loads a Dell factory profile that doesn't exist here — and the tell is that
dark blues come out green.

A per-channel gamma ramp corrects it at login, hand-matched to a MacBook Air. `wb` is
the tool it was found with, if you ever want to tune it again.

None of this runs on the Mac, whose panel was calibrated by the people who made it.

## Colour picker

`Cmd+P`. Click anything on screen, and its hex is on your clipboard.

## Do not disturb

`F6`, or the bell in the bar. Notifications are accepted and never shown.

## The Mac's trackpad

The Asahi machine runs a palm-rejection daemon of its own, because Apple's trackpad
reports contact *width* and the XPS's doesn't. Width is a much better signal than
pressure for telling a palm from a finger, so where the hardware offers it, we use it.
