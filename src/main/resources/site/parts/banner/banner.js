var libs = {
	portal: require('/lib/xp/portal'),
	thymeleaf: require('/lib/xp/thymeleaf')
};

var conf = {
	view: resolve('banner.html')
};

exports.get = function(req) {

	/* ### Collect ### */
	var component = libs.portal.getComponent();
	var config = component.config;

	/* ### Manipulate ### */
	// portal.imageUrl - http://repo.enonic.com/public/com/enonic/xp/docs/6.8.0/docs-6.8.0-libdoc.zip!/module-lib_xp_portal.html#.imageUrl
	config.imageUrl = libs.portal.imageUrl({
		id: config.imageKey,
		scale: 'block(1024,150)'
	});

	/* ### Prepare ### */
	var model = {
		config: config
	}

	/* ### Return ### */
	return {
		body: libs.thymeleaf.render(conf.view, model)
	};

};
