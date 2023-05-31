<?php
namespace ccxt;
include_once (__DIR__.'/../../ccxt.php');
// ----------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -----------------------------------------------------------------------------

error_reporting(E_ALL | E_STRICT);
date_default_timezone_set('UTC');

use ccxt\Precise;
use React\Async;
use React\Promise;


// import { okx } from '../../js/ccxt.js';
// AUTO-TRANSPILE //
function example() {
    return Async\async(function () {
        $my_ex = null;
        $site_my_ip = 'https://api.ipify.org/';
        //
        //
        //
        //
        //
        //
        //
        $my_ex = new \ccxt\async\okx(array());
        $my_ex->proxy_url = 'https://cors-anywhere.herokuapp.com/'; // It prepends redirect url to requests, so requests leads to call url i.e.: https://cors-anywhere.herokuapp.com/?https://target_url.com . It might be useful for simple redirection or CORS bypassing purposes (Note, this will not work for websocket connections, but only for REST calls).
        // you can also set ".proxyUrlCallback" to callback function with with signature `(url, method, headers, body)` and from there return the proxy url string.
        var_dump(Async\await($my_ex->fetch($site_my_ip)));
        //
        //
        //
        //
        //
        //
        //
        $my_ex = new \ccxt\async\okx(array());
        $my_ex->proxy_http = 'http://51.83.140.52:11230'; // same as proxyHttps // It sets a real proxy for communication, so calls are made directly to url https://target_url.com , but tunneled through a proxy server (Note, this might work for websocket connections too).
        var_dump(Async\await($my_ex->fetch($site_my_ip)));
        //
        //
        //
        //
        //
        //
        //
        $my_ex = new \ccxt\async\okx(array());
        $my_ex->proxy_socks = 'socks://127.0.0.1:1080'; // It is for socks5 proxy (Note, this might work for websocket connections too).
        var_dump(Async\await($my_ex->fetch($site_my_ip)));
    }) ();
}


Async\await(example());
