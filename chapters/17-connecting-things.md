# Connecting things

The parts that can't be automated away, because they involve someone asking you to
prove who you are.

```
~/code/orchard/connect          # list them
~/code/orchard/connect icloud   # run one
```

Each one is a script in `connections/`, and each is safe to run again.

## tailscale

Joins your tailnet — the private network that links this machine to the always-on
Mac mini. **Run this first.** Two of the others depend on it.

## icloud

Mounts the Mac mini's iCloud Drive at `~/icloud`, over SSH, across the tailnet.

That last part is the point: because it goes over Tailscale rather than the LAN, the
mount works from anywhere. Your files are on the sofa and in the coffee shop.

```
icloud     # browse it
```

There is no iCloud client for Linux and there is not going to be one. So the Mac
mini keeps a real iCloud Drive, and this machine reads it over a wire.

## github

Registers this machine's SSH key with GitHub, so `git push` works without a
password prompt.

## Messages

`Cmd+I` opens BlueBubbles — iMessage on Linux, talking to the same Mac mini. It has
to be signed in once, inside the app.

**It is already running.** It starts at login and goes straight into hiding — the
same place `Cmd+I` puts it when you dismiss it — so it is connected from the moment
you sign in, and a text arrives as a notification without a window ever having
appeared. `Cmd+I` brings it out, exactly as though you had hidden it yourself.

Notifications from it land in the bar where the clock is, and clicking one opens the
app. It won't open the *thread*: BlueBubbles doesn't put one in the notification, so
there's nothing to open. See **Notifications**.

## The VPN

`Cmd+Shift+V`, or:

```
nord_connect       # the Dedicated_IP group
nord_disconnect
```

The bar shows a shield while it's up.
