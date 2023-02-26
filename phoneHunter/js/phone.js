

const phoneLoading=(searchText,dataLimit)=>{
    url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        displayData(data.data,dataLimit) 
    })
    .catch(error=>console.log(error))
}

//display data 
const displayData=(phones,dataLimit)=>{
    if(dataLimit && phones.length>=6){
        phones=phones.splice(0,6)
        ShowBtn(true)
    }else{
        ShowBtn(false)
    }
    // if phone item is empty
    if(phones.length===0){
        itemIsFound(true)
        ShowBtn(false)
    }else{
        itemIsFound(false)
        
    }
    // before item delete 
    // then new item add 
    removeElement('cardContainer')
   
    phones.forEach(phone=>{
        console.log(phone)
        createElementForCard(phone)
    })
    //stop loader
    dataIsLoaderSpinner(false)

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
        <button onclick="phoneDetails()" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetails">Details</button>
      </div>
    </div>
  </div>
    `
    cardContainer.appendChild(div)
}



const processData=(dataLimit)=>{
    dataIsLoaderSpinner(true)
    const searchText=document.getElementById('searchText').value
    phoneLoading(searchText,dataLimit)

}
//search phone
document.getElementById('searchBtn').addEventListener('click',function(){
    // loader start 
    processData(6)

})

//  not the best way to load show all  
document.getElementById('showBtn').addEventListener('click',function(){
    processData()
    console.log("sow btn click")

})

// phoneDetails
const phoneDetails=()=>{
    console.log('Phone details ')
}



phoneLoading('iphone')