   <!-- 펀드 섹션 영역 -->
   <div id="fund-section" class="w-400 wrap d-element pt-5 py-5">
        <div class="fund_title py-5">여긴 로그인 공간입니다.</div>
        <form id="login" action="/login" method="post">
            <div class="form-group">
                <label for="user_email">아이디</label>
                <input type="text" id="user_email" name="user_email" class="form-control" required>
            </div>
            <div class="form-group mb-5">
                <label for="password">비밀번호</label>
                <input type="password" id="password" name="password"  class="form-control"required>
            </div>
            <button id="login_btn" class="btn">로그인</button>
        </form>
    </div>
</div>

<div id="toast_container">
    
</div>