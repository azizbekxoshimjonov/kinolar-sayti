let partMovies = movies.slice(0,100)
let elMovList = document.querySelector('.movises__list')
let elSelCat = document.querySelector('.sel__category')
fnRender(partMovies);
function fnRender(data) {
  elMovList.innerHTML = "";
  data.forEach((item) => {
    let newLi = document.createElement('li')
    newLi.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="https://i.ytimg.com/vi/${item.ytid}/hq720.jpg" class="card-img-top" alt="...">
        <div class="card-body">
        <p class="card-title">${item.movie_year}<p>
          <h5 class="card-title">${item.Title.toString().slice(0,25)}</h5>
          <p class="card-text">${item.Categories.toString().slice(0,30)}</p>
          <h4 class="card-text">${item.imdb_rating}</h4>
          <a href="https://www.youtube.com/watch?v=${item.ytid}" target=""_blank class="btn btn-warning">watch movies</a>
        </div>
      </div>
`
elMovList.appendChild(newLi)
})
}

 function fnYear (value){
  if (value == "new") {
    fnRender(partMovies.sort((f, d) => d.movie_year - f.movie_year));
  } else if (value == "old") {
    fnRender(partMovies.sort((f, d) => f.movie_year - d.movie_year));
  }
}
function fnRating (value){
  if (value == "min"){
    fnRender(partMovies.sort((c,d)=>d.imdb_rating - c.imdb_rating));
  }else if (value == "max"){
    fnRender(partMovies.sort((c,d)=>c.imdb_rating - d.imdb_rating));
  }
}
let arrCategory = [];
partMovies.forEach((item) => {
  if (!arrCategory.includes(item.Categories)) {
    arrCategory.push(item.Categories);
  }
});

arrCategory.forEach((item) => {
  let newOption = document.createElement("option");
  newOption.textContent = item;
  elSelCat.appendChild(newOption);
});

function fnCategory(value) {
  fnRender(partMovies.filter((item) => item.Categories == value));
}

function fnSearch(event) {
  event.preventDefault();
  let val = event.target.search.value;
  fnRender(
    partMovies.filter((item) =>
      item.Title.toString().toLowerCase().includes(val.toLowerCase())
    )
  );
}


















