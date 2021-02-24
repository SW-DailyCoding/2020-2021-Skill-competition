<?php

use App\Router;

// 기본
Router::get("/", "ViewController@index");
Router::get("/view", "ViewController@view");
Router::get("/investor", "ViewController@investor");
Router::get("/admin", "ViewController@admin");
Router::get("/profile", "ViewController@profile");

// 무언가
Router::get("/register", "ViewController@register");
Router::post("/insert/fund", "ActionController@insert");

// 무언가2
Router::get("/sign", "ViewController@sign");
Router::post("/sign", "ActionController@sign");
Router::get("/login", "ViewController@login");
Router::post("/login", "ActionController@login");
Router::get("/logout", "ActionController@logout");

Router::start();