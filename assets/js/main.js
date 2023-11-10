var row = document.getElementsByClassName("row")[0]

function movieapp(data) {
    data.forEach(datas => {
        row.innerHTML += `
        <div class="col-4 col-lg-3">
    <div class="card" ">
    <img src="${datas.image.medium}" class="card-img-top" alt="...">
    <div class="card-body">
    
      <h5 class="card-title">${datas.name}</h5>
     
      <h6 >${datas.genres}</h6>
      <p class="film__average">${datas.rating.average}</p>
      <a href="#" </a>
    </div>
  </div>
</div>`
    })
}

fetch("https://api.tvmaze.com/shows").then(response=>response.json()).then(data=>movieapp(data))


searchİnput.addEventListener("input",(e)=>{
  e.preventDefault()

  const searchValue=searchİnput.value.toLowerCase()
  // console.log(searchValue);
  allTitles= document.querySelectorAll(".card")
  // console.log(allTitles);

  allTitles.forEach((element ,i) => {
    element.querySelector('.card_title').textContent.toLowerCase().includes(searchValue)
    ? element.style.display = ""
    : element.style.display = "none";
  });
})