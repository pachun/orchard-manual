# Install

## Flash the USB

On a machine already running orchard:

```
flash-arch-iso
```

It downloads the current [Arch ISO](https://archlinux.org/download/), checks
Arch's signature on it, finds the USB stick, and — after you type `yes` —
overwrites the stick with it.

On any other Linux machine, the same thing by hand: download the ISO and its
`.sig` from [archlinux.org/download](https://archlinux.org/download/), verify,
and write it with `dd`:

```
sudo dd if=archlinux-x86_64.iso of=/dev/sdX bs=4M oflag=direct conv=fsync status=progress
```

where `/dev/sdX` is the stick (`lsblk -d -o NAME,SIZE,TRAN` — it's the `usb`
one). The whole device, not a partition: `sdX`, never `sdX1`.

## On a Dell XPS 14

Boot the BIOS with `F2`, turn off secure boot, set SATA Operation to AHCI, and
put the USB drive first in the boot order.

```
iwctl --passphrase "PASS" station wlan0 connect "SSID"
pacman -Sy --noconfirm git
git clone https://github.com/pachun/orchard /tmp/orchard
/tmp/orchard/install-arch/dell-xps-14
```

It reboots itself. Sign in, then:

```
nmcli device wifi connect "SSID" password "PASS"
cd ~/code/orchard
./configure
./connect
```

## On a Framework 13

Same steps, same script — `install-arch/dell-xps-14` is generic x86 UEFI
despite the name. It detects Intel vs AMD for microcode itself, and
`./configure` sorts out the hardware differences (graphics drivers, power
daemons, the Dell-only extras) on its own. The only difference at the BIOS:
there is no SATA Operation setting to change. `F2`, secure boot off, USB
first, go.

## On an M1 or M2 Mac

```
curl https://asahi-alarm.org/installer-bootstrap.sh | sh
```

Reboot into Arch, then the same steps: connect, clone, install.

```
nmcli device wifi connect "SSID" password "PASS"
pacman -Sy --noconfirm git
git clone https://github.com/pachun/orchard /tmp/orchard
/tmp/orchard/install-arch/asahi
```

Then sign in and run `./configure` and `./connect` from `~/code/orchard`, as
above.

## Why the wifi command changes

On the Arch installer you use `iwctl`; on the installed system you use `nmcli`.
That is not an inconsistency. They are clients for two different daemons — the
ISO runs `iwd`, the installed system runs NetworkManager — and you cannot use
`iwctl` on a machine that isn't running `iwd`. There is no way around it, because
installing `iwd` would need the network you are trying to bring up.

## What `connect` does

`~/code/orchard/connect` is the part that can't be automated away: GitHub, iCloud
files, and Tailscale. It asks; you answer.

The calendar isn't in there. It's Google Calendar in a browser window (`Cmd+Shift+D`),
so it signs in the way any website does.
