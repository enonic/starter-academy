var libPortal = require('/lib/xp/portal');
var libThymeleaf = require('/lib/thymeleaf');

var viewFile = resolve('2col.html');

exports.get = function(req) {

	// Find the current component.
	var component = libPortal.getComponent();

	// Define the model
	var model = {
		leftRegion: component.regions["left"],
		rightRegion: component.regions["right"]
	};

	// Return the result and the rendered HTML
	return {
		body: libThymeleaf.render(viewFile, model)
	};

};
