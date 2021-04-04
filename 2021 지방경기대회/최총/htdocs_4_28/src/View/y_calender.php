<?php
date_default_timezone_get('Asia/Seoul');

require VIEW . "/CalController.php";

use App\Controller\CalController;

$c = new CalController();

$y = 2021 ? $_GET['y'] : $_GET['y'];
$m = 3 ? $_GET['m'] : $_GET['m'];

$data = $c->makeData($y, $m);
// var_dump($data);
$day = $data['start2'];
?>

<!-- 공동 영역 -->
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
                                <a href="/m_calender<?=$data['beforeP']?>">
                                    <i class="fa fa-chevron-left mr-3"></i>
                                </a>
                                <a href="/m_calender<?=$data['nextP']?>">
                                    <i class="fa fa-chevron-right mr-3"></i>
                                </a>
                            </div>
                            <div class="em-16 text-center">
                                <p><?=$y?><br/></p>
                            </div>
                            <div class="btn-fill pointer" data-target="#insert-calender" data-toggle="modal">일정등록</div>
                        </div>
                        <div class="calender_body  mt-5">
                            <div class="c_body mt-3">
                               <?php for($i = 1; $i < 13; $i++) :?>
                                <div class="t-row d-column">
                                    <div class="mx-20 text-left em-22"><?=$i?></div>
                                </div>
                                <?php foreach($calenders as $calender):?>
                                    <?php if(substr($calender->showDate, 6, 1) == $i):?>
                                        <div class="row">
                                            <div class="mx-60 text-left">
                                                <div onclick="location.href='/calender/calenders?id=<?=$calender->id?>'"><?=$calender->showName?></div>
                                            </div>
                                        </div>
                                    <?php endif;?>
                                <?php endforeach;?>
                                <?php endfor;?>
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

    <form action="/insert/calenders" method="post" id="insert-calender" class="modal fade">
        <div class="modal-dialog lg">
            <div class="modal-content">
                <div class="modal-header">
                    일정등록
                </div>
                <div class="modal-body">
                    <div class="row">
                    <div class="form-group">
                        <label for="">공연명</label>
                        <input type="text" class="form-control showName" name="showName">
                    </div>
                    <div class="form-group">
                        <label for="">공연일</label>
                        <input type="date" class="form-control showDate" name="showDate">
                    </div>
                    <div class="form-group">
                        <label for="">공연시간</label>
                        <input type="time" class="form-control showTime" name="showTime">
                    </div>
                    </div>
                
                    <div class="row">
                        <div class="form-group">
                            <label for="">주관</label>
                            <input type="text" class="form-control oraganizer" name="oraganizer">
                        </div>
                        <div class="form-group">
                            <label for="">공연장소</label>
                            <input type="text" class="form-control place" name="place">
                        </div>
                        <div class="form-group">
                            <label for="">출연진</label>
                            <input type="text" class="form-control cast" name="cast">
                        </div>
                        <div class="form-group">
                            <label for="">공연내용</label>
                            <input type="text" class="form-control rm" name="rm">
                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button class="btn-fill">일정등록</button>
                    <button class="btn-border" data-dismiss="modal">취소</button>
                </div>
            </div>
        </div>
    </form>