<?php

namespace Controller;

use App\DB;

class ViewController {
    function indexPage() {
        $funds = DB::fetchAll("SELECT * FROM funds ORDER BY fund_suc DESC LIMIT 4");

        //fund_suc
        //fund_total
        //fund_onwer
        //current
        //
        view("index", compact("funds"));

    }

    function viewPage() {
        $funds = DB::fetchAll("SELECT * FROM funds");
        // $funds = pagenation($funds);

        view("view", compact("funds"));
    }

    function adminPage() {
        view("admin");
    }

    function investorPage() {
        view("investor");
    }
    
    function profilePage() {
        view("profile");
    }
    function registerPage() {
        if(!user()) back("이용자만 가능합니다");
        view("register");
    }

    function insertFund() {
        extract($_POST);
        var_dump($_POST);
        // $registerDate = $registerDate . " " . $fund_endDate_time;
      
        DB::query("INSERT INTO funds(fund_num, fund_name, fund_endDate, fund_total, fund_owner) VALUES(?, ?, ?, ?, ?)", [$registerNumber, $registerName, $registerDate, $registerMoney, user()->joinEmail]);

        go("/", "펀드가 등록되었습니다.");
    }

}