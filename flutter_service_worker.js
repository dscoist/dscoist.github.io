'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3e68dea4525ad9bb48f8855436d64521",
"index.html": "fd964c6f6deee9e20e1a2985091d00c4",
"/": "fd964c6f6deee9e20e1a2985091d00c4",
"main.dart.js": "3b143954f4a779aea9f1587392c21511",
"favicon.png": "c19d14445f10972b5f53d21cc526d195",
"icons/logo.png": "00d8a2f13986f8da351dfcd17d16f774",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5167fa652d73601c21e024a89a9f5558",
"assets/images/programing.png": "be58231b3ed8d4b8e6b67751b213c568",
"assets/images/graphic-designer.png": "3fa6f6a1cb7ab6dad8cb14cd2bd31b08",
"assets/images/technical.png": "4f55729559b208f5272ad395ee4b0767",
"assets/images/code-editor.png": "fa3d0f5a542125c4ae6cd267d84404e4",
"assets/images/telegram.png": "f702faf205d2e99960d411fc9644f09d",
"assets/images/sargun-avtar.png": "64978466e173a9ed7a9d041cee731caf",
"assets/images/app.png": "cf86745d2f7f7b207bb51e63092d4a2d",
"assets/images/pranav.jpeg": "76cccc84d0af328cebcde74d8474c825",
"assets/images/instagram.png": "7b271287b1805255556aa2661ccf73f0",
"assets/images/working.png": "83f9096eaae3e7e927cf5b84f6e46787",
"assets/images/shashank.jpeg": "a980c4616e3595e57b217b2e4cdfde6f",
"assets/images/rishu.jpg": "1322148b66ef7d8753eacaeb1324a271",
"assets/images/google-play.png": "db9b21a1c41f3dcd9731e1e7acfdbb57",
"assets/images/learning-cover.png": "f0e9a6db4c292917eb16e4988216b4ca",
"assets/images/programmer.png": "b16ac702a3fb0d49c49dc6c081549bdf",
"assets/images/rishu-avtar.png": "7a61093eb5d0f822ed45639ad979aad1",
"assets/images/girl.png": "e1b10c9b5fa4278bdfa72f44e5076c3f",
"assets/images/sargun.jpeg": "5d2a518405b498a2b65198baecc08407",
"assets/images/dsc-logo.png": "b395be41ae55ffdf1477d7b23c228491",
"assets/images/twitter.png": "08d274bcaf71630fe630dce7373e3fde",
"assets/images/linkedin.png": "f53c4c9b041001471a7a447872a09ce6",
"assets/images/rohit.jpeg": "4530e6b197a051d44ed864dd65ad9560",
"assets/images/vaishali.jpeg": "1f3c3e412f0ebdf0667cac46e0e33454",
"assets/images/tech-women.png": "af3b79d5eb3cfc93bd151e4041b8d4d1",
"assets/images/abhas.png": "90f41e6798413bfcd10a76e94f4a7c67",
"assets/images/web.png": "7689df57c85a24463d255fb0141350e7",
"assets/images/vikrant.jpeg": "1c985c16449e1b92c089d8c0e96408d6",
"assets/images/youtube.png": "67b8b90257d168753be2f612f0780a9c",
"assets/images/devops.png": "8f36b1c9b194a77fc819af7959dbf353",
"assets/images/suhani.jpeg": "da972f8463f183c2801df9ebd8693a40",
"assets/images/hacker.png": "78ec95a736e0e568ba1469ffbd631ec5",
"assets/images/cp-programmer.png": "ce79caabd0b13284d0fde03a979ce4a7",
"assets/images/bhupinder.jpeg": "45c9ec25db6e02be64ebce488d252d7a",
"assets/AssetManifest.json": "035501f82e5aaecc359904cf82c172d0",
"assets/NOTICES": "aff1055c18049636fbda9b054fa7c6ba",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
