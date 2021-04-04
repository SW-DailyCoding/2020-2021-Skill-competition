<?php

session_start();

define("ROOT", dirname(__DIR__));
define("SRC", ROOT . "/src");
define("VIEW", SRC . "/View");
define("IMAGE",pathinfo(ROOT,PATHINFO_DIRNAME)."/nihcImage");

require SRC . "/autoload.php";
require SRC . "/helper.php";
require SRC . "/web.php";