 <?php 

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
           <!-- 무형문화재 영역-->

           <?php 
            //   $type = !isset($_GET["type"]) || $_GET["type"] == "album" ? "album" : "list";
            // var_dump($type  , $data->type, $data->bcode);
            ?>
           <div id="culture" class="layout my-5">
            <div class="container">
                <div class="title text-center mb-5">
                    <p class="em-24">무형<strong> 문화재</strong></p>
                    <p class="em-19 mt-2">안녕하세요</p>
                </div>
                <div class="content container">
                    <div class="culture_header my-5">
                        <div class="d-between" >
                            <div class="d-flex" >
                                <!-- <span>총 게시물 <strong>154</strong>,</span> 
                                <span class="ml-2 mr-2">페이지 <strong>1</strong>/ 24</span> -->
                                <!-- <div class="search form-control" style="width:220px">
                                    <i class="fa fa-search"></i>
                                    <input type="search"  style="border: none;">
                                </div> -->
                            </div>
                            <div class="align d-center">
                            <a href="/registerCulture">
                                <div class="btn-fill pointer">등록</div>
                            </a>
                                <div class="chng mr-5"></div>
                                <div class="ablum tab_btn  mr-2 pointer">
                                    <i class="fa fa-calendar"></i>
                                    <a href="/culture?tab=album&page=1<?=$data->type == "" ? "" : "&type=$data->type"?>" class="<?=$data->tab == "album" ? "btn-fill" : "btn-border"?> mx-2">
                                    앨범</a>
                                </div>
                                <div class="list tab_btn pointer t-white">
                                    <i class="fa fa-list"></i>
                                    <a href="/culture?tab=list&page=1<?=$data->type == "" ? "" : "&type=$data->type"?>" class="<?=$data->tab == "list" ? "btn-fill" : "btn-border"?> mx-2">목록</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="culture_body text-center my-5">
                    <div class="page row">
                        총<?=$data->length?>건 <?=$data->page?>p / <?=$data->totalPage?>p
                    </div>
                        <!-- <div class="item m-3 ">
                            <div class="item_header">
                                <img src="" alt="">
                            </div>
                            <div class="item_body">
                                <div class="em-14"></div>
                            </div>
                        </div> -->
                        <?php if($data->tab == "album"): ?>
                            <div class="row d-around">
                            <?php foreach($data->data as $culture):?>
                     
                            <div class="col-lg-3 col-md-5 my-2">
                                    <div class="img">
                                        <img src="<?=base64_upload($culture->image)?>" alt="image" class="fit-cover">
                                        <!-- <img src="nickImage?filePath=<?=$culture->image?>" alt=""> -->
                                    </div>
                                    <div class="body">
                                        <div class="em-12"><?=$culture->ccbaMnm1?></div>
                                        <div class="em-12"><?=$culture->bcodeName?></div>
                                    </div>
                                </div>
                            <?php endforeach?>
                        <?php else :?>
                    </div>
                    </div>
                        <div class="row">
                            <table class="table">
                                <thead>
                                  <tr>
                                    <th scope="col">순번</th>
                                    <th scope="col">종목</th>
                                    <th scope="col">분류</th>
                                    <th scope="col">소재지</th>
                                    <th scope="col">관리자</th>
                                  </tr>
                                </thead>
                                <tbody>
                                <?php foreach($data->data as $culture): ?>
                                  <tr>
                                    <th scope="row"><?=$culture->id?></th>
                                    <td><a href="/update/culture?id=<?=$culture->id?>"><?=$culture->ccbaMnm1?></a></td>
                                    <td><?=$culture->bcodeName?></td>
                                    <td><?=$culture->crltsnoNm?></td>
                                    <td><?=$culture->ccbaAdmin?></td>
                                </tr>
                                <?php endforeach; ?>
                                </tbody>
                              </table> 
                        </div>
                        <?php endif; ?>
                    </div>
                    <div class="culture_footer  my-5">
                        <div class="pagination d-center">
                    <!-- <a href="?page=<?=$data->startPage - 1?>&type=<?=$type?>" <?=!$data->prev ? "disabled" : "" ?> class="">
                        <i class="fa fa-angle-left"></i>
                    </a>
                    <?php for($i = $data->startPage; $i <= $data->endPage; $i++): ?>
                        <a href="?page=<?=$i?>&type=<?=$type?>" class="<?=$i == $data->page ? "btn-fill" : "btn-border"?>"><?=$i?></a>
                    <?php endfor; ?>
                    <a href="?page=<?=$data->endPage + 1?>&type=<?=$type?>" <?=!$data->next ? "disabled" : "" ?> class="">
                        <i class="fa fa-angle-right"></i>
                    </a> -->

                                    <a href="/culture?tab=<?=$data->tab?>&page=1<?=$data->type == "" ? "" : "&type=$data->type"?>" class="icon bg-dbrown text-white mx-1">
                                <i class="fa fa-angle-left"></i>
                                <i class="fa fa-angle-left"></i>
                            </a>
                            <a href="/culture?tab=<?=$data->tab?>&page=<?=$data->startPage - 1?><?=$data->type == "" ? "" : "&type=$data->type"?>" <?=!$data->prev ? "disabled" : ""?> class="icon bg-brown text-white mx-1">
                                <i class="fa fa-angle-left"></i>
                            </a>
                            
                            <?php for($i = $data->startPage; $i <= $data->endPage; $i++): ?>
                                <a href="?tab=<?=$data->tab?>&page=<?=$i?><?=$data->type == "" ? "" : "&type=$data->type"?>" class="icon <?=$i == $data->page ? "bg-brown btn-fill" : "bd-brown text-brown"?>  mx-1"><?=$i?></a>
                            <?php endfor; ?>

                            <a href="/culture?tab=<?=$data->tab?>&page=<?=$data->endPage + 1?><?=$data->type == "" ? "" : "&type=$data->type"?>" <?=!$data->next ? "disabled" : ""?> class="icon bg-brown btn-border mx-1">
                                <i class="fa fa-angle-right"></i>
                            </a>
                            <a href="/culture?tab=<?=$data->tab?>&page=<?=$data->totalPage?><?=$data->type == "" ? "" : "&type=$data->type"?>" class="icon bg-dbrown btn-border mx-1">
                                <i class="fa fa-angle-right"></i>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="eng_title">
                    <span>무형<strong> 문화재</strong></span>
                </div>
            </div>
        </div>
        <!-- /무형문화재 영역-->

        <script>
          
            </script>