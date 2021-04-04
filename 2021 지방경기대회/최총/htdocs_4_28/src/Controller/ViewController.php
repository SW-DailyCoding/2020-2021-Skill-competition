<?php 

namespace Controller;

use App\DB;

class ViewController {
    function index() {
        view("index");
    }

    function history() {
        view("history");
    }

    function number() {
        view("number");
    }

    function culture() {
        extract($_GET);
        // $bcodeList = ["전통 공연·예술", "전통기술", "전통지식", "구전 전통 및 표현", "전통 생활관습", "의례·의식", "전통 놀이", "무예"];
        // $type = isset($_GET['type'])?$_GET['type'] : "list";
        // $bcode = isset($_GET['bcode'])?$_GET['bcode']  : "";
        // $bcodeName = $bcode !== "" ? $bcodeList[$bcode] : "";
        

        if(isset($_GET['type'])) {
            $cultures = DB::fetchAll("SELECT * FROM cultures WHERE bcodeName = ?", [$type]);
        } else {
            $cultures = DB::fetchAll("SELECT * FROM cultures");      
        }
        view("culture", pagination($cultures));
    }

    function registerCulture() {
        view("registerCulture");
    }

    function cultures() {   
        view("cultures");
    }

    function y_calender() {
        $year = $_GET['y'];
        $first = "$year-01-01";
        $last = "$year-12-31";

        $calenders = DB::fetchAll("SELECT * FROM calenders WHERE showDate >= ?
        AND showDate <= ? ORDER BY showDate ASC", [$first, $last]);
        view("y_calender", compact("calenders", "year"));
    }

    function m_calender() {
        $calenders = DB::fetchAll("SELECT * FROM calenders");
        view("m_calender", compact("calenders"));
    }

    function calenders() {
        $id = $_GET['id'];
        $festival = DB::find("calenders", $id);
        if(!$festival) back("대상을 찾을 수 없습니다"); 

        $calenders = DB::fetchAll("SELECT * FROM calenders WHERE id = ?", [$id]);
        var_dump($calenders);
        view("calenders", compact("calenders"));
    }

    function openApiCulture() {
        
    }
}