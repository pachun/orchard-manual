# The shell

zsh, in vim mode, with a prompt that tells you the one thing you actually need.

## The prompt

```
orchard main
```

The directory, and the git branch — and the branch is **coloured by its state**:

| | |
|---|---|
| green | clean |
| yellow | changes not staged |
| cyan | staged, not committed |
| magenta | no upstream — this branch only exists here |

So the question "did I commit that?" is answered by the prompt before you think to
ask it. Over SSH the prompt gains a prefix, so you cannot mistake someone else's
machine for your own.

## Vim mode

The command line is modal. `jj` leaves insert mode instead of `Escape` — your hands
never leave the home row — and the **cursor changes colour** to tell you which mode
you're in, because a modal editor that doesn't say which mode it's in is a trap.

`Ctrl+W` deletes a word, `Ctrl+U` deletes the line, in insert mode, as they do
everywhere else.

## Sessions

```
t orchard      # attach to the "orchard" session, or create it
tls            # list sessions
trn newname    # rename the session you're in
```

`t` is the one you'll use. It attaches if the session exists and creates it if it
doesn't, and if you're already inside tmux it *switches* rather than nesting a
second tmux inside your pane.

It also cleans up after you. Switch out of a session where every pane is just an
idle prompt, and that session is killed — so the auto-numbered leftovers from
opening a fresh terminal don't pile up.

## Git, mostly

```
gs    git status
gl    git log
gco   git checkout
gri   git rebase -i
gm    git merge
p     push this branch to origin
wip   add everything, commit as "wip", skip the hooks
x     gitspine
```

`keep main` deletes every branch except `main`. Use it after a merge spree.

`ghopen` opens the current repo on GitHub in the browser.

## Odds and ends

```
c       clear
e       exit
vim     nvim
lanip   this machine's address on the LAN
battery percentage (Asahi only — the Mac's battery reports differently)
```
