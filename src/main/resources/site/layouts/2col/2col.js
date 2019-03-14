var libPortal = require('/lib/xp/portal');
var libThymeleaf = require('/lib/thymeleaf');

exports.get = function(req) {

	// Find the current component.
	var component = libPortal.getComponent();

	// Define the model
	var model = {
		leftRegion: component.regions["left"],
		rightRegion: component.regions["right"]
	};

	// Render a thymeleaf template
	var body = libThymeleaf.render(resolve('2col.html'), model);

	// Return the result
	return {
		body: body
	};

};
