"use strict";

let tmp = [
    '/sdayetsya_bolshaya_komnata_7517668/'
];
let querySdano = 'a[href*="' + tmp.join('"],a[href*="') + '"]';

tmp = [
    'sdaetsya_mesto_dlya_1_zhenshchiny',
    'sdam_mesto_dlya_zhenshchiny',
    'cdaetsya_mesto_v_komnate',
    'tolko_dlya_zhenshchin',
    '_snimet',
    '_zhenshchine',
    'muzhchine_sdaetsya_mesto_v_komnate',
    '/%D0%BC%D0%B5%D1%81%D1%82%D0%BE_%D0%B2_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B5_%D0%BF%D0%BE%D1%81%D1%83%D1%82%D0%BE%D1%87%D0%BD%D0%BE_40-o3640089-ru/',
    '/%D0%BD%D0%B0_%D0%B2%D1%80%D0%B5%D0%BC%D1%8F_%D0%BE%D1%82%D0%B4%D1%8B%D1%85%D0%B0_c%D0%B4%D0%B0%D0%BC_-o3653927-ru/',
    '/%D1%81%D0%B4%D0%B0%D0%BC_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D1%83_%D1%82%D0%BE%D0%BB%D1%8C%D0%BA%D0%BE_%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B5_%D0%B8%D0%BB%D0%B8_%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B5-o3133003-ru/',
    '/%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0_%D0%B2_%D1%80%D0%B5%D0%BD%D1%82-o3642434-ru/', // $860
    '/%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0_%D0%B2_%D1%80%D0%B5%D0%BD%D1%82-o3636663-ru/', // $860
    '/%D1%81%D0%B4%D0%B0%D0%B5%D1%82%D1%81%D1%8F_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0_%D0%B2_%D0%B0%D1%80%D0%B5%D0%BD%D0%B4%D1%83-o3567950-ru/',
    '/%D1%81%D0%B4%D0%B0%D0%B5%D1%82%D1%81%D1%8F_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0-o2523038-ru/',
    '/%D0%B1%D0%B5%D0%B7_%D0%B1%D1%80%D0%BE%D0%BA%D0%B5%D1%80%D1%81%D0%BA%D0%B8%D1%85_%D0%BA%D0%BE%D0%BC%D0%B8%D1%81%D1%81%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D1%85-o3463623-ru/', // kvartiry
    '/%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9_%D0%B2%D1%8B%D0%B1%D0%BE%D1%80_%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80-o3440167-ru/', // Real estate
    '/%D0%B4%D0%BE%D0%BB%D0%B3%D0%BE%D1%81%D1%80%D0%BE%D1%87%D0%BD%D0%B0%D1%8F_%D0%B0%D1%80%D0%B5%D0%BD%D0%B4%D0%B0_%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80-o1436914-ru/',
    '/%D1%81%D0%B4%D0%B0%D0%B5%D1%82%D1%81%D1%8F_%D0%BE%D1%82%D0%B4%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BC%D0%B5%D0%B1%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0-o2908728-ru/',
    '/%D1%81%D0%B4%D0%B0%D0%B5%D1%82%D1%81%D1%8F_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0_%D0%B2_%D0%B0%D1%80%D0%B5%D0%BD%D0%B4%D1%83-o3567955-ru/',
    '/komnata_dlya_devushki_zhenschini_7105251/',
    '/%D1%81%D0%B4%D0%B0%D0%BC_%D0%B2_%D0%B0%D1%80%D0%B5%D0%BD%D0%B4%D1%83_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D1%83-o3334657-ru/',
    '/sheapsheadbay-o2452025-ru/', // last update 2017
    '/kew_gardens_austin_street-o2731739-ru/', // 2018
    '/c%D0%B4%D0%B0e%D1%82%D1%81%D1%8F__%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0_1%D0%B9_%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B5-o3600373-ru/', //2018
    '/%D1%81%D0%B4%D0%B0%D0%B5%D1%82%D1%81%D1%8F_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0_%D0%B4%D0%BB%D1%8F_%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B8-o3084067-ru/', //2018
    '/%D0%BC%D0%B5%D1%81%D1%82%D0%BE_%D0%B4%D0%BB%D1%8F_%D0%BF%D0%B0%D1%80%D0%BD%D1%8F_%D1%88%D0%B8%D0%BF%D1%81%D1%85%D0%B5%D0%B4%D0%B1%D0%B5%D0%B9-o2547477-ru/', //2018
    '/sdaetsya_mebelirovannaya_otdelnaya_komnata_sea_gate__7100556/',
    '/c%D0%B4%D0%B0%D0%B5%D1%82%D1%81%D1%8F_%D0%BE%D1%82%D0%B4%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F__%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0_living_room-o2785323-ru/', //2018
    '/%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0_%D0%B2_kew_gardens-o3087073-ru/', // 2018
    '/sdaetsya_komnata_7516969/', //4woman
    '/sdaetsya_mesto_dlya_1_zhenshchiny_7513700/', //4woman
    '/sdayutsya_komnaty_s_mebelyu_7509895/', //4woman
    '/razdelyu_rent_komnaty_7075004/', //4woman
    '/mesta_v_komnate__7087983/', //4woman
    '/bensonhurst_7515298/', //4woman
    '/bensonhurst__7515301/', //4woman
    '/bensonhurst_close_to_bay_parkway86th_strd_trainbusesb1b6b82-o3085353-ru/', //4woman
    '/%D1%81%D0%B4%D0%B0%D0%B5%D1%82%D1%81%D1%8F_%D0%BC%D0%B5%D1%81%D1%82%D0%BE_%D0%B2_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B5-o3655294-ru/', //mesto
    '/bensonhurst_close_to_bay_parkway86th_strd_trainbusesb1b6b82-o3086460-ru/', //4woman
    '/sdaetsya_meblirovannaya_komnata_7515687/',
    '/bensonhurst_bay_parkway_d_line_7085449/', //4w
    '/sdayetsya_komnata_7514724/', //4w
    '/sdaetsya_mesto_v_komnate_7515680/', //mesto
    '/bensonhurst_close_to_bay_parkway86th_strd_trainbusesb1b6b82-o3081326-ru/', //4w
    '/furnished_room_7105977/', // 4w
    '/sdayu_mebelirovannuyu_komnatu_kings_hwy_7511873/', //4w
    '/jaba_7106555/', //1100
    '/bensonhurst_close_to_bay_parkway86th_strd_trainbusesb1b6b82-o3329267-ru/', //4w
    '/prostornaya_komnata_sdayetsya_7087352/',
    '/%D1%81%D0%B4%D0%B0%D0%BC_%D0%BC%D0%B5%D1%81%D1%82%D0%BE_%D0%B2_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B5-o3289196-ru/', //2018
    '/%D0%B2_%D0%B1%D1%80%D1%83%D0%BA%D0%BB%D0%B8%D0%BD%D0%B5_%D0%B7%D0%B0_450_%D1%81%D0%B4%D0%B0%D0%B5%D1%82%D1%81%D1%8F_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0-o3197146-ru/', //2018
    '/%D0%B1%D1%80%D1%83%D0%BA%D0%BB%D0%B8%D0%BD_%D1%81%D0%B4%D0%B0%D0%BC_k%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D1%83_-o3605135-ru/', //2018
    '/bensonhurs_d_train_line_7085448/', //4w
    '/bensonhurst_close_to_d_trainbay_parkway-o3627922-ru/', //4w
    '/bensonhurst_bay_parkway_d_line_7085450/', //4w
    '/bensonhurst_close_to_bay_parkw86th_strd_trainbusesb1b6b82-o3089370-ru/', //4w
    '/%D1%81%D1%80%D0%BE%D1%87%D0%BD%D0%BE_%D1%80%D0%B0%D0%B7%D0%B4%D0%B5%D0%BB%D1%8E_%D1%80%D0%B5%D0%BD%D1%82_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0_%D0%B4%D0%BB%D1%8F_%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D1%8B-o3579614-ru/', //4w
    '/%D0%BC%D0%B5%D0%B1%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0-o3605162-ru/', //4w
    '/sdayetsya_komnata_dlya_zhenshchina_800_kings_highway_ocean_ave_brooklyn_7076577/', //850
    '/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%89%D0%B8%D0%B9_%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD%D0%B0_%D1%81%D0%BD%D0%B8%D0%BC%D0%B5%D1%82_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D1%83-o2463234-ru/',
    '/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%89%D0%B8%D0%B9_%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD%D0%B0_%D1%81%D0%BD%D0%B8%D0%BC%D0%B5%D1%82_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D1%83-o3161767-ru/',
    '/midwood_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0_%D0%B4%D0%BB%D1%8F_%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B8-o3650050-ru/', //4w
    '/florida_chudo_ozero_warm_mineral_springs_fl_7517781/',
    '/sdam_komnatu_s_mebelyu_zhenshchine_ili_devushke__7106128/', //4w
    '/sdayetsya_meblirovannaya_komnata_7106793/',
    '/e_42nd_st_and_ave_h_7529557/', // location
    '/571_9th_st_2_7529558/', // 2 persons in 1 room
    '/sdayutsya_mesta_dlya_dvukh_parney',
    '/morris_park_ave_and_wyatt_st_7529551/', // Bronx
    '/321_leland_ave_bronx_7531799/', // Bronx
    '/104_65_110th_st_2b_7529556/', // JFK
    '/90th_st_and_atlantic_ave_7529555/', // Jamaica
    '/222nd_st_and_jamaica_ave_queens_villa_7529553/', // Jamaica
    '/104_71_110th_st_2a_richmond_hill_7531803/', // Jamaica
    '/e_212th_st_and_paulding_ave_7529552/', // Broker fee. Bronx
    '/avenue_u_east_15_sttreet_7530689/', // Office space
    '/coney_island_avenue_y__7527419/', // Business space
    '/komnata_na_2_ikh_900_za_vse_bronks_7529007/',
    '/sdaetsya_spalnoe_mesto_v_komnate_7531693/', // mesto
    '/sdaetsya_bolshaya_svetlaya_komnata_renting_out_a_big_nice_room__7090784/', // 4woman
    '/2151_45th_ave_7529564/', // Long Island City
    '/853_dekalb_ave_7529563/', // 1k
    '/heath_ave_and_kingsbridge_ter_7529562/', // Bronx
    '/avenue_w_east_26_strteet__7529580/', // 1 BDR
    '/neptune_coney_island_ave_7529591/', // koiko-mesto
    '/sdam_komnatu_v_novom_dome__7529588/', // 4woman
    '/sheepshead_bay_brooklyn_7529503/', // 4woman
    '/sdaetsya_bolshaya_meblirovannaya_komnata_7528578/', // 1200
    '/sdaetsya_otdelnaya_komnata_7528599/', // 4woman
    '/s_5_dekabrya_komnata_v_rent_7528379/',
    '/sdam_v_rent_basement_7525668/', // Staten Island
    '/room_for_rent_7527446/', // 4woman
    '/sdayu_dlya_zhenshchiny_komnatu',
    '/sdaetsya_studiya_na_braytone_7074540/', // 1350
    '/komnata_s_otdelnoy_vannoy_2_bedrum_7529700/', // 4woman
    '/2_bdr_for_rent_brighton_beach_7524342/', // 2500
    '/sdaetsya_7531772/', // 4woman
    '/na_ave_u_east_19th_str_7531660/', // 4woman
    '/sdaetsya_mebelirovannaya_komnata__7526378/', // 4woman
    '/meblirovannaya_komnata_7530720/', // 4woman
    '/sdaetsya_mesto_7530718/', // mesto
    '/ocean_ave_kings_hwy_7524325/',
    '/sheepshead_bay_sdaetsya_dvukhspalnaya_kvartira_7530203/',
    '/sdaetsya__7531880/',
    '/otdelnaya_meblirovannaya_komnata__7532316/',
    '/kings_hwy_east_13_str_7527444/',
    '/bruklin_v_chastnom_dome_na_2_etazhe_7530691/',
    '/snimu_otdelnuyu_komnatu',
    '/komnata_v_uilyamsburge__7530122/', // 4woman
    '/sdaetsya_v_arendu_7084675/', // koiko mesto 700/mo
    '/sdaetsya_bolshaya_meblirovannaya_komnata_7526649/',
    '/sdaetsya_komnata__7529502/',
    '/sdaetsya_komnata_7529881/',
    '/sdaetsya_svetlaya_meblirovannaya_komnata_v_2_bdr_7531177/', // 4woman
    '/sdayu_svetluyu_meblirovannuyu_komnatu__7531979/' // 4woman
];

let queryInappropriate = 'a[href*="' + tmp.join('"],a[href*="') + '"]';
tmp = [];

$(document).click(function() {
    setTimeout(hideInappropriate, 500);
    setTimeout(hideInappropriate, 1000);
    setTimeout(hideInappropriate, 1500);
    setTimeout(hideInappropriate, 2000);
});

$(function () {
    hideInappropriate();
});

function hideInappropriate() {

    let contentBlock = $('ul.listinf');
    contentBlock.find(querySdano).closest('li').addClass('x-sdano');
    contentBlock.find(queryInappropriate).closest('li').addClass('x-inappropriate');
    contentBlock.find('.bottmbox-left > span > strong:contains("Bronx, NY")').closest('li').addClass('x-inappropriate');
    contentBlock.find('.bottmbox-left > span > strong:contains("NY 10028")').closest('li').addClass('x-inappropriate');
    contentBlock.find('.bottmbox-left > span > strong:contains("NY 11366")').closest('li').addClass('x-inappropriate');
    contentBlock.find('.bottmbox-left > span > strong:contains("NY 11411")').closest('li').addClass('x-inappropriate');
    contentBlock.find('.bottmbox-left > span > strong:contains("NY 10019")').closest('li').addClass('x-inappropriate');
    contentBlock.find('.bottmbox-left > span > strong:contains("Staten Island")').closest('li').addClass('x-inappropriate');
    contentBlock.find('.bottmbox-left > span > strong:contains("Upper East Side, Manhattan")').closest('li').addClass('x-inappropriate');

    // high price:
    contentBlock.find('.bottmbox-left > span > strong').each(function (a, b) {
        let paramValue = b.innerText;
        if (paramValue.length === 5 && paramValue.indexOf(',') === 1) {
            let price = paramValue.replace(',', '');
            if (price > 1000) {
                $(b).closest('li').addClass('x-inappropriate');
            }
        }
    })

}
