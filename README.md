## ٌWhere Am I:

### PART 1

1. Create a function `whereAmI` which takes as inputs a latitude value (`lat`) and a longitude value (`lng`) (these are GPS coordinates, examples are below).

2. Do **reverse geocoding** of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding:
   https://geocode.xyz/

```txt
https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}
```

The AJAX call will be done to a URL with this format:

```txt
https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=52.508&longitude=13.381
```

Use the Fetch API and Promises to get the data.

3. Once you have the data, take a look at it in the console to see all the attributes that you received about the provided location. Then, using this data, log a message like this to the console:

```txt
You are in Berlin, Germany
```

4. Chain a `.catch()` method to the end of the promise chain and log errors to the console.

5. This API allows you to make only **3 requests per second**. If you reload fast, you will get this error with code `403`.

This is an error with the request. Remember, `fetch()` does **NOT** reject the promise in this case.

So create an error to reject the promise yourself, with a meaningful error message.

---

### PART 2

6. Now it's time to use the received data to render a country.

Take the relevant attribute from the geocoding API result, and plug it into the Countries API that we have been using.

7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code).

---

## Test Coordinates

| Test | Latitude | Longitude |
| ---- | -------- | --------- |
| 1    | 52.508   | 13.381    |
| 2    | 19.037   | 72.873    |
| 3    | -33.933  | 18.474    |

---

fetch('URL')
.then(response => {
if (!response.ok) {
throw new Error(`HTTP error! Status: ${response.status}`);
}
return response.json();
})
.then(data => {
console.log(data);
})
.catch(err => {
console.error('Something went wrong:', err.message);
})
.finally(() => {
console.log('Request finished');
});
//Added npm packeges
