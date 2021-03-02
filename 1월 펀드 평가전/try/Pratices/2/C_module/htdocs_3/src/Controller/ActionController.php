<?php
namespace Controller;

use App\DB;

class ActionController {
    function sign() {
        extract($_POST);
        var_dump($_POST);

        $user = DB::who($user_email);
        var_dump($user);
        if($user) back("중복되는 이메일입니다.");

        DB::query("INSERT INTO users(user_email, user_name, password) VALUES (?, ?, ?)", 
        [$user_email, $user_name, $password]);

        go("/", "회원가입이 되었습니다.");

    }

    function login() {
        extract($_POST);
        $user = DB::who($user_email);

        if(!$user || $password !== $user->password ) {
           back("아이디 또는 비밀번호가 틀렸습니다.");
        }

        $_SESSION['user'] = $user;

        go("/", "로그인이 되었습니다.");
    }

    function logout() {
        unset($_SESSION['user']);
        go("/", "로그아웃이 되었습니다");
    }

    function register() {
        extract($_POST);

        DB::query("INSERT INTO funds(fund_num, fund_name, fund_endDate, fund_total, owner) VALUES (?,?,?,?,?)",
        [$fund_num, $fund_name, $fund_date, $fund_price, user()->user_email]);

        go("/view", "등록이 되었습니다.");
    }

    function view() {
        extract($_POST);

        $investor = DB::fetch("SELECT * FROM investors WHERE email = ? AND fund_num = ?", [user()->user_email, $invest_num]);
        if($investor) {
            DB::query("UPDATE investors SET pay = ? WHERE email = ? AND fund_num = ?", [$investor->pay + $fund_price, user()->user_email, $invest_num]);
        } else {
            DB::query("INSERT INTO investors(fund_num, fund_name, name, email, pay, sign) VALUES(?, ?, ?, ?, ?, ?)", [$invest_num, $invest_name, user()->user_name, user()->user_email, $invest_price, $invest_sign]);
        }

        $fund = DB::fetch("SELECT fund_total, fund_current FROM funds WHERE fund_num = ?", [$invest_num]);
        $current = (int)$fund->fund_current + (int)$fund_price;
        $total = (int)$fund->fund_total;

        $success = round(($current / $total)  * 100, 1);

        DB::query("UPDATE users SET money =? WHERE fund_num =?" [$fund_num]);
        $_SESSION['user'] = DB::who(user()->user_email);

        go("/view", "사업 추가 완료되었습니다.");
    }
}