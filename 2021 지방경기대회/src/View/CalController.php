<?php
namespace App\Controller;

class CalController
{
    public function makeData($year, $month){
        $first = strtotime("{$year}-{$month}-1"); //해당월의 1일을 나타내는 날짜
<<<<<<< HEAD
        $first2 = strtotime("{$year}-1");
        $start = $first; //해당월을 그리기 위해 시작하는 날짜
        $start2 = $first;

=======
        $first2 = strtotime("{$year}");
        $start = $first; //해당월을 그리기 위해 시작하는 날짜
>>>>>>> 49e8f1dc83a928681dabe73b746a73a6c2608170
        while(true){
            $day = date('w', $start);  //date 함수의 소문자 w는 요일을 0~6까지 숫자로 표현한다.
            if($day == 0) break; //일요일을 찾을때까지 하루씩 빼주면서 간다
            $start = strtotime(date('Y-m-d', $start) . "-1 day");
<<<<<<< HEAD
            $start2 = strtotime(date('Y-m-d', $start) . "-1 month");
        }

        // var_dump(date('Y') -1 );
        $nextYear = date('Y', strtotime("+1 year", $first2));  //현재 1일에서 1달을 더하고 빼서 다음달과 이전달을 구한다.
        $beforeYear = date('Y', strtotime("-1 year", $first2));

        // var_dump($nextYear);
        // var_dump($beforeYear);
=======
        }

        var_dump(date('Y') -1 );
        $nextYear = date('Y-m-d', strtotime("+1 year", $first2));  //현재 1일에서 1달을 더하고 빼서 다음달과 이전달을 구한다.
        $beforeYear = date('Y-m-d', strtotime("-1 year", $first2));

        var_dump($nextYear);
        var_dump($beforeYear);
>>>>>>> 49e8f1dc83a928681dabe73b746a73a6c2608170

        $nextMonth = date('Y-m-d', strtotime("+1 months", $first));  //현재 1일에서 1달을 더하고 빼서 다음달과 이전달을 구한다.
        $beforeMonth = date('Y-m-d', strtotime("-1 months", $first));

        $last = strtotime($nextMonth . "-1 day");
        $end = $last;
<<<<<<< HEAD
        $end2 = strtotime($nextMonth . "-1 months");
        // var_dump($end2);
=======
>>>>>>> 49e8f1dc83a928681dabe73b746a73a6c2608170
        while(true){
            $day = date('w', $end);
            if($day == 6) break; //토요일을 찾을때까지 하루씩 더해주면서 간다
            $end = strtotime(date('Y-m-d', $end) . "+1 day");
        }
        
        $nextQuery = "?y=" . date('Y', strtotime($nextMonth)) . "&m=" . date("m", strtotime($nextMonth));
        $beforeQuery = "?y=" . date('Y', strtotime($beforeMonth)) . "&m=" . date("m", strtotime($beforeMonth));

<<<<<<< HEAD
        $beforeP = "?y=" . date($nextYear);
        $nextP  = "?y=" . date($beforeYear);

        // var_dump($nextP);
        // var_dump($beforeP);

        return ['first'=>$first, 'start'=>$start, 'last'=>$last, 'end'=>$end, 'nextQ'=>$nextQuery, 'beforeQ' => $beforeQuery, 'beforeP'=> $beforeP, 'nextP' => $nextP, "end2"=>$end, "start2" => $start2 ];
=======
        $beforeP = "?y=" . date('Y', strtotime($nextYear));
        $nextP  = "?y=" . date('Y', strtotime($beforeYear));

        return ['first'=>$first, 'start'=>$start, 'last'=>$last, 'end'=>$end, 'nextQ'=>$nextQuery, 'beforeQ' => $beforeQuery, 'beforeP'=> $beforeP, 'nextP' => $nextP ];
>>>>>>> 49e8f1dc83a928681dabe73b746a73a6c2608170
    }
}