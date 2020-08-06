export const classToggler = (element, className) => { element.classList.toggle(className) }

export const jsonTest = () => {
  
  console.log(data)
}

export const fetchJSONfromURL = url => {
  return new Promise(
    function ( resolver ) {

    }
  )
}

export const parseElementFromHTML = url => {
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
          resolver(parsedResponse.querySelector('template')) })
      }
)}

export const loadHTMLintoElement = (reference, intoElem) => {
  let target = reference.dataset.target,
      url = "./" + target + ".html";
      console.log(url)

  if (url) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status == 200) { intoElem.innerHTML = this.responseText; }
        if (this.status == 404) {console.log(xhttp);}
      }
    }
    xhttp.open("GET", url, true);
    xhttp.send();
    return
    }
}

export const insertElementInHead = element => { document.head.append(element) }
