let city=""; 
let url="";
let APIkey="";
let queryurl ="";
let currenturl = "";
let citiesDiv = document.getElementById("searched_cities_container");


let cities = []; 
init(); 
listClicker(); 
searchClicker(); 


function init(){
    let saved_cities = JSON.parse(localStorage.getItem("cities"));

    if (saved_cities !== null){
        cities = saved_cities
    }   
    
    renderButtons(); 
}


function storeCities(){
    localStorage.setItem("cities", JSON.stringify(cities)); 
}



