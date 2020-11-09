
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
            duration:1500,
            round: true,
        })

        anime({
            targets: totalCases,
            innerHTML: [0, countries[x].TotalConfirmed],
            duration:1500,
            round: true,
        })

        anime({
            targets: totalRecovered,
            innerHTML: [0, countries[x].TotalRecovered],
            duration:1500,
            round: true,
        })

        anime({
            targets: newDeaths,
            innerHTML: [0, countries[x].NewDeaths],
            duration:2500,
            round: true,
        })

        anime({
            targets: newCases,
            innerHTML: [0, countries[x].NewConfirmed],
            duration:2500,
            round: true,
        })

        anime({
            targets: newRecovered,
            innerHTML: [0, countries[x].NewRecovered],
            duration:2500,
            round: true,
        })

    
    
    


}
    
    
     


console.log(localStorage)
getData();
