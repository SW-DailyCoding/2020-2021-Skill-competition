<?php

namespace App\Controller;

class CalController {
    public function makeData($year, $month) {
        $first = strtotime("{$year}-{$month}-1"); 
        $first2 = strtotime("{$year}-1");
        $start = $first; 
        $start2 = $first;

        while(true){
            $day = date('w', $start); 
            if($day == 0) break;  
            $start = strtotime(date('Y-m-d', $start) . "-1 day");
            $start2 = strtotime(date('Y-m-d', $start) . "-1 month");
        }

        $nextYear = date("Y", strtotime("+1 year", $first2));
        $beforeYear = date("Y", strtotime("-1 year", $first2));

        $nextMonth = date("Y-m-d", strtotime("+1 months", $first));
        $beforeMonth = date("Y-m-d", strtotime("-1 months", $first));

        $last = strtotime($nextMonth . "-1 day");
        $end = $last;
        var_dump($end);

        while(true){
            $day = date('w', $end);
            if($day == 6) break; 
            $end = strtotime(date('Y-m-d', $end) . "+1 day");
        }
        
        $nextQuery = "?y=" . date('Y', strtotime($nextMonth)) . "&m=" . date("m", strtotime($nextMonth));
        $beforeQuery = "?y=" . date('Y', strtotime($beforeMonth)) . "&m=" . date("m", strtotime($beforeMonth));

        $beforeP = "?y=" . date($nextYear);
        $nextP  = "?y=" . date($beforeYear);
        return ['first'=>$first, 
                    'start'=>$start,
                    'last'=>$last,
                    'nextQ'=>$nextQuery,
                    'beforeQ'=>$beforeQuery,
                    'start2'=>$start2,
                    'end'=>$end,
                    'nextP'=>$nextP,
                    'beforeP'=>$beforeP,
    ];
    }
}