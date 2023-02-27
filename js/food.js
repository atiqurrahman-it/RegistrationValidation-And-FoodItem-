const foodSearch=document.getElementById('foodSearchBtn')
const showBtn=document.getElementById('showBtn')

const LoadFood=(searchText='fish')=>{
    foodUrl=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}
    `
    fetch(foodUrl)
    .then(res=>res.json())
    .then(data=>{
      const FootNotfoundElement=document.getElementById('FootNotfoundId')
      // if food is available
      if(data.meals!=null ){
        RemoveElement('FootNotfoundId')
        foodDisplay(data.meals)
      }else{
        // if Food not found error already  here  than is error message remove 
        RemoveElement('FootNotfoundId')

        // create error message 
        const div=document.createElement('div')
        div.innerHTML=`
        <h3 class="display-1 fw-bold mt-3">404</h3>
        <p class="fs-3"> <span class="text-danger">Opps!</span> Food  not Found.</p>
        `
        FootNotfoundElement.appendChild(div)

        // remove ShowButton & Food item Card 
        RemoveElement('showBtn')
        RemoveElement('card-container')
      
      }
     

    })
    
    // if error 
    .catch(error=>{
      console.log(error)
    })
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
}


// when page load than call 
LoadFood()

// window.addEventListener('load',FoodShow('fish'))

// search when enter button 
document.getElementById('FoodInputId').addEventListener('keypress',function(event){
  const FoodInputElement=document.getElementById('FoodInputId')
  foodName=FoodInputElement.value

  if (event.key === "Enter") {
    LoadFood(foodName)
 }
 

})
// searchBtn click than function call
foodSearch.addEventListener('click',SearchMeals)