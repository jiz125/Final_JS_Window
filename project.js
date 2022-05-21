let returnData;
let button;
let input;
let url;
let result;
let one = document.querySelector("#image1");
let two = document.querySelector("#image2");
let three = document.querySelector("#image3");
let four = document.querySelector("#image4");
button = document.getElementById('searchBar');
let arrResults = [];

button.addEventListener('click', function () {
//   input = document.getElementById('typingBar').value;
//   console.log(input);
  searchData();
})

function searchData() {
    url = `https://api.unsplash.com/search/photos?page=1&query=window&client_id=8dkORdw6VplzVIPOG7J1nNjfUeRvg7sZgkvNp1qGuKs`;
    console.log(url)
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(jsonData => {
          console.log(typeof(jsonData));
          for(i=0;i < 4;i++){ //randomly fetch window images and display on the screen 
             results = jsonData.results[i].urls.raw;
            console.log(results);
            arrResults.push(results); 
          }
        one.src = arrResults[0];
        two.src = arrResults[1];
        three.src = arrResults[2];
        four.src = arrResults[3];
      })
      .catch(err => {
        console.log("there was an error");
        document.getElementById("resultsList").innerHTML = "This is not a city, Try again!";
      });
  }


    
  

image1.addEventListener("mouseenter", function(event){
    event.target.style.opacity = 0;
    text1.style.opacity = 100; 
  })
  image1.addEventListener("mouseleave", function(event){
    event.target.style.opacity = 100;
    text1.style.opacity = 0; 
  })



image2.addEventListener("mouseenter", function(event){
    event.target.style.opacity = 0;
    text2.style.opacity = 100; 
  })
  image2.addEventListener("mouseleave", function(event){
    event.target.style.opacity = 100;
    text2.style.opacity = 0; 
  })

  image3.addEventListener("mouseenter", function(event){
    event.target.style.opacity = 0;
    text3.style.opacity = 100;
  })
  image3.addEventListener("mouseleave", function(event){
    event.target.style.opacity = 100;
    text3.style.opacity = 0; 
  })


  image4.addEventListener("mouseenter", function(event){
    event.target.style.opacity = 0;
    text4.style.opacity = 100;
  })

  image4.addEventListener("mouseleave", function(event){
    event.target.style.opacity = 100;
    text4.style.opacity = 0;
})
