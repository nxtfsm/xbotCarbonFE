export const classToggler = (element, className) => { element.classList.toggle(className) }

export const loadHTMLintoElement = (reference, intoElem) => {
  let target = reference.dataset.target,
      url = "./" + target + ".html";

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
