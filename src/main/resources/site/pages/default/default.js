var libPortal = require('/lib/xp/portal'); // Import the portal functions
var libThymeleaf = require('/lib/thymeleaf'); // Import the Thymeleaf rendering function

// Handle the GET request
exports.get = function(req) {

    // Get the content that is using the page
    var content = libPortal.getContent();
    var site = libPortal.getSite();
    var config = libPortal.getSiteConfig();

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
    var body = libThymeleaf.render(resolve('default.html'), model);

    // Return the response object
    return {
        body: body
    }
};
