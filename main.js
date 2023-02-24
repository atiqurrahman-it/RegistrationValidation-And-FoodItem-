const foodSearch=document.getElementById('foodSearchBtn')
const FoodInputElement=document.getElementById('FoodInputId')

foodName=FoodInputElement.value
FoodInputElement.value=''

const FoodShow=(name)=>{
    foodUrl=`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}
    `
    fetch(foodUrl)
    .then(res=>res.json())
    .then(data=>foodDisplay(data.meals))
    // if error 
    .catch(error=>console.log(error))
}

const foodDisplay=meals=>{
    const cardContainer=document.getElementById('card-container')
    meals.forEach(meal=>{
        console.log(meal)
        const div=document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`<div class="card mb-3" style="max-width: 540px">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${meal.strMealThumb}" class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">
                ${meal.strInstructions.slice(0,100)}...
              </p>
              <p class="card-text">
              </p>
                <a class="text-warning text-decoration-underline" href='https://www.figma.com/file/sMQOrSzcBjp9Q7dbUPndF4/mealdb?node-id=1%3A7&t=lu7q0S7OFAct9y4X-0'>View Details</a>
              </p>
            </div>
          </div>
        </div>
        </div>
        `
        cardContainer.appendChild(div)
    })
}

FoodShow('fish')

// window.addEventListener('load',FoodShow('fish'))
// foodSearch.addEventListener('click',FoodShow(foodName))