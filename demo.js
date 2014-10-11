var ac = new AudioContext();
var osc = ac.createOscillator();
var analyser = ac.createAnalyser();
var gain = ac.createGain();
var clipper = Clipper(ac);

var oscilloscope = document.querySelector('openmusic-oscilloscope');
var txtPoints = document.querySelector('input');

osc.connect(gain);
gain.connect(clipper);
clipper.connect(analyser);
analyser.connect(ac.destination);

// Make it REALLY loud so it actually ends being a square wave! HA!
gain.gain.setValueAtTime(100, ac.currentTime);

oscilloscope.attachTo(analyser);

txtPoints.addEventListener('input', updateClipper);

function updateClipper() {
	var points = txtPoints.value.split(',').map(makeNumber);
	clipper.setCurve(points);
}

function makeNumber(v) {
	v = v.trim();
	v = parseFloat(v);
	return v;
}

updateClipper();

osc.start();
