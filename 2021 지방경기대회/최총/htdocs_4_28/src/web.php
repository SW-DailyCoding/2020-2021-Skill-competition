<?php 

use App\Router;

Router::get("/init", "ActionController@init");

Router::get("/", "ViewController@index");
Router::get("/number", "ViewController@number");
Router::get("/history", "ViewController@history");

Router::get("/m_calender", "ViewController@m_calender");
Router::get("/y_calender", "ViewController@y_calender");
Router::get("/calender/calenders", "ViewController@calenders");
Router::post("/insert/calenders", "ActionController@insertCalender");
Router::post("/update/calenders", "ActionController@updateCalender");
Router::get("/delete/calenders", "ActionController@deleteCalender");

Router::get("/culture", "ViewController@culture");
Router::get("/registerCulture", "ViewController@registerCulture");
Router::post("/insert/culture", "ActionController@insertCultures");
Router::get("/culture/cultures", "ViewController@cultures");
Router::post("/update/culture", "ActionController@updateCultures");
Router::get("/delete-image", "ActionController@deleteImage");
Router::get("/delete/culture", "ActionController@deleteCultures");


Router::get("/openApiCulture", "ViewController@openCulture");
Router::get("/openApiCalender", "ViewController@openCalender");
Router::get("/openAPI/nihList.php", "ApiController@nihList");
Router::get("/openAPI/showList.php", "ApiController@showList");

Router::start();
