<?php

use App\Router;


Router::get("/","ViewController@index");
Router::get("/index","ViewController@index");
Router::get("/view","ViewController@view");
Router::get("/investor","ViewController@investor");

Router::post("/fundListLoad","ActionController@fundListLoad");
Router::post("/user","ActionController@userPageList");
Router::get("/user","ViewController@user");

Router::get("/sign","ViewController@sign","guest");
Router::post("/sign","ActionController@sign","guest");
Router::get("/login","ViewController@login","guest");
Router::post("/login","ActionController@login","guest");

Router::get("/logout","ActionController@logout","user");
Router::get("/register","ViewController@register","user");
Router::post("/register","ActionController@register","user");
Router::post("/fundEnd","ActionController@fundDelete","user");
Router::post("/viewFund","ActionController@investorsAdd","user");
Router::post("/viewBusiness","ActionController@viewBusiness","user");

Router::get("/admin","ViewController@admin","admin");
Router::post("/adminFundClose","ActionController@adminFundClose","admin");

Router::start();