// Calling Searched Text
document.getElementById('spinner-display').style.display = 'none';
const displaySearchedItem = () => {

    const inputFeild = document.getElementById('search-feild');
    const inputValue = inputFeild.value;
    // console.log(inputValue);
    inputFeild.value = '';

    if (inputValue == '') {
        document.getElementById('empty-feild').style.display = 'block';

    }
    else {
        document.getElementById('empty-feild').style.display = 'none'
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals));
        document.getElementById('spinner-display').style.display = 'block';

    }
}


const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    document.getElementById('spinner-display').style.display = 'none';
    if (meals.length == 0) {
        console.log(meals);
        document.getElementById('no-food').style.display = 'block';
    }
    else {
        document.getElementById('no-food').style.display = 'none';
        for (const meal of meals) {
            console.log(meal);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
                 <div class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                 </div>
            </div>`
            searchResult.appendChild(div);
        }
    }


}