# JavaScript Module Cookie

ES Module version of the cookie package

## Example for how to load the ES module in a browser:

```html
<script type="module" src="cookie.js"></script>
```
<b>OR<b>
```html
<script type="module">
  import cookie from 'cookie.js'
</script>
```

## Basic Usage

Create a cookie, valid across the entire site:

```javascript
cookie.set('name', 'value')
```

Create a cookie that expires 7 days from now, valid across the entire site:

```javascript
cookie.set('name', 'value', { expires: 7 })
```

Create an expiring cookie, valid to the path of the current page:

```javascript
cookie.set('name', 'value', { expires: 7, path: '' })
```

Read cookie:

```javascript
cookie.get('name') // => 'value'
cookie.get('nothing') // => undefined
```




