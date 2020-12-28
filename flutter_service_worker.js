'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3e68dea4525ad9bb48f8855436d64521",
"index.html": "f261e740273987c228744e4df3c9171e",
"/": "f261e740273987c228744e4df3c9171e",
"main.dart.js": "3b143954f4a779aea9f1587392c21511",
"favicon.png": "c19d14445f10972b5f53d21cc526d195",
"icons/logo.png": "00d8a2f13986f8da351dfcd17d16f774",
"icons/Icon-512.png": "d2d3cbdc2977664a7dc0b389eb4ea011",
"manifest.json": "5167fa652d73601c21e024a89a9f5558",
".git/config": "96a9747683decaf98dee0f1fedfee5c1",
".git/objects/0d/7888d536d39a66eb90339b3e5ed80f1b61b5cd": "abb047844bade1c8adc605f5e567643d",
".git/objects/95/fe9863f55440d000b03278ccaeb0a64facb0bd": "6e71e45c8aa0d1927716ec0b4c85ee70",
".git/objects/0c/3c52948292b92e87e897ee28e68e09c4f54680": "53b28073753fdfbfc05d81c7197b0311",
".git/objects/3e/e4ddd395a86351b38ff34152c300eb3ada8171": "0dc47aaf0305d1a11109860fb65f9627",
".git/objects/04/6bf7b1f149ce2e080d5049cc64f7b04afe9f2a": "4847abebb27b2705a0852d907867a68d",
".git/objects/93/7b33bd85c3c4e7f92ff054110c82537b8ef9a2": "a72ad9ead703d9793f28b02c155d2f6a",
".git/objects/94/8151b55486711602d5b1e56f92223060e5d977": "e43f38d875e5c3b4867d5d0b2dd8c527",
".git/objects/94/367b27847f277615426493a2776d8368f1b856": "39ee21019f204154fe2677b995b3ef2c",
".git/objects/d9/dfac7ae3d165cf4cb6fe20eef826ce60552588": "76c811d0e59389413ab431debfc8626b",
".git/objects/ac/bd6b1757fbd11e3bf62ca925c0a136e86f09ca": "2f35e44c991e384268af0dc4aefdbd46",
".git/objects/d0/4c13d2e84817ec0349764eb6b89b13abf0d196": "2f466c30179a5ec947edaefa7a472c3a",
".git/objects/be/3b71d95ae7e09acc34e48a4d44315414718524": "131980569e30958b04fb2171abdcd208",
".git/objects/d1/49cd243b2a69c63a07212add2c4de5b5e9464b": "7fce04a4b9966bdb16e065c37bc3e61c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/bf1621c127a7ed5f3b077582ead606782ab00f": "995c544f95605478e20cd43ca64b23bf",
".git/objects/c7/7b7464b049c7d6666155c61df5f486f241f760": "4ab8ee67a3eb5dc207a2be6cb6cffe4e",
".git/objects/ee/9b6846457656fd7fb5573489348da5c083f1b0": "766c6fd90258dfb001664b771dc1d597",
".git/objects/fd/54c8c584eff1c3ff4fbf7b43546312d19471be": "a49a471e16c5b05a576ef6a3278a209f",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/cf/1c1abe04547ec9b556ed44a012b7f34c875215": "1065578c3e56d17c1ca55fef841bc49d",
".git/objects/fe/8be32ab2ace6d3e5ad5d988c3cbce28466969b": "61a043caf7f41c0657b39e4264ee0836",
".git/objects/c8/23029b469e84222df8f102718221a44aba15f5": "067e515313cc099609fd0cfb2e4cc73c",
".git/objects/fb/ad56476f013720dc450f23024084157e62bedc": "4c5ce1205721c5325bac4a0f93b89ae4",
".git/objects/ec/bd02dfc3638e98a4828642cf5b7c03b03cd280": "c8cc069a4a20b2084cafd1e500e93c6b",
".git/objects/27/57b7ce94e463a09ef737b39068f72fb8cfd85a": "d90d2f8d6bf46689db443d6b77c0fe07",
".git/objects/4b/51dc19c0a4b93633b2a94a9eaca30fdb631e76": "9bf770c7f1282fe03fb3f976f33a61c2",
".git/objects/89/b9058f54da8c93f31ee8c5cfb2b84db9797321": "7570b53cb7b57cf67c6342fba72756b2",
".git/objects/73/0262eb025b1f820428b554053acd0381681cbe": "abd1f259d042561b04ab249eea2dc444",
".git/objects/74/045ad2bf5fb0b74f4d2a814aa638415f563f0b": "e55ae2a2a61580478a05b96be179c3ae",
".git/objects/8f/333e027b60990238bd31ac05bfaf9fc724cab4": "aa3a042b296f72177c76103f33f5638f",
".git/objects/81/0df290758ca3bcee8cda4381b2dd3cc855afe5": "e26dbd460a3972c7e55baeed36286e4f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/995aec048beff8012e25d5baed42f4dfb18e20": "ccdffa9c261f59faaaa008f41aa2d496",
".git/objects/38/4ae59351b1096ea4b0162fe8d23aa9a9769604": "77f7995a9c5217e16b772393dbd70ef0",
".git/objects/9a/b4e339d1bac8424e64ca91d1015f6b8514d1f2": "188965b0de6f34bd6464b62d78a59144",
".git/objects/5c/72691f4ccb7f2d3c1483e74377b1ade6cfa5dd": "49050e5a8880c442f3b837cb6d43ad7c",
".git/objects/62/87f95591a412e02aedc075caf287dcea3de255": "3b741d2e7892eb429bae79b39e6c9cb1",
".git/objects/54/60ba714547790dc17e94c0348adfe89bdde951": "7bf92de5ff25bde702134cae51fb019c",
".git/objects/3f/17c5a2230e4259325ec6de45146adac91547eb": "273d3f081fa8959e058bfac81050e36c",
".git/objects/30/cd8bd1fa6fa7253c75934e629f714838ca8ddb": "045d6fed7e4e32ed8fbf2beb41218683",
".git/objects/08/3abb5cd7eec1c21dc5a09021d106eb74a4bd48": "c0a17c416f5a38f10fe22ac99c65d569",
".git/objects/6d/614420cf3e11c7ea70231dfb1eefcd25f173f8": "b35745ec02f6cdff51d752b7bffc4f54",
".git/objects/01/84f0fca27e816488aa82b0a0fd54cf025b4cb6": "937645bd035b85208cdcbabf628fccd5",
".git/objects/6c/566ae40a925ba7771e359d8dab52b57a4ff5ae": "f508f3583ce239248d6ce02d5cbcead2",
".git/objects/a0/4edcc3c51fa266bcf222ec0dffa184154f9eb1": "35f9768d5d2a927367855d9dc9aa98d1",
".git/objects/a7/d0e8eadb810be044661a3d8b801245b34207b7": "2198dc163651feefc99ea7b9db9b8987",
".git/objects/dc/a6b3c9ea3b43139d3fb84dd29ae9214e38fd16": "4803e194a5abafb5a9449bc31423f85c",
".git/objects/dc/89293472d155634fc65aa51c7ab04ff5f20184": "6036f8be62448f988778658607d1a353",
".git/objects/a9/3cbe88ab48cdfce41d8bb14fbc4e404e32f7a8": "1b06723676ba12470fdce367fb30019b",
".git/objects/aa/5a46a333b84121e7fe9222672a1ab8fd13cf46": "80f146e023d07ca5c37c1cd1ba1f6917",
".git/objects/a8/548392e46ce10bd1627947201262231afa24c4": "8499ef6d2897025d4357819b2f1359e0",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/de/44c2c5635b5b26410d4a782c9d7e8064cbe7a4": "361e307b890a6455dab6500d5a0788ea",
".git/objects/a6/1b446dfd9115bac157a71d5f775b61293b0498": "63fc84f2da7657fb1df973fef05b368b",
".git/objects/a6/4e3f57baa3219730c2ea6721f637429de6ff9a": "621e92dd8166a23e47a0da0d2d8297bb",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/b31a624e2a754c24d34699a0c96d5b67694431": "e80f550247a7c8405a4064c5776fd3f8",
".git/objects/ea/0a2319455183252ffece9ae33dee58e28a51cb": "db17b4dd04ace44d6e00b6793f5fc03a",
".git/objects/e1/928c0e3e855be6c599a408f9f2b95e09d87e82": "8106ee4780ebf9b8323821c16c98a4c5",
".git/objects/c2/c4515fbf418fa947c399314ec1ef8638f16f1c": "2ea503a6a451979e0895e7262981f382",
".git/objects/e7/2ba61a28ae599af7a215b68790a9d122a3af99": "070afc015df6b524bcd19bbe6fc71032",
".git/objects/79/ff86c61ffb1cf84f5100b2de944e281e231181": "1890461f57ce9b45a773fca690cd6d22",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/70/706cb136fa5cdc178e8237254cd1c40d8df5a6": "b8c1fd00170b450117f5046adf6c57c4",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/1c/4236dff616f1bcbdd0fdb5b0dab43cf29ce05b": "f8064696d2ca8a9db9c9040ce5276530",
".git/objects/47/5d347613c6243eced3f523fa1ab57b0e3e8988": "00795306400d100d3f48e8995e92e74d",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7b6755d78d999e8df70957addf5215c8",
".git/logs/refs/heads/master": "7b6755d78d999e8df70957addf5215c8",
".git/logs/refs/remotes/origin/master": "ea9a5a313fb241e1edc03105e282a644",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "e9742fafb117699b9b8cfdb481ea05a4",
".git/refs/remotes/origin/master": "e9742fafb117699b9b8cfdb481ea05a4",
".git/index": "f92588bf84f2a8203a2ee60a7902b6d2",
".git/COMMIT_EDITMSG": "e4a717e8d488d680dc604fbdb5bda6ff",
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
