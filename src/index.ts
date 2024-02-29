// Import the Joplin API
import joplin from 'api';

// Register the plugin
joplin.plugins.register({
	    // Run initialisation code in the onStart event handler
    // Note that due to the plugin multi-process architecture, you should
    // always assume that all function calls and event handlers are async.
	onStart: async function() {
		// eslint-disable-next-line no-console
		console.info('Hello world. Test plugin started!');
	},
});
