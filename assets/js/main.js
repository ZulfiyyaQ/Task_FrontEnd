// var row = document.getElementsByClassName("row")[0];

let searchİnput = document.querySelector('.header__search')

var row=document.querySelector(".row")
var button=document.querySelector(".see-more-btn")
var limit = 16;


const getMovies=()=>{

  fetch("https://api.tvmaze.com/shows")
  .then(response=>response.json())
  .then(datas=>{
    row.innerHTML=''
    for (let i = 0; i < limit; i++) {
      const data = datas[i];
      row.innerHTML+= `
               <div class="col-4 col-lg-3">
              <div class="card" >
               <a class="card__a" href="details.html?id=${data.id}">
               <img src="${data.image.medium}" class="card-img-top" alt="...">
                <div class="card-body">
               
               <h5 class="film__title"><strong>${data.name}</strong></h5>
               
                <h6 class="film__genres">${data.genres}</h6>
               <p class="film__average">${data.rating.average}</p>
                </a>
               </div>
        </div>
       </div>`
    }
    
  });
  
  
}
getMovies()

button.addEventListener("click", function() {
  limit += 10;
  getMovies() 
})
  



searchİnput.addEventListener("input", (e) => {
  e.preventDefault();

  fetch("https://api.tvmaze.com/shows")
  .then((response)=> response.json())
  .then((data)=>{
    let foundArr = data.filter((item)=>
    item.name
    .toLowerCase()
    .trim()
    .includes(searchİnput.value.trim().toLowerCase())
    );
    row.innerHTML= ""
    foundArr.forEach((item)=>{
      row.innerHTML += `
        <div class="col-4 col-lg-3">
         <div class="card" >
         <a class="card__a" href="details.html?id=${item.id}">
         <img src="${item.image.medium}" class="card-img-top" alt="...">
         <div class="card-body">
         
         <h5 class="film__title"><strong>${item.name}</strong></h5>
         
         <h6 class="film__genres">${item.genres}</h6>
         <p class="film__average">${item.rating.average}</p>
         </a>
         </div>
  </div>
</div>`;
    })

  })
})




// ferqli variantlarda kodlar =>>>>>>>


// function movieapp(data) {
//   data.forEach((datas) => {
//     row.innerHTML += `
//         <div class="col-4 col-lg-3">
//          <div class="card" >
//          <a class="card__a" href="details.html?id=${datas.id}">
//          <img src="${datas.image.medium}" class="card-img-top" alt="...">
//          <div class="card-body">
         
//          <h5 class="film__title"><strong>${datas.name}</strong></h5>
         
//          <h6 class="film__genres">${datas.genres}</h6>
//          <p class="film__average">${datas.rating.average}</p>
//          </a>
//          </div>
//   </div>
// </div>`;
//   });
// }

// fetch("https://api.tvmaze.com/shows")
//   .then((response) => response.json())
//   .then((data) => movieapp(data));




  // const searchValue = searchİnput.value.toLowerCase();
  // // console.log(searchValue);
  // allTitles = document.querySelectorAll(".card");
  // // console.log(allTitles);

  // allTitles.forEach((element, i) => {
  //   element
  //     .querySelector(".card_title")
  //     .textContent.toLowerCase()
  //     .includes(searchValue)
  //     ? (element.style.display = "")
  //     : (element.style.display = "none");
  // });
// });



