

    <!-- 펀드 섹션 영역 -->
    <div id="fund-section" class="wrap d-element pt-5 py-5">
        <div id="fund_view" class="d-center wrap">
        <?php foreach($funds->data as $i => $fund) :?>
            <div class="item mb-5 ml-5">
                <p>펀드번호 : <?=$fund->fund_num?></p>
                <p>펀드이름 : <?=$fund->fund_name?></p>
                <p>모집마감일 : <?=$fund->fund_endDate?> </p>
                <p>현재금액 : <?=$fund->fund_current?> </p>
                <div class="progress mb-3">
                    <div  class="progress-bar " aria-valuenow="<?=$fund->fund_success?>" aria-valuemin="0" aria-valuemax = "100" style="width: <?=$fund->fund_success?>%;"><?=$fund->fund_success?></div>
                </div>
      
            <?php if(user()): ?>
                <?php if($fund->fund_success >= 100) {?>
                    <form action="/clear" method="post">
                        <button class=" mb-5 w-50 d-center pointer btn">완료</button>
                        <input type="hidden" name="fund_num" value="<?=$fund->fund_num?>">
                        <input type="hidden" name="fund_name" value="<?=$fund->fund_name?>">
                    </form>
                <?php } else { ?>
                    <button class="mb-5 btn w-10 invest pointer" data-toggle="modal" data-target="#insert-modal" data-num="<?=$fund->fund_num?>" data-name="<?=$fund->fund_name?>">투자하기</button>
                <?php } ?>
            <?php endif; ?>
            </div>
        <?php endforeach; ?>
            <!-- <div class="item mb-5 ml-5">
                <p>펀드번호 : Number</p>
                <p>펀드이름 : name</p>
                <p>모집마감일 : endDate </p>
                <p>현재금액 : price </p>
                <div class="progress">
                    <div class="progress-bar">안녕</div>
                </div>
                <div class="view btn pointer">상세보기버튼</div>
                <div class="btn invest pointer">투자하기</div>
            </div>
            <div class="item mb-5 ml-5">
                <p>펀드번호 : Number</p>
                <p>펀드이름 : name</p>
                <p>모집마감일 : endDate </p>
                <p>현재금액 : price </p>
                <div class="progress">
                    <div class="progress-bar">안녕</div>
                </div>
                <div class="view btn pointer">상세보기버튼</div>
                <div class="btn invest pointer">투자하기</div>
            </div>
            <div class="item mb-5 ml-5">
                <p>펀드번호 : Number</p>
                <p>펀드이름 : name</p>
                <p>모집마감일 : endDate </p>
                <p>현재금액 : price </p>
                <div class="progress">
                    <div class="progress-bar">안녕</div>
                </div>
                <div class="view btn pointer">상세보기버튼</div>
                <div class="btn invest pointer">투자하기</div>
            </div> -->
        </div>
    </div>
    <ul class="page_nation d-around container mb-5">
        <li id="prev pointer">
            <a class="<?=!$funds->prev ? "disable" : ""?>" href="/view?page=<?=$funds->startPage - 1?>">prev</a> 
        </li>
    <?php for($i = $funds->startPage; $i <= $funds->endPage; $i++) :?>
         <li class="pointer ml-2"><a  href="/view?page=<?= $i?>" <?=!$funds->prev ? "disabled" : ""?>><?=$i?></a></li>
    <?php endfor ;?>
         <li id="next pointer">
            <a class="" href="/view?page=<?=$funds->endPage?>" <?=!$funds->next ? "disabled" : ""?>>next</a> 
         </li>
    </ul>
</div>

<div id="invest-view-modal" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body">
                <!-- <span class="title" data-id=${item.idx} data-toggle="modal" data-target="#invest-view-modal">상세보기</span>
                <span class="btn" id="modal_remove">x</span>
                <div class="mt-2"><span>한줄 복사</span><span class="ml-2 mb-3"></span></div>
                <div class="mt-2"><span>한줄 복사</span><span class="ml-2 mb-3"></span></div>
                <div class="mt-2"><span>한줄 복사</span><span class="ml-2 mb-3"></span></div>
                <div class="mt-2"><span>한줄 복사</span><span class="ml-2 mb-3"></span></div>
                <div class="mt-2"><span>한줄 복사</span><span class="ml-2 mb-3"></span></div> -->
            </div>
        </div>
    </div>
</div>

<div id="insert-modal" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body">
                <form action="/view" method="post">
                    <!-- <div class="form-group"> -->
                        <!-- <label for="invest_num">펀드번호</label> -->
                        <input type="hidden" id="invest_num" name="invest_num" class="form-control" required>
                    <!-- </div> -->
                    <!-- <div class="form-group"> -->
                        <!-- <label for="invest_name">펀드이름</label> -->
                        <input type="hidden" id="invest_name" name="invest_name" class="form-control"required>
                    <!-- </div> -->
                    <div class="form-group">
                        <label for="invest_investor">투자자명 </label>
                        <input type="text" id="invest_investor" name="invest_investor"  value="<?=user()->user_name?>" class="form-control"required>
                    </div>
                    <div class="form-group">
                        <label for="invest_price">투자금액</label>
                        <input type="number" id="invest_price" name="invest_price"  class="form-control" value="투자하실 금액을 입력하세요" required>
                    </div>
                    <div class="form-select">
                        <div>
                            <label for="invest_sign">서명</label>
                            <select id="wh" class="form-select" aria-placeholder="굵기를 선택해주세요">
                                <option value="1">1px</option>
                                <option value="3">3px</option>
                                <option value="5">5px</option>
                            </select>
                        </div>
                        <canvas width="300" height="150" style="border: 1px solid #aaa"></canvas>
                        <input type="hidden" name="invest_sign" id="invest_sign">
                    </div>
                    
                    <div class="form-group">
                        <button class="insert_btn btn w-100 d-center">투자</button>
                    </div>
                </form>              
                <div class="form-group">
                    <button class="close_btn btn w-100 d-center" data-bs-dismiss="modal">취소</button>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    
</script>