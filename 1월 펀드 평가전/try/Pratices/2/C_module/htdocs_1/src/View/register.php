<div id="fund-section" class="w-400 wrap d-element pt-5 py-5 register">
        <form id = "register" action="/register" method="post">
            <div class="form-group">
                <label for="fund_num">펀드번호</label>
                <input type="text" id="fund_num" name="fund_num" class="form-control" readonly>
            </div>
            <div class="form-group">
                <label for="fund_name">창업펀드명</label>
                <input type="text" id="fund_name" name="fund_name" class="form-control"required>
            </div>
            <div class="form-group">
                <label for="fund_date">모집날짜</label>
                <input type="datetime-local" id="fund_date" name="fund_date"  class="form-control"required>
            </div>
            <div class="form-group">
                <label for="fund_price">모집금액</label>
                <input type="number" id="fund_price" name="fund_price"  class="form-control"required>
            </div>
            <div class="form-group">
                <div class="d-between">
                    <label for="fund_txt">상세설명</label><div><span id="exp">0</span> / 500</div>
                </div>
                
                <textarea type="text" id="fund_txt" name="fund_txt"  class="form-control"required></textarea>  
            </div>
            
            <div class="form-group">
                <label for="fund_image">펀드 이미지</label>
                <div class="custom-file">
                    <input type="file" name="fund_image" id="fund_image" class="custom-file-input" required>
                    <label for="fund_image" class="custom-file-label t-ellipsis">사진을 업로드해주세요</label>
                </div>
            </div>
            <button id="register_btn" class="btn">등록하기</button>
        </form>
    </div>
</div>

<div id="toast_container">
    
</div>