

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
        createElementForCard(phone)
    })
    //stop loader
    dataIsLoaderSpinner(false)

}


//
const removeElement=(elementId)=>{
    const removeElement=document.getElementById(elementId)
    removeElement.innerText=''
}


const processData=(dataLimit)=>{
    dataIsLoaderSpinner(true)
    const searchText=document.getElementById('searchText').value
    phoneLoading(searchText,dataLimit)

}
//search phone when search btn click 
document.getElementById('searchBtn').addEventListener('click',function(){
    // loader start 
    processData(6)

})

// search phone when enter keypress
document.getElementById("searchText").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
       processData(6)
    }
})

//  not the best way to load show all  
document.getElementById('showBtn').addEventListener('click',function(){
    processData()
    
})

// phoneDetails
const phoneDetailsLoad=(id)=>{
    const url=`https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        phoneDetailsShow(data.data)
    })
    .catch(error=>{console.log(error)})
}

const phoneDetailsShow=(data)=>{
    const phoneNameElement=document.getElementById('phoneName')
    phoneNameElement.innerText=data.name

    const phoneDetailsContainer=document.getElementById('phoneDetailsContainer')
    phoneDetailsContainer.innerHTML=`
    <img src="${data.image}" style="max-height:400px; max-width:200px; margin-left:100px;" class="img-fluid" alt="..." />
    <p class="mt-4">${data.releaseDate} </p>
    <p> Memory : ${data.mainFeatures.memory} </p>
    <p> storage : ${data.mainFeatures.storage} </p>
    <p> displaySize : ${data.mainFeatures.displaySize} </p>
    <p> chipSet : ${data.mainFeatures.chipSet} </p>
    <p> sensors </p>
     <ol >
     ${data.mainFeatures.sensors.map(sensor=>`
       <li> ${sensor}</li>
     `).join('')}
    
     </ol>
    `
}

// element.innerHTML = `

//   <h1>This element has items</h1>
//   ${this._items.map((item, i) => 
//     `
//     <div>
//       I am item number ${i < 10 ? '0' + (i + 1) : i + 1}. 
//       My name is ${item.name}.
//     </div>
//   `
//   .trim()).join('')}

// `



phoneLoading('iphone',6)