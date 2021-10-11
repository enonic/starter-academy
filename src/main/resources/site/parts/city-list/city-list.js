const libPortal = require('/lib/xp/portal'); // Import the portal functions
const libContent = require('/lib/xp/content'); // Import the content library functions
const libThymeleaf = require('/lib/thymeleaf'); // Import the Thymeleaf rendering function

const viewFile = resolve('city-list.html');

// Handle the GET request
exports.get = function (req) {

    const countryPath = libPortal.getContent()._path;

    // Get all the country's cities
    const result = libContent.query({
        start: 0,
        count: 100,
        contentTypes: [
            app.name + ':city'
        ],
        "query": "_path LIKE '/content" + countryPath + "/*'",
    });

    const hits = result.hits;

    const cities = [];

    if (hits.length > 0) {
        // Loop through the contents and extract the needed data
        for (let i = 0; i < hits.length; i++) {

            const city = {
                name: hits[i].displayName,
                location: hits[i].data.location,
                population: hits[i].data.population ? 'Population: ' + hits[i].data.population : null,
            }

            cities.push(city);
        }
    }

    // Prepare the model object that will be passed to the view file
    var model = {
        cities: cities
    };

    // Return the response object
    return {
        body: libThymeleaf.render(viewFile, model)
    };
};
