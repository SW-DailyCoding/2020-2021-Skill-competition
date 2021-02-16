import investor from './investor.js';
import sign from './sign.js';
import view from './view.js';
import register from './register.js';
import common from './common.js';

class App {
    constructor() {
        this.investor = null;
        this.sign = null;
        this.view = null;
        this.register = null;
        this.common = null;
        
        fetch("./resource/js/fund.json")
        .then(res => res.json()) 
        .then(data => this.init(data));
    }

    init(data) {
        this.list = data;
        data.forEach((item, i) => {
           item.idx = i;
           item.attain  = (item.current / item.total) *100;
           console.log(item.attain);
        });


        this.common = new common(this.list);
        this.register = new register(this.list, this.common);
        this.view = new view(this.list);
        this.sign = new sign(this.list, this.common);
        this.investor = new investor(this.list);
    
        // this.list.sort(function(a, b) {
        //     console.log(a, b)
        //     return b.name - a.name;
        //     this.list.forEach(item => this.addItem(item));
        // })

        // function des(a, b) {
        //     var dateA = new Date(a['endDate']).getTime();
        //     var dateB = new Date(b['endDate']).getTime();
        //     return dateA < dateB ? 1 : -1;
        // }
        // this.list.sort(des);

        this.list.sort(function(a, b) {
            let dateA = new Date(a['endDate']).getTime();
            let dateB = new Date(b['endDate']).getTime();
            return dateA < dateB ? 1 : -1;
        }) // 내림차순
        console.log(this.list);

        this.list = this.list.filter(day => new Date(day.endDate) > new Date());
        this.list.forEach((item, i) => {
            if(i == 3) return;
            this.addItem(item);
        })
        console.log(this.list);
        
        this.loading();
    }


    addItem(item) {
        let element = document.createElement("div");
        element.innerHTML = `<div class="item mb-5">
                                                <p>펀드번호 : ${item.number}</p>
                                                <p>펀드이름 : ${item.name}</p>
                                                <p>모집마감일 : ${item.endDate} </p>
                                                <p>현재금액 : ${item.current.toLocaleString()} </p>
                                                <div class="progress">
                                                    <div  class="progress-bar " aria-valuenow="${item.attain}" style="width: 100%;">${item.attain}%</div>
                                                 </div>
                                                <div class="view pointer" data-id=${item.idx}  data-toggle="modal" data-target="#invest-view-modal">상세보기버튼</div>
                                            </div> `;

        document.querySelector(".fund-list").appendChild(element);
        element.querySelector(".view").addEventListener("click", e => {
            this.modal(e);
        })

        
    }

    modal(e) {
        let id = e.target.dataset.id;
        let modal = document.querySelector("#invest-view-modal .modal-body");
        modal.innerHTML = ` <div class="title">상세보기</div>
                                                <button class="btn" id="modal_remove"><i class="fa fa-remove">x</i></button>
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
        // setTimeout(() => {
        //     let progress = document.querySelectorAll(".progress-bar");
        //     progress.forEach((pro, i) => {
        //         console.log(pro);
        //         pro.classList.remove("progress-bar-striped");
        //         pro.classList.remove("progress-bar-animated");
        //         pro.style.transition = `${this.list[i].attain/ 50}s`;
        //         pro.style.width = `${this.list[i].attain}%`;
        //         pro.innerHTML = `${this.list[i].attain}%`;
        //     })
        // }, 3000);
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