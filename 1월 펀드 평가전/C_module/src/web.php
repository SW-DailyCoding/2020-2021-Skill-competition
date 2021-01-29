<?php

use App\Router;

Router::get("/", "ViewController@indexPage");
// Router::post("/detail", "ViewController@detailPage");

Router::get("/sign", "ActionController@signPage");
Router::post("/sign", "ActionController@sign");
Router::get("/login", "ActionController@loginPage");
Router::post("/login", "ActionController@login");
Router::get("/logout", "ActionController@logout");
Router::get("/view", "ViewController@viewPage");
Router::get("/investor", "ViewController@investorPage");

Router::get("/profile", "ViewController@profilePage");
Router::get("/admin", "ViewController@adminPage");

Router::get("/register", "ViewController@registerPage");
Router::post("/insert/fund", "ViewController@insertFund");

Router::start();