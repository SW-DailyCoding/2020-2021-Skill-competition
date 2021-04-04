<!-- 공동 영역 -->
<div class="my-4 d-end mr-5">
            <i class="fa fa-home mr-3"></i>
            <i class="fa fa-chevron-right mr-3"></i>
            <div class="em mr-3 t-sub t-bold">일정 </div>
        </div>
        <!-- /공동 영역 -->

        <!-- 무형문화재 영역-->
        <div id="number" class="layout my-5">
            <div class="container">
                <div class="title text-center mb-5">
                    <p class="em-24"><strong>문화 수정</strong></p>
                    <p class="em-19 mt-2">안녕하세요</p>
                </div>
                <div class="content container my-5">
                    <!-- <?=var_dump($cultures)?> -->
                    <?php foreach( $cultures as $culture) :?>
                                            <!-- <form action="" method="post" enctype="multipart/form-data" > -->
<form action="/update/calenders?id=<?=$culture->id?>" method="post" id="insert-culture">
                <div class="modal-header">
                    문화 수정
                </div>
                <div class="modal-body">
                    <div class="row">
                    <div class="form-group">
                        <label for="">공연명</label>
                        <input type="text" class="form-control showName" name="showName" value="<?=$culture->showName?>">
                    </div>
                    <div class="form-group">
                        <label for="">공연일</label>
                        <input type="date" class="form-control showDate" name="showDate" value="<?=$culture->showDate?>">
                    </div>
                    <div class="form-group">
                        <label for="">공연시간</label>
                        <input type="time" class="form-control showTime" name="showTime" value="<?=$culture->showTime?>">
                    </div>
                    </div>
                
                    <div class="row">
                        <div class="form-group">
                            <label for="">주관</label>
                            <input type="text" class="form-control oraganizer" name="oraganizer" value="<?=$culture->oraganizer?>">
                        </div>
                        <div class="form-group">
                            <label for="">공연장소</label>
                            <input type="text" class="form-control place" name="place" value="<?=$culture->place?>">
                        </div>
                        <div class="form-group">
                            <label for="">출연진</label>
                            <input type="text" class="form-control cast" name="cast" value="<?=$culture->cast?>">
                        </div>
                        <div class="form-group">
                            <label for="">공연내용</label>
                            <input type="text" class="form-control rm" name="rm" value="<?=$culture->rm?>">
                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button class="btn-fill">일정수정</button>
                    <a href="/delete/calender?id=<?=$calender->id?>"><button class="btn-border" >삭제</button></a>
        </div>
    </form>
                                        <?php endforeach ;?>
                </div>
               
            </div>
        </div>
        <!-- /무형문화재 영역-->
    </div>
