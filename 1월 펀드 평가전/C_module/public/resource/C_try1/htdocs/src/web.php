<?php

use App\Router;

Router::get("/", "ViewController@indexPage");
// Router::post("/detail", "ViewController@detailPage");

Router::get("/sign", "ActionController@signPage");
Router::post("/sign", "ActionController@sign");
Router::get("/login", "ActionController@loginPage");
Router::post("/login", "ActionController@login");
Router::get("/logout", "ActionController@logout");

Router::get("/profile", "ActionController@profilePage");
Router::get("/investor/profile", "ActionController@investorProfilePage");

Router::get("/admin", "ActionController@adminPage");
Router::post("/delete/fund", "ViewController@deleteFund");

Router::get("/view", "ViewController@viewPage");
Router::get("/view/{id}", "ViewController@viewPage");
Router::post("/insert/invest", "ViewController@insertInvest");

Router::post("/insert/business", "ViewController@insertBusiness");

Router::get("/register", "ViewContrller@registerPage");
Router::post("/insert/fund", "ViewController@insertFund");

Router::get("/investor", "ViewController@investorPage");

Router::start();