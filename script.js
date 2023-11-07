'use strict;'


var categories = ["all", "neutral", "chuck"];
var languages = ["en","es","de"];
var numbers = ["1", "5" ,"10"];

async function jokesFetch(){ 

    return fetch('https://cs-jokes.onrender.com/jokes').then(response => response.json()).catch(error => console.error(error)); 

}


async function pullJokes(){ 

    let category = document.querySelector("#categories").value; 
    let language = document.querySelector("#languages").value; 
    let number = document.querySelector('#numbers').value;


    let data = await jokesFetch();



    writeJoke(data)
}

function writeJoke(data){ 

    let displayDiv = document.querySelector('#jokesDisplay'); 

    displayDiv.innerText = data;
   







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




