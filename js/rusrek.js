"use strict";

let tmp = [
    '/mesto_v_muzhskoy_komnate__7077352_5d5ab7e27ed26/',
    '/%D1%81%D0%B4%D0%B0%D0%B5%D1%82%D1%81%D1%8F_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0-o2400089-ru/',
    '/sdam_nebolshuyu_komnatu_7511006/',
    '/%D1%81%D0%B4%D0%B0%D0%B5%D1%82%D1%81%D1%8F_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0-o3640322-ru/',
    '/sdayu_bolshuyu_komnatu_7515584/',
    '/sdayetsya_bolshaya_komnata_7517668/',
    '/sdaetsya_komnata_s_mebelyu_7513232/',
    '/sdayetsya_otdelnaya_meblirovannaya_komnata_v_rayone_braytona_7100486_5d92293f32e6c/',
    '/otdelnaya_komnata_v_rent_7515611/',
    '/sdaetsya_studiya_v_chastnom_dome_7515272/',
    '/na_braytone_v_chastnom_dome_sdaetsya_7516841/',
    '/sdaetsya_otdelnaya_komnata_7515796/',
    '/sdaetsya_komnata_7515191/',
    '/sdaetsya_komnata_500_7516006/',
    '/sdaetsya_komnata_7515520/',
    '/sdaetsya_svetlaya_i_uyutnaya_komnata_posle_remonta_7516380/',
    '/sdayetsya_3kh_komnatnaya_kvartira__7516066_5d8914ce48a49/',
    '/rabota_zhile_i_drugie_uslugi_dlya_immigrantov_7510341/',
];
let querySdano = 'a[href*="' + tmp.join('"],a[href*="') + '"]';

tmp = [
    '/%D0%BC%D0%B5%D1%81%D1%82%D0%BE_%D0%B2_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B5_%D0%BF%D0%BE%D1%81%D1%83%D1%82%D0%BE%D1%87%D0%BD%D0%BE_40-o3640089-ru/',
    '/komnata_v_rent_7090344/',
    '/%D0%BD%D0%B0_%D0%B2%D1%80%D0%B5%D0%BC%D1%8F_%D0%BE%D1%82%D0%B4%D1%8B%D1%85%D0%B0_c%D0%B4%D0%B0%D0%BC_-o3653927-ru/',
    '/sdaetsya_ofis_7102922/',
    '/%D1%81%D0%B4%D0%B0%D0%BC_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D1%83_%D1%82%D0%BE%D0%BB%D1%8C%D0%BA%D0%BE_%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B5_%D0%B8%D0%BB%D0%B8_%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B5-o3133003-ru/',
    '/sdaetsya_komnata_7514671/',
    '/sdaetsya_komnata_7517818/',
    '/otlichnaya_mebelirovannaya_komnata_posle_remonta__7517913/',
    '/sdayu_otdelnuyu_komnatu_brayton_7516989/',
    '/bolshaya_komanata_s_private_bathroom_na_1_braytone_v_luxury_bildinge_7515541/',
    '/komnata_v_sigeyte_7516387/',
    '/mall/sdayetsya_komnata__7514557/',
    '/%D1%81%D0%B4%D0%B0%D1%8E_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D1%83-o3297159-ru/',
    '/%D1%81%D0%B4%D0%B0%D0%B5%D1%82%D1%81%D1%8F_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0_%D0%B2_%D0%B0%D1%80%D0%B5%D0%BD%D0%B4%D1%83-o3567950-ru/',
    '/%D1%81%D0%B4%D0%B0%D0%B5%D1%82%D1%81%D1%8F_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0-o2523038-ru/',
    '/sdam_komnatu_7515757/',
    '/_bez_brokerskikh_komissionnykh__7516007/',
    '/sdayetsya_2_kh_spalnyy_apartment_brooklyn_sheepshead_bay_7516995/',
    '/two_bedroom_apartment_for_rent_sheepshead_bay_7513826/',
    '/east_15th_str_ave_j__7512923/',
    '/meblirovannaya_uyutnaya_komnata_v_brooklyn_bensonhurst_bay_parkway_station_7517156/',
    '/sdaetsya_komnata_dlya_devushki_7517696/',
    '/townplaza_realty_7105059/',
    '/sdaetsya_komnata_7517047/', // проходная
    '/sdayutsya_dachi_na_lyuboe_vremya_7096356/',
    '/pomeshchenie_dlya_fastfud_7512429/',
    '/snimu_pomeshchenie_pod_sklad_7516032/',
    '/sar_sales_parking_storage_for_rent_7514462/',
    '/sdayutsya_2_parkovochnykh_mesta_na_coney_island_7515869/',
    '/%D0%B1%D0%B5%D0%B7_%D0%B1%D1%80%D0%BE%D0%BA%D0%B5%D1%80%D1%81%D0%BA%D0%B8%D1%85_%D0%BA%D0%BE%D0%BC%D0%B8%D1%81%D1%81%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D1%85-o3463623-ru/',
    '/%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9_%D0%B2%D1%8B%D0%B1%D0%BE%D1%80_%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80-o3440167-ru/',
    '/%D0%B4%D0%BE%D0%BB%D0%B3%D0%BE%D1%81%D1%80%D0%BE%D1%87%D0%BD%D0%B0%D1%8F_%D0%B0%D1%80%D0%B5%D0%BD%D0%B4%D0%B0_%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80-o1436914-ru/',
    '/1_bedrum_kvartira_na_steyten_aylend_7517908/',
    '/sdaetsya_komnata_dlya_devushki_7517828/',
    '/sdam_komnatu_ili_kvartiru_7515193/', // po telefonu skazali short-term
    '/razdelyu_rent__7516114/', // $850 Ave X
    '/sdam_meblirovannuyu_komnatu__7513296/',
    '/%D1%81%D0%B4%D0%B0%D0%B5%D1%82%D1%81%D1%8F_%D0%BE%D1%82%D0%B4%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BC%D0%B5%D0%B1%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0-o2908728-ru/',
    '/cdaetsya_bolshaya_komnata_7514872/',
    '/%D1%81%D0%B4%D0%B0%D0%B5%D1%82%D1%81%D1%8F_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0_%D0%B2_%D0%B0%D1%80%D0%B5%D0%BD%D0%B4%D1%83-o3567955-ru/',
    '/sdam_otdelnuyu_komnatu_odnoy_rabotayushchey_zhenshchine_7513050/',
    '/komnata_dlya_devushki_zhenschini_7105251/',
    '/%D1%81%D0%B4%D0%B0%D0%BC_%D0%B2_%D0%B0%D1%80%D0%B5%D0%BD%D0%B4%D1%83_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D1%83-o3334657-ru/',
    '/sheapsheadbay-o2452025-ru/',
    '/sdam_svetluyu_komnatu_7514805/',
    '/kew_gardens_austin_street-o2731739-ru/',
    '/c%D0%B4%D0%B0e%D1%82%D1%81%D1%8F__%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0_1%D0%B9_%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B5-o3600373-ru/',
    '/%D1%81%D0%B4%D0%B0%D0%B5%D1%82%D1%81%D1%8F_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0_%D0%B4%D0%BB%D1%8F_%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B8-o3084067-ru/',
    '/%D0%BC%D0%B5%D1%81%D1%82%D0%BE_%D0%B4%D0%BB%D1%8F_%D0%BF%D0%B0%D1%80%D0%BD%D1%8F_%D1%88%D0%B8%D0%BF%D1%81%D1%85%D0%B5%D0%B4%D0%B1%D0%B5%D0%B9-o2547477-ru/',
    '/sdaetsya_mebelirovannaya_otdelnaya_komnata_sea_gate__7100556/',
    '/shared_room_for_rent_7089771/',
    '/c%D0%B4%D0%B0%D0%B5%D1%82%D1%81%D1%8F_%D0%BE%D1%82%D0%B4%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F__%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0_living_room-o2785323-ru/',
    '/%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0_%D0%B2_kew_gardens-o3087073-ru/',
    '/sdaetsya_komnata_7514673/',
    '/sdaetsya_komnata_7514667/', // $900 da esche i s sobakoi v dome
    '/bensonhurst_2_500_7514369/',
    '/shiny_amp_small_bedroom__7514380/', // Manhattan
    '/brighton_8th_neptune_ave__7514059/',
    '/sdaetsya_komnata_dlya_devushki_7517898/',
    '/sdam_komnatu_parnyu_7515417/', // Ебеня
    '/sdaetsya_komnata_7516969/',
    '/sdaetsya_mesto_dlya_muzhchiny_7513729/',
    '/sdaetsya_mesto_dlya_1_zhenshchiny_7513700/',
    '/sdaetsya_komnata_7513179/',
    '/sdaetsya_komnata_7513177/',
    '/sdaetsya_komnata_7514647/',
    '/sdaetsya_komnata_7513175/',
    '/sdayetsya_komnata_dlya_zhenshchin__7516013/',
    '/sdayu_komnatu_7515980/',
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
    '/sdaetsya_komnata_7513168/',
    '/sdaetsya_dom_7514384/',
    '/sdaetsya_komnata_7513184/',
    '/sdaetsya_mesto__7513155/',
    '/sdayu_komnatu_dlya_studentki_7512988/',
    '/kings_hwy_ocean_ave_7512978/',
    '/sdaetsya_komnata_dlya_devushki_7517698/',
    '/razdelyu_rent_komnaty_7075004/',
    '/sdayetsya_komnata_7517283/',
    '/zdaetsya_bolshaya_mebelerovannaya_komnata__7517651/',
    '/sdayu_komnatu_7512520/',
    '/koyko_mesto_7512513/',
    '/sdam_komnatu_7512168/',
    '/cdaetsya_bolshaya_komnata__7517798/',
    '/sdaetsya_komnata_7513181/',
    '/sdaetsya_komnata_dlya_devushki_7517276/',
    '/sdam_spalnyu_7517114/',
    '/sdayetsya_mesto_v_komnate__7517265/',
    '/sdayetsya_otdelnaya_komnata_pod_klyuch_7517262/',
    '/snimu_komnatu_ili_razdelyu_rent_v_kvartire_7517167/',
    '/sdaetsya_studiya_v_sheepshead_bay_7517159/',
    '/sdayetsya_koyko_mesto_v_komnate_7516455/',
    '/mesta_v_komnate__7087983/',
    '/cdaetsya_komnata_manhattan_7517025/',
    '/cdaetsya_bolshaya_komnata__7517024/',
    '/sdam_komnatu__7100754/',
    '/sheepshead_bay_komnata_dlya_devushki__7105947/',
    '/kimnata_divchini_7105986/',
    '/cdaetsya_otdelnaya_komnata_7517064/',
    '/bensonhurst_7515298/',
    '/bensonhurst__7515301/',
    '/sdam_v_arendu_komnatu_7516956/',
    '/house_or_room_for_rent_7516911/',
    '/snimu_komnatu_v_brukline_srochno_7516909/',
    '/bensonhurst_close_to_bay_parkway86th_strd_trainbusesb1b6b82-o3085353-ru/',
    '/%D1%81%D0%B4%D0%B0%D0%B5%D1%82%D1%81%D1%8F_%D0%BC%D0%B5%D1%81%D1%82%D0%BE_%D0%B2_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B5-o3655294-ru/',
    '/sdaetsya_komnata_7513180/',
    '/bensonhurst_2_500_7514369/',
    '/sdaetsya_komnata_7516059/',
    '/sdaetsya_komnata_7516057/',
    '/sdaetsya_mesto_v_komnate_7515185/',
    '/sdaetsya_mesto_dlya_muzhchiny_7515885/',
    '/sdaetsya_komnata_7516058/',
    '/snimu_komnatu_s_otdelnym_sanuzlom_7516908/',
    '/sdaetsya_komnata_ne_agenstvo_7515708/',
    '/bensonhurst_close_to_bay_parkway86th_strd_trainbusesb1b6b82-o3086460-ru/',
    '/sdaetsya_bolshaya_teplaya_i_solnechnaya_meblirovannaya_komnata__7077994/',
    '/cdaetsya_komnata__7515692/',
    '/sdaetsya_meblirovannaya_komnata_7515687/',
    '/sdayu_meblirovannuyu_komnatu__7515449/',
    '/sdam_komnatu_7515444/',
    '/bensonhurst_bay_parkway_d_line_7085449/',
    '/sdam_komnatu__7515418/',
    '/sdayetsya_komnata_7514724/',
    '/chistaya_i_svetlaya_komnata_na_avenyu_s_i_ocean_avenue__7515979/',
    '/room_for_rent__7516944/',
    '/cdayu_mesto_dlya_muzhchiny_7515794/',
    '/sdaetsya_mesto_v_komnate_7515680/',
    '/khozyain_srochno_sdast_komnatu_7515465/',
    '/sdam_prostornuyu_svetluyu_komnatu__7515283/',
    '/sdaetsya_bolshaya_komnata_7514656/',
    '/sdaetsya_komnata_7514654/',
    '/srochno_sdaetsya_komnata_7513639/',
    '/ocean_ave_ave_x__7513717/',
    '/ave_z_ocean_parkway__7512256/',
    '/sdaetsya_komnata_dlya_devushki_7517868/',
    '/cdaetsya_otdelnaya_komnata_7517870/',
    '/sdayetsya_komnata_7517832/',
    '/sdaetsya_komnata_dlya_devushki_7517829/',
    '/molodaya_semeynaya_para_srochno_ishchet_studio_1bedrum_ili_komnatu_bez_brokerskie_uslugi_9294761188__7517826/',
    '/cdaetsya_komnata_7517797/',
    '/snimu_komnatu__7517762/',
    '/podyskivayu_zhilye__7517684/',
    '/sdaetsya_komnata_dlya_devushki_7517061/',
    '/sdam_komnnatu_1_2_lyudyam_7516991/',
    '/komnata_forest_hills_900_vse_vklucheno_7516773/',
    '/sdam_komnatu_v_queens_7515221/',
    '/sdayetsya_komnata__7515938/',
    '/room_for_rent__7515936/',
    '/sdam_komnatu_7515766/',
    '/cdaetsya_bolshaya_komnata_7514871/',
    '/sdam_bolshuyu_komnatu__7514814/',
    '/sdam_otdelnuyu_komnatu_rabotayushchey_zhenshchine__7515236/',
    '/luxury_meb_komnata_s_private_bath_na_braytone_7515542/',
    '/razdelyu_rent_7515446/',
    '/bensonhurst_close_to_bay_parkway86th_strd_trainbusesb1b6b82-o3081326-ru/',
    '/_12__7508473/',
    '/sdaetsya_komnata_7513788/',
    '/%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0_e17th__kings_highway-o3511940-ru/',
    '/svetlaya_komnata__7513664/',
    '/sdayu_komnatu__7513365/',
    '/komnata_v_bolshoy_kvartire_s_novym_remontom_7513222/',
    '/furnished_room_7105977/',
    '/sdayu_mebelirovannuyu_komnatu_kings_hwy_7511873/',
    '/snimu_studiyu_7103558/',
    '/jaba_7106555/',
    '/bensonhurst_close_to_bay_parkway86th_strd_trainbusesb1b6b82-o3329267-ru/',
    '/prostornaya_komnata_sdayetsya_7087352/',
    '/sdaetsya_meblirovannaya_komnata_ili_mesto_v_komnate_7517743/',
    '/18th_ave_86th_str__7517735/',
    '/122_orchard_st_apt_7_new_york_ny__7517662/',
    '/143_1st_ave_apt_2_new_york_ny_7517660/',
    '/398_3rd_ave_apt_4d_new_york_ny_7517658/',
    '/70_berry_st_apt_6b_brooklyn_ny_7517657/',
    '/87_woodhull_st_apt_2_brooklyn_ny_7517656/',
    '/w_4th_st_brooklyn_ny_7517655/',
    '/2922_23rd_rd_apt_1_astoria_ny_7517654/',
    '/2117_31st_ave_apt_4c_astoria_ny_7517653/',
    '/3094_crescent_st_5b_astoria_ny__7517650/',
    '/472_willow_ave_472_islip_ny_7517640/',
    '/328_lake_ave_saint_james_ny__7517639/',
    '/%D1%81%D0%B4%D0%B0%D0%BC_%D0%BC%D0%B5%D1%81%D1%82%D0%BE_%D0%B2_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B5-o3289196-ru/',
    '/%D0%B2_%D0%B1%D1%80%D1%83%D0%BA%D0%BB%D0%B8%D0%BD%D0%B5_%D0%B7%D0%B0_450_%D1%81%D0%B4%D0%B0%D0%B5%D1%82%D1%81%D1%8F_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0-o3197146-ru/',
    '/%D0%B1%D1%80%D1%83%D0%BA%D0%BB%D0%B8%D0%BD_%D1%81%D0%B4%D0%B0%D0%BC_k%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D1%83_-o3605135-ru/',
    '/bensonhurs_d_train_line_7085448/',
    '/bensonhurst_close_to_d_trainbay_parkway-o3627922-ru/',
    '/bensonhurst_bay_parkway_d_line_7085450/',
    '/bensonhurst_close_to_bay_parkw86th_strd_trainbusesb1b6b82-o3089370-ru/',
    '/%D1%81%D1%80%D0%BE%D1%87%D0%BD%D0%BE_%D1%80%D0%B0%D0%B7%D0%B4%D0%B5%D0%BB%D1%8E_%D1%80%D0%B5%D0%BD%D1%82_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0_%D0%B4%D0%BB%D1%8F_%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D1%8B-o3579614-ru/',
    '/%D0%BC%D0%B5%D0%B1%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0-o3605162-ru/',
    '/sdayetsya_komnata_dlya_zhenshchina_800_kings_highway_ocean_ave_brooklyn_7076577/',
    '/sdayetsya_mesto_v_komnate_zhenshchine_7097546/',
    '/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%89%D0%B8%D0%B9_%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD%D0%B0_%D1%81%D0%BD%D0%B8%D0%BC%D0%B5%D1%82_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D1%83-o2463234-ru/',
    '/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%89%D0%B8%D0%B9_%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD%D0%B0_%D1%81%D0%BD%D0%B8%D0%BC%D0%B5%D1%82_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D1%83-o3161767-ru/',
    '/midwood_%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B0_%D0%B4%D0%BB%D1%8F_%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B8-o3650050-ru/',
    '/razyskivaetsya_komnata_v_rent_na_dolgiy_srok_rayony_bay_ridge_ili_diker_heights_7514580/',
    '/sdayu_komnatu__7516887/',
    '/khozyain_s_1_oktyabrya_sdaet_svetluyu_komnatu_v_steyten_aylende_nyu_york_bez_proverki_kreditnoy_isto_7515913/',
    '/sdayetsya_komnata_7516794/',
    '/ogromnaya_komnata_s_mebelyu_vse_vklyucheno_900__7516442/',
    '/brayton_sdam_mesto_v_komnate_zhenshchine_7516445/',
    '/bruklin_v_chastnom_dome_na_2_etazhe_7515886/',
    '/s_13_sentyabrya_7515284/',
    '/queens_sdayu_bolshuyu_meblirovannuyu_komnatu_7513703/',
    '/komnata_na_braytone_s_mebelyu_wi_fi__7512895/',
    '/sdaetsya_meblirovannaya_komnata__7512575/',
    '/kimnata_dlya_divchini_7516454/',
    '/sdaetsya_komnata_7516383/',
    '/kings_hwy_east_14th_str__7512240/',
    '/sdaets_meblirovannaya_komnata_7512148/',
    '/razdelyu_pent_otdelnaya_komnata_i_vanna_7511632/',
    '/sdayetsya_mesta_v_komnate_devushke_ili_zhenshchine__7510058/',
    '/komnata_dlya_rabotayushchego_muzhchiny_parnya_7516117/',
    '/komnata_devushke_7105948/',
    '/semya_iz_3_chelovek_snimet_1_bdr_7516433/',
    '/razdelyu_rent__7516114/', // 850, Ave X
    '/60_pearl_st_apt_3_new_york_ny_7515815/', // Manhattan
    '/350_e_67th_st_apt_17_new_york_ny_7514768/', // Manhattan
    '/kings_hiwy_ugol_bedford_ave_7513711/',
    '/sdam_meblirovannuyu_komnatu_zhenshchine_7517932/',
    '/sdayetsya_bolshaya_svetlaya_meblirovannaya_studiya_na_braytone_s_vidom_na_okean__7517890/',
    '/cdaetsya_otdelnaya_komnata_7517869/',
    '/florida_chudo_ozero_warm_mineral_springs_fl_7517781/',
    '/sdayu_otdelnuyu_meblirovannuyu_komnata_s_otdelnoy_vannoy_i_tualetom_kondo_molodomu_parnyu_bez_vredny_7517155/', // 850
    '/mall/sdaetsya_komnata_7514648/',
    '/sdam_komnatu_ili_kvartiru_7515193/', // Bensonhurst сдают на короткий срок
    '/snimu_studiyu_7515992/',
    '/snimu_studiyu_na_dolgiy_srok__7515646/',
    '/ishchu_meblirovannuyu_komnatu_v_brukline__7515450/',
    '/snimu_zhile_do_300_mesyats_7515254/',
    '/sdam_7515240/',
    '/sdam_komnatu_s_mebelyu_zhenshchine_ili_devushke__7106128/',
    '/sdam_kvartiru_studiyu__7514793/',
    '/komnata_v_rent_7513854/',
    '/koykoe_mesto_zdaetsya_dlya_devochki_7511591/',
    '/ishchu_1_bedrum_sigeyt_bruklin_leto_2020_7510048/',
    '/sdayetsya_meblirovannaya_komnata_7106793/',
    '/sdayu_mesto_v_komnate_dlya_zhenshchin__7516096/',
    '/arenda_7516011/',
    '/sdayetsya_studiya_v_rayone_shipskhedbey__7515993/',
    '/besplatnoe_prozhivanie_v_komnate_na_braytone_dlya_zhenshchiny_60_70_let_u_7516357/',
    '/sdaetsya_komnata_7516063/',
    '/sdaetsya_nebolshaya_komnata_7517323/',
    '/sdaetsya_komnata_7517663/'
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
