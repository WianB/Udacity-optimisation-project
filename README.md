# Website Optimization project.

In this project I optimized a website given to me by Udacity. A horrible pizza website was given and the goal is to get the pagespeed insights score up to 90 as well as offering the user a better experience where rendering/scrolling runs at a smooth 60fps.

## Changes to the website


1. Reducing the size of resources including optimizing images and using the min versions of scripts and stylesheets.

2. Loading non critical resources asynchronously.

3. Inlined css

4. Fixed rendering bottlenecks in most cases elements accessed the DOM multiple times when not needed(see Example).

#### Example

```
for (var i = 2; i < 100; i++) {
    var pizzasDiv = document.getElementById("randomPizzas");
    pizzasDiv.appendChild(pizzaElementGenerator(i))
}
```

to:

```
var pizzasDiv = document.getElementById("randomPizzas");
for (var i = 2; i < 100; i++) {
    pizzasDiv.appendChild(pizzaElementGenerator(i))
}
```


5. Made access to DOM elements more efficient

```
document.querySelector("#pizzaSize").innerHTML = "Small");
```

to:

```
document.getElementById("pizzaSize").innerHTML = "Small");
```


## Setup:

The website can be easily setup hosting on a server that can be local using the Python library or hosting online eg. Github pages.
