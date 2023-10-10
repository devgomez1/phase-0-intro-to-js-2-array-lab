// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
    console.log(cats);
};

function destructivelyPrependCat(name){
    cats.unshift(name);
    console.log(cats);
};

function destructivelyRemoveLastCat(name){
    cats.pop(name);
    console.log(cats);
};

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
    console.log(cats);
};

function appendCat(name){
    return [...cats, name];
};

function prependCat(name){
    return [name, ...cats];
};

function removeLastCat(name){
    return cats.slice(0, -1);
};

function removeFirstCat(name){
    return cats.slice(1);
};