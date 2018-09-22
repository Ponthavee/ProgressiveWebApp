self.addEventListener('install',function(e){
    e.waitUntil(
        caches.open('vidoe-store').then(function(cache){
            return cache.addAll([
                '/index.html',
                '/app.js',
                '/504763.jpg'
            ]);
        })
    );
});

self.addEventListener('fetch',function(e){
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then(function(response){
            return response || fetch(e.request);
        })
    );
});