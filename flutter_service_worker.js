'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon-16x16.png": "5e81a909b0dac9a381271d16a05a1939",
"flutter_bootstrap.js": "13b2d18bde8e2b763ae4f19d38e09492",
"version.json": "62fbe75de46c37d6347d9322c7ec5c77",
"favicon.ico": "15ad47563e6dd05aace6ba5a6258d201",
"index.html": "da3356ebf6ac58c8cb0afc79a33282f8",
"/": "da3356ebf6ac58c8cb0afc79a33282f8",
"apple-icon.png": "dd03875455c2dc05121ee5d227a7d376",
"apple-icon-144x144.png": "bb855abe52f011dbbed3233e82eda3f1",
"android-icon-192x192.png": "d3517ea9461a28f8d6820cd88b9c75f0",
"apple-icon-precomposed.png": "dd03875455c2dc05121ee5d227a7d376",
"apple-icon-114x114.png": "452753ffa30e7a969e78ee9f50922908",
"main.dart.js": "82a574791df90d94808ea5858027ffae",
"ms-icon-310x310.png": "b19463df780e6d1d44c48debaa6c91bc",
"ms-icon-144x144.png": "bb855abe52f011dbbed3233e82eda3f1",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"apple-icon-57x57.png": "284e4e729ffd8e2ce053733b3872ba16",
"apple-icon-152x152.png": "7c5f1a923b6de3345babe460151b8345",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"ms-icon-150x150.png": "beaa02828abbda5ad8c2cd83a3419320",
"android-icon-72x72.png": "4fc303430ec919d20fd5e06090a191c5",
"android-icon-96x96.png": "a7f6da40b11aff5182445e86baaac505",
"android-icon-36x36.png": "3714f0b26ef2019912818b4b1c103887",
"apple-icon-180x180.png": "b3b60ca3883266fe8432fcf99b20ceab",
"favicon-96x96.png": "a7f6da40b11aff5182445e86baaac505",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cb2add6026083b87faceb8a423e51be3",
"android-icon-48x48.png": "e7f3a76079ffb5ba3c15887d24bbf4cb",
"apple-icon-76x76.png": "1207160927660e00c77354287c6cceba",
"apple-icon-60x60.png": "de6b32ad6359d1ddcddf0ef2602d476b",
"assets/AssetManifest.json": "257fdd620c1eff4dffa5841bf10bdd6a",
"assets/NOTICES": "59753d0512ea530bd47b8866109b8ff5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "1fb873ddb7bb9bd039c4b80d80719cab",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6f85b87e38e23db0c9509cbee09d00b3",
"assets/fonts/MaterialIcons-Regular.otf": "22a73f446d2ea0cca93de68a479d5e90",
"assets/assets/images/app_screenshots/charify.png": "18159e0988d64429309e82349a5a441f",
"assets/assets/images/app_screenshots/chronicle.png": "64029cd147ac5dbfdaac92a4f058e440",
"assets/assets/images/app_screenshots/plaka.png": "0dc9743cb6f2cf4d605d6ec31153d16f",
"assets/assets/images/hero_image.png": "6e04e3973aa527461e2c35a1042b180f",
"browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"android-icon-144x144.png": "bb855abe52f011dbbed3233e82eda3f1",
"apple-icon-72x72.png": "4fc303430ec919d20fd5e06090a191c5",
"apple-icon-120x120.png": "43307d0e22cc1be9b10ab5e8034ac501",
"favicon-32x32.png": "85a1cea75914a8d21fa3e85c1083ed38",
"ms-icon-70x70.png": "0c0f37bb36e4f42549a19fcbf1b00613",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
