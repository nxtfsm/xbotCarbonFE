// mapbox.js
const ownerId = process.env.MB_owner,
      tkn = process.env.MB_token,
      mbxClient = require('@mapbox/mapbox-sdk'),
      mbxStatic = require('@mapbox/mapbox-sdk/services/static'),
      baseClient = mbxClient({ accessToken: tkn }),
      staticService = mbxStatic(baseClient),
      staticMap = document.querySelector('#staticMap'),
      width = Math.min(staticMap.offsetWidth, 1280),
      height = Math.min(staticMap.offsetHeight, 1280),

      staticMapConfigs = [
        { place: 'chuuk',
          pos: {lat: 7.4, long: 151.65, zoom: 10.33, pitch: 35, hdg: 10} },
        { place: 'pohnpei',
          pos: {lat: 6.88, long: 158.15, zoom: 10.5, pitch: 35, hdg: 16.8} },
        { place: 'majuro',
          pos: {lat: 7.2, long: 171.18, zoom: 10.6, pitch: 35, hdg: 10} },
        { place: 'yap',
          pos: {lat: 9.54, long: 138.05, zoom: 10.5, pitch: 40, hdg: 16} },
        { place: 'kiribati',
          pos: {lat: 1.88, long: -157.45, zoom: 10, pitch: 35, hdg: 10} } ],
      styleKeys = [
        { style: 'ckd2et7zg2pup1hqxu2ky6fux' },
        { style: 'ckd1qtm520x511imjztv9sm7n' } ],

      compileStaticMapURLs = () => {
        return staticMapConfigs.map(
          bg => { return styleKeys.map(
            key => { return makeRequestURL(key, bg.pos) }) }) },

      makeRequestURL = (withKey, config) => {
        const makeRequest = staticService.getStaticImage({
          ownerId: ownerId,
          styleId: withKey.style,
          width: width,
          height: height,
          position: {
            coordinates: [config.long, config.lat],
            zoom: config.zoom,
            pitch: config.pitch,
            bearing: config.hdg },
          attribution: false,
          logo: false });
        return makeRequest.url() },

      getMapImageURLs = () => {
        return new Promise(onResolve => {
            return onResolve(compileStaticMapURLs()) }) };


export const setBackgroundImage = () => {
  getMapImageURLs().then(urls => {
    let i = Math.floor((Math.random() * 5))
    staticMap.setAttribute('style', `background-image: url(${urls[i][0]})`)
  }) }
