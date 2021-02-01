import main from './main.js';
import common from './common.js';
import register from './register.js';
import investor from './investor.js';
import view from './view.js';
import signUp from "./signUp.js";

class App {
    constructor(route) {
        this.main = null;
        this.common = null;
        this.register = null;
        this.investor = null;
        this.view = null;
        this.signUp = null;

        this.route = route;
        this.list = [];

        fetch("./js/fund.json")
            .then(res => res.json())
            .then(data => this.init(data));
    }

    init(data) {
        data.forEach((x, idx) => {
            x.attain = (x.current / x.total) * 100;
            x.idx = idx;
            x.photo = `resource/fundImg${idx++}.jpg`;
        });

        this.list = data;
        this.common = new common(this.list);
        this.main = new main(this.list, this.common)
        this.view = new view(this.list, this.common)
        this.register = new register(this.list, this.common)
        this.investor = new investor(this.list, this.common)
        this.signUp = new signUp(this.list, this.common)

    }

    // render() {
    //     switch (this.route)
    //     {
    //         case "index.html":
    //             this.main.mainLoading();
    //     }
    // }
}

window.onload = () => {
    // let nowPage = document.location.href.match(/[a-zA-Z]+.html/g) == null ? "index.html" : document.location.href.match(/[a-zA-Z]+.html/g)[0];
    let app = new App();
}