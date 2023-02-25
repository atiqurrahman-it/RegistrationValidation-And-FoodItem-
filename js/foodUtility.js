
function RemoveElement(elementId){
  const removeElement=document.getElementById(elementId)
  removeElement.innerText=''
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
      showBtn.innerHTML=''
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
      showBtn.innerHTML=''
    }

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


