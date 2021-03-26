<?php
    date_default_timezone_set('Asia/Seoul');

    require_once VIEW . "/CalController.php";

    use App\Controller\CalController;

    $c = new CalController();
    // var_dump($c);
//    if(!['y']) $GET_['y'] = "2021";
    $y = 2021 ? $_GET['y'] : $_GET['y'] ;
    $m =  3 ? $_GET['m']  :  $_GET['m'];
    $data = $c->makeData($y, $m);
    $day = $data['start']; //달력그리기 시작하는 날짜
?>
<div class="my-4 d-end mr-5">
            <i class="fa fa-home mr-3"></i>
            <i class="fa fa-chevron-right mr-3"></i>
            <div class="em-095 mr-3">무형문화재 현황 </div>
            <i class="fa fa-chevron-right mr-3"></i>
            <div class="em mr-3">공연</div>
            <i class="fa fa-chevron-right mr-3"></i>
            <div class="em mr-3 t-bold t-sub">월간 공연 일정</div>
        </div>
        <!-- /공동 영역 -->
        
        <!-- 월간 일정 영역-->
        <div id="mon" class="layout my-5">
            <div class="container">
                <div class="content container my-5">
                    <div class="title text-center mb-5">
                        <p class="em-24">월간<strong> 공연일정</strong></p>
                        <p class="em-19 mt-2">안녕하세요</p>
                    </div>
                    <div class="calender">
                        <div class="calender_header d-around">
                            <div>
                                <a href="/calender<?=$data['beforeQ'] ?>"><i class="fa fa-chevron-left mr-3"></i></a>
                                <a href="/calender<?=$data['nextQ'] ?>">
                                <i class="fa fa-chevron-right mr-3"></i>
                            </a>
                            </div>
                            <div class="em-16 text-center">
                                <p><?=$y?>년<br/><span class="em-08 t-sub t-bold"><?=$m?>월</span></p>
                            </div>
                            <div class="tab_btn" data-toggle="modal" data-target="#insert-calender">일정등록</div>
                        </div>
                        <div class="calender_body  mt-5">
                            <div class="c_head row container text-center">
                                <div class="head t-red">SUN</div>
                                <div class="head">MON</div>
                                <div class="head">TUE</div>
                                <div class="head">WED</div>
                                <div class="head">THU</div>
                                <div class="head">FRI</div>
                                <div class="head t-blue">SAT</div>
                            </div>
                            <div class="c_body mt-3 row">
                            <?php while($day <= $data['end']) : ?>
                                <div class="item ">
                                    <?= date('d', $day) ?> 
                                    <?php foreach($calenders as $calender) :?>
                                        <?php if(substr($calender->showDate, 8, 10) == date('d', $day) && substr($calender->showDate, 5, 2) == date('m', $day) ):?>
                                            <div class="culture_item" onclick="location.href='/calender/calenders?id=<?=$calender->id?>'"><?=$calender->title?></div>
                                            <!-- <div class="culture_item" data-toggle="modal" data-target="" onclick="location.href='/update/cultures/<?=$calender->id?>'"><?=$calender->title?></div> -->
                                            <?php endif;?>
                                        <?php if($calender !==null && $calender->showDate == $day):?>
                                            <!-- <div class="" onclick="location.href='/cultures/<?=$calender->id?>'"><?=$calender->title?></div> -->
                                        <?php endif;?>
                                    <?php endforeach; ?>
                                </div>
                                <?php
                                    $day = strtotime( date('Y-m-d', $day) . "+1 day"); 
                                ?>
                            <?php endwhile; ?>
                                <!-- <div class="row container">
                                    <div class="item b-gray">
                                        <div class="t-bold">1</div>
                                        <p class="mt-2">안녕</p>
                                    </div>
                                    <div class="item">
                                        <div class="t-bold">1</div>
                                        <p class="mt-2">안녕</p>
                                    </div>
                                    <div class="item">
                                        <div class="t-bold">1</div>
                                        <p class="mt-2">안녕</p>
                                    </div>
                                    <div class="item">
                                        <div class="t-bold">1</div>
                                        <p class="mt-2">안녕</p>
                                    </div>
                                    <div class="item">
                                        <div class="t-bold">1</div>
                                        <p class="mt-2">안녕</p>
                                    </div>
                                    <div class="item">
                                        <div class="t-bold">1</div>
                                        <p class="mt-2">안녕</p>
                                    </div>
                                    <div class="item b-gray">
                                        <div class="t-bold">1</div>
                                        <p class="mt-2">안녕</p>
                                    </div>
                                </div>
                                <div class="row container">
                                    <div class="item b-gray">
                                        <div class="t-bold">1</div>
                                        <p class="mt-2">안녕</p>
                                    </div>
                                    <div class="item">
                                        <div class="t-bold">1</div>
                                        <p class="mt-2">안녕</p>
                                    </div>
                                    <div class="item">
                                        <div class="t-bold">1</div>
                                        <p class="mt-2">안녕</p>
                                    </div>
                                    <div class="item">
                                        <div class="t-bold">1</div>
                                        <p class="mt-2">안녕</p>
                                    </div>
                                    <div class="item">
                                        <div class="t-bold">1</div>
                                        <p class="mt-2">안녕</p>
                                    </div>
                                    <div class="item">
                                        <div class="t-bold">1</div>
                                        <p class="mt-2">안녕</p>
                                    </div>
                                    <div class="item b-gray">
                                        <div class="t-bold">1</div>
                                        <p class="mt-2">안녕</p>
                                    </div>
                                </div> -->
                                <!-- <div class="row container">
                                    <div class="item b-gray">
                                        <div class="t-bold">1</div>
                                        <p class="mt-2">안녕</p>
                                    </div>
                                    <div class="item">
                                        <div class="t-bold">1</div>
                                        <p class="mt-2">안녕</p>
                                    </div>
                                    <div class="item">
                                        <div class="t-bold">1</div>
                                        <p class="mt-2">안녕</p>
                                    </div>
                                    <div class="item">
                                        <div class="t-bold">1</div>
                                        <p class="mt-2">안녕</p>
                                    </div>
                                    <div class="item">
                                        <div class="t-bold">1</div>
                                        <p class="mt-2">안녕</p>
                                    </div>
                                    <div class="item">
                                        <div class="t-bold">1</div>
                                        <p class="mt-2">안녕</p>
                                    </div>
                                    <div class="item b-gray">
                                        <div class="t-bold">1</div>
                                        <p class="mt-2">안녕</p>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="eng_title">
                    <span>월간<strong> 공연일정</strong></span>
                </div>
            </div>
        </div>
        <!-- /월간 일정 영역-->
    </div>



<form action="/insert/calenders" id="insert-calender" class="modal fade" method="post">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <div class="em-2">일정 등록</div>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label>등록 날짜</label>
                    <input type="date" class="form-control" name="showDate">
                </div>
                <div class="form-group">
                    <label>등록 시간</label>
                    <input type="time" class="form-control" name="showTime">
                </div>
                <div class="form-group">
                    <label>제목</label>
                    <input type="text" class="form-control" name="title">
                </div>
                <div class="form-group">
                    <label>내용</label>
                    <input type="text" class="form-control" name="content">
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn-fill">등록</button>
            </div>
        </div>
    </div>
</form>


<style>
        /* .header {
            display:flex;
            justify-content:space-between;
            width:500px;
        }
        .cal-body{
            display:grid;
            grid-template-columns: repeat(7, 1fr);
            grid-template-rows:40px;
            grid-auto-rows:80px;
            gap:10px;
            width:500px;
        }
        .item {
            box-shadow:1px 1px 1px 1px rgba(0,0,0,0.3);
            border-radius:5px;
            display:flex;
            justify-content:center;
            align-items:center;
        }*/
        .item.current {
            font-weight:800;
        } 
    </style>