import view from './view.js';
import main from './main.js';
import join from './join.js';
import register from './register.js';
import investor from './investor.js';
import system from './system.js';

class App{
    constructor(){
        this.view = null;
        this.main = null;
        this.join = null;
        this.register = null;
        this.investor = null;
        this.system = null;

        this.init();
    }

    async init(data) {
        this.funds = await this.getFunds();
        this.render();
    }

    // 렌더링
    render() {
        switch () {

        }
    }

    // JSON 가져오기
    getFunds() {
        return  fetch("fund.json")
            .then(res => res.json())
            .then(data => this.init(data))
    }

}

window.onload = () =>{
    let app = new App();
}