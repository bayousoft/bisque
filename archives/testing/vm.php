<?php
//extract data from the post
extract($_POST);
//set POST variables
$url = 'https://demo.myvirtualmerchant.com/VirtualMerchantDemo/process.do';
//Modify the values from xxx to your own account ID, user ID, and PIN
//Additional fields can be added as necessary to support custom fields or required fields configured in the Virtual Merchant terminal
$fields = array(
'ssl_merchant_id'=>'8023343935',
'ssl_user_id'=>'webpage',
'ssl_pin'=>'HU3YE2',
'ssl_show_form'=>'false',
'ssl_result_format'=>'html',
'ssl_test_mode'=>'false',
'ssl_receipt_apprvl_method'=>'redg',
//modify the value below from xxx to the location of your error script
'ssl_error_url'=>'xxx',
//modify the value below from xxx to the location of your receipt script
'ssl_receipt_apprvl_get_url'=>'xxx',
'ssl_transaction_type'=>urlencode($ssl_transaction_type),
'ssl_amount'=>urlencode($ssl_amount),
'ssl_card_number'=>urlencode($ssl_card_number),
'ssl_exp_date'=>urlencode($ssl_exp_date),
'ssl_cvv2cvc2_indicator'=>urlencode($ssl_cvv2cvc2_indicator),
'ssl_cvv2cvc2'=>urlencode($ssl_cvv2cvc2),
'ssl_customer_code'=>urlencode($ssl_customer_code),
'ssl_invoice_number'=>urlencode($ssl_invoice_number),
);
//initialize the post string variable
$fields_string = '';
//build the post string
foreach($fields as $key=>$value) { $fields_string .=$key.'='.$value.'&'; }
rtrim($fields_string, "&");
//open curl session
$ch = curl_init();
//begin seting curl options
//set URL
curl_setopt($ch, CURLOPT_URL, $url);
//set method
curl_setopt($ch, CURLOPT_POST, 1);
//set post data string
curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
//these two options are frequently necessary to avoid SSL errors with PHP
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
//perform the curl post and store the result
$result = curl_exec($ch);
//close the curl session
curl_close($ch);
//a nice message to prevent people from seeing a blank screen
echo "Processing, please wait..."
?>