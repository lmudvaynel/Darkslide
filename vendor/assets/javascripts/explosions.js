$(document).ready(function() {
visuals = {

	drawing: function(mx, my, h, w, timeScale) {
		for (k = 0; k < 7; k++) {
			svg.append("svg:circle")
				.attr("cx",mx).attr("cy",my).attr("r",2)
				.style("stroke","#000000").style("fill","#000000")
				.transition().delay(5000).duration(timeScale*800)
					.attr("cx",mx+Math.floor(Math.random()*200)-100).attr("cy",my+Math.floor(Math.random()*200)-100)
					.style("stroke",colors(++ci)).style("fill",colors(++ci)).style("stroke-opacity",1e-6).style("fill-opacity",1e-6).remove();
		}
	}
};

var svg = d3.select("#svgContainer").append("svg:svg").style("pointer-events", "all");
var colors = d3.scale.category20b();
var ci=0;
var debug = false;
function log(msg) {if (debug) {console.log(msg);}}

function mouseHandler(visualName) {
	return function() {
		var m = d3.mouse(svg[0][0]);
		var w = window.innerWidth, h = window.innerHeight;
		var fmx = m[0]/w, fmy = m[1]/h;
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


	setEventHandler('drawing', 'mousemove');
});
