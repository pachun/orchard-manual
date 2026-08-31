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

1. With the laptop off, plug the stick in.
2. Press the power button, then immediately tap `F2` repeatedly until BIOS
   setup opens.
3. Under **Storage → SATA/NVMe Operation**, pick **AHCI/NVMe**. The default,
   RAID On, hides the drive from the installer.
4. Under **Boot Configuration → Secure Boot**, switch **Enable Secure Boot**
   off.
5. Click **Apply Changes**, then **Exit**. The laptop restarts.
6. As it comes back up, tap `F12` repeatedly. Pick the USB stick from the
   one-time boot menu. (One-time means the boot order stays as it was; there
   is nothing to undo later.)

The Arch installer boots to a root shell. From there:

```
iwctl --passphrase "PASS" station wlan0 connect "SSID"
pacman -Sy --noconfirm git
git clone https://github.com/pachun/orchard /tmp/orchard
/tmp/orchard/install-arch/dell-xps-14
```

It asks for a hostname, username, and password, wipes the drive, installs,
and reboots itself. Pull the stick when it says to. Sign in, then:

```
nmcli device wifi connect "SSID" password "PASS"
cd ~/code/orchard
./configure
./connect
```

## On a Framework Laptop 13

1. With the laptop off, plug the stick in.
2. Press the power button, then immediately tap `F2` repeatedly until BIOS
   setup opens. (If it boots straight through, Fn Lock is on — use `Fn+F2`,
   or toggle Fn Lock off with `Fn+Esc` first.)
3. Under **Security → Secure Boot**, set **Enforce Secure Boot** to
   **Disabled**. There is no storage-mode setting to change; the drive is
   visible as it is.
4. Save and exit. The laptop restarts.
5. As it comes back up, tap `F12` repeatedly (`Fn+F12` under Fn Lock). Pick
   the USB stick from the one-time boot menu.

The Arch installer boots to a root shell. The install script is the XPS one —
it's plain x86 UEFI with nothing Dell-specific in it, and it detects Intel vs
AMD for microcode on its own. `./configure` afterward sorts out the rest of
the hardware differences (graphics drivers, power daemons, skipping the
Dell-only extras).

```
iwctl --passphrase "PASS" station wlan0 connect "SSID"
pacman -Sy --noconfirm git
git clone https://github.com/pachun/orchard /tmp/orchard
/tmp/orchard/install-arch/dell-xps-14
```

It asks for a hostname, username, and password, wipes the drive, installs,
and reboots itself. Pull the stick when it says to. Sign in, then:

```
nmcli device wifi connect "SSID" password "PASS"
cd ~/code/orchard
./configure
./connect
```

## On an M1 or M2 Mac

```
curl https://asahi-alarm.org/installer-bootstrap.sh | sh
```

Reboot into Arch, then:

```
nmcli device wifi connect "SSID" password "PASS"
pacman -Sy --noconfirm git
git clone https://github.com/pachun/orchard /tmp/orchard
/tmp/orchard/install-arch/asahi
```

Sign in, then:

```
cd ~/code/orchard
./configure
./connect
```

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
