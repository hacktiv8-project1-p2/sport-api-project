function getNews() {
  $.ajax({
    method: "GET",
    url: "https://nba-app-stanly.herokuapp.com/news",
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
            <h6 class="card-title">${element.title}</h6>
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