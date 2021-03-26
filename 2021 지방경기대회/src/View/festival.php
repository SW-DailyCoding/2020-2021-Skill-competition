<!-- 공동 영역 -->
<div class="my-4 d-end mr-5">
            <i class="fa fa-home mr-3"></i>
            <i class="fa fa-chevron-right mr-3"></i>
            <div class="em mr-3 t-sub t-bold">전화번호</div>
        </div>
        <!-- /공동 영역 -->

        <!-- 무형문화재 영역-->
        <div id="number" class="layout my-5">
            <div class="container">
                <div class="title text-center mb-5">
                    <p class="em-24"><strong>연간 일정 수정</strong></p>
                    <p class="em-19 mt-2">안녕하세요</p>
                </div>
                <div class="content container my-5">
                    <?php foreach( $calenders as $calender) :?>
                                            <form action="/update/calenders?id=<?=$calender->id?>" method="post" enctype="multipart/form-data" >
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
                                        <?php endforeach ;?>
                </div>
                <div class="eng_title">
                    <span><strong>전화번호</strong></span>
                </div>
            </div>
        </div>
        <!-- /무형문화재 영역-->
    </div>

    <script src="./js/number.js"></script>