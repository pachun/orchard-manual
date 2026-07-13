# Development

## Languages come from mise

Not from pacman. `mise` owns the runtimes, globally:

```
mise use --global node@lts
mise use --global ruby@latest
```

Node and Ruby are set up that way at install. Elixir and Erlang come the same way,
pinned per-project by a `.tool-versions` file — which means a repo brings its own
versions and you don't have to remember what it wanted.

Rust comes from rustup, because Rust's toolchain manages itself better than anything
else can manage it.

Anything invoked through mise's shims is the project's version, not the machine's.
That is the whole reason it's here.

## Postgres

Installed, bootstrapped, and running as a service. The cluster is initialised, the
data directory exists, and your user can connect — the three things the package
itself won't do for you.

## git

The aliases are in **The shell**. Two worth repeating because they save the most
time:

```
p            push this branch to origin, without naming it
keep main    delete every branch except main
```

`wip` commits everything as "wip" and skips the hooks. It is for saving your place,
not for history.

## gitspine

`x`, for short. It's a tool of yours, built from source into `~/code/gitspine` — so
editing it and running `cargo build --release` is enough. You don't reinstall it; the
binary on your PATH is a symlink to what you just built.

## SSH

Your key is generated on install and registered with GitHub by `connect github`. The
Mac mini trusts it too, which is what makes `~/icloud` mount without a password.
