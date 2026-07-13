# Install

## On a Dell XPS 14

Flash an [Arch ISO](https://archlinux.org/download/) to a USB drive, then boot the
BIOS with `F2`, turn off secure boot, and put the USB drive first in the boot order.

```
iwctl --passphrase "PASS" station wlan0 connect "SSID"
pacman -Sy --noconfirm git
git clone https://github.com/pachun/orchard /tmp/orchard
/tmp/orchard/install-arch/dell-xps-14
```

It reboots itself. Sign in, then:

```
nmcli device wifi connect "SSID" password "PASS"
~/code/orchard/install desktop
~/code/orchard/connect
```

## On an M1 or M2 Mac

```
curl https://asahi-alarm.org/installer-bootstrap.sh | sh
```

Reboot into Arch, then the same three steps: connect, clone, install.

```
nmcli device wifi connect "SSID" password "PASS"
pacman -Sy --noconfirm git
git clone https://github.com/pachun/orchard /tmp/orchard
/tmp/orchard/install-arch/asahi
```

## Why the wifi command changes

On the Arch installer you use `iwctl`; on the installed system you use `nmcli`.
That is not an inconsistency. They are clients for two different daemons — the
ISO runs `iwd`, the installed system runs NetworkManager — and you cannot use
`iwctl` on a machine that isn't running `iwd`. There is no way around it, because
installing `iwd` would need the network you are trying to bring up.

## What `connect` does

`~/code/orchard/connect` is the part that can't be automated away: signing into
Google Calendar, GitHub, iCloud files, and Tailscale. It asks; you answer.
