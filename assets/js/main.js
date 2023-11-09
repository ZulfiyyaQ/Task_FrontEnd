var row = document.getElementsByClassName("row")[0]

function movieapp(data) {
    data.forEach(datas => {
        row.innerHTML += `
        <div class="col-4 col-lg-3">
    <div class="card" ">
    <img src="${datas.image.medium}" class="card-img-top" alt="...">
    <div class="card-body">
    
      <h5 class="card-title">${datas.name}</h5>
      
      <a href="#" </a>
    </div>
  </div>
</div>`
    })
}

fetch("https://api.tvmaze.com/shows").then(response=>response.json()).then(data=>movieapp(data))


{/* <p class="card-text">${datas.rating.average}</p> */}