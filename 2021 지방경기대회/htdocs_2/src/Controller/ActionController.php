<?php

namespace Controller;
use App\DB;

class ActionController {
    function getCulture() {
        // DB::query("DELETE FROM cultures");

        $xml = simplexml_load_file(SRC . "/nihList.xml");


        foreach($xml->item as $item) {
            $id = (int)$item->sn;
            $no = (int)$item->no;
            $name = (string)$item->ccmaName;
            $sno = (int)$item->crltsnoNm;
            $nm = (string)$item->ccbaMnm1;
            $kdcd = (int)$item->ccbaKdcd;
            $ctcd = (int)$item->ccbaCtcd;
            $asno = (int)$item->ccbaAsno;

            DB::query("INSERT INTO cultures(id, no, name, sno, nm, kdcd, ctcd, asno) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [
               $id, $no, $name, $sno, $nm, $kdcd, $ctcd, $asno
            ]);
        }
    }

    function insertCalender() {
        extract($_POST);
        var_dump($_POST);

        DB::query("INSERT INTO calenders(title, content, showDate, showTime, registDt) 
        VALUES (?,  ?, ?, ?, ?)", [
            $title, $content, $showDate, $showTime, date("Y-m-d")
        ]);

        go("/calender?y=2021&m=03", "일정을 추가했습니다.");
    }

    function updateCalender() {
        extract($_POST);
        $id = $_GET['id'];
        // var_dump($id);
        $calender = DB::find("calenders", $id);
        if(!$calender) back("대상을 찾을 수 없습니다.");

        DB::query("UPDATE calenders SET title = ?, showDate = ?, showTime = ?, content = ?, updtDt = ? WHERE id = ?", [
            $title, $showDate, $showTime, $content, date("Y-m-d"), $id
        ]);

        go("/calender?y=2021&m=03", "일정을 수정했습니다.");
    }

    function deleteCalender() {
        // var_dump("!");
        $id = $_GET['id'];

        $calender = DB::find("calenders", $id);
        // var_dump($calender);
        if(!$calender) back("대상을 찾을 수 없습니다.");

        DB::query("DELETE FROM calenders WHERE id = ? ", [$id]);
        go("/calender?y=2021&m=03", "일정을 삭제했습니다.");
    }

    // function getCalender() {
    //     $xml = 
    // }

    // function getDetail() {
    //     DB::query("DELETE FROM Details");

    //     $xml2 = simplexml_load_file(SRC . "/detail");

    //     foreach($xml2->item as $item) {
    //         // var_dump($item->ccbaKdcd);
    //         $id = (int)$item->sn;
    //         $no = (int)$item->no;
    //         $name = (string)$item->ccmaName;
    //         $sno = (int)$item->crltsnoNm;
    //         $nm = (string)$item->ccbaMnm1;
    //         $kdcd = (int)$item->ccbaKdcd;
    //         $ctcd = (int)$item->ccbaCtcd;
    //         $asno = (int)$item->ccbaAsno;

    //         // DB::query("INSERT INTO cultures(id, no, name, sno, nm, kdcd, ctcd, asno VALUES (?,?,?,?,?,?,?,?)", [$id, $no, $name, $sno, $nm, $kdcd, $ctcd, $asno]);
    //         DB::query("INSERT INTO cultures(id, no, name, sno, nm, kdcd, ctcd, asno) 
    //         VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [
    //            $id, $no, $name, $sno, $nm, $kdcd, $ctcd, $asno
    //         ]);
    //     }


    }

// }

// }