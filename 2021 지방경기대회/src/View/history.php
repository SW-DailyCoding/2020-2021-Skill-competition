
        <!-- 공동 영역 -->
        <div class="my-4 d-end mr-5">
            <i class="fa fa-home mr-3"></i>
            <i class="fa fa-chevron-right mr-3"></i>
            <div class="em-095 mr-3">일반현황 </div>
            <i class="fa fa-chevron-right mr-3"></i>
            <div class="em mr-3 t-sub t-bold">연혁</div>
        </div>
        <!-- /공동 영역 -->

        <!-- 무형문화재 영역-->
        <div id="history" class="layout my-5">
            <div class="container">
                <div class="title text-center mb-5">
                    <p class="em-24"><strong>연혁</strong></p>
                    <p class="em-19 mt-2">안녕하세요</p>
                </div>
                <div class="content container my-5">
                    <div class="historys">
                        <div class="history_header">
                            <div class="d-end">
                                <div class="tab_btn" data-toggle="modal" data-target="#insert-history">연혁등록</div>
                            </div>
                            <!-- <div class="tab_day d-start my-5">
                                <div class="em-18 mr-3 t-main t-bold">2021</div>
                                <div class="em-18 mr-3">2020</div>
                                <div class="em-18 mr-3">2019</div>
                                <div class="em-18 mr-3">2018</div>
                                <div class="em-18 mr-3">2017</div>
                            </div> -->
                            <div class="tab_day d-start my-5">
                                <div class="em-08 mr-3 link_2021"><a href="?type=2021">2021</a></div>
                                <div class="em-08 mr-3 link_2020"><a href="?type=2020">2020</a> </div>
                                <div class="em-08 mr-3 link_2019"><a href="?type=2019">2019</a></div>
                                <div class="em-08 mr-3 link_2018"><a href="?type=2018">2018</a></div>
                                <div class="em-08 mr-3 link_2017"><a href="?type=2017">2017</a></div>
                            </div>
                        </div>
                        <div class="history_body my-5">
                            <div class="title em-3 t-bold my-3">
                                2021
                            </div>
                            <table class="table my-5">
                                <thead>
                                    <tr>
                                        <th scope="col" style="width:15%">번호</th>
                                        <th scope="col" style="width:45%">제목</th>
                                        <th scope="col" style="width: 20%">날짜</th>
                                        <th scope="col" style="width: 20%"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- <tr>
                                        <th scope="row">1</th>
                                        <td></td>
                                        <td>
                                            <a href="#" class="tab_btn">수정</a>
                                            <a href="#" class="tab_btn">삭제</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>아</td>
                                        <td>@fat</td>
                                    </tr> -->
                                </tbody>
                            </table>
                            <!-- <div class="t-row py-3">
                                <div class="mx-20">
                                    <div class="em-2">2</div>
                                    <div class="em-1">2월</div>
                                </div>
                                <div class="mx-60">
                                    <div class="d-between">
                                        <div class="pt-3 t-ellipsis em-18 text-left">부산 해외취업지원센터_일학습과정111111111111111111111111111111111</div>
                                    </div>
                                </div>
                                <div class="btn-box d-center">
                                    <div class="history_modify mr-3 tab_btn" data-toggle="modal" data-target="#modify-history">수정</div>
                                    <div class="history_delete tab_btn">삭제</div>
                                </div>
                            </div>
                            <div class="t-row py-3">
                                <div class="mx-20">
                                    <div class="em-2">2</div>
                                    <div class="em-1">2월</div>
                                </div>
                                <div class="mx-80">
                                    <div class="pt-2 t-ellipsis em-22 text-left">아</div>
                                </div>
                            </div>
                            <div class="t-row py-3">
                                <div class="mx-20">
                                    <div class="em-2">2</div>
                                    <div class="em-1">2월</div>
                                </div>
                                <div class="mx-80">
                                    <div class="pt-2 t-ellipsis em-22 text-left">아</div>
                                </div>
                            </div>
                            <div class="t-row py-3">
                                <div class="mx-20">
                                    <div class="em-2">2</div>
                                    <div class="em-1">2월</div>
                                </div>
                                <div class="mx-80">
                                    <div class="pt-2 t-ellipsis em-22 text-left">아</div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
                <div class="eng_title">
                    <span><strong>연혁</strong></span>
                </div>
            </div>
        </div>

        <!-- /무형문화재 영역-->
    </div>

    <form id="insert-history" class="modal fade" >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="em-14">연혁등록</div>
                </div>
                <div class="modal-body p-5">
                    <div class="my-3">
                        <div class="em-1 t-bold mr-3">연혁내용</div>
                        <input class="form-control" type="text" class="text" name="text" id="history_text"
                            placeholder="내용을 입력해주세요"required>
                    </div>
                    <div class="mb-3 form-group">
                        <div class="em-1 t-bold mr-3">연혁일자</div>
                        <input class="form-control" type="date" name="date" class="date" id="history_date" required>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn_register">등록</button>
                </div>
            </div>
        </div>
    </form>

    <form id="modify-history" class="modal fade" >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="em-14">연혁수정</div>
                </div>
                <div class="modal-body p-5">
                    <div class="my-3">
                        <div class="em-1 t-bold mr-3">연혁내용</div>
                        <input class="form-control" type="text" class="text" name="text" id="history_text"
                            placeholder="내용을 입력해주세요"required>
                    </div>
                    <div class="mb-3 form-group">
                        <div class="em-1 t-bold mr-3">연혁일자</div>
                        <input class="form-control" type="date" name="date" class="date" id="history_date" required>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn_register">등록</button>
                </div>
            </div>
        </div>
    </form>
    <script src="./js/history.js"></script>