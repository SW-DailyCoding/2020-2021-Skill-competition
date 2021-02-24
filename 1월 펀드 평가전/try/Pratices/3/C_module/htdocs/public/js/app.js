import investor from './investor.js';
import sign from './sign.js';
import view from './view.js';
import register from './register.js';
class App {
    constructor() {
        this.investor = null;
        this.sign = null;
        this.view = null;
        this.register = null;

        fetch("./resource/js/fund.json")
        .then(res => res.json()) 
        .then(data => this.init(data));

        this.fund_index = document.querySelector("#fund_index");
        this.fund_investor = document.querySelector("#fund_investor");
        this.fund_view = document.querySelector("#fund_view");
    }

    init(data) {
        this.list = data;
        data.forEach((item, i) => {
           item.idx = i;
           item.attain  = (item.current / item.total) *100;
        });

        // this.list.sort(function(a, b) {
        //     let dateA = new Date(a['endDate']).getTime();
        //     let dateB = new Date(b['endDate']).getTime();
        //     return dateA < dateB ? 1 : -1;
        // }) // 내림차순
        

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
            return  new Date(a['endDate']).getTime() <  new Date(b['endDate']).getTime() ? 1 : -1;
        }) // 내림차순


        this.investor = new investor(this,this.list);
        this.view = new view(this, this.list);
        this.register = new register(this, this.list);
        this.sign = new sign(this, this.list);   

        if(this.fund_index) {
            this.list = this.list.filter(day => new Date(day.endDate) > new Date());
            console.log(this.list);
            this.list.forEach((item, i) => {
                if(i < 4 ) this.addItem(item, i);            
            })
        } else if(this.fund_investor) {
            this.list.forEach((item, i) => {
                if(i < 5 ) this.addItem(item, i);            
            })
        } else if(this.fund_view) {
            this.list.forEach((item, i) => {
                if(i < 4) this.addItem(item, i);
            })
        }

        this.loading();
    }

    addItem(item, i) {
        let element = document.createElement("div");
        element.innerHTML = `<div class="item mb-5">
                                                <p>펀드번호 : ${item.number}</p>
                                                <p>펀드이름 : ${item.name}</p>
                                                <p>모집마감일 : ${item.endDate} </p>
                                                <p>현재금액 : ${item.current.toLocaleString()} </p>
                                                <div class="progress">
                                                    <div  class="progress-bar " aria-valuenow="${item.attain}" style="width: 100%;">${item.attain}%</div>
                                                 </div>
                                                 <div class="item-footer mt-2"></div>
                                            </div> `;
    
       let fund_list =  document.querySelector(".fund-list");
        if(fund_list) fund_list.appendChild(element);

        if(this.fund_index) {
            let div =  `<div class=" w-100 btn view pointer mb-5 "  data-id=${i}  data-toggle="modal" data-target="#invest-view-modal">상세보기버튼</div>`;
            element.innerHTML += div;
            element.querySelector(".view").addEventListener("click", e => {
                this.modal(e);
            })
        }

        if(this.fund_view) {
            if(new Date(this.list[i].endDate) <= new Date()) {
                element.querySelector(".item-footer").innerHTML = `
                <button class="btn pointer w-100">모집완료</button>`;
            } else {
                element.querySelector(".item-footer").innerHTML = `
                <button class="invest_btn btn pointer" data-toggle="modal" data-target="#insert-modal" data-id="${i}">투자하기</button>
                <button class="more_btn btn pointer"data-toggle="modal" data-target="#invest-view-modal" data-id="${i}">상세보기</button>
                `;
                element.querySelector(".invest_btn").addEventListener("click", e => this.view.investModal(e));
                element.querySelector(".more_btn").addEventListener("click", e => { this.modal(e)});
            }
        }

        // if(this.fund_investor) {
        //     element.querySelector(".item-footer").innerHTML = `
               
        //     `;
        // }
    }

 

    modal(e) {
        let id = e.target.dataset.id;
        let modal = document.querySelector("#invest-view-modal .modal-body");
        modal.innerHTML = ` <div class="title">상세보기</div>
                                                <button class="btn" id="modal_remove"><i class="fa fa-remove"></i></button>
                                                <div class="mt-2">
                                                    <small class="text-gray">번호</small>
                                                    <p>${this.list[id].number}</p>
                                                </div>
                                                <div class="mt-2">
                                                    <small class="text-gray">펀드명</small>
                                                    <p>${this.list[id].name}</p>
                                                </div>
                                                <div class="mt-2">
                                                    <small class="text-gray">창업자명</small>
                                                    <p>${this.list[id].owner}</p>
                                                </div>
                                                <div class="mt-2">
                                                    <small class="text-gray">모집마감일</small>
                                                    <p>${this.list[id].endDate}</p>
                                                </div>
                                                <div class="mt-2">
                                                    <small class="text-gray">투자자 리스트</small>
                                                    <div class="investor pt-1 " style="max-height: 400px; height: auto; overflow-y: scroll;">
                                                    </div>
                                                </div>
                                            </div>`;

    this.list[id].investorList.forEach(list => {
        let element = document.createElement("div");
        element.innerHTML = `   <div>
                                                    <small class="text-gray">이메일</small>
                                                    <span class="ml-2 ">${list.email}</span>
                                                </div>
                                                <div class="mt-2">
                                                    <small class="text-gray">투자금액</small>
                                                    <span class="ml-2 ">${list.pay}</span>
                                                </div>
                                                <div class="mt-2 ">
                                                    <small class="text-gray">투자시간</small>
                                                    <span>${list.datetime}</span>
                                                </div>`;
        modal.querySelector(".investor").appendChild(element);
        })
    }


    toast() {
        let id = new Date().getTime();
        let toast = `<div class="toast" id=${id}>
                        <div class="toast-header d-between">
                            <strong>form 오류</strong>
                            <button class="close">x</button>
                        </div>
                        <div class="toast-body">
                            입력하신 정보가 양식과 일치하지 않습니다.
                        </div>
                    </div>`;
        $("#toast_container").append(toast);
        $(`#${id}`).toast({
            autohide: true,
            delay: 3000
        });
        $(`#${id} button`).on("click", function() {
            $(`#${id}`).remove();
        });
        $(`#${id}`).toast("show");
    }

    loading() {
        setTimeout(() => {
            let progress = document.querySelectorAll(".progress-bar");
            progress.forEach((bar, i) => {
                bar.style.width = `${this.list[i].attain}%`;
                bar.innerHTML = `${this.list[i].attain}%`;
            })
        }, 3000);
     
    }
}

window.onload = function() {
    let app = new App();
}