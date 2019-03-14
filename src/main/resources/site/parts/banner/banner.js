var libPortal = require('/lib/xp/portal');
var libThymeleaf = require('/lib/thymeleaf');

exports.get = function(req) {

	/* ### Collect ### */
	var component = libPortal.getComponent();
	var config = component.config;

	/* ### Manipulate ### */
	// Make sure you check for actual values (not null) before running any portal function (as they crash on null).
	if (config.imageKey) {
		// portal.imageUrl - http://repo.enonic.com/public/com/enonic/xp/docs/6.8.0/docs-6.8.0-libdoc.zip!/module-lib_xp_portal.html#.imageUrl
		config.imageUrl = libPortal.imageUrl({
			id: config.imageKey,
			scale: 'block(1024,150)'
		});
	}

	/* ### Prepare ### */
	var model = {
		config: config
	};

	/* ### Return ### */
	return {
		body: libThymeleaf.render(resolve('banner.html'), model)
	};

};
