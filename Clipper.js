(function() {
	
	function Clipper(context) {
		
		var output = context.createWaveShaper();
		var curve = new Float32Array(2);

		// Set some default clipping - just makes everything under -1 be -1, and everything over 1 be 1.
		curve[0] = -1;
		curve[1] = 1;
	
		output.curve = curve;


		output.setCurve = function(c) {
			// TODO should it check the argument type and throw if not array?
			var newCurve = new Float32Array(c);
			output.curve = newCurve;
		};

		return output;
		
	}

	//
	
	if(typeof module !== 'undefined' && module.exports) {
		module.exports = Clipper;
	} else {
		this.Clipper = Clipper;
	}

}).call(this);
