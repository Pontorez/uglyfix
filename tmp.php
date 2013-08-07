<?php

/**
 * Description of CCallBack
 *
 * @author ATitishov
 */
class CCallBack
{

    public static function makeCallBackCall($uid, $b_number, $a_number)
    {
        $uid = strtolower($uid);

        $return_data = array();

        if ($b_number == $a_number) {
            $return_data["error"] = 1;
            $return_data["error_description"] = "Invalid numbers";
            return $return_data;
        }

        if (!isset($uid) || !CValidate::isEmailValid($uid)) {
            $return_data["error"] = 1;
            $return_data["error_description"] = "Invalid UID";
            return $return_data;
        }

        $uid = CValidate::clean_Params($uid);

        $cust_name = CPortaOracle::getPortaCustomerByAlias($uid);

        if ((!isset($cust_name)) || (empty($cust_name))) {
            $return_data = array();
            $return_data["error"] = 1;
            $return_data["error_description"] = "No data found";
            unset($cust_name);
            return $return_data;
        } else {
            $cb_name = CPortaOracle::getCBName($cust_name['I_CUSTOMER'], $cust_name["NAME"]);
            if ((!isset($cb_name)) || (empty($cb_name))) {


                $ins_customer = array();
                $ins_customer['PASSWORD'] = 'cbPassaAbBcC';
                $ins_customer['NAME'] = $cust_name['NAME'];
                $ins_customer['I_CUSTOMER'] = $cust_name['I_CUSTOMER'];
                if ($cust_name['ISO_4217'] != 'RUB') {
                    $ins_customer['I_LANG'] = 'en';
                } else {
                    $ins_customer['I_LANG'] = 'ru';
                }
                $phone = 'cb' . $cust_name['NAME'];


                if (Yii::app()->params->type == 'icq') {
                    if ($ins_customer['I_LANG'] == 'ru') {
                        $product = Yii::app()->params->SOAP[Yii::app()->params->type]['product_ru'];
                    } else {
                        $product = Yii::app()->params->SOAP[Yii::app()->params->type]['product_en'];
                    }
                } else {
                    $product = Yii::app()->params->SOAP[Yii::app()->params->type]['product'];
                }
                $billing_model = Yii::app()->params->SOAP['billing_model'];
                $routing_plan = Yii::app()->params->SOAP[Yii::app()->params->type]['routing_plan'];

                $business_product = $product;

                $life_time = null;
                $life_time_exp_date = Yii::app()->params->SOAP['account_expiration'];

                if (!is_numeric($life_time_exp_date)) $life_time_exp_date = 3;
                if ($life_time_exp_date != 1) {
                    $cur_time = CPortaOracle::getPortaTimestamp();
                    $exp_date = (is_numeric($life_time)) ? date("Y-m-d", $cur_time + $life_time * 24 * 60 * 60) : null;
                }
                if ($life_time_exp_date == 2) $life_time = null;

                $i_account = null;

                if (!CAccountBalance::addaccount($ins_customer, $phone, $product, $billing_model, $life_time, $exp_date, $routing_plan, $i_account, $business_product)) {
                    $return_data = array();
                    $return_data["error"] = 1;
                    $return_data["error_description"] = "Account create error";
                    unset($cust_name);
                    return $return_data;
                } else {
                    $cb_name = CPortaOracle::getCBName($cust_name['I_CUSTOMER'], $cust_name["NAME"]);
                    if ((!isset($cb_name)) || (empty($cb_name))) {
                        $return_data = array();
                        $return_data["error"] = 1;
                        $return_data["error_description"] = "No account found";
                        unset($cust_name);
                        return $return_data;
                    } else {
                        $name = $cb_name["CBNAME"];
                        $p_account = $cb_name["I_ACCOUNT"];
                        if (Yii::app()->params->type == 'icq') {
                            $dp = 652;
                        } else {
                            $dp = 649;
                        }
                        CDiscountOption::addOption($p_account, $dp);
                    }
                }
            } else {
                $name = $cb_name["CBNAME"];
                $p_account = $cb_name["I_ACCOUNT"];
            }
        }

        $pass = CPortaOracle::getCBpass($p_account);

        $t = CCallBack::getCallBackRateTariff($uid, $b_number, $a_number);

        if (isset($t["error"])) {
            $return_data["error"] = 1;
            $return_data["error_description"] = "No such destination";
            return $return_data;
        }

        if ($t["tariff"] > $cust_name["FULLBAL"]) {
            $return_data["error"] = 1;
            $return_data["error_description"] = "Enough money to establish this call";
            unset($cust_name);
            return $return_data;
        }

        $r = CCallBack::sendData($name, $pass, $b_number, $a_number);

        if (isset($r["error"])) {
            $return_data["error"] = 1;
            $return_data["error_description"] = "Invalid PARAMS";
            return $return_data;
        } else {
            $return_data['success'] = 1;
            return $return_data;
        }
    }


    public static function getCallBackRateTariff($uid, $b_number, $a_number)
    {
        $return_data = array();

        if ($b_number == $a_number) {
            $return_data["error"] = 1;
            $return_data["error_description"] = "Invalid numbers";
            return $return_data;
        }

        $b = CRateTariff::getRateTariff($uid, $b_number);
        $a = CRateTariff::getRateTariff($uid, $a_number);
        if (isset($a["error"]) || isset($b["error"])) {
            $return_data["error"] = 1;
            $return_data["error_description"] = "No such destination";
        } else {
            $return_data["tariff"] = round((($a["tariff"] + $b["tariff"]) * 0.8), 2);
            $return_data["destination_a"] = $a["destination"];
            $return_data["destination_b"] = $b["destination"];
            $return_data["destination_country_a"] = $a["destination_country"];
            $return_data["destination_country_b"] = $b["destination_country"];
            $return_data["currency"] = $a["currency"];
            $return_data["rest"] = $a["rest"];
        }
        return $return_data;
    }

    public static function sendData($id, $pass, $a_number, $b_number)
    {

        $return_data = array();
        $return_data["error"] = 1;

        $url = 'https://80.75.132.205:8901/cgi/web/receive.pl';

        $referer = 'https://80.75.132.205:8901/';

        $post_data =
            "Account=" . $id . "&" .
            "Password=" . $pass . "&" .
            "First_Phone_Number=" . $a_number . "&" .
            "Second_Phone_Number=" . $b_number . "&" .
            "cb_type=extended";

        $ch = curl_init();
        $cookie = '';
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)");
        curl_setopt($ch, CURLOPT_COOKIE, $cookie);
        curl_setopt($ch, CURLOPT_VERBOSE, 1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); // this line makes it work under https
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0); // Line added by Pavel Shkretov 26.08.2008
        curl_setopt($ch, CURLOPT_REFERER, $referer);
        curl_setopt($ch, CURLOPT_FAILONERROR, 0);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, 120);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
        $result = curl_exec($ch);

        if (curl_errno($ch) != 0) {
            $return_data["error"] = 1;
            $return_data["error_description"] = curl_error($ch);
        }

        curl_close($ch);

        if (strstr($result, 'Please wait') != null) {
            return 0;
        } else {
            return $return_data;
        }
    }
}