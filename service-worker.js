importScripts("precache-manifest.31b46e8df82c5414acecac286d32d7f1.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

//Web Push Notifications//
let click_open_url
self.addEventListener('push', function (event) {
  let push_message = event.data.json()
  // push notification can send event.data.json() as well
  click_open_url = push_message.notification.data.url
  const options = {
    body: push_message.notification.body,
    icon: push_message.notification.icon,
    image: push_message.notification.image,
    tag: 'alert'
  };
  event.waitUntil(self.registration.showNotification(push_message.notification.title, options));
});

