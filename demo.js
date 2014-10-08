var ac = new AudioContext();
var osc = ac.createOscillator();
var analyser = ac.createAnalyser();
// var dcbias = DCBias(ac);
var clipper = Clipper(ac);
var mixer = ac.createGain();

var oscilloscope = document.querySelector('openmusic-oscilloscope');
var slider = document.querySelector('input[type=range]');
var currentValue = document.querySelector('span');

osc.connect(clipper);

clipper.connect(analyser);
analyser.connect(ac.destination);

oscilloscope.attachTo(analyser);

/*slider.addEventListener('input', updateBias);

function updateBias() {
	dcbias.gain.value = parseFloat(slider.value);
	currentValue.innerHTML = dcbias.gain.value;
}

updateBias();*/
osc.start();
