visuals = {

	drawing: function(mx, my, h, w, timeScale) {
		for (k = 0; k < 7; k++) {
			svg.append("svg:circle")
				.attr("cx",mx).attr("cy",my).attr("r",2)
				.style("stroke","#00FFFF").style("fill","#00FFFF")
				.transition().delay(5000).duration(timeScale*800)
					.attr("cx",mx+Math.floor(Math.random()*200)-100).attr("cy",my+Math.floor(Math.random()*200)-100)
					.style("stroke",colors(++ci)).style("fill",colors(++ci)).style("stroke-opacity",1e-6).style("fill-opacity",1e-6).remove();
		}
	},
};

var svg = d3.select("#svgContainer").append("svg:svg").style("pointer-events", "all");
var colors = d3.scale.category20b();
var ci=0;
var debug = false;
function log(msg) {if (debug) {console.log(msg);}}


stringConverter = {};

function toggleExporter() {
	$('#exported, .button-export, .button-record').toggle();
}

function exportToTextarea() {
	var data = recorder.entriesToJSON();
	$('#exported').val(data);
}
function importFromTextarea () {
	var data = $('#exported').val();
	recorder.entriesFromJSON(data);
}

function mouseHandler(visualName) {
	return function() {
		var m = d3.mouse(svg[0][0]);
		var w = window.innerWidth, h = window.innerHeight;
		var fmx = m[0]/w, fmy = m[1]/h;
		if (window.recorder) {recorder.record([visualName, fmx, fmy]);}
		return doVisual(visualName, fmx, fmy);
	};
}

function doVisual(visualName, fmx, fmy, timeScale) {
	if (!timeScale) {timeScale=1;}
	var w = window.innerWidth, h = window.innerHeight;
	var visual = visuals[visualName];
	return visual(w*fmx, h*fmy, w, h, timeScale);
}

function setEventHandler(visualName, eventName) {
	// log(visualName, eventName);
	svg.on(eventName, mouseHandler(visualName));
}

function keystrokes(event) {
	if ($('textarea:focus, input:focus, select:focus').length>0) {return;}
	var k = event.charCode;
	s = String.fromCharCode(k);
	var $e = $(keyAliases[s]);
	if ($e.is('option')) {
		$e.parent().val($e.val());
		$e.change();
	}
	else if ($e.attr('disabled') === undefined) {
		$e.click();
	}
}
$(document).keypress(keystrokes);

$(document).ready(function() {
	setEventHandler('drawing', 'mousemove');
});
