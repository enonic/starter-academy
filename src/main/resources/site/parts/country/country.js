const libPortal = require('/lib/xp/portal'); // Import the portal functions
const libThymeleaf = require('/lib/thymeleaf'); // Import the Thymeleaf rendering function

const viewFile = resolve('country.html');

// Handle the GET request
exports.get = function(req) {

    // Get the country content and extract the needed data from the JSON
    const content = libPortal.getContent();

    // Prepare the model object with the needed data extracted from the content
    const model = {
        name: content.displayName,
        description: content.data.description,
        population: content.data.population
    };

    // Return the merged view and model in the response object
    return {
        body: libThymeleaf.render(viewFile, model)
    };
};
