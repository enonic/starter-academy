var libs = {
	portal: require('/lib/xp/portal'), // Import the portal functions
	thymeleaf: require('/lib/xp/thymeleaf') // Import the Thymeleaf rendering function
};

// Specify the view file to use
var conf = {
	view: resolve('default.html')
};

// Handle the GET request
exports.get = function(req) {

    // Get the content that is using the page
    var content = libs.portal.getContent();
    var site = libs.portal.getSite();
    var config = libs.portal.getSiteConfig();

	 // Fragment handling (single fragments should use this page controller automatically to render itself)
	 var isFragment = content.type === 'portal:fragment';
	 var mainRegion = isFragment ? null : content.page.regions.main;
	 var colorize = config.colorize ? "colorize" : "";

    // Prepare the model that will be passed to the view
    var model = {
		  content: content,
		  mainRegion: mainRegion,
		  siteName: site.displayName,
		  isFragment: isFragment,
		  colorize: colorize
    };

    // Render the dynamic HTML with values from the model
    var body = libs.thymeleaf.render(conf.view, model);

    // Return the response object
    return {
        body: body
    }
};
