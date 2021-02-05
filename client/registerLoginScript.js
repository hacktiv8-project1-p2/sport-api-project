const base_url = 'http://localhost:3000/';

function register() {
  const full_name = $("#registerFullName").val();
  const email = $("#registerEmail").val();
  const password = $("#registerPassword").val();

  $.ajax({
    url: base_url + 'user/register',
    method: "POST",
    data: {
      full_name,
      email,
      password
    }
  })
    .done(response => {
      auth();
      afterRegister();
      $('#error-message-register').text('');
      $('#error-message').text('');
    })
    .fail((xhr, text) => {
      console.log(xhr, text);
      $('#error-message-register').text(xhr.responseJSON.error);
    })
    .always(() => {
      $("#register-form").trigger('reset');
    })
}

function login() {
  const email = $("#loginEmail").val();
  const password = $("#loginPassword").val();

  $.ajax({
    url: base_url + 'user/login',
    method: "POST",
    data: {
      email,
      password
    }
  })
    .done(response => {
      localStorage.setItem('access_token', response.access_token);
      $('#error-message').text('');
      $('#error-message-register').text('');
      auth();
    })
    .fail((xhr, text) => {
      console.log(xhr.responseJSON, text);
      $('#error-message').text(xhr.responseJSON.error);
    })
    .always(() => {
      $("#login-form").trigger('reset');
    })
}

function afterRegister() {
  $('#register').hide();
  $('#login').show();
}

function auth() {
  if (!localStorage.getItem('access_token')) {
    $("#register").show();
    $("#login").hide();
    $("#logout").hide();
    $('#loginNav').show();
    $('#registerNav').show();
    $("#livescore-container").hide();
    $("#news-container").hide();
    $("#players-container").hide();
    $('#register-login-content').show();
  } else {
    $('#register-login-content').hide();
    $("#login").hide();
    $("#register").hide();
    $('#loginNav').hide();
    $('#registerNav').hide();
    $("#logout").show();
    $("#livescore-container").show();
    $("#news-container").show();
    $("#players-container").show();
    $('#error-message').text('');
    $('#error-message-register').text('');
  }
}

function logout() {
  localStorage.clear();
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
  auth();
}