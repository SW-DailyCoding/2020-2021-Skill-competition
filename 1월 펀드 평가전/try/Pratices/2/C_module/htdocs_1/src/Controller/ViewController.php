<?php 
namespace Controller;

use App\DB;

class ViewController {
    function index() {
        view("index");
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
        view("investor");
    }
    
    function sign() {
        view("sign");
    }

    function login() {
        view("login");
    }

    
}