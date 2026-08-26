# Themes

Eight themes, and a theme is not a colour scheme — it is every application on the
desktop agreeing at once.

![catppuccin-frappe](img/theme-catppuccin-frappe.jpg)
<p class="caption"><code>catppuccin-frappe</code> — dark, blue-grey</p>

![catppuccin-macchiato](img/theme-catppuccin-macchiato.jpg)
<p class="caption"><code>catppuccin-macchiato</code> — dark, and deeper</p>

![everforest](img/theme-everforest.jpg)
<p class="caption"><code>everforest</code> — dark, green</p>

![rose-pine-dawn](img/theme-rose-pine-dawn.jpg)
<p class="caption"><code>rose-pine-dawn</code> — the light one</p>

![ristretto](img/theme-ristretto.jpg)
<p class="caption"><code>ristretto</code> — dark, warm brown; Monokai Pro's coffee filter</p>

![tokyo-night](img/theme-tokyo-night.jpg)
<p class="caption"><code>tokyo-night</code> — dark, blue-violet</p>

![hackerman](img/theme-hackerman.jpg)
<p class="caption"><code>hackerman</code> — neon green on ink, for when a terminal should look like one</p>

And `osaka-jade` — deep green on near-black. These four are ported from
[Omarchy](https://omarchy.org)'s shortlist.

Switch with `Cmd+,` → **Theme**, or from a terminal:

```
set-theme everforest
```

## What moves when you switch

The terminal, the bar, the window borders, the menus, notifications, the file
manager, the browser's chrome, Neovim — including the instance you have open right
now, which repaints in place without losing your buffers — the wallpaper, and the
system's light/dark preference, so every GTK app and every website that respects
`prefers-color-scheme` turns over with it.

## How a theme is made

A theme is a folder of partials, one per application:

```
configuration/desktop/themes/config/orchard-themes/everforest/
├── palette          the sixteen colours
├── ghostty.conf     the terminal
├── waybar.css       the bar
├── hyprland.conf    window borders
├── nvim.lua         the editor
├── chromium.json    the browser
├── fuzzel.ini       the menus
├── tmux.conf        the multiplexer
├── gtk-theme-name   the GTK apps
└── wallpaper.png
```

Each app's real config points at `~/.config/orchard-themes/active/<app>`, and
`active` is a symlink. Switching a theme repoints one symlink and then tells each
app to re-read its config. Nothing is templated, and adding a new app to the
theme system means dropping one more partial into each folder.

The one exception is anything drawn by hand rather than by an app — the
volume square, the Claude usage panel. Those read the `palette` file and render
their own colours from it on every switch, so a new theme gets them for free.

## The browser is the odd one

`chromium.json` doesn't set a colour — it sets a **seed**. Chromium takes the hue
out of it and builds its own palette at much higher saturation, so a near-white
cream seed comes back as mustard. Pick the hue you want *generated*, not the colour
you want to see.
