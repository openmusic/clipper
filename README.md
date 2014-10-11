# openmusic-clipper

> A node for clipping signals to a range

[![Install with NPM](https://nodei.co/npm/openmusic-clipper.png?downloads=true&stars=true)](https://nodei.co/npm/openmusic-clipper/)

Signals in web audio are not clipped to -1, 1 until the very end i.e. when the output from the audio context's destination is sent to the sound card. You might want to clip them before that happens, so this module is for you!

You can use it for things such as: 

* distorting sounds (the demo)
* creating more complex sounds out of simpler sounds

## Using it

Create an audio context.

```javascript
var audioContext = new AudioContext();
```

Require the code somehow:

```javascript
var Clipper = require('openmusic-clipper');
```

or

```javascript
<script src="Clipper.js"></script>
```

Then create instances by passing the context to the function:

```javascript
var clipper = Clipper(audioContext);
```

And it's ready to be used!

```
// Just clip
var oscillator = audioContext.createOscillator();
var gain = audioContext.createGain();
gain.gain.setValueAtTime(5, audioContext.currentTime);
oscillator.connect(gain);
gain.connect(clipper);
clipper.connect(audioContext.destination);
```

```
// To clip out 25% of peak values set a different curve
clipper.setCurve([ -0.5, -0.5, 0, 0.5, 0.5 ]);
```
## Demo

Run `npm install` first to have all the dependencies (i.e. the oscilloscope component) installed.

Then open `index.html`. Code is in `demo.js`.

** YOU NEED SUPPORT FOR WEB COMPONENTS IN YOUR BROWSER BECAUSE WE'RE NOT SHIMMING ANYTHING IN **

Firefox: go to `about:config`, find `dom.webcomponents.enabled` and set it to true.

Chrome: maybe nothing to do?
