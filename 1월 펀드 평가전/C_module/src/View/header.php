<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!--    <script src="./bootstrap-4.3.1-dist/js/bootstrap.js"></script>-->
    <link rel="stylesheet" href="./bootstrap-4.3.1-dist/css/bootstrap.css">
    <script src="./js/jquery-3.4.1.js"></script>
    <link rel="stylesheet" href="./fontawesome/css/font-awesome.css">
    <link rel="stylesheet" href="./css/page.css">
    <link rel="stylesheet" href="./css/style.css">
    <title>킥스타터</title>
</head>
<body>
<div id="wrap" class="wrap">
    <input type="checkbox" id="open-aside" hidden>
    <!-- 헤더 영역 -->
    <header>
        <div class="h-100 d-around">
            <a href="./index.html">
                <img src="./images/logo2.svg" alt="image" title="image" height="70">
            </a>
            <div class="search">
                <i class="fa fa-search"></i>
                <input type="search">
            </div>
            <div class="nav d-none d-lg-flex">
                <div class="nav__item"><a href="/">메인페이지</a></div>
                <div class="nav__item"><a href="/fundRegister">펀드등록</a></div>
                <div class="nav__item"><a href="/fundView">펀드보기</a></div>
                <div class="nav__item"><a href="/investorList">투자자목록</a></div>
            </div>
            <div class="other d-lg-flex d-between">
                <div class="sign__btn btn"><i class="fa fa-user"></i></div>
                <p class="sign__text">로그인</p>
                <a href="/signUp"><div class="login__btn btn"><i class="fa fa-sign-in"></i></div></a>
                <p><a href="#">회원가입</a></p>
                <a class="admin" href="#">관리자</a>
            </div>
            <label for="open-aside" class="icon-bars d-lg-none">
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div>
    </header>
    <!-- 헤더 영역 -->

    <!-- 사이드바 -->
    <aside class="d-lg-none">
        <label for="open-aside" class="aside__bg"></label>
        <div class="aside__content">
            <div class="search search-aside">
                <div class="icon">
                    <i class="fa fa-search"></i>
                </div>
            </div>
            <div class="nav nav--aside mt-3">
                <div class="nav__item"><a data-link="/main.html">메인페이지</a></div>
                <div class="nav__item"><a data-link="/fundRegister.html">펀드등록</a></div>
                <div class="nav__item"><a data-link="/fundView.html">펀드보기</a></div>
                <div class="nav__item"><a data-link="/investorList.html">투자자목록</a></div>
            </div>
        </div>

    </aside>
    <!-- /사이드바 -->