<?php

namespace Controller;
use App\DB;

class ViewController {
    function index() {
        view("index");
    }

    function number() {
        view("number");
    }

    function history() {
        view("history");
    }

    function y_calender() {
        $calenders = DB::fetchAll("SELECT * FROM calenders WHERE showDt >= date(2021-01-01)
                                                and showDt <= date(2021-12-31)");
        view("y_calender", compact("calenders"));
    }
    function cultures($id) {
        $culture = DB::find("cultures", $id);
        if(!$culture) back("대상을 찾을 수 없습니다.");
    }

    function calender() {
        $calenders = DB::fetchAll("SELECT * FROM calenders");
        view("calender", compact("calenders"));
    }

    function culture() {
        view("culture", pagination(DB::fetchAll("SELECT * FROM cultures ORDER BY id DESC")));
    }

    function openApi() {
        view("open-Api");
    }
}