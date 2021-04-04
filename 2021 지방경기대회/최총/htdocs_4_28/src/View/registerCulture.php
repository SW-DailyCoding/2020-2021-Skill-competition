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
                    <p class="em-24"><strong>문화 등록</strong></p>
                    <p class="em-19 mt-2">안녕하세요</p>
                </div>
                <div class="content container my-5">
                    <!-- <?=var_dump($cultures)?> -->
                                            <!-- <form action="" method="post" enctype="multipart/form-data" > -->
<form action="/insert/culture" method="post" id="insert-culture">
                <div class="modal-header">
                    문화 등록
                </div>
                <div class="modal-body">
                    <div class="row">
                    <div class="form-group">
                        <label for="">문화재종목</label>
                        <input type="text" class="form-control ccmaName" name="ccmaName">
                    </div>
                    <div class="form-group">
                        <label for="">문화재명</label>
                        <input type="text" class="form-control ccbaMnm1" name="ccbaMnm1">
                    </div>
                    <div class="form-group">
                        <label for="">지정호수</label>
                        <input type="text" class="form-control crltsnoNm" name="crltsnoNm">
                    </div>
                    <div class="form-group">
                        <label for="">수량</label>
                        <input type="text" class="form-control ccbaQuan" name="ccbaQuan">
                    </div>
                    <div class="form-group">
                        <label for="">고유키값</label>
                        <input type="text" class="form-control no" name="no">
                    </div>
                    <div class="form-group">
                        <label for="">지정번호</label>
                        <input type="text" class="form-control ccbaAsno" name="ccbaAsno">
                    </div>
                    <div class="form-group">
                        <label for="">종목코드</label>
                        <input type="text" class="form-control ccbaKdcd" name="ccbaKdcd">
                    </div>

                    </div>
                    <div class="row">
                        <!-- <div class="form-group">
                            <label for="">이미지</label>
                            <input type="image" class="form-control oraganizer" name="oraganizer">
                        </div> -->
                        <div class="form-group">
                            <label for="">설명</label>
                            <input type="text" class="form-control content" name="content">
                        </div>
                        <div class="form-group">
                            <label for="">소유자</label>
                            <input type="text" class="form-control ccbaPoss" name="ccbaPoss">
                        </div>
                        <div class="form-group">
                            <label for="">시도명</label>
                            <input type="text" class="form-control ccbaCtcdNm" name="ccbaCtcdNm">
                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button class="btn-fill">일정등록</button>
                    <!-- <a href="/delete/calender?id=<?=$calender->id?>"><button class="btn-border" >삭제</button></a> -->
        </div>
    </form>
                </div>
               
            </div>
        </div>
        <!-- /무형문화재 영역-->
    </div>
