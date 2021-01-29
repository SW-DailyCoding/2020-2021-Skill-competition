<div class="fund-section">
            <div class="fund-section-title d-center mt-5 mb-2">펀드 등록</div>
            <div class="fund-section-subtitle d-center mb-5">펀드율에 따라 달라지는 마술!</div>
            <div class="fund-register-list d-center mb-5">
                <form id="register-form" action="/insert/fund" method="post">
                    <div class="formGroup">
                        <label for="registerNumber" class="formLabel" disabeld>펀드번호</label>
                        <p class="formCondition"></p>
                        <div class="formInputBox">
                            <input type="text" id="registerNumber" name="registerNumber" class="formInput form-control" readonly>
                            <!-- <i class="fa fa-check formInputIcon"></i> -->
                        </div>
                        <p class="joinWarnningMsg"></p>
                    </div>
                    <div class="formGroup">
                        <label for="registerName" class="formLabel">창업펀드명</label>
                        <p class="formCondition"></p>
                        <div class="formInputBox">
                            <input type="text" id="registerName" name="registerName" class="formInput form-control" required>
                            <!-- <i class="fa fa-check formInputIcon"></i> -->
                        </div>
                        <p class="joinWarnningMsg"></p>
                    </div>
                    <div class="formGroup">
                        <label for="registerDate" class="formLabel">모집마감일</label>
                        <p class="formCondition"></p>
                        <div class="formInputBox">
                            <input type="datetime-local" id="registerDate" name="registerDate" class="formInput form-control" step="1" required>
                            <!-- <input type="time" name="fund_endDate_time" step="1" id="register_endDate_time" class="form-control my-1" required> -->
                            <!-- <i class="fa fa-check formInputIcon"></i> -->
                        </div>
                        <p class="joinWarnningMsg"></p>
                    </div>
                    <div class="formGroup form-group">
                        <label for="registerMoney" class="formLabel">모집금액</label>
                        <p class="formCondition"></p>
                        <div class="formInputBox">
                            <input type="number" id="registerMoney" name="registerMoney" class="formInput form-control" required>
                            <!-- <i class="fa fa-check formInputIcon"></i> -->
                        </div>
                        <p class="joinWarnningMsg"></p>
                    </div>
                    <div class="formGroup">
                        <label for="registerComment" class="formLabel">상세설명</label>
                        <p class="formCondition"></p>
                        <div class="formInputBox">
                            <textarea name="registerComment" id="registerComment" class="formInput form-control" cols="30" rows="10" required></textarea></textarea>
                            <!-- <i class="fa fa-check formInputIcon"></i> -->
                        </div>
                        <p class="joinWarnningMsg"></p>
                    </div>
                    <div class="formGroup">
                        <label for="registerImg" class="formLabel">펀드이미지</label>
                        <p class="formCondition"></p>
                        <div class="custom-file">
                            <input type="file" name="fund_image" id="registerImg" class="custom-file-input" required>
                            <label for="register_image" class="custom-file-label">사진을 업로드해주세요</label>
                        </div>
                        <p class="joinWarnningMsg"></p>
                    </div>

                    <button id="registerBtn" class="formBtn btn">등록</button>
                </form>
            </div>
        </div>
    </div>    
    <div id="toast_container"></div>
    <div id="investor-view-modal">
        
</div>

<script src="/js/Register.js"></script>