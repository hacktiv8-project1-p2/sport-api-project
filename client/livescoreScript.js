function getLiveScores() {
  $.ajax({
    method: "GET",
    url: "http://localhost:3000/livescore",
    headers: {
      access_token: localStorage.getItem("access_token")
    }
  })
    .done(data => {
      $("#table-scores").empty()
      data.map(e => {
        $("#table-scores").append(`
          <tr>
            <td>${e.homeTeamName}</td>
            <td>${e.homeScore} - ${e.awayScore}</td>
            <td>${e.awayTeamName}</td>
          </tr>
        `)
      })
    })
    .fail((xhr, textStatus) => {
      console.log(xhr, textStatus)
    })
}