// Import the Joplin API
import joplin from 'api';

// Register the plugin
joplin.plugins.register({
	// Run initialisation code in the onStart event handler
	// Note that due to the plugin multi-process architecture, you should
	// always assume that all function calls and event handlers are async.
	onStart: async function() {

		// Later, this is where you'll want to update the TOC
		async function updateTocView() {
			// Get the current note from the workspace.
			const note = await joplin.workspace.selectedNote();

			// Keep in mind that it can be `null` if nothing is currently selected!
			if (note) {
					console.info('Note content has changed! New note is:', note);
			} else {
					console.info('No note is selected');
			}
		}

		// This event will be triggered when the user selects a different note
		await joplin.workspace.onNoteSelectionChange(() => {
				updateTocView();
		});

		// This event will be triggered when the content of the note changes
		// as you also want to update the TOC in this case.
		await joplin.workspace.onNoteChange(() => {
				updateTocView();
		});

			// Also update the TOC when the plugin starts
			updateTocView();
	},
});

