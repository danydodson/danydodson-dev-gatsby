---
template: post
date: 2020-01-31
title: Autoplay Twitter videos with sound
draft: false
slug: /posts/autoplay-twitter-videos-with-sound
cover: cover.png
description: It might be annoying scroll Twitter videos and click on each to hear sound. Here is the quick hack. It will unmute video when you hover and mute again when your cursor is out video.
category: Productivity
tags: [javascript, twitter]
featured: false
showInPosts: true
---

1. Install [Custom JavaScript for websites](https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija) plugin

2. Go to [twitter.com](https://twitter.com/)

3. Open Custom JavaScript for websites plugin and paste this code:

```javascript
window.addEventListener('mouseover', ({ target }) => {
  if (target.tagName === 'VIDEO') {
    target.muted = false
  }
})

window.addEventListener('mouseout', ({ target }) => {
  if (target.tagName === 'VIDEO') {
    target.muted = true
  }
})
```
