export const classToggler = (element, className) => {element.classList.toggle(className)}

export const parseElementsFromHTML = url => {
  return new Promise(
    function( resolver ) {
      let request = new Request(url)
        return fetch(request)
          .then( response => {
            if (!response.ok)
              { throw new Error(`HTTP error! status: ${response.status}`); }
          return response.text() })
        .then( response => {
          const parsedResponse = new DOMParser().parseFromString(response, 'text/html')
          resolver(parsedResponse.querySelectorAll('template')) })
      }
)}
