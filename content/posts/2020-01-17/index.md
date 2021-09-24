---
template: post
date: 2020-01-17
title: Block Youtube suggested videos overlay
draft: false
slug: /posts/block-youtube-suggested-videos-overlay
cover: cover.png
description: Often a part of a video is obstructed by the suggested video overlay. Here’s how you can hide the overlay.
category: Productivity
tags: [javascript, youtube]
featured: false
showInPosts: true
---

Sometimes you may struggle with Youtube Suggested Videos overlay:

![Youtube suggested videos overlay sample](/media/ublock-youtube-overlay/01.png 'Sample')

Here is a quick guide to get rid of them.

1. Install [uBlock Origin](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm) (Ablock/ABP works as well)
2. Go to Options -> My filters
3. Add this code:

```
youtube.com##.ytp-ce-covering-overlay
youtube.com##.ytp-ce-element-shadow
youtube.com##.ytp-ce-covering-image
youtube.com##.ytp-ce-expanding-image
youtube.com##.ytp-ce-element.ytp-ce-channel.ytp-ce-channel-this.ytp-ce-element-show.ytp-ce-bottom-right-quad.ytp-ce-size-640
youtube.com##.ytp-ce-element.ytp-ce-video.ytp-ce-element-show
www.youtube.com##.ytp-ce-element
www.youtube.com##.ytp-cards-teaser
www.youtube.com##.ytp-pause-overlay
www.youtube.com##.ytp-fullerscreen-edu-button
```

4. Save
