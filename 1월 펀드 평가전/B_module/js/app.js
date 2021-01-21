import view from './view.js';
import main from './main.js';
import join from './join.js';
import register from './register.js';
import investor from './investor.js';
import system from './system.js';

class App{
    constructor(path){
        this.view = null;
        this.main = null;
        this.join = null;
        this.register = null;
        this.investor = null;
        this.system = null;

        this.path = path;
        this.fundList = [];

        fetch("fund.json")
            .then(res => res.json())
            .then(data => this.init(data))
    }

    init(data) {

        this.router();
    }

    router() {
        switch () {

        }
    }

}

window.onload = () =>{
    let now_page = document.location.href.match(/[a-zA-Z]+.html/g) === null ? "index.html" : document.location.href.match(/[a-zA-Z]+.html/g)[0];
    let app = new App(now_page);
}