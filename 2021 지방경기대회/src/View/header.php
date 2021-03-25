<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="/js/jquery-3.5.0.min.js"></script>
    <script src="/bootstrap-4.4.1-dist/js/bootstrap.js"></script>
    <link rel="stylesheet" href="/bootstrap-4.4.1-dist/css/bootstrap.css">
    <link rel="stylesheet" href="/fontawesome/css/font-awesome.css">
    <link rel="stylesheet" href="/css/style.css">
    <script src="/js/common.js"></script>
</head>
<body>
    <!-- 전체 페이지-->
    <div id="wrap">
        <!-- 헤더 영역 -->
        <header class="h-150">
            <div class="header_top">
                <div class="container d-between">
                    <div></div>
                    <div class="etc py-2 em-08">
                        <a href="#">로그인</a>
                        <a href="#">회원가입</a>
                        <a href="#">문의하기</a>
                        <select>
                            <option value="한국어">한국어</option>
                            <option value="English">English</option>
                            <option value="中文(简体)">中文(简体)</option>
                            <option value="日本語)">(日本語)</option>
                        </select>
                    </div>                 
                </div>
            </div>
            <div class="header_bottom d-between">
                <div class="container d-between">
                    <input type="checkbox" name="menuOpen" id="menuOpenInput">
                    <label for="menuOpenInput" id="menuOpen">
                        <i class="fa fa-bars t-main"></i>
                    </label>
                    <div class="logo"><img class="fit-cover" src="/images/logo/logo.png" alt=""></div>
                    <div class="nav">
                        <ul class="menu  d-flex">
                            <li><a href="/">HOME</a></li>
                            <li><a href="#">무형문화재관리원</a>
                            <ul class="menu2">
                                <li><a href="#" class="t-bold e-11">소개</a></li>
                                <li><a href="#" class="t-bold e-11">일반현황</a>
                                    <ul class="menu3">
                                        <li class="my-2"><a href="#">설립목적</a></li>
                                        <li class="my-2"><a href="/history">연혁</a></li>
                                        <li class="my-2"><a href="#">역할</a></li>
                                    </ul>
                                </li>
                                <li><a href="#" class="t-bold e-11">주요업무계획</a></li>
                                <li><a href="#" class="t-bold e-11">조직 및 구성</a></li>
                                <li><a href="/number" class="t-bold e-11">전화번호</a></li>
                            </ul>
                            </li>
                            <li><a href="/culture">무형문화재 현황</a>
                                <ul class="menu2">
                                    <li class="mb-2"><a href="#" class="t-bold e-11">전통 공연·예술</a></li>
                                    <li class="mb-2"><a href="#" class="t-bold e-11">전통기술</a></li>
                                    <li class="mb-2"><a href="#" class="t-bold e-11">전통지식</a></li>
                                    <li class="mb-2"><a href="#" class="t-bold e-11">구전 전통 및 표현</a></li>
                                    <li class="mb-2"><a href="#" class="t-bold e-11">전통 생활관습</a></li>
                                    <li class="mb-2"><a href="#" class="t-bold e-11">의례·의식</a></li>
                                    <li class="mb-2"><a href="#" class="t-bold e-11">전통 놀이·무예</a></li>
                                    <li class="mb-2"><a href="#" class="t-bold e-11">전체 현황</a></li>
                                </ul>
                            </li>
                            <li><a href="#">행사 안내</a>
                                <ul class="menu2">
                                    <li><a href="#" class="t-bold em-11">공연</a>
                                        <ul class="menu3">
                                            <li><a href="/calender?y=2021&m=03">월간 공연 일정</a></li>
                                            <li><a href="/y_calender">연간 공연 일정</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#" class="t-bold em-11">전시</a>
                                        <ul class="menu3">
                                            <li><a href="#">관람 안내</a></li>
                                            <li><a href="#">전시실</a></li>
                                            <li><a href="#">디지털 체험관</a></li>
                                            <li><a href="#">기획 전시실</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#" class="t-bold em-11">교육</a>
                                        <ul class="menu3">
                                            <li><a href="#">공방</a></li>
                                            <li><a href="#">공예품 갤러리</a></li>
                                            <li><a href="#">전수교육관 현황</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="#">전승지원</a>
                                <ul class="menu2">
                                    <li class="mb-2"><a href="#" class="t-bold em-11">공방</a></li>
                                    <li class="mb-2"><a href="#" class="t-bold em-11">공예품 갤러리</a></li>
                                    <li class="mb-2"><a href="#" class="t-bold em-11">전수교육관 현황</a></li>
                                </ul>
                            </li>
                            <li><a href="#">공개 데이터</a>
                                <ul class="menu2">
                                    <li class="mb-2"><a href="#" class="t-bold em-11">무형문화재 현황 조회</a></li>
                                    <li class="mb-2"><a href="#" class="t-bold em-11">공연 일정 조회</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>   
                </div>         
            </div>
        </header>
        <!-- /헤더 영역 -->
        <div id="visual">
            <div class="visual_img">
                <div class="image"></div>
                <div class="image"></div>
                <div class="image"></div>
            </div>
            <div class="visual_text p-center t-white container ">
                <div class="text em-12 ">
                    <div class=" em-3 t-bold t-white mb-4">
                        <span>무</span>
                        <span>형</span>
                        <span>유</span>
                        <span>산</span>
                        <span></span>
                        <span>디</span>
                        <span>지</span>
                        <span>털</span>
                        <span></span>
                        <span>체</span>
                        <span>험</span>
                        <span>관</span>
                        <span></span>
                        <span>개</span>
                        <span>관</span>
                    <!-- 형유산 디지털 체험관 개관 -->
                    </div>   <br/>
                    <span class="t-white mt-4">놀이한마당(AI,VR 체험), 아름다운 향연(포토존),  <br/>
                        함께하는 장인 정신(꾸미기), 다면 영상관(3차원 입체영상)</span>
                    <div class="do do2"></div>

                </div>
                <div class="text em-12 ">
                    <div class=" em-3 t-bold t-white mb-4">
                        <span>씨</span>
                        <span>름</span>
                        <span>,</span>
                        <span>분</span>
                        <span>단</span>
                        <span>을</span>
                        <span></span>
                        <span> 넘</span>
                        <span> 어</span>
                        <span> </span>
                        <span class=""> 세</span>
                        <span class=""> 계</span>
                        <span class=""> 를</span>
                        <span class=""> </span>
                        <span class=""> 잇</span>
                        <span class=""> 다</span>
                        <span class=""> !</span>

                        <!-- 름, 단을 넘어 세계를 잇다! -->
                    </div> 
                    <span class="t-white mt-4">
                         유네스코 인류무형유산 등재 기념 특별전 <br/>
                    </span> 
                    <div class="do do3"></div>
                </div>
                  
                <div class="text em-12 ">
                    <span class=" em-3 t-bold t-white mb-4">
                    <span>무</span>
                    <span>형</span>
                    <span>유</span>
                    <span>산</span>
                    <span>   </span>
                    <span>유</span>
                    <span>튜</span>
                    <span>브</span>
                    <span>   </span>
                    <span>영</span>
                    <span>상</span>
                    <span></span>
                    <span>공</span>
                    <span>모</span>
                    <span>전</span>
                    <!-- 무형유산 유튜브 영상 공모전 -->
                    </span> 
                    <span class="t-white mt-4">
                        <br/>본선 진출작 발표<br/>
                        본선 작품 상영 및 시상식 : 4월 30일(일) 무형문화재관리원</span> 
                        <div class="do do4"></div>
                </div>
            </div>
        </div>