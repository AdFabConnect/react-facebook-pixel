# react-facebook-pixel

> React JS wrapper for [Facebook's Pixel](https://developers.facebook.com/docs/ads-for-websites/pixel-events/v2.9)


## Install
```
npm install react-facebook-pixel

```
or
```
yarn add react-facebook-pixel

```

## How to use
```js
import ReactPixel from 'react-facebook-pixel';
ReactPixel.init('yourPixelIdGoesHere',{custom: "paramsHere"});

ReactPixel.pageView(); // For tracking page view
ReactPixel.track( event, data ) // For tracking default events, more info about events and data https://developers.facebook.com/docs/ads-for-websites/pixel-events/v2.9
ReactPixel.trackCustom( event, data ) // For tracking custom events
```

## Dev Server
```
npm run start

```
Default dev server runs at localost:8080 in browser.
You can set IP and PORT in webpack.config.dev.js

## Production Bundle
```
npm run bundle
```

### Follow me on Twitter: [@zsajjad93](https://twitter.com/zsajjad93)
