importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "index.html",
    "revision": "f26a92703d6b823b14bbaed273694a99"
  },
  {
    "url": "index.js",
    "revision": "e43bb199e88e1fb4eb1f0cb66ab3f137"
  },
  {
    "url": "tag.js",
    "revision": "32302a7ad8aff82fdb41d5c7928a0be1"
  },
  {
    "url": "images/avatar1.jpg",
    "revision": "088576cf8a50045d5ddec2a4ad10ca6a"
  },
  {
    "url": "images/avatar2.jpg",
    "revision": "fbcbedf8542c4425847ef91c6bfb8868"
  },
  {
    "url": "images/avatar3.jpg",
    "revision": "4914b0aa5aa1f6e6b66632371cc76a32"
  },
  {
    "url": "images/avatar4.jpg",
    "revision": "522675e8cca3c39e4f94eca434fd63bb"
  },
  {
    "url": "images/avatar5.jpg",
    "revision": "9bdaab63839af24462e29f1d00a3dbe9"
  },
  {
    "url": "images/avatar6.jpg",
    "revision": "2d5bf3a45b3e6c002de3d5a2dcd6d7d4"
  },
  {
    "url": "images/morgan.jpg",
    "revision": "e4a1b5ede21e305531c544184bff649d"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/https:\/\/jsonplaceholder.typicode.com\/posts/, workboxSW.strategies.staleWhileRevalidate({
  "expiration": {
    "maxAgeSeconds": 604800
  }
}), 'GET');
workboxSW.router.registerRoute(/https:\/\/cdn.jsdelivr.net\/npm\//, workboxSW.strategies.staleWhileRevalidate({
  "expiration": {
    "maxAgeSeconds": 604800
  }
}), 'GET');

self.addEventListener('push', (event) => {
  const title = 'Get Started With Workbox';
  const options = {
    body: event.data.text()
  };
  event.waitUntil(self.registration.showNotification(title, options));
});