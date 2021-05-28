# URLBuilder

Utility to easily compose urls

## Disclaimer
I did this project only for fun. If you wish to create and manage a URL, please "use the platform": https://v19i.com/posts/use-the-platform-url-api/

## How to
Initialise it by providing a base url:
```javascript
const builder = new URLBuilder("https://a.valid.url/with/a/long/path");
```

Add or replace a search params:
```javascript
builder.search.set("key", "value");
```

Get an encoded url:
```javascript
builder.URL; // -> https://a.valid.url/with/a/long/path?key=value
```

Remove a search param:
```javascript
builder.search.delete("key");
```
