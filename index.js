var isEmpty = document.getElementById('box2').innerHTML === "";
if (isEmpty) {
    document.getElementById('box2').display = "";
}

let button = document.getElementById("btn");

// const api_url =
//     "https://api.tvmaze.com/search/shows?q=girls";
const api_url="https://api.tvmaze.com/shows/1/episodes";

async function getapi(url) {
const response = await fetch(url);
      var data = await response.json();
    console.log(data);
    for (var i = 0; i < 3; i++) {
        let j = Math.floor(Math.random() * 30);
       // let s = data[j]["show"].image.medium;
       let s = data[j].image.medium;
        console.log(s);
        let b = document.getElementById("box2");
        var img = document.createElement('img');
        img.src = s;
        b.appendChild(img);
    }

}

button.onclick = function () {
    getapi(api_url);

}
function change(color) {
    document.body.style.backgroundColor = color;
}