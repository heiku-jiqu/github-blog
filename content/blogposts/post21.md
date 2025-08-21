+++
date = '2025-08-12T14:52:25+08:00'
title = 'Web Page Zoom'
summary = "How Windows Scaling and Browser Zoom affect your Web Page"
description = "How Windows Scaling and Browser Zoom affect your Web Page"
tags = ["web", "browser", "css"]
+++

# Introduction

When developing a web page, it is important to remember the target audience's
browser size. Browser view port size is also affected by Windows scaling,
browser scaling and task/menu/address/bookmark bars.

In internal enterprise web apps, users are likely using 1920x1080p screen on
Windows with 150% scaling as a default.

# Windows Scaling

When Windows Scaling is set, the OS reports to the browser its zoomed pixel
dimensions, changing the Device Pixel Ratio. That means for a 1080 pixel width
screen, at 150% scaling, the OS will report to the browser that the device has a
width of 1080px / 150% = 720px.

# Browser Zoom

When Browser Zoom is set, the browser increases the size of the CSS `px`
relative to the size of the (reported) device pixel. That means that for a 200%
zoomed browser, 1 CSS `px` corresponds to 2 (reported) device pixel. So a
device with 720 device pixels reported to the browser, with 200% zoom in the
browser, will result in 720px / 200% = 360px as its view port.

# TLDR

- Formula to estimate target view port dimension: (`Physical Pixel of Screen`) / (`Windows Scaling %` \* `Browser Scaling %`)
- When estimating view port, account for OS task bar; browser's menu, address bar and bookmarks bar (~30% for 1080p 150% Scaling)
- Windows Scaling decreases view port size (via decreasing number of device pixels reported to browser)
- Browser Zoom decreases view port size (via increasing the size CSS `px` relative to reported device pixel)
