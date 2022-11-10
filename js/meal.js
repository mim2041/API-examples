const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data))
}

const loadSearchedMeals = () => {
    const inputField = document.getElementById('search-food');
    const searchedFood = inputField.value;
    console.log(searchedFood);
    loadMeals(searchedFood);
    inputField.value = '';
}

const displayMeals = meals => {
    const mealsContainer = document.getElementById('meals-container');

    meals.forEach(meal => {
        const div = document.createElement('div');
        console.log(meal);
        mealsContainer.innerHTML = '';
        div.classList.add('card');
        div.innerHTML = `
        <img class="card-img-top" src="${meal.strMealThumb}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
        </div>
        `;
        mealsContainer.appendChild(div);
    })
}

loadMeals('');