# The camera

The webcam is **off** until you turn it on.

```
camera on      # /dev/video33 goes live
camera off     # the sensor powers down, the LED goes out
camera         # which is it right now
```

That's not a privacy gesture, it's a requirement: the XPS's IPU7 camera needs a
userspace relay running before anything can open it. With the relay stopped, the
sensor is genuinely powered down — the LED is off because the camera is off, not
because software is politely declining to look.

## Turn it on before the meeting, not during

Browsers and meeting apps enumerate cameras when they start. Start the call first
and `camera on` second, and the app will already have decided you don't have one.

## Why a relay at all

The raw sensor feed is upside down. The relay flips it and republishes it as
`/dev/video33`, which is the device V4L2 apps — every browser, every meeting app —
actually open.

Anything using libcamera directly (`qcam`, or the PipeWire camera portal) skips the
relay, opens the sensor itself, and sees the raw feed. Which is upside down. If a
camera preview is inexplicably inverted, that's why, and it means the app isn't
going through `/dev/video33`.
