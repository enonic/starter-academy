var libs = {
	portal: require('/lib/xp/portal'),
	thymeleaf: require('/lib/xp/thymeleaf')
};

// Specify the view file to use
var conf = {
	view: resolve('2col.html')
};

exports.get = function(req) {

	// Find the current component.
	var component = libs.portal.getComponent();

	// Define the model
	var model = {
		leftRegion: component.regions["left"],
		rightRegion: component.regions["right"]
	};

	// Render a thymeleaf template
	var body = libs.thymeleaf.render(conf.view, model);

	// Return the result
	return {
		body: body
	};

};
