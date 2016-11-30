var libs = {
	portal: require('/lib/xp/portal'), // Import the portal functions
	content: require('/lib/xp/content'), // Import the content library functions
	thymeleaf: require('/lib/xp/thymeleaf') // Import the Thymeleaf rendering function
};

// Specify the view file to use
var conf = {
	view: resolve('city-list.html')
};

// Handle the GET request
exports.get = function (req) {

    var countryPath = libs.portal.getContent()._path;

    // Get all the country's cities
    var result = libs.content.query({
        start: 0,
        count: 100,
        contentTypes: [
            app.name + ':city'
        ],
        "query": "_path LIKE '/content" + countryPath + "/*'",
    });

    var hits = result.hits;

    var cities = [];

    if (hits.length > 0) {
        // Loop through the contents and extract the needed data
        for (var i = 0; i < hits.length; i++) {

            var city = {};
            city.name = hits[i].displayName;
            city.location = hits[i].data.location;
            city.population = hits[i].data.population ? 'Population: ' + hits[i].data.population : null;

            cities.push(city);
        }
    }

    // Prepare the model object that will be passed to the view file
    var model = {
        cities: cities
    };

    // Return the response object
    return {
        body: libs.thymeleaf.render(conf.view, model)
    }
};
