

const covidApi = "https://api.covid19api.com/summary";

let adata;
const searchInput = document.querySelector('.search-input')
const suggestionsPanel  = document.querySelector(".suggestions")


let submitButton = document.getElementById("submit");
submitButton.addEventListener('click', (zaz) => {
    zaz = document.getElementById("covid").value;
    Submit(zaz);
})


async function getData(){
    
    const result = await fetch(covidApi);
    adata = await result.json();
    let countries = adata.Countries;

    document.getElementById("all").innerText = adata.Global.TotalConfirmed;

    
    
     
    for(let x in countries){
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

