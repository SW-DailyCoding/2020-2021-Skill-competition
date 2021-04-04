<?php 

namespace Controller;

use App\DB;

class ActionController {
    function init() {
        DB::query("DELETE FROM cultures");

        $xml = simplexml_load_file(SRC . "/nihList.xml");
        $totalCnt = $xml->totalCnt;

        for($i = 0; $i < $totalCnt; $i++) {
            $item = $xml->item[$i];

            $no = (int)$item->no;
            $ccmaName = (string)$item->ccmaName;
            $crltsnoNm = (string)$item->crltsnoNm;
            $ccbaMnm1 = (string)$item->ccbaMnm1;
            $ccbaMnm2 = (string)$item->ccbaMnm2;
            $ccbaCtcdNm = (string)$item->ccbaCtcd;
            $ccsiName = (string)$item->ccsiName;
            $ccbaKdcd = (string)$item->ccbaKdcd;
            $ccbaAsno = (string)$item->ccbaAsno;
            $ccbaCncl = (string)$item->ccbaCncl;
            $ccbaCpno = (string)$item->ccbaCpno;
            $longitude = (string)$item->longitude;
            $latitude = (string)$item->longitude;

            $path = "{$ccbaKdcd}_{$ccbaCtcdNm}_{$ccbaAsno}";
            $xml2 = simplexml_load_file(SRC . "/detail/$path.xml");
            $xml2 = $xml2->item;

            $bcodeName = (string)$xml2->bcodeName; 
            $mcodeName = (string)$xml2->mcodeName; 
            $scodeName = (string)$xml2->scodeName; 
            $ccbaQuan = (string)$xml2->ccbaQuan;
            $ccbaAsdt = (string)$xml2->ccbaAsdt;
            $ccbaAsdt = substr($ccbaAsdt, 0, 4)."-".substr($ccbaAsdt, 4, 2)."-".substr($ccbaAsdt, 6,2);
            $ccsi = (string)$xml2->ccsiName;
            $ccbaLcad = (string)$xml2->ccbaLcad;
            $ccceName = (string)$xml2->ccceName;
            $ccbaPoss = (string)$xml2->ccbaPoss;
            $ccbaAdmin = (string)$xml2->ccbaAdmin;
            $ccbaCndt = (string)$xml2->ccbaCndt;
            $image = (string)$xml2->imageUrl;
            $content = (string)$xml2->content;
            
            $sql = "INSERT INTO cultures(
                `no`,
                `ccmaName`,
                `crltsnoNm`,
                `ccbaMnm1`,
                `ccbaMnm2`,
                `ccbaCtcdNm`,
                `ccsiName`,
                `ccbaKdcd`,
                `ccbaAsno`,
                `ccbaCncl`,
                `ccbaCpno`,
                `longitude`,
                `latitude`,
                `bcodeName`,
                `mcodeName`,
                `scodeName`,
                `ccbaQuan`,
                `ccbaAsdt`,
                `ccsi`,
                `ccbaLcad`,
                `ccceName`,
                `ccbaPoss`,
                `ccbaAdmin`,
                `ccbaCndt`,
                `image`,
                `content`
            ) VALUES (
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?
            )";
            DB::query($sql, [
                $no, 
                $ccmaName, 
                $crltsnoNm, 
                $ccbaMnm1, 
                $ccbaMnm2, 
                $ccbaCtcdNm, 
                $ccsiName, 
                $ccbaKdcd, 
                $ccbaAsno, 
                $ccbaCncl, 
                $ccbaCpno, 
                $longitude, 
                $latitude, 
                $bcodeName,
                $mcodeName,
                $scodeName,
                $ccbaQuan,
                $ccbaAsdt,
                $ccsi,
                $ccbaLcad,
                $ccceName,
                $ccbaPoss,
                $ccbaAdmin,
                $ccbaCndt,
                $image,
                $content
            ]);
        }
    }

    function insertCultures() {
        extract($_POST);
        
        // $image = $_FILES["image"];
        // if($_FILES['image'] !== []) $image = file_upload($_FILES['image']);
        // move_uploaded_file();

   
        DB::query("INSERT INTO cultures(  
        `ccmaName`,
        `ccbaMnm1`,
        `crltsnoNm`,
        `ccbaQuan`,
        `no`,
        `ccbaAsno`,
        `ccbaKdcd`,
        `content`, 
        `ccbaPoss`,
        `ccbaCtcdNm`) 
        VALUES  (
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?)", [    
        $ccmaName,
        $ccbaMnm1,
        $crltsnoNm,
        $ccbaQuan,
        $no,
        $ccbaAsno,
        $ccbaKdcd, 
        $content,
        $ccbaPoss,
        $ccbaCtcdNm
        ]);

        go("/culture", "문화재가 등록되었습니다.");
    }

    function updateCultures() {

    }

    function deleteCultures() {
        extract($_GET);

        DB::query("DELETE FROM cultures WHERE id = ?", [$id]);
        go("/cultures", "삭제가 되었습니다.");
    }

    function insertCalender() {
        extract($_POST);
        DB::query("INSERT INTO calenders(showDate, showName, showTime, oraganizer, place, cast, rm, registDt) 
        VALUES(
            ?, ?, ?, ?, ?, ?, ?, ?
        )", [
            $showDate, $showName, $showTime, $oraganizer, $place, $cast, $rm, date("Y-m-d")
        ]);
        go("/m_calender?y=2021&m=03", "일정이 추가되었습니다.");
    }

    function updateCalender() {
        extract($_POST);

        $id = $_GET['id'];
        $calender = DB::find("calenders", $id);
        if(!$calender) back("대상을 찾을 수 없습니다.");

        DB::query("UPDATE calenders SET showName = ?, showDate = ?, showTime = ?, oraganizer = ?, place = ?, cast = ?, rm = ?, updtDt =? WHERE  id = ?",
        [$showName, $showDate, $showTime, $oraganizer, $place, $cast, $rm, date("Y-m-d"), $id]);
        
        go("/m_calender?y=2021&m=03", "일정을 수정했습니다.");
    }

    function deleteCalender() {
        $id = $_GET['id'];

        $calender = DB::find("calenders", $id);
        if(!$calender) back("대상을 찾을 수 없습니다.");

        DB::query("DELETE FROM calenders WHERE id = ?", [$id]);
        go("/m_calender?y=2021&m=03", "일정을 삭제했습니다.");
    }

}