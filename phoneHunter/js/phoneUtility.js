// carate card
const createElementForCard=(phone)=>{
    const cardContainer=document.getElementById('cardContainer')
    const div=document.createElement('div')
    div.innerHTML=`
    <div class="col">
    <div class="card">
      <img src="${phone.image}" style="max-height:500px; max-width:200px;" class="img-fluid card-img-top mx-auto py-5" alt="..." />
      <div class="card-body">
        <h5 class="card-title d-inline">${phone.phone_name}  ||  </h5>
        <h5 class="card-title d-inline">Brand : ${phone.brand}</h5>
        <p class="card-text">
          This is a longer card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </p>
        <button onclick="phoneDetailsLoad('${phone.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetails">Details</button>
      </div>
    </div>
  </div>
    `
    // if string pass then '' use like '${}' else ${}
    cardContainer.appendChild(div)
}





// if phone item not found && item phone fond 
// if contain add or remove 
const itemIsFound=(isFound)=>{
    const errorContainer=document.getElementById('itemNotfound')
    if(isFound){
        errorContainer.classList.remove('d-none')
    }else{
        errorContainer.classList.add('d-none')
    }
}

// show btn add & remove
const ShowBtn=(isShowBtn)=>{
    const showBtnContainer=document.getElementById('showBtnContainer')
    if(isShowBtn){
        showBtnContainer.classList.remove('d-none')
    }else{
        showBtnContainer.classList.add('d-none')
    }

}

const dataIsLoaderSpinner=(isSpinnerLoader)=>{
    const loaderContainer=document.getElementById('loadingSpinner')
    if(isSpinnerLoader){
        loaderContainer.classList.remove('d-none')
    }else{
        loaderContainer.classList.add('d-none')
    }

}
