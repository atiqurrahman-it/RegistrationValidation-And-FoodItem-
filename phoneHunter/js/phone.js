

const phoneLoading=(searchText)=>{
    url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        displayData(data.data) 
    })
    .catch(error=>console.log(error))
}

// if phone item not found && item phone fond 
// if contain add or remove 
const itemIsFound=(isFound)=>{
    const itemContainer=document.getElementById('itemNotfound')
    if(isFound){
        itemContainer.classList.remove('d-none')
    }else{
        itemContainer.classList.add('d-none')
    }
}

//display data 
const displayData=(data)=>{
    // if phone item is empty
    if(data.length==0){
        itemIsFound(true)
    }else{
        itemIsFound(false)
    }
    // before item delete 
    // then new item add 
    removeElement('cardContainer')

    data.forEach(phone=>{
        console.log(phone)
        createElementForCard(phone)
    })
}

const removeElement=(elementId)=>{
    const removeElement=document.getElementById(elementId)
    removeElement.innerText=''

}
// carate card
const createElementForCard=(phone)=>{
    const cardContainer=document.getElementById('cardContainer')
    const div=document.createElement('div')
    div.innerHTML=`
    <div class="col">
    <div class="card">
      <img src="${phone.image}" style="max-height:500px; max-width:200px;" class="img-fluid card-img-top mx-auto" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${phone.phone_name}</h5>
        <p class="card-text">
          This is a longer card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </p>
      </div>
    </div>
  </div>
    `
    cardContainer.appendChild(div)
}

const searchBox=()=>{

}

//search phone
document.getElementById('searchBtn').addEventListener('click',function(){
    const searchText=document.getElementById('searchText').value
    phoneLoading(searchText)

})

phoneLoading('iphone')