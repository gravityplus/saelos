# Info

Welcome to the Saelos API reference.
@if($showPostmanCollectionButton)
[Get Postman Collection]({{url($outputPath.'/collection.json')}})
@endif

The examples you see to the right use [`GuzzleHttp`](https://packagist.org/packages/guzzlehttp/guzzle)
for PHP, `jQuery` for javascript, and `cURL` for bash.

When making requests to the API, be sure that you're sending along an `Accept: application/json` HTTP header.