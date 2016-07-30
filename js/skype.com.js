"use strict";

$(function () {
    $('#username').val(localStorage.getItem('username'));
    $('#password').val(localStorage.getItem('password'));
    setTimeout(function () {
        $('#loginForm').submit();
    }, 5000);
});

localStorage.setItem('username', 'xxx');
localStorage.setItem('password', 'yyy');
