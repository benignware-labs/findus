# findus

Create contact-maps easily.

A google-maps wrapper that lets you quickly build a customizable map.

## Install

Include js dependencies

```html
<script src="http://maps.googleapis.com/maps/api/js?key=GOOGLE_MAPS_API_KEY"></script>
<script src="js/findus.js"></script>
```

Optionally include css

```html
<link rel="stylesheet" href="css/findus.css">
```

## Usage

Provide geocodeable content

```html
<div class="findus">
  <h4>Find us here</h4>
  8411 Market Street<br/>
  San Francisco<br/>
  CA 94103<br/>
  USA
</div>
```

Initialize findus

```js
findus(document.querySelector('.findus'));
```

## Options

<table>
  <tr>
    <th>Name</th><th>Description</th>
  </tr>
  <tr>
    <td>address</td><td>A geocodeable address string</td>
  </tr>
  <tr>
    <td>autoShow</td><td>Specifies whether to show info-window on render. Defaults to true.</td>
  <tr>
    <td>bindResize</td><td>Specifies whether to bind window resize. Defaults to true.</td>
  </tr>
  <tr>
    <td>content</td><td>HTML content to be shown in info-window. A geocodeable string can be explicitly defined by containing it in an address-tag.</td>
  </tr>
  <tr>
    <td>latitude</td><td>Location coordinate latitude</td>
  </tr>
  <tr>
    <td>longitude</td><td>Location coordinate longitude</td>
  </tr>
  <tr>
    <td>info</td><td>Options passed to the info-window instance</td>
  </tr>
  <tr>
    <td>map</td><td>Options passed to the map instance. Defaults to <br/>
    {<br/>
        &nbsp;&nbsp;zoom: 15,<br/>
        &nbsp;&nbsp;mapTypeId: google.maps.MapTypeId.ROADMAP,<br/>
        &nbsp;&nbsp;disableDefaultUI: true,<br/>
        &nbsp;&nbsp;draggable: false, <br/>
        &nbsp;&nbsp;zoomControl: false, <br/>
        &nbsp;&nbsp;scrollwheel: false, <br/>
        &nbsp;&nbsp;disableDoubleClickZoom: true<br/>
      }</td>
  </tr>
  <tr>
    <td>marker</td><td>Options passed to the marker instance</td>
  </tr>
</table>

## Development

Create an `.env` file at the root of the project directory containing your api-key:

```env
GOOGLE_MAPS_API_KEY=xxxxxxx
````

Startup dev-server

```cli
npm start
```

## Production

Create a production build

```cli
npm run build
```
