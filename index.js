const cats = [
    "Milo",
    "Otis",
    "Garfield",
]
 
function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    const newCats = cats.slice();
    newCats.push(name);
    return newCats;
}
function prependCat(name) {
    const newerCats = cats.slice();
    newerCats.unshift(name);
    return newerCats;
}
function removeLastCat() {
    const remCat = cats.slice();
    remCat.pop();
    return remCat;
}
function removeFirstCat() {
    const rem1Cat = cats.slice();
    rem1Cat.shift();
    return rem1Cat;
}