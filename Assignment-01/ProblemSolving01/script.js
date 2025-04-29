console.log(document); // We can access the document object using the console
console.log(document.body); // We can access the body of the document using the console
console.log(document.head); // We can access the head of the document using the console
console.log(document.title); // We can access the title of the document using the console
console.log(document.URL); // We can access the URL of the document using the console
console.log(document.firstChild); // We can access the first child of the document using the console
console.log(document.firstElementChild); // We can access the first element child of the document using the console
console.log(document.getElementById("h1")); // we can access the element with id "h1" using the console
//We Have added a new element to the document using the console
document.getElementById("h1").innerHTML = "Hello World!"; // We can change the inner HTML of the element with id "h1" using the console
console.log(document.getElementsByClassName("h1")); // We can access the elements with class "h1" using the console




// BOM
//Screen Object
console.log(window); // We can access the window object using the console
console.log(window.innerWidth); // We can access the inner width of the window using the console
console.log(window.innerHeight); // We can access the inner height of the window using the console
console.log(window.outerWidth); // We can access the outer width of the window using the console
console.log(window.outerHeight); // We can access the outer height of the window using the console
console.log(window.location); // We can access the location of the window using the console

//Navigator Object
console.log(navigator.language); // We can access the navigator object using the console
console.log(navigator.userAgent); // We can access the user agent of the navigator using the console
console.log(navigator.platform); // We can access the platform of the navigator using the console
console.log(navigator.appName); // We can access the app name of the navigator using the console
console.log(navigator.appVersion); // We can access the app version of the navigator using the console
console.log(navigator.cookieEnabled); // We can access the cookie enabled of the navigator using the console
console.log(navigator.onLine); // We can access the online status of the navigator using the console
console.log(navigator.geolocation); // We can access the geolocation of the navigator using the console

// Location Object
console.log(location.href); // We can access the href of the location using the console
console.log(location.hostname); // We can access the hostname of the location using the console
console.log(location.pathname); // We can access the pathname of the location using the console
console.log(location.protocol); // We can access the protocol of the location using the console