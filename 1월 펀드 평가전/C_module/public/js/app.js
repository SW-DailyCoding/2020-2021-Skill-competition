import main from './main.js';
import view from './view.js';
import register from './register.js';
import investor from './investor.js';
import signUp from './signUp.js';
import common from './common.js';

class App{
    constructor(route){
        this.main = null;
        this.view = null;
        this.register = null;
        this.investor = null;
        this.signUp = null;
        this.common = null;

        this.route = route; // 경로
        this.list = [];

        fetch("./js/fund.json")
            .then(res => res.json())
            .then(data => this.init(data));

        // this.loading();
    }

    // JSON 가져오기
    // getFunds() {
    //     return  fetch("./js/fund.json")
    //         .then(res => res.json())
    //         .then(data => this.init(data));
    // }

    init(data) {
        // 값
        console.log(data);
        data.forEach((x, idx) => {
            x.attain = (x.current / x.total) * 100; // Attainment -> attain
            x.idx = idx;
            x.photo = `images/fundImg${idx++}.jpg`;
        });

        this.list = data;
        this.common = new common(this.list);
        this.main = new main(this.list, this.common);
        this.view = new view(this.list, this.common);
        this.register = new register(this.list, this.common);
        this.investor = new investor(this.list, this.common);
        this.signUp = new signUp(this.list, this.common);

        this.render();

        // 로딩
        // document.querySelectorAll(".nav__item").forEach(x => {
        //     x.addEventListener("click", this.loading);
        // })
    }

    // 렌더링
    render() {
        switch (this.route)
        {
            case "index.html":
                this.main.mainLoading();
                break;

            case "fundView.html":
                this.view.viewLoading();
                break;

            case "signUp.html":
                this.signUp.signLoading();
                break;

            case "fundRegister.html":
                this.register.registerLoading();
                break;

            case "investorList.html":
                this.investor.investorLoading();
                break;
        }
    }

    // 로딩, 리턴
    // loading() {
    //     let element = document.querySelectorAll(".progress-bar");
    //     for(let el in element) {
    //         element[el].style.width = "50%";
    //         element[el].style.transform = "all 0.3s ease-out";
    //     }
    //
    // }
}

window.onload = () =>{
    let nowPage = document.location.href.match(/[a-zA-Z]+.html/g) === null ? "index.html" : document.location.href.match(/[a-zA-Z]+.html/g)[0];
    let app = new App(nowPage);
}