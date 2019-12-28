"use strict";

let tmp = [
    '/sdayetsya_bolshaya_komnata_7517668/'
];
let querySdano = 'a[href*="' + tmp.join('"],a[href*="') + '"]';

tmp = [
    'sdaetsya_mesto',
    'sdam_mesto',
    'cdaetsya_mesto',
    'tolko_dlya_zhenshchin',
    '_snimet',
    '_zhenshchine',
    'dlya_devushki',
    encodeURI('место_в_комнате_посуточно'),
    encodeURI('сдаeтся_офис'),
    encodeURI('/на_время_отдыха_cдам_-o3653927-ru/'),
    encodeURI('только_женщине'),
    encodeURI('для_женщины'),
    encodeURI('для_девушки'),
    encodeURI('_девушке-'), // 2018
    encodeURI('/комната_в_рент-o3642434-ru/'), // 2018. $860
    encodeURI('/комната_в_рент-o3636663-ru/'), // 2018. $860
    encodeURI('/сдается_комната_в_аренду-o3567950-ru/'), // 2018
    encodeURI('/сдается_комната-o2523038-ru/'), // 2015
    encodeURI('/без_брокерских_комиссионных-o3463623-ru/'), // kvartiry
    encodeURI('/большой_выбор_квартир-o3440167-ru/'), // broker
    encodeURI('/долгосрочная_аренда_квартир-o1436914-ru/'), // broker
    encodeURI('/сдается_отдельная_меблированная_комната-o2908728-ru/'), // 2017
    encodeURI('/сдается_комната_в_аренду-o3567955-ru/'), // 2018
    encodeURI('/сдам_в_аренду_комнату-o3334657-ru/'), // 2017
    encodeURI('/место_для_парня'), // 2018
    encodeURI('/cдается_отдельная__комната_living_room-o2785323-ru/'), // 2018
    encodeURI('/комната_в_kew_gardens-o3087073-ru/'), // 2018
    encodeURI('сдается_место'),
    encodeURI('сдам_место'),
    encodeURI('/в_бруклине_за_450_сдается_комната-o3197146-ru/'), // 2018
    encodeURI('/бруклин_сдам_kомнату_-o3605135-ru/'), // 2018
    encodeURI('/меблированная_комната-o3605162-ru/'), //4w
    encodeURI('мужчина_снимет'),
    encodeURI('/квартиры_в_рент-o887512-ru/'), // broker
    encodeURI('/квартиры_в_rent-o1867071-ru/'), // broker
    encodeURI('re_broker'),
    encodeURI('_realty-'),
    encodeURI('/квартиры_в_рент_бруклин-o104140-ru/'), // broker
    '/sheapsheadbay-o2452025-ru/', // last update 2017
    '/kew_gardens_austin_street-o2731739-ru/', // 2018
    '/sdaetsya_mebelirovannaya_otdelnaya_komnata_sea_gate__7100556/',
    '/sdaetsya_komnata_7516969/', //4woman
    '/sdayutsya_komnaty_s_mebelyu_7509895/', //4woman
    '/razdelyu_rent_komnaty_7075004/', //4woman
    '/mesta_v_komnate__7087983/', //4woman
    '/bensonhurst_7515298/', //4woman
    '/bensonhurst__7515301/', //4woman
    '/bensonhurst_close_to_bay_parkway86th_strd_trainbusesb1b6b82-o3085353-ru/', //4woman
    '/bensonhurst_close_to_bay_parkway86th_strd_trainbusesb1b6b82-o3086460-ru/', //4woman
    '/sdaetsya_meblirovannaya_komnata_7515687/',
    '/bensonhurst_bay_parkway_d_line_7085449/', //4w
    '/sdayetsya_komnata_7514724/', //4w
    '/bensonhurst_close_to_bay_parkway86th_strd_trainbusesb1b6b82-o3081326-ru/', //4w
    '/furnished_room_7105977/', // 4w
    '/sdayu_mebelirovannuyu_komnatu_kings_hwy_7511873/', //4w
    '/jaba_7106555/', //1100
    '/bensonhurst_close_to_bay_parkway86th_strd_trainbusesb1b6b82-o3329267-ru/', //4w
    '/prostornaya_komnata_sdayetsya_7087352/',
    '/bensonhurs_d_train_line_7085448/', //4w
    '/bensonhurst_close_to_d_trainbay_parkway-o3627922-ru/', //4w
    '/bensonhurst_bay_parkway_d_line_7085450/', //4w
    '/bensonhurst_close_to_bay_parkw86th_strd_trainbusesb1b6b82-o3089370-ru/', //4w
    '/sdayetsya_komnata_dlya_zhenshchina_800_kings_highway_ocean_ave_brooklyn_7076577/', //850
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
    '/seagate_7532729/', // Ebenya
    '/2922_northern_blvd_long_island_city__7532325/', // no price but looks expensive
    '/rent_kvartir_bruklin_7522396/', // broker
    '/rent_3_bedrooms_7530049/', // broker
    '/arenda_kvartir_7524350/',
    '/midvud_1_bedrum_v_rent_1630_7532343/',
    '/ocean_ave_ave_x_7532322/',
    '/ocean_ave_voorhies_ave_7529850/',
    '/sdaetsya_studiya_7089557_5c5cbad19fbea_5d7bf4504fb5f_5d7bf60490ae4/',
    '/mill_basin-o3641153-ru/', // broker
    '/no_fee_apartments_by_management_7511823/',
    '/seagate__7531865/',
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

function hideInappropriate()
{
    let contentBlock = $('ul.listinf');
    contentBlock.find(querySdano).closest('li').addClass('x-sdano');
    contentBlock.find(queryInappropriate).closest('li').addClass('x-inappropriate');

    // inconvenient locations:
    let bottmboxSpan = contentBlock.find('.bottmbox-left > span');
    [
        'Bronx',
        'NY 10028',
        'NY 11366',
        'NY 11411',
        'NY 10019',
        'Long Island',
        'Bergen Beach',
        'Richmond Hill',
        'Staten Island',
        'Upper East Side, Manhattan'
    ].forEach(addr => {
        bottmboxSpan.children('strong:contains("' + addr + '")').closest('li').addClass('x-inappropriate');
    });

    // high price:
    contentBlock.find('.bottmbox-left > span > strong').each(function (a, b) {
        let paramValue = b.innerText;
        if (paramValue.length === 5 && paramValue.indexOf(',') === 1) {
            let price = paramValue.replace(',', '');
            if (price > 1000) {
                $(b).closest('li').addClass('x-inappropriate');
            }
        }
    });

    // (917) 716-3768, etc
    contentBlock.find('a > table > tbody > tr:nth-child(2) > td > p > span').filter(':contains("(718) 996-0022"), :contains("(917) 716-3768")').each(function (_, node) {
        $(node).closest('li').addClass('x-inappropriate');
    });

}
