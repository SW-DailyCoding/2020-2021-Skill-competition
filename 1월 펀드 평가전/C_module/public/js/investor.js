export default class investor {
    constructor(list, common) {
        this.list = list;
        this.common = common;

        this.investorList = [];
        this.investor_page = null;
        this.investor_zone = null;

        this.page = 0;
        this.page_block = 5;
        this.page_maxBlock = 0;

        this.page_length = 0;
        this.page_max = 5;

        this.left = false;
        this.right = false;
    }

    investorLoading() {
        this.investorListLoading();
        this.investor_zone = document.querySelector(".investor__list");
        console.log(this.investor_zone)
        this.investor_page = document.querySelector(".page__nation");
        console.log(this.investor_page);
        this.investor_zone.innerHTML = "";

        let start = this.page * this.page_max;
        let end = start + this.page_max;
        let in_list = this.investorList.slice(start, end);

        this.left = this.page === 0 ? false : true;
        this.right = this.page === this.page_maxBlock-1 ? false : true;

        this.investorSetting();
        in_list.forEach(x =>this.investorTemplate(x));
    }

    investorSetting() {
        console.log(this.investor_page)
        let leftBtn = this.investor_page.querySelector(".prev");
        let rightBtn = this.investor_page.querySelector(".next");
        let numberBox = this.investor_page.querySelector(".number");

        if(this.left) leftBtn.classList.remove("none");
        else leftBtn.classList.add("none");

        if(this.right) rightBtn.classList.remove("none");
        else rightBtn.classList.add("none");

        numberBox.innerHTML = '';
        let page_start = Math.floor(this.page / this.page_block) * this.page_block;
        let page_end = (page_start + this.page_block) > this.page_maxblock ? this.page_maxblock : (page_start + this.page_block);
        console.log(this.page_block);
        for(let i = page_start; i < page_end; i++){
            let box = document.createElement("div");
            let now = this.page === i ? "now" : "";
            box.innerHTML = `<li class="fundNumber ${now}" data-idx="${i}">${i+1}</li>`;
            box.querySelector(".fundNumber").addEventListener("click",e=>{
                this.page = parseInt(e.target.dataset.idx);
                this.investorLoading();
            });

            numberBox.appendChild(box.firstChild);
            console.log(numberBox);
        }

        leftBtn.addEventListener("click",()=>{
            this.page = this.page - 1 > 0 ? this.page - 1 : 0;
            this.investorLoading();
        });

        rightBtn.addEventListener("click",()=>{
            this.page = this.page + 1 < this.page_maxblock ? this.page + 1 : this.page_maxblock-1;
            this.investorLoading();
        });
    }

    investorListLoading() {
        this.investorList = [];
        let fundList = JSON.parse(JSON.stringify(this.list));
        fundList.forEach((x,idx)=>{
            if(x.investorList.length > 0){
                x.investorList.forEach(y=>{
                    y.pay = parseInt(y.pay);
                    y.fundIdx = idx;
                    y.attain = Math.round(y.pay / (x.current / 100));
                    let flag = -1;
                    this.investorList.forEach((el,idx)=>{if(el.fundIdx === y.fundIdx && y.email === el.email) flag = idx;});

                    if(flag > -1){
                        let fund = this.list[y.fundIdx];
                        this.investorList[flag].pay += y.pay;
                        this.investorList[flag].attain = Math.round(this.investorList[flag].pay / (fund.current / 100));
                        this.investorList[flag].datetime = y.datetime;
                    }else this.investorList.push(y);
                });
            }
        });

        this.investorList.sort((a,b)=>{
            if(new Date(a.datetime) < new Date(b.datetime)) return 1;
            else return -1;
        });

        this.page_length = this.investorList.length;
        this.page_maxblock = Math.ceil(this.page_length / this.page_max);
    }


    investorTemplate({email, datetime, pay, fundIdx, attain}) {
        let {name, photo, number} = this.list[fundIdx];
        let element = document.createElement("div");
        element.innerHTML = `<div class="item">
                                <div class="img">
                                    <img src="${photo}" alt="">
                                </div>
                                <div class="txt">
                                    <div class="txt-p">
                                        <div class="tit mb-1 d-between"><p>${number}</p></div>
                                        <strong>${name}</strong>
                                        <p class="sub mt-1">
                                            투자자명 ${email}
                                        </p>
                                        <div class="price mt-3">
                                            투자금액 ${pay}
                                        </div>
                                        <div class="date mt-3 mb-1">
                                            날짜 ${datetime}
                                        </div>
                                    </div>
                                    <div class="attain d-center mb-4">
                                        ${attain}%
                                    </div>
                                </div>
                            </div>`;
        return this.investor_zone.appendChild(element.firstChild);
    }
}