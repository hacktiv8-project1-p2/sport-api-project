function getNews() {
  $.ajax({
    method: "GET",
    url: "http://localhost:3000/news",
    headers: {
      access_token: localStorage.getItem('access_token')
    }
  })
    .done(data => {
      data.map(element => {
        $('#news-content').append(`
        <div class="card">
          <img class="card-img-top img-fluid" src="${element.imageUrl}" alt="">
          <div class="card-body card-news-content">
            <h4 class="card-title">${element.title}</h4>
            <p class="card-text card-text-news">${element.abstract}</p>
            <a class="card-text btn btn-block btn-primary card-text-news" href="${element.url}" target="_blank">Read More</a>
          </div>
        </div>
      `)
      })
    })
    .fail((xhr, status) => {
      console.log(xhr, status);
    })
}