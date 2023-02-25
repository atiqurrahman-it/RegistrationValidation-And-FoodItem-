const foodSearch=document.getElementById('foodSearchBtn')
let moreThan6=0

const LoadFood=(searchText='fish')=>{
    foodUrl=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}
    `
    fetch(foodUrl)
    .then(res=>res.json())
    .then(data=>{
      foodDisplay(data.meals)
    })
    
    // if error 
    .catch(error=>console.log(error))
}

function setElement(meal){
  const cardContainer=document.getElementById('card-container')
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
        <a onclick="FoodDetails(${meal.idMeal})" class="text-warning text-decoration-underline " data-bs-toggle="modal" data-bs-target="#FoodDatails">View Details</a>
      </div>
    </div>
  </div>
  </div>
  `
  cardContainer.appendChild(div)

}

const foodDisplay=meals=>{
    const cardContainer=document.getElementById('card-container')
    // reset Food item when Search btn click than new item show 
    // remove item and new item show 
    cardContainer.innerText=''
  
    const countItem=meals.length
    // card  item add 

    const show=document.getElementById('showBtn')
     show.addEventListener('click',function(){
      meals.forEach(meal=>{
      setElement(meal)
      })
      showBtn.innerHTML=''
     })


    meals.splice(0,6).forEach(meal=>{
        setElement(meal)

    })

   
   // show all btn show when product item e greater than 6 
   const showBtn=document.getElementById('showBtn')
    if(countItem >=6){
      // <button class="btn btn-warning py-1 px-3">show All</button>
      let div=document.createElement('div')
      
      div.innerHTML=`
      <button id="showBtn" class="btn btn-warning py-1 px-3">show All</button>
      `
      // classList.add('btn','btn-warning','py-1','px-3')
      // btn.innerText='Show All'
      // btn.setAttribute('onclick','showAllFood(${meals})')

      showBtn.appendChild(div)
    }
    else{
      console.log(showBtn)
      showBtn.innerHTML=''
    }

  
}





const FoodDetails=(itemId)=>{
  url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${itemId}`

  // fetch user korte partam but asyn & wait user kore krechi 
  fetch(url)
  .then(res=>res.json())
  // single Food data
  .then(data=>singleFoodDetails(data.meals[0]))
  // if error 
  .catch(error=>console.log(error))
 
}

const singleFoodDetails=data=>{
  console.log(data)
  const FoodTitle=document.getElementById('exampleModalLabel')
  FoodTitle.innerText=data.strMeal
  const modalBody=document.getElementById('modal-body')
  const div=document.createElement('div')
  modalBody.innerText=''
  div.innerHTML=`
  <img src="${data.strMealThumb}" class="img-fluid rounded-start w-100" style="max-height:250px;" alt="..." />
  
  <h4 class="my-2">Category : ${data.strCategory} </h4>
  <h4 class="mb-2">Area : ${data.strArea} </h4>
  <p class="text-muted"> ${data.strInstructions}</p>
  <a href='${data.strYoutube}' target="_blank" >YouTube : ${data.strYoutube}</a>
  `
  modalBody.appendChild(div)
  
  console.log(FoodTitle)
  console.log("single Food")
}


const SearchMeals=()=>{
  const FoodInputElement=document.getElementById('FoodInputId')
  foodName=FoodInputElement.value
  FoodInputElement.value=''

  const error=document.getElementById('errorMessage')
  if(foodName.length==0){
    error.innerText='Please Enter Your Food Name'
    error.classList.add('bg-warning')
  }else{
    error.innerText=''
    error.classList.remove('bg-warning')
    // load function call 
    LoadFood(foodName)
  }
 
}


// when page load than call 
LoadFood()

// window.addEventListener('load',FoodShow('fish'))
// searchBtn click than function call
foodSearch.addEventListener('click',SearchMeals)