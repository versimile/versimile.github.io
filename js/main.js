// Using JavaScript here as the texts themselves are not produced by the Go code
// but using XSLT transformation on the XML files by the browser.
// Since these are in seperate iframes, this javascript code will only be loaded there.

document.querySelectorAll('span').forEach(span => {
  span.addEventListener('mouseover', function() {
      document.querySelectorAll(`span[n="${this.getAttribute('n')}"]`).forEach(span => {
          span.classList.add('highlighted');
      });
  });

  span.addEventListener('mouseout', function() {
      document.querySelectorAll(`span[n="${this.getAttribute('n')}"]`).forEach(span => {
          span.classList.remove('highlighted');
      });
  });
});
