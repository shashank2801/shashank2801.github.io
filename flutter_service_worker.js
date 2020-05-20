'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e047cbe80b6ffb9fa70bea2b5c7fe899",
"assets/assets/images/s.png": "74482fd550b280beb40e54d30e40d72c",
"assets/assets/images/sha.png": "bd3676695657c8ec0651c2dd30a65ba4",
"assets/assets/images/splash.png": "3fd45fad0b89dd909471fde67f62aac6",
"assets/FontManifest.json": "18eda8e36dfa64f14878d07846d6e17f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "319fda5798cd788941929a115765f359",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "b633128298526096f1aa2929a5b4fe21",
"/": "b633128298526096f1aa2929a5b4fe21",
"main.dart.js": "8d26fcc0605607a88e88cf70d6567775",
"manifest.json": "e0561308e9e64a6ea3e9426233046bef"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
