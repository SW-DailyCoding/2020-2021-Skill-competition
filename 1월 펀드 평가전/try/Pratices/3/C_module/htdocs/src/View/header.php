<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="./resource/js/jquery-3.4.1.js"></script>
    <script src="./resource/bootstrap-4.3.1-dist/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="./resource/fontawesome/css/font-awesome.min.css">
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
            <svg width="30" height="30" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1H15" stroke="#CCD2E3" stroke-width="2" stroke-linecap="round"/>
                <path d="M1 6H11" stroke="#CCD2E3" stroke-width="2" stroke-linecap="round"/>
                <path d="M1 11H7" stroke="#CCD2E3" stroke-width="2" stroke-linecap="round"/>
            </svg>

        </label>
        <a href="/" class="logo">
            <img src="./resource/logo.svg" height="80" alt="logo_img" title="logo_img">
        </a>
        <ul class="nav d-center">
            <li><a href="/">메인페이지</a></li>
            <li><a href="/register">펀드등록</a></li>
            <li><a href="/view">펀드보기</a></li>
            <li><a href="/investor">투자자목록</a></li>
        </ul>
        <ul class="etc d-center">
            <li><a href="/sign">회원가입</a></li>
            <li><a href="/login">로그인</a></li>
            <li><a href="#">관리자</a></li>
        </ul>
    </header>

    <!-- 비주얼 영역 -->
    <div id="visual" class="wrap hh-800">
        <div class="visual_img p-center">
            <img src="./resource/images/sample2.jpg" alt="">
        </div>

    </div>