# Notifications

Notifications don't get a toast. They take the clock's place at the top of the
screen — the clock fades out, the message fades in, and after five seconds they
swap back.

```
Mon Jul 13  4:12 PM
        ↓
BlueBubbles — Nicholas Pachulski — Hey bud
        ↓
Mon Jul 13  4:12 PM
```

## Clicking one

Click the message and it opens the app that sent it — the same thing `Cmd+I` does
for BlueBubbles, but resolved from the notification rather than hard-coded, so it
works for any app.

If the app offers a *default action*, that gets invoked instead and the app decides
where to take you. Most don't. BlueBubbles, for instance, offers "Mark Read" and
two reactions and no default, which is why clicking a message opens the app and not
the thread — the thread simply isn't in the notification.

## Screenshots know where they are

Take a screenshot and the notification says **Click to show it in Files**. Clicking
opens a new Files window with the shot already selected in it.

Any script can do this. Name a file in the notification and it becomes clickable:

```
notify-send "Screenshot" "Click to show it in Files" \
    -h "string:x-orchard-reveal:$file"
```

It carries a *path*, not a command, on purpose — a notification hint holding a shell
command would let anything on the session bus hand you code and wait for you to
click it. A path can only ever open a file manager.

## Why the app name sometimes isn't shown

A notification reads `app — title — message`, but only when a real app sent it.
Scripts announce themselves through `notify-send`, whose app name is, unhelpfully,
`notify-send`. Real applications identify themselves with a `desktop-entry` hint;
`notify-send` has none. So that hint, not the name, decides whether the name is
worth showing.
