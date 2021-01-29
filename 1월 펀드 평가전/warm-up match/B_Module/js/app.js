// import common from './common.js';
// import investor from './investor.js';
// import signUp from './signUp.js';
// import view from './view.js';
// import main from './main.js';
// import register from './register.js';

class App {
    constructor() {
        this.common = null;
        this.investor = null;
        this.signUp = null;
        this.view = null;
        this.main = null;
        this.register = null;
        
        fetch("./resource/js/fund.json")
        .then(res => res.json()) 
        .then(data => this.init(data));
        
    }

    init(data) {
        console.log(data);
        this.list = data;
        data.forEach((item, i) => {
           item.idx = i;
           item.str_total = this.string(item.total);
           item.str_current = this.string(item.current);
           item.attain  = (item.current / item.total) *100;
        });

     
        this.list.forEach(item => this.addItem(item));
        this.loading();

        this.common = new common(this.list);
        this.register = new register(this.list, this.common);
        this.view = new view(this.list, this.common);
        this.signUp = new signUp(this.list, this.common);
        this.investor = new investor(this.list, this.common);
    }

    string(item) {
        return item.toLocaleString("ko-KR");
    }
    
    addItem(item) {
        let element = document.createElement("div");
        element.innerHTML = `<div class="item" id="investor-view-modal">
                                <div class="item-number d-center ml-3 mb-4">${item.number}</div>
                                <div class="item-inner d-center">
                                    <div class="img">
                                        <img src="./resource/images/business.jpg" alt="">
                                    </div>
                                    <div class="item-content d-colum ml-5">
                                        <p class="d-end view" data-id=${item.idx}  data-toggle="modal" data-target="#invest-view-modal">상세보기</p>
                                        <div class="item-name mb-2">${item.name}</div>
                                        <p class="item-owner">${item.owner}</p>
                                        <p class="item-date">${item.endDate}</p>
                                        <p class="item-price">${item.current}/ ${item.total}</p>
                                        <div class="progress">
                                            <div  class="progress-bar progress-bar-striped progress-bar-animated" aria-valuenow="${item.attain}" style="width: 100%;">${item.attain}%</div>
                                        </div>
                                    </div>
                                </div> `;

        document.querySelector(".fund-section-list").appendChild(element);
        element.querySelector(".view").addEventListener("click", e => {
            this.modal(e);
        })
    }

    modal(e) {
        let id = e.target.dataset.id;
        let modal = document.querySelector("#invest-view-modal .modal-body");
        modal.innerHTML = ` <div class="title">상세보기</div>
                                <div class="mt-2">
                                    <small class="text-gray">번호</small>
                                    <p class="ml-2 mb-3">${this.list[id].number}</p>
                                </div>
                                <div class="mt-2">
                                    <small class="text-gray">펀드명</small>
                                    <p class="ml-2 mb-3">${this.list[id].name}</p>
                                </div>
                                <div class="mt-2">
                                    <small class="text-gray">창업자명</small>
                                    <p class="ml-2 mb-3">${this.list[id].owner}</p>
                                </div>
                                <div class="mt-2">
                                    <small class="text-gray">모집마감일</small>
                                    <p class="ml-2 mb-3">${this.list[id].endDate}</p>
                                </div>
                                <div class="mt-2">
                                    <small class="text-gray">투자자 리스트</small>
                                    <div class="investor pt-1 pl-4" style="max-height: 400px; height: auto; overflow-y: scroll;">
                                        
                                    </div>
                                </div>
                            </div>`;

    this.list[id].investorList.forEach(list => {
        let element = document.createElement("div");
        element.innerHTML = `   <div>
                                <small class="text-gray">이메일</small>
                                <span class="ml-2 mb-0">${list.email}</span>
                            </div>
                            <div class="mt-2">
                                <small class="text-gray">투자금액</small>
                                <span class="ml-2 mb-0">${list.pay}</span>
                            </div>
                            <div class="mt-2 mb-2">
                                <small class="text-gray">투자시간</small>
                                <span class="ml-2 mb-0">${list.datetime}</span>
                            </div>`;
        modal.querySelector(".investor").appendChild(element);
        })
    }

    loading() {
        setTimeout(() => {
            let progress = document.querySelectorAll(".progress-bar");
            progress.forEach((bar, i) => {
                // bar.classList.remove("progress-bar-striped");
                // bar.classList.remove("progress-bar-animated");
                // bar.style.transition = `${this.list[i].attain/ 50}s`;
                bar.style.width = `${this.list[i].attain}%`;
                bar.innerHTML = `${this.list[i].attain}%`;
            })
        }, 3000);
    }
}

window.onload = function() {
    let app = new App();
}