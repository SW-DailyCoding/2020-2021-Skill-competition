<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
        <script src="./resource/js/jquery-3.4.1.js"></script>
        <script src="./resource/bootstrap-4.3.1-dist/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="./resource/bootstrap-4.3.1-dist/css/bootstrap.min.css"></link>
        <link rel="stylesheet" href="./css/style.css">
            <title>킥스타터</title>
</head>
<body>
<div id="wrap" class="wrap">
    <!-- 헤더 영역 -->
    <header class="d-around">
        <input type="checkbox" name="menuOpen" id="menuOpenInput">
            <label for="menuOpenInput" id="menuOpen">
                <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1H15" stroke="#CCD2E3" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </label>
            <a href="./index.html" class="logo">
                <img src="./resource/logo.svg" height="80" alt="logo_img" title="logo_img">
            </a>
            <ul class="nav d-center">
                <li><a href="./index.html">메인페이지</a></li>
                <li><a href="./register.html">펀드등록</a></li>
                <li><a href="./view.html">펀드보기</a></li>
                <li><a href="./investor.html">투자자목록</a></li>
            </ul>
            <ul class="etc d-center">
                <li><a href="./sign.html">회원가입</a></li>
                <li><a href="#">로그인</a></li>
                <li><a href="#">관리자</a></li>
            </ul>
    </header>

    <!-- 비주얼 영역 -->
    <div id="visual" class="wrap hh-800">
        <div class="visual_img p-center">
            <img src="./resource/images/visual.png" alt="">
        </div>

    </div>

    <!-- 펀드 섹션 영역 -->
    <div id="fund-section" class="wrap d-element pt-5 py-5">
        <div class="fund-list d-column d-center wrap">
            <div class="item mb-5">
                <p>펀드번호 : Number</p>
                <p>펀드이름 : name</p>
                <p>모집마감일 : endDate </p>
                <p>현재금액 : price </p>
                <div class="progress">
                    <div class="progress-bar">안녕</div>
                </div>
                <div class="view pointer">상세보기버튼</div>
            </div>
            <div class="item mb-5">
                <p>펀드번호 : Number</p>
                <p>펀드이름 : name</p>
                <p>모집마감일 : endDate </p>
                <p>현재금액 : price </p>
                <div class="progress">
                    <div class="progress-bar">안녕</div>
                </div>
                <div class="view pointer">상세보기버튼</div>
            </div>
            <div class="item mb-5">
                <p>펀드번호 : Number</p>
                <p>펀드이름 : name</p>
                <p>모집마감일 : endDate </p>
                <p>현재금액 : price </p>
                <div class="progress">
                    <div class="progress-bar">안녕</div>
                </div>
                <div class="view pointer">상세보기버튼</div>
            </div>
            <div class="item">
                <p>펀드번호 : Number</p>
                <p>펀드이름 : name</p>
                <p>모집마감일 : endDate </p>
                <p>현재금액 : price </p>
                <div class="progress">
                    <div class="progress-bar">안녕</div>
                </div>
                <div class="view pointer">상세보기버튼</div>
            </div>
        </div>
    </div>
</div>

<!-- 푸터 영역 -->
<footer class="d-center">
    Copyright Gondr Allright reserved. Since 2017-03-01
</footer>


<script type="module" src="./app.js"></script>
<script type="module" src="./view.js"></script>
<script type="module" src="./sign.js"></script>
<script type="module" src="./investor.js"></script>
<script type="module" src="./register.js"></script>

</body>
</html>