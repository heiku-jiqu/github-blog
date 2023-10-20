---
title: Terminal, Console, Shell
date: '2023-10-20'
---

# {title}

## Background

After extensively using Neovim, and going down this bottomless rabbit hole of customizations (Telescope, Treesitter, LSPs, Formatters, Themes), and how they all integrate with the terminal and shell,
I found out that these two things are actually _different_ things, although most of the time they are used interchangeably.
This post will explain what the differences are, and introduce some backstory on how they came to be, which will hopefully make more sense after reading through the post.

I think it is important to understand that most terms are actually already in use at the beginning of computer industry, i.e. when computers are room-sized, used punch cards, and displays weren't even a thing!

## Terminal

In the beginning, terminals are physical text input/output instruments (relatively smaller in size) that can be attached to computers (which are still huge) for humans to interact with the computers.
The terminal receives physical keystrokes by the humans, "translates" these keystrokes into signals and sends them to the computer. The computer can then return any output to the terminal who will display it.

## Console

Consoles are a subset of terminal where it is directly attached to a computer system.
A hardware console
Code:
