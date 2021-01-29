<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/page.css">
    <script src="/resource/js/jquery-3.4.1.js"></script>
    <link rel="stylesheet" href="/resource/fontawesome/css/font-awesome.css">
    <link rel="stylesheet" href="/resource/bootstrap-4.3.1-dist/css/bootstrap.css">
    <script src="/resource/bootstrap-4.3.1-dist/js/bootstrap.js"></script>
    <title>킥스타터</title>
</head>
<body>
    <div id="wrap" class="wrap">
        <header class="d-around">
            <input type="checkbox" name="menuOpen" id="menuOpenInput">
            <label for="menuOpenInput" id="menuOpen">
                <i class="fa fa-navicon"></i>
            </label>
            <a href="/index" class="logo pointer">
                <img src="./resource/logo2.svg" height="80" alt="">
            </a>
            <ul class="nav d-center">
                <li><a href="/">메인페이지</a></li>
                <li><a href="/register">펀드등록</a></li>
                <li><a href="/view">펀드보기</a></li>
                <li><a href="/investor">투자자목록</a></li>
            </ul>
            <ul class="etc d-center">
                <?php if(!user()) :?>
                    <li><a href="/sign">회원가입</a></li>
                    <li><a href="/login">로그인</a></li>
                <?php elseif(user()->joinEmail == "admin") :?>
                    <li><a href="/admin"><?=user()->joinEmail?></a></li>
                    <li><a href="/logout">로그아웃</a></li>
                <?php else: ?>
                    <li><a href="/profile"><?=user()->joinEmail?></a></li>
                    <li><a href="/logout">로그아웃</a></li>
                <?php endif; ?>
            </ul>
        </header>
        <div id="visual">
            <div class="visual-txt">
                <p>킥스타터에 오신걸 환영합니다</p>
            </div>
        </div>