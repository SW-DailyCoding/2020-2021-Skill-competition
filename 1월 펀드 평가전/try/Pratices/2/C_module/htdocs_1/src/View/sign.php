   <!-- 펀드 섹션 영역 -->
   <div id="fund-section" class="w-400 wrap d-element pt-5 py-5">
        <div class="fund_title py-5">로그인을 하기위해서는 회원가입이 필수입니다.</div>
        <form id="sign" action="/sign" method="post">
            <div class="form-group">
                <label for="user_email">이메일</label>
                <input type="text" id="user_email" name="user_email" class="form-control" required>
            </div>
    
            <div class="form-group">
                <label for="user_name">닉네임</label>
                <input type="text" id="user_name" name="user_name" class="form-control"required>
            </div>
            <div class="form-group">
                <label for="password">비밀번호</label>
                <input type="password" id="password" name="password"  class="form-control"required>
            </div>
            <div class="form-group">
                <label for="passwordc">비밀번호 확인</label>
                <input type="password" id="passwordc" name="passwordc"  class="form-control"required>
            </div>
            <button id="sign_btn" class="btn">가입하기</button>
        </form>
    </div>
</div>

<div id="toast_container">
    
</div>