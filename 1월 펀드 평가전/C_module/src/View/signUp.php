<link rel="stylesheet" href="/css/page.css">
<link rel="stylesheet" href="/css/sub.css">
<!-- 비주얼 영역 -->
<div class="visual mt-2">
    <div class="visual__image">
        <div class="image"></div>
        <div class="image"></div>
        <div class="image"></div>
    </div>
    <div class="visual__text">
        <strong>회원가입</strong> <br/>
    </div>
</div>
<!-- /비주얼 영역 -->

<!-- 회원가입 -->
<div class="sign__wrap mt-5 mb-5 wrap">
    <div class="inner d-center">
        <div class="title">Sign Up</div>
    </div>
    <p class="d-center">환영합니다! 로그인을 하기 위해서는 회원가입은 필수입니다!</p>
</div>
<div class="sign wrap container">
    <!--        <div class="sign__title d-center mt-5">Sign Up</div>-->
    <form class="signForm">
        <div class="formGroup">
            <div class="input-group input-group-sm mb-3">
                <input type="email" class="form-control" name="signEmail" id="signEmail" placeholder="이메일을 입력해주세요" >
                <i class="fa fa-check formInputIcon"></i>
            </div>
            <p class="formWarningMsg"></p>
        </div>

        <div class="formGroup">
            <div class="input-group input-group-sm mb-3">
                <input type="text" class="form-control" name="signName" id="signName" placeholder="이름을 입력해주세요">
                <i class="fa fa-check formInputIcon"></i>
            </div>
            <p class="formWarningMsg"></p>
        </div>

        <div class="formGroup">
            <div class="input-group input-group-sm mb-3">
                <input type="password" class="form-control" name="signPassword" id="signPassword" placeholder="비밀번호를 입력해주세요">
                <i class="fa fa-check formInputIcon"></i>
            </div>
            <p class="formWarningMsg"></p>
        </div>

        <div class="formGroup">
            <div class="input-group input-group-sm mb-3">
                <input type="password" class="form-control" name="signPasswordc" id="signPasswordc" placeholder="비밀번호 확인을 해주세요">
                <i class="fa fa-check formInputIcon"></i>
            </div>
            <p class="formWarningMsg"></p>
        </div>

        <button id="sign__btn" class="sign__btn btn d-center">SIGN UP</button>
    </form>


</div>
<!-- /회원가입 -->
<div id="toast_content"></div>
