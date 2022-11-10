const loadCountries = () => {
    const url = `https://restcountries.com/v3.1/all`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountry(data))
}

const loadSingleCountries = (search) => {
    console.log(search);
    const url = `https://restcountries.com/v3.1/name/${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySingleCountry(data))
}

const searchCountry = () => {
    const searchField = document.getElementById('input-country');
    const countryName = searchField.value;
    loadSingleCountries(countryName);
    searchField.value = '';
}

const displaySingleCountry = (countries) => {
    console.log(countries);
    const showCountry = document.getElementById('show-country');
    countries.forEach(country => {
        const div = document.createElement('div');
    div.classList.add('card');
    showCountry.innerHTML = '';

    div.innerHTML = `
    <img class="card-img-top" src="${country.flags.png}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
    `;
    showCountry.appendChild(div);

    })
}

const displayCountry = (countries) => {
    // console.log(countries);
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `

    <img class="card-img-top" src="${country.flags.png}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>


        `;
        countriesContainer.appendChild(div);
    })
}
loadCountries();