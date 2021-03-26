<?php

use App\Router;

Router::get("/get/cultures", "ActionController@getCulture");
Router::get("/get/detail", "ActionController@getDetail");

Router::get("/", "ViewController@index");
Router::get("/number", "ViewController@number");
Router::get("/history", "ViewController@history");


Router::get("/culture", "ViewController@culture");
Router::get("/culture/cultures", "ViewController@culture");
Router::get("/insert/cultures", "ActionController@insertCulture");
Router::get("/update/cultures", "ActionController@updateCulture");
Router::get("/delete/cultures", "ActionController@deleteCulture");

Router::get("/calender", "ViewController@calender");
Router::get("/calender/calenders", "ViewController@calenders");

Router::get("/y_calender", "ViewController@y_calender");
Router::post("/insert/calenders", "ActionController@insertCalender");
Router::post("/update/calenders", "ActionController@updateCalender");
Router::get("/delete/calenders", "ActionController@deleteCalender");

Router::get("/open-api", "ViewController@openApi");
Router::get("/open-api/cultures.php", "ActionController@openApi");
// Router::get("/openApi/.php", "ApiController@openApi");

Router::start();