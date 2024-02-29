// To check that everything's working, 
/// let's create a simple event handler that display the header slug when clicked:

// There are many ways to listen to click events, you can even use
// something like jQuery or React. This is how it can be done using
// plain JavaScript:
document.addEventListener('click', event => {
  const element = event.target;
  // If a TOC header has been clicked:
  if (element.className === 'toc-item-link') {
      // Get the slug and display it:
      const slug = element.dataset.slug;
      console.info('Clicked header slug: ' + slug);
  }
});