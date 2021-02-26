<?php

use App\Router;

// 기본
Router::get("/", "ViewController@index");
Router::get("/investor", "ViewController@investor");
Router::get("/view", "ViewController@view");
Router::post("/view", "ActionController@view");

Router::get("/profile", "ViewController@profile");
Router::get("/invest/profile", "ViewController@invest");

Router::get("/admin", "ViewController@admin");
Router::post("/delete", "ViewController@delete");

// 무언가
Router::get("/register", "ViewController@register");
Router::post("/register", "ActionController@register");

// 무언가2
Router::get("/sign", "ViewController@sign");
Router::post("/sign", "ActionController@sign");
Router::get("/login", "ViewController@login");
Router::post("/login", "ActionController@login");
Router::get("/logout", "ActionController@logout");

Router::start();