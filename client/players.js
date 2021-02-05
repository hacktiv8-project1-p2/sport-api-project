

function getPlayers() {
  $('#submit-search').show()
  $('#back-button').hide()
  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/player',
    headers: {
      access_token: localStorage.getItem('access_token')
    }
  })
  .done((dataPlayers) => {
    const players = dataPlayers.data
    players.forEach(element => {
      if(element.position.length === 0) element.position = '-'
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
  $('#submit-search').hide()
  $('#back-button').show()
  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/player',
    headers: {
      access_token: localStorage.getItem('access_token')
    },
    data: { keyword }
  })
  .done((data) => {
    const player = data.data[0]
    $('#players-table').empty()
    $('#players-table').append(`
      <tr>
        <td>${player.first_name} ${player.last_name}</td>
        <td>${player.position}</td>
        <td>${player.team.full_name}</td>
      </tr>
    `)
  })
  .fail((xhr, status) => {
    console.log(xhr, status)
  })
}