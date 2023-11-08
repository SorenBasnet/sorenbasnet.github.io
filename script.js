'use strict;'


var categories = ["all", "neutral", "chuck"];
var languages = ["en","es","de"];
var numbers = ["1", "5" ,"10"];

async function jokesFetch(cat, lang, num){ 

    return fetch(`https://cs-jokes.onrender.com/v1/jokes/${cat}/${lang}/${num}`).then(response => response.json()).catch(error => console.error(error)); 

}


async function pullJokes(){ 

    let category = document.querySelector("#categories").value; 
    let language = document.querySelector("#languages").value; 
    let id = document.querySelector('#id').value;
    let number = document.querySelector('#numbers').value;
    let displayDiv = document.querySelector('#jokesDisplay'); 
    displayDiv.innerHTML = "";
    console.log(9);

    if(number == null){

        console.log(0);

        displayDiv.innerText = 'Id Needed !';

    }
    else if(number == 0){ 
        console.log(4);
        for(let i = 0; i < parseInt(number); i++){ 
            let data = await jokesFetch(language, category, number);
            writeJoke(data) 
        }
        }
    
    else{
        for(let i = 0; i < parseInt(number); i++){
            let data = await jokesFetch(language, category, number);


            if(i+1 == id){

                writeJoke(data) 
            }
   
            }

     }

   


   
}

function writeJoke(data){ 

    let displayDiv = document.querySelector('#jokesDisplay'); 
   
    
    for (let a_data of data) {
       
        // a_quote is a dictionary with 2 keys: quote and author
        let dataP = document.createElement("p");
        dataP.classList = "p";
        dataP.innerHTML = a_data
        displayDiv.appendChild(dataP);
    }


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




