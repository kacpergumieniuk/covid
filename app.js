
/*COVID URL*/

const covidApi = "https://api.covid19api.com/summary";

/*LANDING PAGE VARIABLES*/

const allCases = document.getElementById("all-confirmed-cases");
const allDeaths = document.getElementById("total-deaths");
const allRecovered = document.getElementById("total-recovered");

/*SEARCHING PAGE VARIABLES*/

const searchInput = document.querySelector('.search-txt');
const suggestionsPanel  = document.querySelector(".suggestions");
const statsSection = document.getElementById("stats-page")

/*STATS PAGE VARIABLES*/

const countryTitle = document.getElementById("country-title");

const totalDeaths = document.getElementById("total-deaths-stat");
const totalCases = document.getElementById("total-cases-stat");
const totalRecovered = document.getElementById("total-recovered-stat");

const newDeaths = document.getElementById("deaths-stat-new");
const newCases = document.getElementById("cases-stat-new");
const newRecovered = document.getElementById("recovered-stat-new");

let adata;
let countries;





/*const searchInput = document.querySelector('.search-input')
const suggestionsPanel  = document.querySelector(".suggestions")


let submitButton = document.getElementById("submit");
submitButton.addEventListener('click', (x) => {
    x = document.getElementById("covid").value;
    Submit(x);
})*/


async function getData(){
    
    const result = await fetch(covidApi);
    adata = await result.json();
    countries = adata.Countries;

    

    allCases.innerHTML = adata.Global.TotalConfirmed;
    allDeaths.innerHTML = adata.Global.TotalDeaths;
    allRecovered.innerHTML = adata.Global.TotalRecovered;

}



searchInput.addEventListener('keyup' , function(){
    
    
    const input = searchInput.value;
    suggestionsPanel.innerHTML = '';
    suggestionsPanel.style.display = "inline-block";

    const suggestions = countries.filter(function(country){
        return country.Country.toLowerCase().startsWith(input);
    })
   

    

    suggestions.forEach(function(suggested){
        const div = document.createElement("div");
        div.innerHTML = suggested.Country;
        div.addEventListener('click' , function(){
            statsSection.scrollIntoView();
            Submit(countries.indexOf(suggested))
            
        } )
        suggestionsPanel.appendChild(div);
    })

    

    if(input === ''){
        suggestionsPanel.innerHTML = '';
    }
    
    if(suggestionsPanel.innerHTML === ''){
        suggestionsPanel.style.display = "none";
    }
    
    
   

   
})






    function Submit(x){
    
        countryTitle.innerHTML = countries[x].Country;

        anime({
            targets: totalDeaths,
            innerHTML: [0, countries[x].TotalDeaths],
            duration:2000,
            round: true,
        })

        anime({
            targets: totalCases,
            innerHTML: [0, countries[x].TotalConfirmed],
            duration:2000,
            round: true,
        })

        anime({
            targets: totalRecovered,
            innerHTML: [0, countries[x].TotalRecovered],
            duration:2000,
            round: true,
        })

        anime({
            targets: newDeaths,
            innerHTML: [0, countries[x].NewDeaths],
            duration:3000,
            round: true,
        })

        anime({
            targets: newCases,
            innerHTML: [0, countries[x].NewConfirmed],
            duration:3000,
            round: true,
        })

        anime({
            targets: newRecovered,
            innerHTML: [0, countries[x].NewRecovered],
            duration:3000,
            round: true,
        })

    
    
    


}
    
    
     
    /*for(let x in countries){
        let spaces = document.getElementById("covid");
        let element  = document.createElement("option");
        element.textContent = countries[x].Country;
        element.value = x;
        spaces.add(element);
    }
    }


    searchInput.addEventListener('keyup', function(){
        data = adata.Countries;
        input = searchInput.value;
        
        
        
        suggestionsPanel.innerHTML = '';
        
        const suggestions = data.filter(function(country){
            return country.Country.toLowerCase().startsWith(input);

        })
        suggestions.forEach(function(suggested){
          
            
            const div = document.createElement("div");
            div.innerHTML = suggested.Country;
            div.addEventListener('click' ,() => Submit(data.indexOf(suggested)))
            suggestionsPanel.appendChild(div);
        })
        if(input === ''){
            suggestionsPanel.innerHTML = '';
        }

        
    })
    

   function Submit(x){
    
    
    
    let deaths = adata.Countries[x].TotalDeaths;
    let number = adata.Countries[x].TotalConfirmed;
    let y = document.getElementById("number");
    let z = document.getElementById("deaths");
    let o = document.getElementById("name");
    
    o.innerHTML = adata.Countries[x].Country;

    let start = {
    
    startnumber: 0,
    startdeath: 0,
    
    }
    
    y.innerText = number;
    z.innerText = deaths;
    
    anime({
        targets: start,
        startnumber: number,
        startdeath: deaths,
        easing: 'linear',
        duration: 1000,
        round:1,
        update: function() {
            y.innerHTML = JSON.stringify(start.startnumber);
            z.innerHTML = JSON.stringify(start.startdeath);
          }

   })
   

   }
  

  
   
    
        
   
getData();
*/


getData();
