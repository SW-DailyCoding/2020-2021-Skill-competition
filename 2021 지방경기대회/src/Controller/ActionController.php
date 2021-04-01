<?php

namespace Controller;
use App\DB;

class ActionController {
    function getCulture() {
<<<<<<< HEAD
        DB::query("DELETE FROM cultures");

        $xml = simplexml_load_file(SRC . "/nihList.xml");
        $totalCnt = $xml->totalCnt;


        for($i  = 0; $i < $totalCnt; $i++) {
            $item = $xml->item[$i];
            $id = (int)$item->sn;
 
=======
        // DB::query("DELETE FROM cultures");

        $xml = simplexml_load_file(SRC . "/nihList.xml");


        foreach($xml->item as $item) {
            $id = (int)$item->sn;
>>>>>>> 49e8f1dc83a928681dabe73b746a73a6c2608170
            $no = (int)$item->no;
            $name = (string)$item->ccmaName;
            $sno = (int)$item->crltsnoNm;
            $nm = (string)$item->ccbaMnm1;
<<<<<<< HEAD
            $kdcd = (string)$item->ccbaKdcd;
            $ctcd = (string)$item->ccbaCtcd;
            $asno = (string)$item->ccbaAsno;

            $path = "{$kdcd}_{$ctcd}_{$asno}";
            $xml2  = simplexml_load_file(SRC . "/detail/$path.xml");
            $xml2 = $xml2->item;
            // var_dump($xml2);

            $ccma = (string)$xml2->ccmaName;
            $snoNm = (string)$xml2->crltsnoNm;
            $Mnm1 = (string)$xml2->ccbaMnm1;

            DB::query("INSERT INTO cultures(id, no, name, sno, nm, kdcd, ctcd, asno, ccma, snoNm, Mnm1) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
               $id, $no, $name, $sno, $nm, $kdcd, $ctcd, $asno, $ccma, $snoNm, $Mnm1
            ]);

        }
    }
    
=======
            $kdcd = (int)$item->ccbaKdcd;
            $ctcd = (int)$item->ccbaCtcd;
            $asno = (int)$item->ccbaAsno;

            DB::query("INSERT INTO cultures(id, no, name, sno, nm, kdcd, ctcd, asno) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [
               $id, $no, $name, $sno, $nm, $kdcd, $ctcd, $asno
            ]);
        }
    }
>>>>>>> 49e8f1dc83a928681dabe73b746a73a6c2608170

    function insertCalender() {
        extract($_POST);
        var_dump($_POST);

        DB::query("INSERT INTO calenders(title, content, showDate, showTime, registDt) 
        VALUES (?,  ?, ?, ?, ?)", [
            $title, $content, $showDate, $showTime, date("Y-m-d")
        ]);

        go("/calender?y=2021&m=03", "일정을 추가했습니다.");
    }

<<<<<<< HEAD

    function updateCultures() {

    }

    function deleteCultures() {

    }


    function updateCalender() {
        extract($_POST);
        $id = $_GET['id'];
        var_dump($id);
=======
    function updateCalender() {
        extract($_POST);
        $id = $_GET['id'];
        // var_dump($id);
>>>>>>> 49e8f1dc83a928681dabe73b746a73a6c2608170
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

<<<<<<< HEAD
    // function getDetail() {


        
    //     //    $xml2 = simplexml_load_file(SRC . "/detail");
    //     foreach($xml2->item as $item) {
    //         // var_dump($item->ccbaKdcd);
    //         $ccbaMn1 = (int)$item->ccbaMn1;
    //         $bcodeName = (string)$item->bcodeName;
    //         $imageUrl = (string)$item->ccmaName;
    //         $sno = (int)$item->crltsnoNm;
    //         $content = (string)$item->content;

    //         DB::query("INSERT INTO cultures(id, no, name, sno, nm, kdcd, ctcd, asno) 
    //         VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [
    //            $id, $no, $name, $sno, $nm, $kdcd, $ctcd, $asno
    //         ]);
    //     }
    // }
=======
>>>>>>> 49e8f1dc83a928681dabe73b746a73a6c2608170
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


<<<<<<< HEAD
    // }

// }

// }
    }
=======
    }

// }

// }
>>>>>>> 49e8f1dc83a928681dabe73b746a73a6c2608170
