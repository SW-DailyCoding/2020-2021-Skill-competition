class App {
    constructor() {
        this.fund = document.querySelector(".fund-view-list");
        this.investorList = [];

        fetch("./resource/js/fund.json")
        .then(res => res.json())
        .then(data => this.init(data));
    }

    init(data) {
        data.forEach(item => {
            item.investorList.forEach(inv => {
                let flag = true;
                this.investorList.forEach(list => {
                    if(list.email == inv.email) {
                        list.pay += inv.pay;
                        if(new Date(list.datetime) < new Date(inv.datetime)) {
                            list.datetime = inv.datetime;
                        }
                        flag = false;
                    }
                })
                if(flag) {
                    this.investorList.push(inv);
                }
            })
        })
        this.investorList.sort(function(a, b) {
            if(new Date(a.datetime) < new Date(b.datetime))
                return 1;
            else if(new Date(a.datetime) > new Date(b.datetime)) 
                return -1;
            else 
                return 0
        })
        this.investorList.forEach(item => this.addItem(item));
    }

    addItem(item) {
        let div = document.createElement("div");
        div.innerHTML = `<div class="item">
                            <div class="item-inner d-center">
                                <div class="img">
                                </div>
                                <div class="item-content d-colum ml-5">
                                    <div class="item-name mb-2">A0001</div>
                                    <p class="item-owner">홍길동</p>
                                    <p class="item-date">최근 투자일 : ${item.datetime}</>
                                    <p class="item-price"> 투자금액 : ${item.pay}</p>
                                    <p class="item-progress">펀드지분 : 82%</p>
                                    <p class="pointer">투자계약서</p>
                                </div>
                            </div> 
                        </div>`;
        this.fund.appendChild(div);
    }
}

window.onload = function() {
    let app = new App();
}