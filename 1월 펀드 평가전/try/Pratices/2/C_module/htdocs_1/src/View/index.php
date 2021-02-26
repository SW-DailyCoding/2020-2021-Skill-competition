

    <!-- 펀드 섹션 영역 -->
    <div id="fund-section" class="wrap d-element pt-5 py-5">
        <div id="fund_index" class="fund-list d-column d-center wrap">

        <?php foreach($funds as $fund) :?>
            <div class="item mb-5">
                <p>펀드번호 : <?=$fund->fund_num?></p>
                <p>펀드이름 : <?=$fund->fund_name?></p>
                <p>모집마감일 : <?=$fund->fund_endDate?> </p>
                <p>현재금액 : <?=$fund->fund_price?> </p>
                <div class="progress">
                <div  class="progress-bar " aria-valuenow="<?=$fund->fund_success?>" aria-valuemin="0" aria-valuemax = "100" style="width: <?=$fund->fund_success?>%;"><?=$fund->fund_success?></div>
                </div>
                <button class="view pointer">상세보기버튼</button>
                <input type="hidden" name="fund_num" value="<?=$fund->fund_num?>">
            </div>
        <?php endforeach;?>

        </div>
    </div>
</div>
