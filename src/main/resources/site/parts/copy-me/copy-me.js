var libPortal = require('/lib/xp/portal');
var libContent = require('/lib/xp/content');
var libThymeleaf = require('/lib/thymeleaf');

exports.get = function(req) {

	/* ### Collect ### */
	var content = libPortal.getContent(); // Get current content that is viewed. See the docs for JSON format.
	var component = libPortal.getComponent(); // Or, get config (if any) for this particular part. See the docs for JSON format.

	/* ### Manipulate ### */
	// TODO: if needed, manipulate the collected data here

	// Examples of logging (built into the core of XP)
	//log.info('A string');
	//log.info('%s', content); // JSON output as string
	//log.info('Pretty JSON %s', JSON.stringify(content, null, 4));

	/* ### Prepare ### */
	var model = {
		content: content,
		component: component
	};

	/* ### Return ### */
	return {
		body: libThymeleaf.render(
			resolve('copy-me.html'), // TODO: This is not the view-file you're looking for ... or is it?
			model
		)
	};

};
