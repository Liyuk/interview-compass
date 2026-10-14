---
questionId: a-system-design-av-decode-playback
kind: question
status: published
locale: en
title: From a file or the network to picture and sound playing, what stages does a video go through?
question: From a file or the network to picture and sound playing, what stages does a video go through? How do decoding, audio-video sync, stutter, and hardware acceleration each affect the experience?
intent: See your understanding of the audio and video playback pipeline and whether you can reason back from a symptom to a specific stage.
signals:
  - Describes the pipeline of demuxing, decoding, rendering, and audio-video sync
  - Explains the trade-off between software decoding and hardware acceleration, and compatibility problems
  - Maps symptoms such as stutter, corrupted frames, and out-of-sync audio to likely stages
  - Says how playback quality is observed, such as time to first frame and stall rate
primaryCapability: professional.computer-science
topics: [system-design, frontend, mobile]
roles: [engineering, frontend, mobile]
responsibilityScopes: [individual]
careerTracks: [individual-contributor]
scenarios: [interview, campus, hiring]
formats: [knowledge, debugging]
followUps:
  - One class of devices always shows corrupted frames. How do you locate the cause?
  - Why does audio need special handling in fast playback?
source:
  - attribution: original
    label: "The author's system design question, audio and video decoding and playback"
---
