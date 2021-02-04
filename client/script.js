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
    })
    .fail((xhr, text) => {
      console.log(xhr, text);
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
      auth();
    })
    .fail((xhr, text) => {
      console.log(xhr, text);
    })
    .always(() => {
      $("#login-form").trigger('reset');
    })
}

function auth() {
  if (!localStorage.getItem('access_token')) {
    $("#register").show();
    $("#login").show();
    $("#logout").hide();
  } else {
    $("#login").hide();
    $("#register").hide();
    $("#logout").show();
  }
}

function logout() {
  localStorage.clear();
  auth();
}

$(document).ready(() => {
  auth();
  $("#login-form").on("submit", (e) => {
    e.preventDefault();
    login();
  })

  $("#register-form").on("submit", (e) => {
    e.preventDefault();
    register();
  })

  $("#logout").on("click", (e) => {
    e.preventDefault();
    logout();
  })
})