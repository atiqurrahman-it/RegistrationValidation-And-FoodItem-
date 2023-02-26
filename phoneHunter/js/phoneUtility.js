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
