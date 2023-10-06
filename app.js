const button=document.getElementById('bt1');
const Joke=document.getElementById('joke');

button.addEventListener("click",fetchJoke);
button.onclick
 function fetchJoke(){
  console.log("clicked")
  fetch("https://icanhazdadjoke.com/",
  {
    headers:{
      Accept:"application/json"
    }
  })
  .then(resp=>resp.json())
  .then((data)=>{
    Joke.innerHTML=data.joke
  })
  .catch(error=>{
    console.error("Error Fetching Joke")
  });
}

document.addEventListener("DOMContentLoaded",fetchJoke);