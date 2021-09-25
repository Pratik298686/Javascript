console.log('This is index.js');
//4e3269ab0dbf430db969c2ca4f0c6a14
//initialize the news parameter
source = 'bbc-news';
let apikey = '4e3269ab0dbf430db969c2ca4f0c6a14'
//Grab the news container
let newsAccordion = document.getElementById('newsAccordion');
//Create a get Request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apikey=${apikey}`, true);
//what to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    //for items in articles
    let newsHTML = "";
    for (let news in articles) {
      console.log(articles[news]);
      let news = `<div class="card" id="accordionFlushExample">
<div class="accordion-item">
  <h2 class="accordion-header" id="flush-headingOne">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      ${articles[title]}
    </button>
  </h2>
  <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
    <div class="accordion-body"
    ${articles[news]}
    </div>
  </div>
</div>

</div>`;
newsHTML += news;
    }
    newsAccordion.innerHTML = newsHTML;
  } else {
    console.log("Some error ocurred");
  }
}
xhr.send();

