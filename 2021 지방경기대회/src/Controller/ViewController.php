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
        // echo ($_GET['y'];);

        // var_dump($_GET['m']);
        $year = $_GET['y'];

        // var_dump($year);
        $first = "$year-01-01" ;
        $last = "$year-12-31" ;
        
        $calenders = DB::fetchAll("SELECT * FROM calenders WHERE showDate >= ?
                                                AND showDate <= ? ORDER BY `showDate` ASC", [$first, $last]);
        // var_dump($calenders);
        view("y_calender", compact("calenders", "year"));
    }
    
    function calenders(){

        $id = $_GET['id'];
        $festival = DB::find("calenders", $id);
        if(!$festival) back("대상을 찾을 수 없습니다.");

        $calenders = DB::fetchAll("SELECT * FROM calenders WHERE id = ?", [$id]);

        view("festival", compact("festival", "calenders"));
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
        // var_dump(DB::fetchAll("SELECT * FROM cultures ORDER BY id DESC"));
        $cultures = DB::fetchAll("SELECT * FROM cultures");
        $cultures = pagination($cultures);
        // var_dump($)
        // var_dump($cultures);
        $type = isset($_GET['type']) ? $_GET['type'] : "list" ;
        // var_dump($cultures);
        view("culture", compact("cultures", "type"));
    }

    function openApi() {
        view("open-Api");
    }
}