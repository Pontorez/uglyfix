"use strict";

$(function () {
    $('div.video-container').remove();
    $('video.video').remove();
});

window.onkeydown = function (e) {
    let date = new Date().toString();
    date = date.replace(' (GMT)', '');

    if (e.keyCode === 192) {

        // click "Fill the form" button:
        $('.open-form-btn.btn.btn-primary.btn-lg').trigger('click');

        $('[name="CompanyPosition"]').val('Старший помощник младшего дворника');
        $('[name="CompanyContactName"]').val('Сиддхартха');
        $('[name="CompanyContactSurname"]').val('Гаутама');
        $('[name="CompanyTel"]').val('+74991111111');
        $('[name="CompanyEmail"]').val('example@example.com');
        $('[name="CompanyWeb"]').val('https://pontorez.com/');

        $('[name="party"]').val('ООО «РК»');
        $('[name="CompanyName"]').val(date + ' — ООО «Рога и Копыта»');
        $('[name="CompanyAddress"]').val('ул. Юридическая, д. 13');
        $('[name="address"]').val('ул. Fuckтическая, д. 42');
        $('[name="CompanyINN"]').val('9106009088');
        $('[name="CompanyKPP"]').val('910601001');
        $('[name="CompanyOGRN"]').val('1159102023574');
        $('[name="CompanyTel2"]').val('74992222222');

        $('[name="bank"]').val('Открытие');
        $('[name="BankBIK"]').val('044525545');
        $('[name="BankCorrAcount"]').val('30101810300000000666');
        $('[name="BankAcount"]').val('30101810300000000777');

        // English version:
        $('[name="CompanyCity"]').val('Toronto');
        $('[name="CompanyCountry"]').val('Canada');
        $('[name="CompanyContact"]').val('Argonaut');

        $('[value="agree"]').trigger('click');

    }

};
