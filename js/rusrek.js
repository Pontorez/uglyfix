"use strict";

$(function () {

    let tmp = [
        '/mesto_v_muzhskoy_komnate__7077352_5d5ab7e27ed26/',
        '/%D1%81%D0%B4%D0%B0%D0%B5%D1%82%D1%81%D1%8F_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0-o2400089-ru/',
        '/sdam_nebolshuyu_komnatu_7511006/',
        '/%D1%81%D0%B4%D0%B0%D0%B5%D1%82%D1%81%D1%8F_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0-o3640322-ru/',
        '/sdayu_bolshuyu_komnatu_7515584/',
        '/sdaetsya_komnata_7515520/',
        '/sdaetsya_svetlaya_i_uyutnaya_komnata_posle_remonta_7516380/',
        '/sdayetsya_3kh_komnatnaya_kvartira__7516066_5d8914ce48a49/',
        '/rabota_zhile_i_drugie_uslugi_dlya_immigrantov_7510341/',
    ];
    let querySdano = 'a[href*="' + tmp.join('"],a[href*="') + '"]';

    tmp = [
        '/%D0%BC%D0%B5%D1%81%D1%82%D0%BE_%D0%B2_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B5_%D0%BF%D0%BE%D1%81%D1%83%D1%82%D0%BE%D1%87%D0%BD%D0%BE_40-o3640089-ru/',
        '/komnata_v_rent_7090344/',
        '/sdaetsya_komnata_7514671/',
        '/sdaetsya_komnata_7514673/',
        '/bensonhurst_2_500_7514369/',
        '/brighton_8th_neptune_ave__7514059/',
        '/sdaetsya_mesto_dlya_muzhchiny_7513729/',
        '/sdaetsya_mesto_dlya_1_zhenshchiny_7513700/',
        '/sdaetsya_komnata_7513179/',
        '/sdaetsya_komnata_7513177/',
        '/sdaetsya_komnata_7513175/',
        '/sdaetsya_komnata_7517665/',
        '/sdaetsya_komnata_7517664/',
        '/sdam_komnatu_7517315/',
        '/sdaetsya_kvartira_7517257/',
        '/sdaetsya_kvartira_7517242/',
        '/sdaetsya_komnata_7517666/',
        '/sdaetsya_otdelnaya_meblirovannaya_komnata_7513637/',
        '/sdaetsya_dom_7514384/',
        '/131_sullivan_st_apt_4d_new_york_ny__7516751/',
        '/sdayutsya_komnaty_s_mebelyu_7509895/',
        '/21_w_106th_st_apt_5c_new_york_ny_7516750/',
        '/500_e_83rd_st_apt_10h_new_york_ny_7516748/',
        '/512_68th_st_fl_3_brooklyn_ny_7516747/',
        '/626_lincoln_pl_apt_1b_brooklyn_ny_7516746/',
        '/698_lexington_ave_2_brooklyn_ny_7516745/',
        '/1770_grand_concourse_lh_bronx_ny_7516743/',
        '/balcom_ave_bronx_ny_7516742/',
        '/2061_narragansett_ave_2_bronx_ny_7516741/',
        '/14343_41st_ave_apt_3j_flushing_ny_7516740/',
        '/7527_penelope_ave_2_middle_village_ny_7516739/',
        '/1221_30th_ave_apt_d5_astoria_ny__7516738/',
        '/dongan_st_staten_island_ny_7516737/',
        '/cromwell_ave_staten_island_ny_7516736/',
        '/133_robinson_ave_first_staten_island_ny_7516734/',
        '/oakland_ave_deer_park_ny_7516732/',
        '/young_st_west_babylon_ny_7516731/',
        '/72_willow_ave_472_islip_ny_7516730/',
        '/12_chapel_pl_north_babylon_ny_7515822/',
        '/18_longshore_st_bay_shore_ny_7515821/',
        '/sdaetsya_2_mesta_v_komnate_7511078/',
        '/sdaetsya_komnata_7517661/',
        '/komnata_v_rent_7090344/',
        '/brayton_7516845/',
        '/sdaetsya_mesto_muzhchine_7516430/',
        '/room_available_7516421/',
        '/sdaetsya_otdelnaya_komnata_7516349/',
        '/sdaetsya_komnata_7516062/',
        '/sdaetsya_komnata_7516060/',
        '/mesto_v_komnate_dlya_devushki_7514749/',
        '/sdaetsya_komnata_7514673/',
        '/sdaetsya_komnata_7514669/',
        '/sdaetsya_komnata_7514665/',
        '/sdaetsya_komnata_7514650/',
        '/sdaetsya_komnata_7514661/',
        '/sdaetsya_komnata_7514658/',
        '/sdaetsya_komnata_7514657/',
        '/sdaetsya_komnata_7514662/',
        '/sdaetsya_komnata_7514651/',
        '/sdaetsya_komnata_7514655/',
        '/sdaetsya_komnata_7514659/',
        '/sdaetsya_komnata_7514671/',
        '/sdaetsya_komnata_7516059/',
        '/sdaetsya_komnata_7516057/',
        '/sdaetsya_mesto_v_komnate_7515185/',
        '/sdaetsya_mesto_dlya_muzhchiny_7515885/',
        '/sdaetsya_komnata_7516058/',
        '/sdaetsya_komnata_7516063/',
        '/sdaetsya_nebolshaya_komnata_7517323/',
        '/sdaetsya_komnata_7517663/'
    ];

    let queryInappropriate = 'a[href*="' + tmp.join('"],a[href*="') + '"]';

    let contentBlock = $('ul.listinf');
    contentBlock.find(querySdano).closest('li').addClass('x-sdano');
    contentBlock.find(queryInappropriate).closest('li').addClass('x-inappropriate');

});
