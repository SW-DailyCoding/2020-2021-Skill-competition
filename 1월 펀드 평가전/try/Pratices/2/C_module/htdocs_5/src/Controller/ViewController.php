<?php 
namespace Controller;

use App\DB;

class ViewController {
    function index() {
        $funds = DB::fetchAll("SELECT * FROM funds ORDER BY fund_success DESC LIMIT 4");
        view("index", compact("funds"));
    }

    function register() {
        view("register");
    }

    function view() {
        $funds = DB::fetchAll("SELECT * FROM funds ORDER BY fund_endDate DESC");
        $funds = pagination($funds);

        view("view", compact("funds"));
    }

    function investor() {
        extract($_GET);
        $order = isset($order) ? $order : "invest_name";
        $investors = DB::fetchAll("SELECT  * FROM investors ORDER BY $order DESC");
        $investors = pagination($investors);
        view("investor", compact("investors", "order"));
    }
    
    function sign() {
        view("sign");
    }

    function login() {
        view("login");
    }

    
}