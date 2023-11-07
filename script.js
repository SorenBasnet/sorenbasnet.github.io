'use strict;'


var categories = ["all", "neutral", "chuck"];
var languages = ["en","es","de"];
var numbers = ["1", "5" ,"10"];


async function pullJokes(){ 
    console.log("Hello");
    let data = await fetch('https://cs-jokes.onrender.com').then(response => response.json()).catch(error => console.error(error)); 
    console.log(data);

    writeJoke()
}

function writeJoke(){ 

    let displayDiv = document.querySelector('#jokesDisplay'); 

    displayDiv.innerText = "Hello This works";
    console.log("THis works works");







}

function populateSelect(selectId, list){ 
    let sel = document.getElementById(selectId);
    list.forEach(list => {
        const opt = document.createElement('option');
        opt.value = list;
        opt.text = list;
        sel.add(opt); 
      }); 
}

window.onload = function () { 

    populateSelect("categories", categories); 
    populateSelect("numbers", numbers); 
    populateSelect("languages", languages);

}




