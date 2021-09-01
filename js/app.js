function loadCocktailsName() {
    const getInput = document.getElementById('get-cocktail-input');
    const getInputValues = getInput.value;
    //clear test
    getInput.innerText = '';
    if (getInput.length == 0) {
        getInput.innerText = '';
    }
    else {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${getInputValues}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayCockTails(data.drinks))
    }


}

const displayCockTails = drinks => {
    // console.log(drinks);
    const displayCocktail = document.getElementById('display-cocktail');
    displayCocktail.textContent = '';
    for (const drink of drinks) {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
                <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${drink.strDrink}</h5>
                    <p class="card-text">Ingradients: ${drink.strIngredient1}, ${drink.strIngredient2}, ${drink.strIngredient3},${drink.strIngredient4}, ${drink.strIngredient5}</p>
                </div>
                <button onclick= "loadCocktailDetails(${drink.idDrink})" class="btn btn-info">More About ${drink.strDrink}</button>
            </div>
        `;
        displayCocktail.appendChild(div);
    }
}

const loadCocktailDetails = idDrink => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
    //console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayCocktailDetails(data.drinks[0]));
}

const displayCocktailDetails = drinks => {
    const cocktailDetails = document.getElementById('get-cocktail-details');
    cocktailDetails.textContent = '';
    const detailsDIV = document.createElement('detailsDIV');
    detailsDIV.classList.add('row', 'gy-5',)
    detailsDIV.innerHTML = `
        <div class="col-6">
             <div class="p-2 bg-light img-fluid rounded mx-auto">
                <img width = "600px" src="${drinks.strDrinkThumb}">
             </div>   
        </div>
        <div class="col-6">
            <div class="p-3 border bg-white">
                <h5>Ingredients</h5>
                <div><img width = "200px" src="${drinks.strDrinkThumb}"></br> ${drinks.strCategory} </div
                <div></div
                <div></div
            </div>
        </div>
        <div class="col-12 border">
            <div class="p-3  bg-white text-center mx-auto"> Instructions: </br> ${drinks.strInstructions}</div>
            <div class="p-3  bg-white text-center mx-auto"> Glass: </br> ${drinks.strGlass}</div>
        </div>
    `;
    cocktailDetails.appendChild(detailsDIV);
}