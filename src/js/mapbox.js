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
          pos: {lat: 7.4, long: 151.65, zoom: 10.33, pitch: 35, hdg: 10} } ],
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
    staticMap.setAttribute('style', `background-image: url(${urls[0][0]})`)
  }) }
