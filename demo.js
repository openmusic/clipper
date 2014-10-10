var ac = new AudioContext();
var osc = ac.createOscillator();
var analyser = ac.createAnalyser();
var clipper = Clipper(ac);
var mixer = ac.createGain();

var oscilloscope = document.querySelector('openmusic-oscilloscope');
var txtPoints = document.querySelector('input');

osc.connect(clipper);

clipper.connect(analyser);
analyser.connect(ac.destination);

oscilloscope.attachTo(analyser);

txtPoints.addEventListener('input', updateClipper);

function updateClipper() {
	var points = txtPoints.value.split(',').map(makeNumber);
	console.log(points);
	clipper.setCurve(points);
}

function makeNumber(v) {
	v = v.trim();
	v = parseFloat(v);
	return v;
}

updateClipper();
osc.start();
