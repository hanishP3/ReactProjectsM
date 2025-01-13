export const stripHtml = (html) => {
    let div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';  // Make sure it returns the text content
  };
  