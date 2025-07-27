'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "cd58f73af698f08166ca18a3d0500a7c",
"version.json": "62fbe75de46c37d6347d9322c7ec5c77",
"index.html": "3d66e76c6d6e45320b0e7450190eb0d5",
"/": "3d66e76c6d6e45320b0e7450190eb0d5",
"main.dart.js": "1f30bde12c31a1020d0f9c078e3af19b",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "268f54ff646554b2ddc4c7933b0dad6e",
".git/config": "486fe71f219fa37347f7c75e369f9fa6",
".git/objects/61/dc9c11286c7521c7848b75a30f63e3a4a3997b": "900f96fbb54dbe1edfc24588af1ce748",
".git/objects/0d/51e66f24eef9788887408c19941de1789b022a": "4cf0228dce950eaf11521567df79aaff",
".git/objects/6f/0cac3395ac4df02cdadb56b35f5bf9f63e0954": "e7f844885f2014a361129a3cf556357e",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/3d/e25904ad2dd9d065bc94d2283dae466d12c1c8": "eaae18545f648059073c134eb9091ab4",
".git/objects/93/a0550430815cd55ef06632810d822964467f05": "ffd545f6eb8226ec4a371057ab4b7bde",
".git/objects/5f/c5974f9365f242b8c625d36ebc1e8638b12cd8": "04e98f9be850f4cb6220dbc6014a4ec0",
".git/objects/05/1086a69b918cee86f6d1d6c8a930befb5d3651": "33dda3e82e9d2cc487995e5f3a87edd8",
".git/objects/d9/065ca55435c66457ef018ebd6da5d91325ccd6": "94e1b01f0b3f6022abf94ef0b8a50332",
".git/objects/ad/1967439fe330a277b95833cf2b7c552649d303": "61aa8a48b54e4c5687568425bf61d0fb",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/b4/f7b322e27b3ca9e97b3b4c4d2fa5b74e1dc3e8": "da78b9bb272cc172cfb37d43e085911d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/8529dbb990f3b303eec256bb5ce9ce411d868f": "6bb5eb2daec1966f2c448d0e3885eeba",
".git/objects/e5/8efc8b6ca5b6fbefe1258905f3c53c6b25da2c": "201c4b25447d3151ec3f144e8a59813d",
".git/objects/e2/babd0b1f24e42f9366ecdfc7c0a3b47255d5ca": "01843fbb77583bc5cae91793c3dcb7bd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/0e319c5539dbb17d9167d3b7194b5e1a963b42": "b8904b0dc33f998f23b01fa587059178",
".git/objects/fd/6f6ba0a60c6b86f0016e8c8c87ab7396132472": "8f20af77339fe772d918998c9d7bcd9e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e4/e953854680d7d2ce88d200739d025a81f26235": "9effe0de662aa28b8d31de14a5884ac2",
".git/objects/fe/0352312f5953f62a6717319bb9bee4bbde7f96": "7bc6a39b380671f7ab6e3080b0b2998f",
".git/objects/fe/55fa2cb91168bcbb1c10dd4025f5672f8c93c0": "a0fc473de7378e92aa5ac93ada72bbfe",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ed/615eb233b567682bf925a52f7ab150d6f20225": "aa7899abeeee5fb876e453c7a48c352d",
".git/objects/20/3bab5ec3bcc3bff46e820ad563e35f4eb0c52a": "2f73d989ed38f3c494435a26bb4b8483",
".git/objects/16/fc4b17b08cee6b9ae682aa9b8db5c41f497444": "9243e8b0cb6645e232cfb9ee441d8cad",
".git/objects/89/bee1e4c9dceef12f9f5c2b762a14799b560b9a": "340f2e82639782c438162b3e9f39d082",
".git/objects/45/126f897351a375f3f2cb243748141c53a411bd": "176e772389688bd157841f0316917d59",
".git/objects/73/8cd20c7cdcd805185eccd61e5bc0ff64543482": "679cf63ba9353185b0a72083b77abe96",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/17/b47dba432a44a47ba7b615939cf738853454f4": "608e1b6d95fa986dfd5c471adbd105df",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/5173300d876910f0fddaec5a11efbd10517549": "1d3803a2cc75cc4db51e41692c629e2d",
".git/objects/86/c6bee53d59b0b5f1c5722662b83108530a6446": "a1da4113f2e2b5c7af8edf356616229c",
".git/objects/2a/28d82382a2ed1f4de990aaecf428d5059db10f": "2c8934619541c52eddfd6ac8e573f6df",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/38/43ddf4f5e4716bf6ea0cdbc5cd5fdfbe5a18a8": "29a0414e577437e969ca0004caed7976",
".git/objects/96/5a68b391a9d696b44f6913cd6d83f14206079d": "0ed2ac662485fd6f998a7c68433174c9",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/3f/ade7eb330bc4c152a81d8128a1ff7c137758ba": "e4eb22e8c0c086d28698aa576197532b",
".git/objects/6d/6300e6e497fa7b4b472cf670963c91462e7300": "37df458e54372f170d7863ef87fd2fb9",
".git/objects/6c/d2b9688394c461a00c9ce221cc87b4e812c27b": "c382692803132ef7586feb96732b8f70",
".git/objects/6c/5a45ab0c5707d13614f4c0caf3502c55b4d3ac": "ec0a74fe742d218918a4c2c83f7487ce",
".git/objects/0a/b4218e71ce60c286129114ec2285838bdbbc31": "72f782788021da4144301b7d2e498bea",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/d2/73d59a6e1f25e118ce5b5ad566b4049dacef01": "071a0bbadfc014362a761f7333fc2971",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ef/a4d4e9c3d8aafe911604eedd2b56e568998db9": "126cf875d22aecc454efc66ddb9fb7c9",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/a3b3cfcb1bbcce1fa85a38a9332b6e6e371706": "43de2665fcf2b07e67725a1224a61a86",
".git/objects/24/f56cbf13012cc7598cb973dce8f53b37e912fc": "37e9f7ef90ca64e719afcd6baec42fba",
".git/objects/23/6e50b9e56126827551cca7abe6c29edee6a369": "730df8cd9b2676f60f0ad582fc219483",
".git/objects/8d/770bb04347850fcc569aa97eff7a1829881469": "5d043b4543ecbc4dc52ed584c6c2f0de",
".git/objects/12/70846a6dd89c7c58b6ff0f231ca4d373f50905": "c1ece4f974e7e4cfb0e9f41f613561c2",
".git/objects/71/16bdaddf60a5a1580bb5d2ab0201fb2d213ec3": "990332b6518e894e2364cd1e2c44f0aa",
".git/objects/1c/c0ce3adfdf870afa6cc277d01e14d2735c4b5b": "af980d96690c676c16ae6c72f46c68e6",
".git/objects/7f/3434a95e4591bf4e6f032af2e149120f4eacc6": "94a473aa172dd5f020c73b18fc072ebd",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "44aa9b24617467867879109601fe4294",
".git/logs/refs/heads/main": "822403c759cb4536c9913624c37cff06",
".git/logs/refs/remotes/origin/main": "dad7ee937890455a7d81b5f2b1cac286",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "375e070542aa08a13df7b4cbb83dd3f1",
".git/refs/remotes/origin/main": "375e070542aa08a13df7b4cbb83dd3f1",
".git/index": "29730370a92490ee46071179831337fb",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
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
