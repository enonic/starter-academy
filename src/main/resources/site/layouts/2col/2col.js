const libPortal = require('/lib/xp/portal');
const libThymeleaf = require('/lib/thymeleaf');

const viewFile = resolve('2col.html');

exports.get = function(req) {

	// Find the current component.
	const component = libPortal.getComponent();

	// Define the model
	const model = {
		leftRegion: component.regions["left"],
		rightRegion: component.regions["right"]
	};

	// Return the result and the rendered HTML
	return {
		body: libThymeleaf.render(viewFile, model)
	};

};
