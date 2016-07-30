"use strict";

$(function () {
    $('#username').val(localStorage.getItem('username'));
    $('#password').val(localStorage.getItem('password'));
    setTimeout(function () {
        $('#loginForm').submit();
    }, 5000);
});

localStorage.setItem('username', 'pontorez.com');
localStorage.setItem('password', 'catzzz777');
