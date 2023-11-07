'use strict;'

async function pullJokes(){ 
    console.log("Hello");
    let data = await fetch('https://cs-jokes.onrender.com').then(response => response.json()).catch(error => console.error(error)); 
    console.log(data);
}

console.log(9);