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
          <a href="https://www.imdb.com/title/${response.data.externals.imdb}/" class="btn btn-danger">IMDB</a>
          
            <p>Language: ${response.data.language}</p>
           
          </div>
        </div>

        <div class="right-part">
        <h2><strong>${response.data.name}</strong></h2>
          <p>${response.data.summary}</p>
          <h5 class="movieGenres">Genres: ${response.data.genres.join(',')}</h5>
          <p>Start: ${response.data.premiered}</p>
          <p>End: ${response.data.ended}</p>
          <a href="./index.html" class="btn go-back-btn btn-danger">Go back</a>
        </div>
        
      </div>
    </div>
  `;

    
})