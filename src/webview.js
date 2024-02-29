/* There are many ways to listen to click events, you can even use
 * something like jQuery or React. This is how it can be done using plain JavaScript */

// To check that everything's working, 
/// let's first create a simple event handler that display the header slug when clicked:
document.addEventListener('click', event => {
  const element = event.target;
  // If a TOC header has been clicked:
  if (element.className === 'toc-item-link') {
      // Get the slug and display it:
      const slug = element.dataset.slug;
      console.info('Clicked header slug: ' + slug);
  }
});

// From within a webview, you have access to the webviewApi object,
// which among others has a postMessage() function you can use to send a message to the plugin.
// Let's use this to post the slug info to the plugin:
document.addEventListener('click', event => {
  const element = event.target;
  if (element.className === 'toc-item-link') {
      // Post the message and slug info back to the plugin:
      webviewApi.postMessage({
          name: 'scrollToHash',
          hash: element.dataset.slug,
      });
  }
});