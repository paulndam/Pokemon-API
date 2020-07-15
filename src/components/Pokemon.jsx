import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

let list = [];
const pokelist = document.getElementById("pokelist");
const search = document.getElementById("search");

fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    list = data.results.map((mon) => mon.name);
    showPokemon(list);
  });

const showPokemon = (list) => {
  let li = "";
  for (let i = 0; i < list.length; i++) {
    li += `<li>${list[i]}</li>`;
  }
  pokelist.innerHTML = li;
};

search.addEventListener("input", (e) =>
  showPokemon(list.filter((mon) => mon.includes(e.target.value)))
);

document.getElementById("sort").addEventListener("click", () => {
  list.sort();
  showPokemon(list);
});

document.getElementById("reverse").addEventListener("click", () => {
  list.reverse();
  showPokemon(list);
});
