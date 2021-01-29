<div class="fund-section">
            <div class="fund-section-title d-center mt-5 mb-2">회원가입</div>
            <div class="fund-section-subtitle d-center mb-5">로그인하기 전에 회원가입은 필수입니다!</div>
            <div class="fund-section-list d-colum d-center mb-5">
                <form id="joinForm" action="/sign" method="post">
                    <div class="formGroup">
                        <label for="joinEmail" class="formLabel">이메일</label>
                        <p class="formCondition"></p>
                        <div class="formInput form-controlBox">
                            <input type="text" class="formInput form-control" name="joinEmail" id="joinEmail" placeholder="이메일" required>
                            <!-- <i class="fa fa-check formInput form-controlIcon"></i> -->
                        </div>
                        <p class="joinWarnningMsg"></p>
                    </div>
                    <div class="formGroup">
                        <label for="joinName" class="formLabel">이름</label>
                        <p class="formCondition"></p>
                        <div class="formInput form-controlBox">
                            <input type="text" class="formInput form-control" name="joinName" id="joinName" placeholder="이름" required>
                            <!-- <i class="fa fa-check formInput form-controlIcon"></i> -->
                        </div>
                        <p class="joinWarnningMsg"></p>
                    </div>
                    <div class="formGroup">
                        <label for="joinPassword" class="formLabel">비밀번호</label>
                        <div class="formInput form-controlBox">
                            <input type="password" class="formInput form-control" name="password" id="joinPassword" placeholder="비밀번호" required>
                            <!-- <i class="fa fa-check formInput form-controlIcon"></i> -->
                            <p class="formCondition">*비밀번호는 영문, 숫자, 특수문자를 조합해야 합니다.</p>
                        </div>
                        <p class="joinWarnningMsg"></p>
                    </div>
                    <div class="formGroup">
                        <label for="joinPasswordCheck" class="formLabel">비밀번호 확인</label>
                        <p class="formCondition"></p>
                        <div class="formInput form-controlBox">
                            <input type="password" class="formInput form-control" name="password2" id="joinPasswordCh" placeholder="비밀번호 확인" required>
                            <!-- <i class="fa fa-check formInput form-controlIcon"></i> -->
                        </div>
                        <p class="joinWarnningMsg"></p>
                    </div>
                    <div class="form-group">
                        <button id="joinBtn" class="formBtn btn">회원가입</button>
                    </div>
                </form>
            </div>
        </div>
    </div>    
    <div class="toast">
        <div class="toast-header">
            <strong class="fs-1 text-blue">form 오류</strong>
            </div>
        <div class="toast-body px-3 py-5 text-blue">입력하신 정보가 양식과 일치하지 않습니다.</div>
    </div>
<div id="toast_container"></div>
</div>

<script src="/js/signUp.js"></script>