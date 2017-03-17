function getAdj(a) {
    switch (a) {
        case "dark":
            var b = ["dark", "morbid", "scary", "spooky", "gothic", "deviant", "creepy", "sadistic", "black", "dangerous", "dejected", "haunted", "morose", "tragic", "shattered", "broken", "sad", "melancholy", "somber", "dark", "gloomy", "homicidal", "murderous", "shady", "misty", "dusky", "ghostly", "shadowy", "demented", "cursed", "insane", "possessed", "grotesque", "obsessed"];
            return b;
        case "color":
            var c = ["blue", "green", "purple", "grey", "scarlet", "NeonGreen", "NeonBlue", "NeonPink", "HotPink", "pink", "black", "red", "maroon", "silver", "golden", "yellow", "orange", "mustard", "plum", "violet", "cerulean", "brown", "lavender", "violet", "magenta", "chestnut", "rosy", "copper", "crimson", "teal", "indigo", "navy", "azure", "periwinkle", "brassy", "verdigris", "veridian", "tan", "raspberry", "beige", "sandy", "ElectricBlue", "white", "champagne", "coral", "cyan"];
            return c;
        case "whimsical":
            var d = ["whimsical", "silly", "drunken", "goofy", "funny", "weird", "strange", "odd", "playful", "clever", "boastful", "breakdancing", "hilarious", "conceited", "happy", "comical", "curious", "peculiar", "quaint", "quirky", "fancy", "wayward", "fickle", "yawning", "sleepy", "cockeyed", "dizzy", "dancing", "absurd", "laughing", "hairy", "smiling", "perplexed", "baffled", "cockamamie", "vulgar", "hoodwinked", "brainwashed"];
            return d;
        case "shiny":
            var e = ["sapphire", "opal", "silver", "gold", "platinum", "ruby", "emerald", "topaz", "diamond", "amethyst", "turquoise", "starlit", "moonlit", "bronze", "metal", "jade", "amber", "garnet", "obsidian", "onyx", "pearl", "copper", "sunlit", "brass", "brassy", "metallic"];
            return e;
        case "noisy":
            var f = ["untuned", "loud", "soft", "shrieking", "melodious", "musical", "operatic", "symphonic", "dancing", "lyrical", "harmonic", "orchestral", "noisy", "dissonant", "rhythmic", "hissing", "singing", "crooning", "shouting", "screaming", "wailing", "crying", "howling", "yelling", "hollering", "caterwauling", "bawling", "bellowing", "roaring", "squealing", "beeping", "knocking", "tapping", "rapping", "humming", "scatting", "whispered", "whispering", "rasping", "buzzing", "whirring", "whistling", "whistled"];
            return f;
        case "apocalyptic":
            var g = ["nuclear", "apocalyptic", "desolate", "atomic", "zombie", "collapsed", "grim", "fallen", "collapsed", "cannibalistic", "radioactive", "toxic", "poisonous", "venomous", "disastrous", "grimy", "dirty", "undead", "bloodshot", "rusty", "glowing", "decaying", "rotten", "deadly", "plagued", "decimated", "rotting", "putrid", "decayed", "deserted", "acidic"];
            return g;
        case "insulting":
            var h = ["stupid", "idiotic", "fat", "ugly", "hideous", "grotesque", "dull", "dumb", "lazy", "sluggish", "brainless", "slow", "gullible", "obtuse", "dense", "dim", "dazed", "ridiculous", "witless", "daft", "crazy", "vapid", "inane", "mundane", "hollow", "vacuous", "boring", "insipid", "tedious", "monotonous", "weird", "bizarre", "backward", "moronic", "ignorant", "scatterbrained", "forgetful", "careless", "lethargic", "insolent", "indolent", "loitering", "gross", "disgusting", "bland", "horrid", "unseemly", "revolting", "homely", "deformed", "disfigured", "offensive", "cowardly", "weak", "villainous", "fearful", "monstrous", "unattractive", "unpleasant", "nasty", "beastly", "snide", "horrible", "syncophantic", "unhelpful", "bootlicking"];
            return h;
        case "praise":
            var i = ["beautiful", "intelligent", "smart", "genius", "ingenious", "gorgeous", "pretty", "witty", "angelic", "handsome", "graceful", "talented", "exquisite", "enchanting", "fascinating", "interesting", "divine", "alluring", "ravishing", "wonderful", "magnificient", "marvelous", "dazzling", "cute", "charming", "attractive", "nifty", "delightful", "superior", "amiable", "gentle", "heroic", "courageous", "valiant", "brave", "noble", "daring", "fearless", "gallant", "adventurous", "cool", "enthusiastic", "fierce", "awesome", "radical", "tubular", "fearsome", "majestic", "grand", "stunning"];
            return i;
        case "scientific":
            var j = ["scientific", "technical", "digital", "programming", "calculating", "formulating", "cyberpunk", "mechanical", "technological", "innovative", "brainy", "chemical", "quantum", "astro", "space", "theoretical", "atomic", "electronic", "gaseous", "investigative", "solar", "extinct", "galactic"];
            return j;
        default:
            var k = ["scientific", "technical", "digital", "programming", "calculating", "formulating", "cyberpunk", "mechanical", "technological", "innovative", "brainy", "chemical", "quantum", "astro", "space", "theoretical", "atomic", "electronic", "gaseous", "investigative", "solar", "extinct", "galactic"];
            return k
    }
}

function getNoun(a) {
    switch (a) {
        case "animals":
            var b = ["flamingo", "hedgehog", "owl", "elephant", "pussycat", "alligator", "dachsund", "poodle", "beagle", "crocodile", "kangaroo", "wallaby", "woodpecker", "eagle", "falcon", "canary", "parrot", "parakeet", "hamster", "gerbil", "squirrel", "rat", "dove", "toucan", "raccoon", "vulture", "peacock", "goldfish", "rook", "koala", "skunk", "goat", "rooster", "fox", "porcupine", "llama", "grasshopper", "gorilla", "monkey", "seahorse", "wombat", "wolf", "giraffe", "badger", "lion", "mouse", "beetle", "cricket", "nightingale", "hawk", "trout", "squid", "octopus", "sloth", "snail", "locust", "baboon", "lemur", "meerkat", "oyster", "frog", "toad", "jellyfish", "butterfly", "caterpillar", "tiger", "hyena", "zebra", "snail", "pig", "weasel", "donkey", "penguin", "crane", "buzzard", "vulture", "rhino", "hippopotamus", "dolphin", "sparrow", "beaver", "moose", "minnow", "otter", "bat", "mongoose", "swan", "firefly", "platypus"];
            return b;
        case "profession":
            var c = ["doctor", "lawyer", "ninja", "writer", "samurai", "surgeon", "clerk", "artist", "actor", "engineer", "mechanic", "comedian", "fireman", "nurse", "RockStar", "musician", "carpenter", "plumber", "cashier", "electrician", "waiter", "president", "governor", "senator", "scientist", "programmer", "singer", "dancer", "director", "mayor", "merchant", "detective", "investigator", "navigator", "pilot", "priest", "cowboy", "stagehand", "soldier", "ambassador", "pirate", "miner", "police"];
            return c;
        case "fantasy":
            var d = ["centaur", "wizard", "gnome", "orc", "troll", "sword", "fairy", "pegasus", "halfling", "elf", "changeling", "ghost", "knight", "squire", "magician", "witch", "warlock", "unicorn", "dragon", "wyvern", "princess", "prince", "king", "queen", "jester", "tower", "castle", "kraken", "seamonster", "mermaid", "psychic", "seer", "oracle"];
            return d;
        case "music":
            var e = ["violin", "flute", "bagpipe", "guitar", "symphony", "orchestra", "piano", "trombone", "tuba", "opera", "drums", "harpsichord", "harp", "harmonica", "accordion", "tenor", "soprano", "baritone", "cello", "viola", "piccolo", "ukelele", "woodwind", "saxophone", "bugle", "trumpet", "sousaphone", "cornet", "stradivarius", "marimbas", "bells", "timpani", "bongos", "clarinet", "recorder", "oboe", "conductor", "singer"];
            return e;
        case "horror":
            var f = ["murderer", "chainsaw", "knife", "sword", "murder", "devil", "killer", "psycho", "ghost", "monster", "godzilla", "werewolf", "vampire", "demon", "graveyard", "zombie", "mummy", "curse", "death", "grave", "tomb", "beast", "nightmare", "frankenstein", "specter", "poltergeist", "wraith", "corpse", "scream", "massacre", "cannibal", "skull", "bones", "undertaker", "zombie", "creature", "mask", "psychopath", "fiend", "satanist", "moon", "fullMoon"];
            return f;
        case "gross":
            var g = ["slime", "bug", "roach", "fluid", "pus", "booger", "spit", "boil", "blister", "orifice", "secretion", "mucus", "phlegm", "centipede", "beetle", "fart", "snot", "crevice", "flatulence", "juice", "mold", "mildew", "germs", "discharge", "toilet", "udder", "odor", "substance", "fluid", "moisture", "garbage", "trash", "bug"];
            return g;
        case "everyday":
            var h = ["mirror", "knife", "fork", "spork", "spoon", "tupperware", "minivan", "suburb", "lamp", "desk", "stereo", "television", "TV", "book", "car", "truck", "soda", "door", "video", "game", "computer", "calender", "tree", "plant", "flower", "chimney", "attic", "kitchen", "garden", "school", "wallet", "bottle"];
            return h;
        case "jewelry":
            var i = ["earrings", "ring", "necklace", "pendant", "choker", "brooch", "bracelet", "cameo", "charm", "bauble", "trinket", "jewelry", "anklet", "bangle", "locket", "finery", "crown", "tiara", "blingBling", "chain", "rosary", "jewel", "gemstone", "beads", "armband", "pin", "costume", "ornament", "treasure"];
            return i;
        case "places":
            var j = ["swamp", "graveyard", "cemetery", "park", "building", "house", "river", "ocean", "sea", "field", "forest", "woods", "neighborhood", "city", "town", "suburb", "country", "meadow", "cliffs", "lake", "stream", "creek", "school", "college", "university", "library", "bakery", "shop", "store", "theater", "garden", "canyon", "highway", "restaurant", "cafe", "diner", "street", "road", "freeway", "alley"];
            return j;
        case "scifi":
            var k = ["robot", "alien", "raygun", "spaceship", "UFO", "rocket", "phaser", "astronaut", "spaceman", "planet", "star", "galaxy", "computer", "future", "timeMachine", "wormHole", "timeTraveler", "scientist", "invention", "martian", "pluto", "jupiter", "saturn", "mars", "quasar", "blackHole", "warpDrive", "laser", "orbit", "gears", "molecule", "electron", "neutrino", "proton", "experiment", "photon", "apparatus", "universe", "gravity", "darkMatter", "constellation", "circuit", "asteroid"];
            return k;
        default:
            var l = ["robot", "alien", "raygun", "spaceship", "UFO", "rocket", "phaser", "astronaut", "spaceman", "planet", "star", "galaxy", "computer", "future", "timeMachine", "wormHole", "timeTraveler", "scientist", "invention", "martian", "pluto", "jupiter", "saturn", "mars", "quasar", "blackHole", "warpDrive", "laser", "orbit", "gears", "molecule", "electron", "neutrino", "proton", "experiment", "photon", "apparatus", "universe", "gravity", "darkMatter", "constellation", "circuit", "asteroid"];
            return l
    }
}

function generator(a, b) {
    var c = getAdj(a),
        d = getNoun(b),
        e = parseInt(Math.random() * c.length),
        f = parseInt(Math.random() * d.length),
        g = "The " + c[e].capitalize() + " " + d[f].capitalize();
    return g
}

function randomName() {
    var a = parseInt(Math.random() * adjectives.length),
        b = parseInt(Math.random() * nouns.length);
    return generator(adjectives[a], nouns[b])
}

function logAverageFrame(a) {
    for (var b = a.length, c = 0, d = b - 1; d > b - 11; d--) c += a[d].duration;
    console.log("Average scripting time to generate last 10 frames: " + c / 10 + "ms")
}

function updatePositions() {
    frame++, window.performance.mark("mark_start_frame");
    for (var a = document.querySelectorAll(".mover"), b = 0; b < a.length; b++) {
        var c = Math.sin(document.body.scrollTop / 1250 + b % 5);
        a[b].style.left = a[b].basicLeft + 100 * c + "px"
    }
    if (window.performance.mark("mark_end_frame"), window.performance.measure("measure_frame_duration", "mark_start_frame", "mark_end_frame"), frame % 10 === 0) {
        var d = window.performance.getEntriesByName("measure_frame_duration");
        logAverageFrame(d)
    }
}
var pizzaIngredients = {};
pizzaIngredients.meats = ["Pepperoni", "Sausage", "Fennel Sausage", "Spicy Sausage", "Chicken", "BBQ Chicken", "Chorizo", "Chicken Andouille", "Salami", "Tofu", "Bacon", "Canadian Bacon", "Proscuitto", "Italian Sausage", "Ground Beef", "Anchovies", "Turkey", "Ham", "Venison", "Lamb", "Duck", "Soylent Green", "Carne Asada", "Soppressata Picante", "Coppa", "Pancetta", "Bresola", "Lox", "Guanciale", "Chili", "Beef Jerky", "Pastrami", "Kielbasa", "Scallops", "Filet Mignon"], pizzaIngredients.nonMeats = ["White Onions", "Red Onions", "Sauteed Onions", "Green Peppers", "Red Peppers", "Banana Peppers", "Ghost Peppers", "Habanero Peppers", "Jalapeno Peppers", "Stuffed Peppers", "Spinach", "Tomatoes", "Pineapple", "Pear Slices", "Apple Slices", "Mushrooms", "Arugula", "Basil", "Fennel", "Rosemary", "Cilantro", "Avocado", "Guacamole", "Salsa", "Swiss Chard", "Kale", "Sun Dried Tomatoes", "Walnuts", "Artichoke", "Asparagus", "Caramelized Onions", "Mango", "Garlic", "Olives", "Cauliflower", "Polenta", "Fried Egg", "Zucchini", "Hummus"], pizzaIngredients.cheeses = ["American Cheese", "Swiss Cheese", "Goat Cheese", "Mozzarella Cheese", "Parmesean Cheese", "Velveeta Cheese", "Gouda Cheese", "Muenster Cheese", "Applewood Cheese", "Asiago Cheese", "Bleu Cheese", "Boursin Cheese", "Brie Cheese", "Cheddar Cheese", "Chevre Cheese", "Havarti Cheese", "Jack Cheese", "Pepper Jack Cheese", "Gruyere Cheese", "Limberger Cheese", "Manchego Cheese", "Marscapone Cheese", "Pecorino Cheese", "Provolone Cheese", "Queso Cheese", "Roquefort Cheese", "Romano Cheese", "Ricotta Cheese", "Smoked Gouda"], pizzaIngredients.sauces = ["Red Sauce", "Marinara", "BBQ Sauce", "No Sauce", "Hot Sauce"], pizzaIngredients.crusts = ["White Crust", "Whole Wheat Crust", "Flatbread Crust", "Stuffed Crust"], String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
};
var adjectives = ["dark", "color", "whimsical", "shiny", "noisy", "apocalyptic", "insulting", "praise", "scientific"],
    nouns = ["animals", "everyday", "fantasy", "gross", "horror", "jewelry", "places", "scifi"],
    selectRandomMeat = function() {
        var a = pizzaIngredients.meats[Math.floor(Math.random() * pizzaIngredients.meats.length)];
        return a
    },
    selectRandomNonMeat = function() {
        var a = pizzaIngredients.nonMeats[Math.floor(Math.random() * pizzaIngredients.nonMeats.length)];
        return a
    },
    selectRandomCheese = function() {
        var a = pizzaIngredients.cheeses[Math.floor(Math.random() * pizzaIngredients.cheeses.length)];
        return a
    },
    selectRandomSauce = function() {
        var a = pizzaIngredients.sauces[Math.floor(Math.random() * pizzaIngredients.sauces.length)];
        return a
    },
    selectRandomCrust = function() {
        var a = pizzaIngredients.crusts[Math.floor(Math.random() * pizzaIngredients.crusts.length)];
        return a
    },
    ingredientItemizer = function(a) {
        return "<li>" + a + "</li>"
    },
    makeRandomPizza = function() {
        for (var a = "", b = Math.floor(4 * Math.random()), c = Math.floor(3 * Math.random()), d = Math.floor(2 * Math.random()), e = 0; e < b; e++) a += ingredientItemizer(selectRandomMeat());
        for (var f = 0; f < c; f++) a += ingredientItemizer(selectRandomNonMeat());
        for (var g = 0; g < d; g++) a += ingredientItemizer(selectRandomCheese());
        return a += ingredientItemizer(selectRandomSauce()), a += ingredientItemizer(selectRandomCrust())
    },
    pizzaElementGenerator = function(a) {
        var b, c, d, e, f, g;
        return b = document.createElement("div"), c = document.createElement("div"), d = document.createElement("img"), e = document.createElement("div"), b.classList.add("randomPizzaContainer"), b.style.width = "33.33%", b.style.height = "325px", b.id = "pizza" + a, c.style.width = "35%", d.src = "images/pizza.png", d.classList.add("img-responsive"), c.appendChild(d), b.appendChild(c), e.style.width = "65%", f = document.createElement("h4"), f.innerHTML = randomName(), e.appendChild(f), g = document.createElement("ul"), g.innerHTML = makeRandomPizza(), e.appendChild(g), b.appendChild(e), b
    },
    resizePizzas = function(a) {
        function b(a) {
            switch (a) {
                case "1":
                    //Changed to .getElementById as this is faster
                    return void(document.getElementById("pizzaSize").innerHTML = "Small");
                case "2":
                    //Changed to .getElementById as this is faster
                    return void(document.getElementById("pizzaSize").innerHTML = "Medium");
                case "3":
                    //Changed to .getElementById as this is faster
                    return void(document.getElementById("pizzaSize").innerHTML = "Large");
                default:
                    console.log("bug in changeSliderLabel")
            }
        }

        function c(a, b) {
            function c(a) {
                switch (a) {
                    case "1":
                        return .25;
                    case "2":
                        return .3333;
                    case "3":
                        return .5;
                    default:
                        console.log("bug in sizeSwitcher")
                }
            }
            var d = a.offsetWidth,
                //Changed to .getElementById as this is faster
                e = document.getElementById("randomPizzas").offsetWidth,
                f = d / e,
                g = c(b),
                h = (g - f) * e;
            return h
        }

        function d(a) {
            //Changed to .getElementsByClassName as this is faster.
            for (var b = c(document.getElementsByClassName("randomPizzaContainer")[0], a), d = document.getElementsByClassName("randomPizzaContainer")[0].offsetWidth + b + "px", e = 0; e < document.getElementsByClassName("randomPizzaContainer").length; e++) document.getElementsByClassName("randomPizzaContainer")[e].style.width = d
        }
        window.performance.mark("mark_start_resize"), b(a), d(a), window.performance.mark("mark_end_resize"), window.performance.measure("measure_pizza_resize", "mark_start_resize", "mark_end_resize");
        var e = window.performance.getEntriesByName("measure_pizza_resize");
        console.log("Time to resize pizzas: " + e[e.length - 1].duration + "ms")
    };
window.performance.mark("mark_start_generating");
var pizzasDiv = document.getElementById("randomPizzas");
for (var i = 2; i < 100; i++) {
    pizzasDiv.appendChild(pizzaElementGenerator(i))
}
window.performance.mark("mark_end_generating"), window.performance.measure("measure_pizza_generation", "mark_start_generating", "mark_end_generating");
var timeToGenerate = window.performance.getEntriesByName("measure_pizza_generation");
console.log("Time to generate pizzas on load: " + timeToGenerate[0].duration + "ms");
var frame = 0;
window.addEventListener("scroll", updatePositions), document.addEventListener("DOMContentLoaded", function() {
    //Changed variable names as well as taking them out of the for loop
    var size = 256;
    var columns = 8;
    var rows = Math.round( window.screen.height / size );
    //Calculate how much pizzas will be made based on the height of the window.
    var pizzaCount = rows * columns;
    //Called dom lookup once to the mPizzas variable
    //Changed to getElementById
    var mPizzas = document.getElementById("movingPizzas1");
    for (var i = 0; i < pizzaCount; i++) {
        var elem = document.createElement('img');
        elem.className = 'mover';
        elem.src = "images/pizza.png";
        elem.style.height = "100px";
        elem.style.width = "73.333px";
        elem.basicLeft = (i % columns) * size;
        elem.style.top = (Math.floor(i / columns) * size) + 'px';
        mPizzas.appendChild(elem);
    }
    updatePositions()
});
