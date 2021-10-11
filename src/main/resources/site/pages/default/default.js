const libPortal = require('/lib/xp/portal'); // Import the portal functions
const libThymeleaf = require('/lib/thymeleaf'); // Import the Thymeleaf rendering function

const viewFile = resolve('default.html');

// Handle the GET request
exports.get = function(req) {

    // Get the content that is using the page
    const content = libPortal.getContent();
    const site = libPortal.getSite();
    const config = libPortal.getSiteConfig();

    // Fragment handling (single fragments should use this page controller automatically to render itself)
    const isFragment = content.type === 'portal:fragment';
    const mainRegion = isFragment ? null : content.page.regions.main;
    const colorize = config.colorize ? "colorize" : "";

    // Prepare the model that will be passed to the view
    var model = {
        content: content,
        mainRegion: mainRegion,
        siteName: site.displayName,
        isFragment: isFragment,
        colorize: colorize
    };

    // Return a response from the server to the client
    return {
        body: libThymeleaf.render(viewFile, model) // Render the dynamic HTML with values from the model
    };
};
