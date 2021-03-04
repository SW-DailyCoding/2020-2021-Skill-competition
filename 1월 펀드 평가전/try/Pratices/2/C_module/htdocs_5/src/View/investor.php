<div id="fund-section" class="wrap pt-5 py-5">

        <ul class="sort d-center py-5">
            <li class="ml-3 pointer">최근등록순</li>
            <li class="ml-3 pointer">개인별</li>
            <li class="ml-3 pointer">펀드별</li>
        </ul>
        <div id="fund_investor" class="fund-list d-center wrap">
            <!-- <div class="item mb-5 ml-5">
                <p>펀드번호 : Number</p>
                <p>펀드이름 : name</p>
                <p>투자자명</p>
                <p>모집마감일 : endDate </p>
                <p>투자금액 : price </p>
                <div class="progress">
                    <div class="progress-bar">안녕</div>
                </div>              
            </div>
            <div class="item mb-5 ml-5">
                <p>펀드번호 : Number</p>
                <p>펀드이름 : name</p>
                <p>투자자명</p>
                <p>모집마감일 : endDate </p>
                <p>투자금액 : price </p>
                <div class="progress">
                    <div class="progress-bar">안녕</div>
                </div>              
            </div>
            <div class="item mb-5 ml-5">
                <p>펀드번호 : Number</p>
                <p>펀드이름 : name</p>
                <p>투자자명</p>
                <p>모집마감일 : endDate </p>
                <p>투자금액 : price </p>
                <div class="progress">
                    <div class="progress-bar">안녕</div>
                </div>              
            </div>
            <div class="item mb-5 ml-5">
                <p>펀드번호 : Number</p>
                <p>펀드이름 : name</p>
                <p>투자자명</p>
                <p>모집마감일 : endDate </p>
                <p>투자금액 : price </p>
                <div class="progress">
                    <div class="progress-bar">안녕</div>
                </div>              
            </div>
            <div class="item mb-5 ml-5">
                <p>펀드번호 : Number</p>
                <p>펀드이름 : name</p>
                <p>투자자명</p>
                <p>모집마감일 : endDate </p>
                <p>투자금액 : price </p>
                <div class="progress">
                    <div class="progress-bar">안녕</div>
                </div>              
            </div> -->
        </div>
    </div>
    <ul class="page_nation d-around container mb-5">
        <li id="prev pointer">
            <a class="<?=!$investors->prev ? "disable" : ""?>" href="/view?page=<?=$investors->startPage - 1?>">prev</a> 
        </li>
    <?php for($i = $investors->startPage; $i <= $investors->endPage; $i++) :?>
         <li class="pointer ml-2"><a  href="/view?page=<?= $i?>" <?=!$investors->prev ? "disabled" : ""?>><?=$i?></a></li>
    <?php endfor ;?>
         <li id="next pointer">
            <a class="" href="/view?page=<?=$investors->endPage?>" <?=!$investors->next ? "disabled" : ""?>>next</a> 
         </li>
    </ul>
</div>

<script>

</script>