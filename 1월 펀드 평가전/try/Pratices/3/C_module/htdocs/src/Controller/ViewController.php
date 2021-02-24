<?php 
namespace Controller;

use App\DB;

class ViewController {
    function index() {
        view("index");
    }

    function register() {
        view("register");
    }

    function view() {
        view("view");
    }

    function investor() {
        view("investor");
    }
    
    function sign() {
        view("sign");
    }

    function login() {
        view("login");
    }

    
}