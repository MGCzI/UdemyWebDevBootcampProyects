//jshint esversion:6
"use strict";

const  superheroes = require("superheroes");
const supervillains = require('supervillains');


let mySuperHeroName = superheroes.random();
let mySuperVillainName = supervillains.random();

console.log(mySuperHeroName);
console.log(mySuperVillainName);