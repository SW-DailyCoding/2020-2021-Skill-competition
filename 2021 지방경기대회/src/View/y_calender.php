<?php
    date_default_timezone_set('Asia/Seoul');

    require_once VIEW . "/CalController.php";
<<<<<<< HEAD
    // $day = strtotime( date('Y-m-d', $day) . "+1 months"); 
=======

>>>>>>> 49e8f1dc83a928681dabe73b746a73a6c2608170
    use App\Controller\CalController;

    $c = new CalController();
    // var_dump($c);
//    if(!['y']) $GET_['y'] = "2021";
<<<<<<< HEAD
// var_dump($first2);
    // var_dump($_GET['y']);
    $y = 2021 ? $_GET['y'] : $_GET['y'] ;
    $m =  3 ? 1:  $_GET['m'];
    // var_dump($c->makeData());
    $data = $c->makeData($y, $m);
    // var_dump($data['start']);
    $day = $data['start2']; //달력그리기 시작하는 날짜
    // var_dump($day);
   
    // var_dump($calenders);
=======

    $y = 2021 ? $_GET['y'] : $_GET['y'] ;
    $m =  3 ? 1:  $_GET['m'];
    $data = $c->makeData($y, $m);
    // var_dump($data);
    $day = $data['start']; //달력그리기 시작하는 날짜
>>>>>>> 49e8f1dc83a928681dabe73b746a73a6c2608170
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
                        <p class="em-24">연간<strong> 공연일정</strong></p>
                        <p class="em-19 mt-2">안녕하세요</p>
                    </div>
                    <div class="calender">
                        <div class="calender_header d-around">
                            <div>
                                <a href="/y_calender<?=$data['beforeP'] ?>"><i class="fa fa-chevron-left mr-3"></i></a>
                                <a href="/y_calender<?=$data['nextP'] ?>">
<<<<<<< HEAD
                                <i class="fa fa-chevron-right mr-3"></i></a>
=======
                                <i class="fa fa-chevron-right mr-3"></i>
                            </a>
>>>>>>> 49e8f1dc83a928681dabe73b746a73a6c2608170
                            </div>
                            <div class="em-16 text-center">
                                <p><?=$y?>년<br/></p>
                            </div>
                            <div class="tab_btn" data-toggle="modal" data-target="#insert-calender">일정등록</div>
                        </div>
<<<<<<< HEAD
                          
                          
                    <div class="calender_body  mt-5">
                        <?php for($i = 1; $i < 13; $i++ ) :?>
                            <div class="t-row">     
                            <div class="mx-20 tex-left">
                            <p><?= $i?></p>
                            </div>
                            <div class="row">
                            <?php foreach($calenders as $calender ) :?>
                                <?php if(substr($calender->showDate, 6,1) == $i) :?>
                                    <div class="mx-60 tex-left">
                                    <div class="culture_item" onclick="location.href='/calender/calenders?id=<?=$calender->id?>'"> <p><?=$calender->showDate?></p></div>
                                    </div>         
                                    <?php endif;?>
                          
                             <?php endforeach ;?>
                             </div>
                              
                        </div>         
                        <?php endfor;?> 
              
                      
                              
                    </div>
               

          

        
                            <div class="c_body mt-3 ">
                            <form action="/update/calenders?id=<?=$calender->id?>" id="update-calender-<?=$calender->id?>" class="modal fade" method="post"  enctype="multipart/form-data">
=======
                        <div class="calender_body  mt-5">
                              <div class="mx-20 em-22"><?=$y?></div>
                        <?php foreach($calenders as $calender) :?>
                            <?php for($i = 1; $i < 13; $i++) :?>
                                <div><?=substr($calender->showDate, 6, 1)?></div>
                                <?php if($i ==  substr($calender->showDate, 6, 1)) :?>
                                <?php endif;?>
                            <?php endfor;?>
                                        <div class="t-row">                
                                          
                                            <div class="mx-60 tex-left">
                                                <p><?=$calender->showDate?></p> 
                                                <p>안녕</p> 
                                            </div>
                                        </div>
                                        <?php endforeach;?>
                            <div class="c_head row ">
                                
                            </div>
                            <div class="c_body mt-3 ">
                            <?php while($day <= $data['end']) : ?>
                                <div class="item ">
                                    <?= date('d', $day) ?> 
                                    <?php foreach($calenders as $calender) :?>
                                        <?php if(substr($calender->showDate, 8, 10) == date('d', $day) && substr($calender->showDate, 5, 2) == date('m', $day) ):?>
                                            <div class="culture_item" data-toggle="modal" data-target="#update-calender-<?=$calender->id?>"><?=$calender->title?></div>
                                            <!-- <div class="culture_item" data-toggle="modal" data-target="" onclick="location.href='/update/cultures/<?=$calender->id?>'"><?=$calender->title?></div> -->
                                            <?php endif;?>
                                        <?php if($calender !==null && $calender->showDate == $day):?>
                                            <!-- <div class="" onclick="location.href='/cultures/<?=$calender->id?>'"><?=$calender->title?></div> -->
                                        <?php endif;?>

                                        <form action="/update/calenders?id=<?=$calender->id?>" id="update-calender-<?=$calender->id?>" class="modal fade" method="post"  enctype="multipart/form-data">
>>>>>>> 49e8f1dc83a928681dabe73b746a73a6c2608170
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <div class="em-2">일정 수정</div>
                                                    </div>
                                                    <div class="modal-body">
                                                        <div class="form-group">
                                                            <label>공연일</label>
                                                            <input type="date" class="form-control" name="showDate">
                                                        </div>
                                                        <div class="form-group">
                                                            <label>공연시간</label>
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
                                                        <button class="btn-fill">수정</button>
                                                        <button class="btn-border" >
                                                            <div class=""><?=$calender->id?></div>
                                                            <a href="/delete/calenders?id=<?=$calender->id?>">삭제</a></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
<<<<<<< HEAD
                                        
=======

                                    <?php endforeach; ?>
                                </div>
                                <?php
                                    $day = strtotime( date('Y-m-d', $day) . "+1 day"); 
                                ?>
                            <?php endwhile; ?>
            
>>>>>>> 49e8f1dc83a928681dabe73b746a73a6c2608170
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