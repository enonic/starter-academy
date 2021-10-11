const libPortal = require('/lib/xp/portal');
const libThymeleaf = require('/lib/thymeleaf');

const viewFile = resolve('banner.html');

exports.get = function(req) {

	/* ### Collect ### */
	const component = libPortal.getComponent();
	const config = component.config;

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
	const model = {
		config
	};

	/* ### Return ### */
	return {
		body: libThymeleaf.render(viewFile, model)
	};

};
