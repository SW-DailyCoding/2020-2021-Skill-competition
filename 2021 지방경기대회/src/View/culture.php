
<div class="my-4 d-end mr-5">
            <i class="fa fa-home mr-3"></i>
            <i class="fa fa-chevron-right mr-3"></i>
            <div class="em mr-3 t-sub t-bold">무형 문화재 현황</div>
        </div>
        <!-- /공동 영역 -->

        <!-- 무형문화재 영역-->
        <div id="culture" class="layout my-5">
            <div class="container">
                <div class="title text-center mb-5">
                    <p class="em-24">무형<strong> 문화재</strong></p>
                    <p class="em-19 mt-2">안녕하세요</p>

                    <?= $type?>
                </div>
                <div class="content container">
                    <div class="culture_header my-5">
                        <div class="d-between">
                            <div class="d-flex">
                                <span>총 게시물 <strong>154</strong>,</span> 
                                <span class="ml-2 mr-2">페이지 <strong>1</strong>/ 24</span>
                            </div>
                            <div class="align d-center">
                                <div class="link_album album tab_btn  mr-2 pointer">
                                    <i class="fa fa-calendar"></i>
                                    <a href="?type=album" class="">앨범</a>
                                </div>
                                <div class="link_list list tab_btn pointer">
                                    <i class="fa fa-list"></i>
                                    <a href="?type=list" class="">목록</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="culture_body d-center text-center">
                        <div class="row album d-center">
                            <!-- <div class="item  m-3">
                                <div class="item_header">
                                    <img src="./images/333322.PNG" alt="">
                                </div>
                                <div class="item_body my-3">
                                    <div class="em-14 t-bold">양주별산축제</div>
                                </div>
                            </div>
                            <div class="item  m-3">
                                <div class="item_header">
                                    <img src="./images/333322.PNG" alt="">
                                </div>
                                <div class="item_body my-3">
                                    <div class="em-14 t-bold">양주별산축제</div>
                                </div>
                            </div>
                            <div class="item  m-3">
                                <div class="item_header">
                                    <img src="./images/333322.PNG" alt="">
                                </div>
                                <div class="item_body my-3">
                                    <div class="em-14 t-bold">양주별산축제</div>
                                </div>
                            </div> -->
                        </div>

                        
                        <table class="table">
                
                                                                <thead>
                                                                <tr>
                                                                    <th scope="col">순번</th>
                                                                    <th scope="col">문화재명</th>
                                                                    <th scope="col">문화재 종목</th>
                                                                    <th scope="col">지정호수</th>
                                                                    <th scope="col"></th>
                                                                </tr>
                                                                </thead>
                                                                <?php foreach($cultures->data as $culture) :?>
                                                                <tr data-toggle="modal" data-target="#view-culture" data-id="${item.id}">
                                                                        <th scope="row"><?=$culture->id?></th>
                                                                        <td><?=$culture->name?></td>
                                                                        <td><?=$culture->nm?></td>
                                                                        <td><?=$culture->ctcd?></td>
                                                                        <td>
                                                                            <a href="#" class="tab_btn" data-toggle="modal" data-target="#view-culture" data-id="${item.id}">보기</a>
                                                                        </td>
                                                                    </tr>
                                                                    <?php endforeach ;?>
                        </table>
                      
                    </div>
        
                    <div class="culture_footer  my-5">
                        <ul class="pagination container d-center">
                            <li> <a href="/culture?page=<?=$cultures->startPage - 1?>" class="" <?=!$cultures->prev ? "disabled" : ""?>><i class="fa fa-angle-left"></i></a></li>
                            <?php for($i = $cultures->startPage; $i <= $cultures->endPage; $i++):?>
                                <li class="t-main mx-1 <?=$i == $cultures->page ? 'btn-fill' : 'btn-border'?>"><a href="/culture?page=<?=$i?>"><?=$i?></a></li>
                            <?php endfor;?>
                            <!-- <li> <a href="#" class="t-main">1</a></li> -->
                            <li> <a href="/culture?page=<?=$cultures->endPage + 1?>" class="" <?=!$cultures->next ? "disabled" : ""?>><i class="fa fa-angle-right"></i></a></li>
                        </ul>

                        <div class="">
                            <div class="row">
                                <div id="insert-culture" onclick="location.href='/culture/cultures'">등록</div>
                            </div>
                        </div>
                    </div>
                </div>
     
                <div class="eng_title">
                    <span>무형<strong> 문화재</strong></span>
                </div>
            </div>
        </div>
        <!-- /무형문화재 영역-->

    </div>

    <!-- <form id="insert-culture" class="modal fade" action="/insert/cultures" method="post">
        <div class="modal-dialog " >
            <div class="modal-content">
                <div class="modal-header">
                    <div class="em-14">등록</div>
                </div>
                <div class="modal-body p-5">
                    
                </div>
                <div class="modal-footer">
                    <div class="btn modal_hide">닫기</div>
                    <div class="btn">닫기</div>
                </div>
            </div>
        </div>
</form> -->
     
    
    
    <!-- <script src="./js/app.js"></script> -->