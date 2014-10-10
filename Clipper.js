(function() {
	
	function Clipper(context) {
		
		var output = context.createWaveShaper();
		var curve = new Float32Array(2);


		curve[0] = -1;
		curve[1] = 1;
	
		output.curve = curve;
		return output;
		
	}

	//
	
	if(typeof module !== 'undefined' && module.exports) {
		module.exports = Clipper;
	} else {
		this.Clipper = Clipper;
	}

}).call(this);
