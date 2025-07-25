---
title: Terminal, Console, Shell
date: '2023-10-20'
---

# {title}

## Background

After extensively using Neovim, and going down the bottomless rabbit hole of customizations (Telescope, Treesitter, LSPs, Formatters, Themes, Fonts), I sometimes find myself scratching my head how they all integrate with the terminal and shell.
Eventually, it dawned on me that these are actually two _different_ things, although most of the time they are used interchangeably.
This post will explain what the differences are, and introduce some backstory on how they came to be, which will hopefully make more sense after reading through the post.

## Preface

I think it is important to first understand that most of these terms are actually already in use in the beginning of the computer industry, i.e. when computers are the size of a house, used punch cards, and displays weren't even a thing!

## Terminal

![Computer Terminal from Wiki](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/DEC_VT100_terminal_transparent.png/592px-DEC_VT100_terminal_transparent.png 'A terminal')

In the beginning, terminals are physical text input/output instruments (relatively smaller) that can be attached to computers (which are still huge) for humans to interact with the computers.
The terminal receives physical keystrokes by the humans, "translates" these keystrokes into text/signals and sends them to the computer.
The computer can then return any output to the terminal which will display it.
The terminal is not limited to computers in the same premise as it can also connect to computers that are remote.

## Console

![IBM360 Model 85 Console from Wiki](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Supercomputer_NSA-IBM360_85.jpg/592px-Supercomputer_NSA-IBM360_85.jpg 'A console')

Consoles are a subset of terminal where it is directly attached to a computer system, used to control the computer it is attached to.
Even so, a hardware console in the old days can also contain knobs/switches, not just text terminals.

## Terminal Emulators

A terminal emulator, like its name suggests, _emulates_ the functions of a physical terminal in modern computers.
It is a _software application_ that receives text inputs and displays text outputs, and connects to a computer (which is usually the computer running the terminal, but it can also connect remotely through `ssh`).
Physical keystrokes on your keyboards sends signals (through OS and device drivers) to the terminal, where it processes and gets interpreted into to their corresponding graphic characters or control characters (e.g. Enter key).
Some examples include `Windows Terminal`, `WezTerm` and `Alacritty`.

So now that we have a bunch of characters, where do they go when we want to issue a command to the computer?

## Shell

A shell is a type of application whose purpose is to run other applications (hence the name "shell").
It also usually interacts with the operating system by issuing syscalls on your behalf (e.g. creating a new process).
By default, a terminal (emulator) will start a command line shell on startup/login.
When you type a bunch of characters and press enter, shells are the applications that interpret those commands and then runs the program.
It will then output to the terminal who will then display the text.

There are different types of shell provided by the major operating systems, `bash` for Unix and `cmd`/`powershell` for Windows, though there are also more customised versions like `zsh`/`fish`.
Shells are interactive, where you can type commands and get back results.
They also come with their own flavour of full-fledged language for scripting purposes.

Note that shells are not confined to just text based programs, there are also graphical shells that run GUI applications within them.

## Conclusion

Terminals and Shells are not the same thing.
Terminals handle input/output of text, displaying text and connection to computers.
Shells are applications that run other applications (yes that also means you can run a shell in another shell in another shell in another shell.....).
Shells and Terminals work hand in hand for humans to interact with computers through text interfaces.
