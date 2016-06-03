var libs = {
	portal: require('/lib/xp/portal'), // Import the portal functions
	thymeleaf: require('/lib/xp/thymeleaf') // Import the Thymeleaf rendering function
};

// Specify the view file to use
var conf = {
	view: resolve('country.html')
};

// Handle the GET request
exports.get = function(req) {

    // Get the country content and extract the needed data from the JSON
    var content = libs.portal.getContent();

    // Prepare the model object with the needed data extracted from the content
    var model = {
        name: content.displayName,
        description: content.data.description,
        population: content.data.population
    };

    // Return the merged view and model in the response object
    return {
        body: libs.thymeleaf.render(view, model)
    }
};
