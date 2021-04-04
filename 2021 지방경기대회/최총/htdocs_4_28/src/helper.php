<?php


function view($name, $data = []) {
    require VIEW . "/header.php";
    require VIEW . "/$name.php";
    require VIEW . "/footer.php";
}

function go($url, $msg) {
    echo "<script>";
    echo "alert('$msg');";
    echo "location.href='$url'";
    echo "</script>";
}

function back($msg) {
    echo "<script>";
    echo "alert('$msg');";
    echo "history.back();";
    echo "</script>";
    exit;
}

function extname($filename){
    return strtolower(substr($filename,strrpos($filename,".")));
}

function file_upload($file){
    $filename = time().extname($file['name']);
    move_uploaded_file($file['tmp_name'],IMAGE."/$filename");
    return $filename;
}

function base64_upload($data){
    $data = base64_encode(file_get_contents(IMAGE."/$data"));
    $filename = "data:image/jpg;base64,".$data;
    return $filename;
}
function json_response($data) {
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
}

function pagination($data) {
    $tab = isset($_GET["tab"]) ? $_GET["tab"] : "album";
    $type = isset($_GET["type"]) ? $_GET["type"] : ""; 

    define("LIST_LENGTH", !isset($_GET["type"]) || $_GET["type"] == "album" ? 8 : 10);
    define("BLOCK_LENGTH", 10);
    define("SPACING", 9);

    $page = isset($_GET["page"]) && is_numeric($_GET["page"]) && $_GET["page"] >= 1 ? $_GET["page"] : 1;
    $totalPage = ceil(count($data) / LIST_LENGTH);
    $startPage = ceil($page / BLOCK_LENGTH) * BLOCK_LENGTH - SPACING;
    $endPage = $startPage + SPACING > $totalPage ? $totalPage : $startPage + SPACING;
    $length = count($data);

    $prev = true;
    $next = true;

    if($startPage == 1) $prev = false;
    if($endPage == $totalPage) $next = false;

    $data = array_slice($data, ($page - 1) * LIST_LENGTH, LIST_LENGTH);

    return (object)compact("startPage", "endPage", "totalPage", "page", "data", "prev", "next", "length", "type", "tab");
}