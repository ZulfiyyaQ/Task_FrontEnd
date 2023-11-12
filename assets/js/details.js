var div=document.getElementById("div1")

let id=window.location.search.slice(4)
let movieDetail = document.querySelector(".movie-detail")

axios.get(`https://api.tvmaze.com/shows/${id}`).then(response=>{
    movieDetail.innerHTML=`
    <div class="col-8 mt-5">
      <div class="cards d-flex">
        <div class="left-part"> 
          <div class="image-wrapper">
            <img src="${response.data.image.medium}" alt="${response.data.name}">
          </div>

          <div class="features">
            <h4><strong>${response.data.name}</strong></h4>
            <p>Language: ${response.data.language}</p>
            <p>Rating: ${response.data.rating.average}</p>
          </div>
        </div>

        <div class="right-part">
          <p>${response.data.summary}</p>
          <p>Start: ${response.data.premiered}</p>
          <p>End: ${response.data.ended}</p>
          <p class="movieGenres">Genres: ${response.data.genres.join(',')}</p>
        </div>
      </div>
    </div>
  `;

    
})