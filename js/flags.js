const loadCountries = () => {
    const url = `https://restcountries.com/v3.1/all`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = (countries) => {
    const displayCountries = document.getElementById('display-countries');
    
    countries.map(country => {
        console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('col');
        countryDiv.innerHTML = `
        <div class="card h-50 w-50">
        <img src="${country.flags.png}" class="card-img-top w-100%" alt="...">
        <div class="card-body">
          <h5 class="card-title">Country Name: ${country.name.common}</h5>
          <p class="card-text">Capital: ${country.name.capital}</p>
        </div>
        </div>   
        `;
        displayCountries.appendChild(countryDiv);
    })
}

loadCountries();