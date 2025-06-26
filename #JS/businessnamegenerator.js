let random1 = Math.floor(Math.random() * 3);
let random2 = Math.floor(Math.random() * 3);
let random3 = Math.floor(Math.random() * 3);

let Adjectives = {
    a: "Crazy",
    b: "Amazing",
    c: "Fire"
}

let shop_name = {
    d: "Engine",
    e: "Foods",
    f: "Garments"
}

let another_word = {
    g: "Bros",
    h: "Limited",
    i: "Hub"
}

console.log(Adjectives[Object.keys(Adjectives)[random1]] + " " + shop_name[Object.keys(shop_name)[random2]] + " " + another_word[Object.keys(another_word)[random3]]);