let scriptObjects = {
  urls : [ "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.0/gsap.min.js", "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.0/ScrollTrigger.min.js", "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.2/MotionPathPlugin.min.js", "https://unpkg.com/@mapbox/mapbox-sdk/umd/mapbox-sdk.min.js" ],
  configs: [ {
    url: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.0/gsap.min.js",
    //urlArgs: 'integrity=sha384-9M9XrjrcGlmu0PaereNnBrQZQtMdWJ+eU9LJutYXdARmy0MaKAd4uspzyI1UHAcz&crossorigin=anonymous'
  },
  {
    url: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.0/ScrollTrigger.min.js",
    //urlArgs: "sha384-PfAeQuQXvpEPqRk8vyqDBU/DYCqNxBZUwZYWOzacqrg/Br8HH32/CWoId/1M3WBw&crossorigin=anonymous"
  },
  {
    url: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.2/MotionPathPlugin.min.js",
    //urlArgs: "sha384-JcxzkaQm7EtPAAx5xZGJ+lckHnF/JPiV6pQIBI8uMOIIWx9kukso7IYq/Zh34YnN&crossorigin=anonymous"
  }
]
}

export const scriptLoader = () => {
  return new Promise(
    function( completionHandler ) {
      const script = require("scriptjs");
      script(scriptObjects.urls, function() {
        gsap.registerPlugin(ScrollTrigger)
        gsap.registerPlugin(MotionPathPlugin)
        console.log("plugins registered ok")
        completionHandler()
      })
    })

      //for (let config in scriptObjects.configs) {
        //console.log(config, config.url, config.urlArgs)

        //script.urlArgs(config.urlArgs)
        //$script(config.url)
        //}


  //return loadedScripts
  //script.urlArgs('integrity=sha384-9M9XrjrcGlmu0PaereNnBrQZQtMdWJ+eU9LJutYXdARmy0MaKAd4uspzyI1UHAcz&crossorigin=anonymous')
  //script("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.0/gsap.min.js")
}
