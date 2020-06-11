# URLBuilder

Utility to easily compose urls

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
builder.search.del("key");
```