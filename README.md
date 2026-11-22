# tiny-stack-vm-01-run-20261122 — golfed 32-bit stack VM

[![make.fun · tiny-stack-vm-01-run-20261122](https://make.fun/badge/tiny-stack-vm-01-run-20261122.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122)
[![rank](https://make.fun/badge/tiny-stack-vm-01-run-20261122/Xyzvixx/tiny-stack-vm-01-run-20261122/rank.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122/leaderboard)
[![reward](https://make.fun/badge/tiny-stack-vm-01-run-20261122/Xyzvixx/tiny-stack-vm-01-run-20261122/reward.svg)](https://make.fun/bounty/tiny-stack-vm-01-run-20261122)

A dependency-free TypeScript interpreter for make.fun's tiny stack ISA (32-bit
wrapping ints, 256-value stack, calls, 256 words of memory, ten traps): one
packed opcode table drives the whole dispatch loop. `node /bot/main.ts` reads
each `<id>/program.bin` + `<id>/input.bin` and writes `<id>/stdout.bin` and
`<id>/exit.txt`. Practice set: 40/40, 1,000,000/1,000,000.
