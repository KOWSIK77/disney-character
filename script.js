var container = document.createElement("div");
container.setAttribute("class", "container");
var h1 = document.createElement("h1");
h1.innerHTML="Disney Character Detail"
h1.style="text-align:center; margin-top:1rem; font-size:3rem;"
var row = document.createElement("div");
row.style="text-align:center;"
row.classList.add("row", "m-1");
container.append(h1,row);

var res = fetch("https://api.disneyapi.dev/characters");
res.then((data) => data.json()).then((value) => foo(value.data));

function foo(value) {
  console.log(value)

  for (let i=0;i<value.length;i++) {
    row.innerHTML += `
        <div class="col-md-3 ">
        <div class="card " style="height:30rem; width: 18rem; margin:10px; padding:20px; box-shadow:1px 1px 10px; text-align:center;">
        <img src="${value[i].imageUrl}" class="card-img-top" style="width:12rem; height:16rem; " alt="...">
        <div class="card-body">
          <p class="card-text">Name: ${value[i].name}</p>
          <p class="card-text">Shows: ${value[i].tvShows[0]}</p>
          <p class="card-text">Films: ${value[i].films[0]}</p>
        </div>
      </div>
      </div>`;
    document.body.append(container);
  }
}
