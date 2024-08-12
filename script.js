let quotes = document.querySelector('.quote');
let authors = document.querySelector(".author");
let newQuote = document.querySelector("#btn-newquote");
let tweetBtn = document.querySelector("#btn-tweet");
const api_URL = 'https://api.quotable.io/random';
 async function getQuote(url){
     try {
         const response = await fetch(url);
     var data = await response.json();
     quotes.innerHTML = `${data.content}`;
     authors.innerHTML = "..."+`${data.author}`;
     }
      catch (error) {
        console.error('Error fetching quote:', error);
    }
 }

 getQuote(api_URL);
   newQuote.addEventListener("click", () =>{
       getQuote(api_URL);
   });
   tweetBtn.addEventListener("click", () => {
    window.open("https://twitter.com/intent/tweet?text=", "tweet window", "height=300,width=600");
});

