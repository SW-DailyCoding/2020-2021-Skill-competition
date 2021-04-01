<?php

use App\Router;

Router::get("/get/cultures", "ActionController@getCulture");
Router::get("/get/detail", "ActionController@getDetail");

Router::get("/", "ViewController@index");
Router::get("/number", "ViewController@number");
Router::get("/history", "ViewController@history");


Router::get("/culture", "ViewController@culture");
<<<<<<< HEAD
Router::get("/culture/cultures", "ViewController@culture");
=======
Router::get("/cultures/{id}", "ViewController@culture");
>>>>>>> 49e8f1dc83a928681dabe73b746a73a6c2608170
Router::get("/insert/cultures", "ActionController@insertCulture");
Router::get("/update/cultures", "ActionController@updateCulture");
Router::get("/delete/cultures", "ActionController@deleteCulture");

Router::get("/calender", "ViewController@calender");
<<<<<<< HEAD
Router::get("/calender/calenders", "ViewController@calenders");

=======
>>>>>>> 49e8f1dc83a928681dabe73b746a73a6c2608170
Router::get("/y_calender", "ViewController@y_calender");
Router::post("/insert/calenders", "ActionController@insertCalender");
Router::post("/update/calenders", "ActionController@updateCalender");
Router::get("/delete/calenders", "ActionController@deleteCalender");

Router::get("/open-api", "ViewController@openApi");
Router::get("/open-api/cultures.php", "ActionController@openApi");
// Router::get("/openApi/.php", "ApiController@openApi");

Router::start();