<?php

namespace Controller;

use App\DB;

class ApiController {
    function nihList() {
       extract($_GET);

       if(!isset($_GET['pageNo'])) {
           go("/nihList", "필수값이 들어있지 않습니다.");
       } 
       if(!isset($_GET['numOfRows'])) {
           go("/nihList", "필수값이 들어있지 않습니다.");
       }

       $pageNo = $pageNo - 1;
       $numOfRows = $numOfRows;

       if(count($_GET) == 3) {
           $cultures = DB::fetchAll("SELECT * FROM cultures WHERE LIKE '%$bcodeName%' LIMIT $pageNo, $numOfRows" );
       } else  {
           $cultures = DB::fetchAll("SELECT * FROM cultures LIMIT $pageNo, $numOfRows");
       }

       echo "numOfRows: " . $numOfRows ."<br>";
       echo "pageNo :" . $pageNo + 1 . "<br>";
       echo "totalCount" . count($cultures) . "<br><br>";

       json_response();
    }

    function showList() {
        $data = [];
        echo json_encode($data);
    }
}