

function getPlayers() {
  $('#players-table').empty()
  $('#submit-search').show()
  $('#back-button').hide()
  $.ajax({
    method: 'GET',
    url: 'https://nba-app-stanly.herokuapp.com/player',
    headers: {
      access_token: localStorage.getItem('access_token')
    }
  })
    .done((dataPlayers) => {
      const players = dataPlayers.data
      players.forEach(element => {
        if (element.position.length === 0) element.position = '-'
        $('#players-table').append(`
        <tr>
          <td>${element.first_name} ${element.last_name}</td>
          <td>${element.position}</td>
          <td>${element.team.full_name}</td>
        </tr>
      `)
      })
    })
    .fail((xhr, status) => {
      console.log(xhr, status)
    })
}


function getSpesific(keyword) {
  $('#back-button').show()
  $.ajax({
    method: 'GET',
    url: 'https://nba-app-stanly.herokuapp.com/player',
    headers: {
      access_token: localStorage.getItem('access_token')
    },
    data: { keyword }
  })
    .done((data) => {
      const player = data.data
      $('#players-table').empty()
      player.forEach(element => {
        if (element.position.length === 0) element.position = '-'
        $('#players-table').append(`
        <tr>
          <td>${element.first_name} ${element.last_name}</td>
          <td>${element.position}</td>
          <td>${element.team.full_name}</td>
        </tr>
      `)
      })
    })
    .fail((xhr, status) => {
      console.log(xhr, status)
    })
    .always(_ => {
      $('#player-keyword').val('')
    })
}