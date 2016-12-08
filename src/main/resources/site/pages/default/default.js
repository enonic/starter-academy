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

	 // Fragment handling (single fragments should use this page controller automatically to render itself)
	 var isFragment = content.type === 'portal:fragment';
	 if (isFragment) {
	 	mainRegion = null;
	 } else {
	 	mainRegion = content.page.regions.main;
	 }

	 // Count number of components in main region so that we can display the placeholder when empty
	 var regionLength = mainRegion ? mainRegion.components.length : 0;


	 // Examples of logging (built into the core of XP)
	 //log.info('%s', mainRegion);
	 //log.info(regionLength);


    // Prepare the model that will be passed to the view
    var model = {
		  content: content,
		  mainRegion: mainRegion,
		  regions: regionLength,
		  siteName: site.displayName,
		  isFragment: isFragment
    };

    // Render the dynamic HTML with values from the model
    var body = libs.thymeleaf.render(conf.view, model);

    // Return the response object
    return {
        body: body
    }
};
