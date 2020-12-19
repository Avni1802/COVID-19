// fetch("https://community-open-weather-map.p.rapidapi.com/find?q=london&cnt=0&mode=null&lon=0&type=link%2C%20accurate&lat=0&units=imperial%2C%20metric", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "04a8e6aea8mshf31eebacfbed8cep11facejsn160a19223ee3",
// 		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

const url="https://api.covid19api.com/summary"
let data;
let box=document.getElementById("container");
let global=document.createElement("div");
let glob_head=document.createElement("h1");
glob_head.classList.add("title");
glob_head.innerText="Covid-19 Tracker Global";
box.appendChild(glob_head);
global.classList.add("global");
box.appendChild(global);

let cont=document.getElementById("enter-country");

let countcases=document.createElement("div");
let body=document.querySelector("body");
countcases.classList.add("Country");
body.appendChild(countcases);

async function getapi(url){
    const response=await fetch(url);
    data=await response.json();
    console.log(data);
    console.log(data.Countries.find(Countries =>Countries.Country==="India"));
    const txt=JSON.stringify(data.Global);
    glo=data.Global;
    let globa=document.querySelector(".global");
    

    // globa.innerText=txt;
    let cases=document.getElementById("case");
    let counti=document.getElementById("country");
    counti.style.display="none";
    cases.addEventListener("click",function(){
        console.log("dsc");

        x=cont.value;
        counti.innerText="";
        console.log("dsc");
        t=data.Countries.find(Countries =>(Countries.Country).toLowerCase()===x.toLowerCase());
        for(const count in t){
            counti.innerText+="\n";
            counti.innerText+=`${count} : ${t[count]}`;
        }
        counti.style.display="block";

        cont.value="";
        }
        );

    for(const count in glo){
        globa.innerText+=`${count} : ${glo[count]}`;
        globa.innerText+="\n";
    }
}

getapi(url);
