"use strict";

$(function () {
    $('#regreg').val(localStorage.getItem('regReg'));
    $('#regnum').val(localStorage.getItem('regNum'));
    $('#stsnum').val(localStorage.getItem('stsNum'));
});

$('#tsdataform').submit(function () {
    localStorage.setItem('regReg', $('#regreg').val());
    localStorage.setItem('regNum', $('#regnum').val());
    localStorage.setItem('stsNum', $('#stsnum').val());
});
