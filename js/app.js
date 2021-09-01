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
    console.log(drinks);
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
                <button class="btn btn-info">Details ${drink.strDrink}</button>
            </div>
        `;
        displayCocktail.appendChild(div);
    }
}
