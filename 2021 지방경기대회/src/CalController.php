<?php
namespace App\Controller;

class CalController
{
    public function makeData($year, $month){
        $first = strtotime("{$year}-{$month}-1"); //해당월의 1일을 나타내는 날짜
        
        $start = $first; //해당월을 그리기 위해 시작하는 날짜
        while(true){
            $day = date('w', $start);  //date 함수의 소문자 w는 요일을 0~6까지 숫자로 표현한다.
            if($day == 0) break; //일요일을 찾을때까지 하루씩 빼주면서 간다
            $start = strtotime(date('Y-m-d', $start) . "-1 day");
        }

        $nextMonth = date('Y-m-d', strtotime("+1 months", $first));  //현재 1일에서 1달을 더하고 빼서 다음달과 이전달을 구한다.
        $beforeMonth = date('Y-m-d', strtotime("-1 months", $first));
        
        $last = strtotime($nextMonth . "-1 day");
        $end = $last;
        while(true){
            $day = date('w', $end);
            if($day == 6) break; //토요일을 찾을때까지 하루씩 더해주면서 간다
            $end = strtotime(date('Y-m-d', $end) . "+1 day");
        }
        
        $nextQuery = "?y=" . date('Y', strtotime($nextMonth)) . "&m=" . date("m", strtotime($nextMonth));
        $beforeQuery = "?y=" . date('Y', strtotime($beforeMonth)) . "&m=" . date("m", strtotime($beforeMonth));

        return ['first'=>$first, 'start'=>$start, 'last'=>$last, 'end'=>$end, 'nextQ'=>$nextQuery, 'beforeQ' => $beforeQuery];
    }
}