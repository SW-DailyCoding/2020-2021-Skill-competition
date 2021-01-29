<div class="fund-section">
            <div class="fund-section-title d-center mt-5 mb-2">펀드 섹션</div>
            <div class="fund-section-subtitle d-center mb-5">펀드율에 따라 달라지는 마술!</div>
            <div class="fund-section-list d-colum d-center">
            <?php foreach($funds as $fund): ?>    
                <div class="item">
                    <div class="item-number d-center ml-3 mb-4"><?=$fund->fund_num?></div>
                        <div class="item-inner d-center">
                            <div class="img">
                                <!-- <img src="./resource/images/business.jpg" alt=""> -->
                            </div>
                            <div class="item-content d-colum ml-5">
                                <p class="d-end view">상세보기</p>
                                <div class="item-name mb-2"><?=$fund->fund_name?></div>
                                <p class="item-owner"><?=$fund->fund_owner?></p>
                                <p class="item-date"><?=$fund->fund_endDate?></p>
                                <p class="item-price">current : <?=$fund->fund_current?> / <?=$fund->fund_total?></p>
                                <div class="progress">
                                    <div class="progress-bar" style="width: 82%;">82px;</div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <?php endforeach; ?>
                </div>
        </div>
    </div>    

<!-- <script src="/js/app.js"></script> -->