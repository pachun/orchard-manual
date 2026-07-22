# Wallpapers

Every theme ships one, and every theme can have yours instead.

## Trying one on

Right-click any image and choose **Set as Wallpaper**, or:

```
set-wallpaper ~/pictures/that-one.png
```

It applies to the **theme you're in**, not to the desktop as a whole. Switch themes
and you get that theme's wallpaper back — which is the point of having four of them.
A wallpaper you choose outranks the theme's own and survives theme switches, so
trying one on isn't undone by the next `set-theme`.

To go back to what the theme ships:

```
set-wallpaper --clear
```

## Making one match

```
set-wallpaper --recolor ~/pictures/that-one.png
```

Rewrites the image's colours into the active theme's palette before setting it.
Add `--lum 0.6` to pull harder.

## Size it sensibly

The panel is 2880×1800. A 4K source is generous; an 8K source is 300ms of decoding
to display pixels no screen can show, and the wallpaper has to be *painted* before
the old one can be torn down. Oversize it enough and you will see the desktop's
default background flash through the gap.
