"use strict";

$(function () {
    let contentBlock = $('ul.listinf');
    contentBlock.find(
        'a[href*="/mall/mesto_v_muzhskoy_komnate__7077352_5d5ab7e27ed26/"],' +
        'a[href*="/%D1%81%D0%B4%D0%B0%D0%B5%D1%82%D1%81%D1%8F_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0-o2400089-ru/"],' +
        'a[href*="/sdam_nebolshuyu_komnatu_7511006/"],' +
        'a[href*="/%D1%81%D0%B4%D0%B0%D0%B5%D1%82%D1%81%D1%8F_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0-o3640322-ru/"],' +
        'a[href*="/mall/sdayu_bolshuyu_komnatu_7515584/"],' +
        'a[href*="/rabota_zhile_i_drugie_uslugi_dlya_immigrantov_7510341/"]'
    ).closest('li').addClass('x-sdano');

    contentBlock.find(
        'a[href*="/mall/%D0%BC%D0%B5%D1%81%D1%82%D0%BE_%D0%B2_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B5_%D0%BF%D0%BE%D1%81%D1%83%D1%82%D0%BE%D1%87%D0%BD%D0%BE_40-o3640089-ru/"],' +
        'a[href*="/mall/komnata_v_rent_7090344/"],' +
        'a[href*="/mall/sdaetsya_komnata_7514671/"],' +
        'a[href*="/mall/sdaetsya_komnata_7514673/"],' +
        'a[href*="/mall/bensonhurst_2_500_7514369/"],' +
        'a[href*="/mall/brighton_8th_neptune_ave__7514059/"],' +
        'a[href*="/mall/sdaetsya_mesto_dlya_muzhchiny_7513729/"],' +
        'a[href*="/mall/sdaetsya_mesto_dlya_1_zhenshchiny_7513700/"],' +
        'a[href*="/mall/sdaetsya_komnata_7513179/"],' +
        'a[href*="/mall/sdaetsya_komnata_7513177/"],' +
        'a[href*="/mall/sdaetsya_komnata_7513175/"],' +
        'a[href*="/mall/sdaetsya_komnata_7517665/"],' +
        'a[href*="/mall/sdaetsya_komnata_7517664/"],' +
        'a[href*="/mall/sdam_komnatu_7517315/"],' +
        'a[href*="/mall/sdaetsya_kvartira_7517257/"],' +
        'a[href*="/mall/sdaetsya_kvartira_7517242/"],' +
        'a[href*="/mall/sdaetsya_komnata_7517666/"],' +
        'a[href*="/mall/sdaetsya_otdelnaya_meblirovannaya_komnata_7513637/"],' +
        'a[href*="/mall/sdaetsya_dom_7514384/"],' +
        'a[href*="/mall/sdaetsya_2_mesta_v_komnate_7511078/"]'
    ).closest('li').addClass('x-inappropriate');

});
