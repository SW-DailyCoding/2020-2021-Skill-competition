<?php


function go($url, $message = ""){
    echo "<script>";
    if($message !== "") echo "alert('$message');";
    echo "location.href='$url';";
    echo "</script>";
    exit;
}

function back($message = ""){
    echo "<script>";
    if($message !== "") echo "alert('$message');";
    echo "history.back();";
    echo "</script>";
    exit;
}

function json_response($data){
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

function view($viewname, $data = []){
    extract($data);
    // require VIEW . "/CalenderController.php";
    require VIEW."/header.php";
    require VIEW."/$viewname.php";
    require VIEW."/footer.php";
    exit;
}

function extname($filename){
    return strtolower(substr($filename, strrpos($filename, ".")));
}

function isImage($filename){
    return array_search(extname($filename), [".jpg", ".png", ".gif"]) !== false;
}

function enc($output){
    return nl2br(str_replace(" ", "&nbsp;", htmlentities($output)));
}

function dt($time){
    return date("Y-m-d", strtotime($time));
}

function pagination($data){
<<<<<<< HEAD
    // var_dump($data);
        define("LIST_LENGTH", 10);
        define("BLOCK_LENGTH", 5);
        define("SPACING", 4);
        
        $page = isset($_GET["page"]) && is_numeric($_GET["page"]) && $_GET["page"] >= 1 ? $_GET["page"] : 1;

        $totalPage = ceil(count($data) / LIST_LENGTH);
        
        $startPage = ceil($page / BLOCK_LENGTH) * BLOCK_LENGTH - SPACING;
        $endPage = $startPage + SPACING > $totalPage ? $totalPage : $startPage + SPACING;

        $next = true;
        $prev = true;

        if($startPage == 1) $next = false;
        if($endPage == $totalPage) $prev = false;

        $data = array_slice($data, ($page - 1) * LIST_LENGTH, LIST_LENGTH);

        return (object)compact("startPage", "endPage", "data", "next", "prev", "page");
=======
    define("LIST_LENGTH", 10);
    define("BLOCK_LENGTH", 5);
    define("SPACING", 4);
 
    $page = isset($_GET['page']) && is_numeric($_GET['page']) && $_GET['page'] >= 1 ? $_GET['page'] : 1;
    $totalPage = ceil(count($data) / LIST_LENGTH);

    $startPage = ceil($page * BLOCK_LENGTH ) *BLOCK_LENGTH - SPACING;
    $endPage = $startPage + SPACING > $totalPage ? $totalPage : $startPage - 1;

    $prev = true;
    $next = true;

    if($startPage == 1 ) $next = false;
    if($totalPage == $endPage) $prev = false;

    $data = array_slice($data, ($page - 1) * LIST_LENGTH, LIST_LENGTH);
    return (object)compact("startPage" ,"endPage", "next", "prev",  "data", "page");
>>>>>>> 49e8f1dc83a928681dabe73b746a73a6c2608170
}

// function dump(){
//     foreach(func_get_args() as $arg) {
//         echo "<pre>";
//         var_dump($arg);
//         echo "</pre>";
//     }
// }
// function dd(){
//     foreach(func_get_args() as $arg) {
//         echo "<pre>";
//         var_dump($arg);
//         echo "</pre>";
//     }
//     exit;
// }