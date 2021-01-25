export default class investor {
    constructor(list, common) {
        this.list = list;
        this.common = common;

        this.investorList = [];
        this.investor_page = null;
        this.investor_zone = null;

        this.page = 0;
        this.page_block = 0;
        this.page_maxBlock = 0;

        this.page_length = 0;
        this.page_max = 5;

        this.left = false;
        this.right = false;
    }

    investorLoading() {
        this.investorPageLoading();
        this.investor_zone = document.querySelector(".investor__list");
        this.investor_page = document.querySelector(".page__nation");
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
        let leftBtn = this.investor_pageArea.querySelector(".fundViewPagePrevBtn");
        let rightBtn = this.investor_pageArea.querySelector(".fundViewPageNextBtn");
        let numberBox = this.investor_pageArea.querySelector(".fundViewPageNumberBox");

        if(this.page_left) leftBtn.classList.remove("none");
        else leftBtn.classList.add("none");

        if(this.page_right) rightBtn.classList.remove("none");
        else rightBtn.classList.add("none");

        numberBox.innerHTML = '';

        let page_start = Math.floor(this.page / this.page_block) * this.page_block;
        let page_end = (page_start + this.page_block) > this.page_maxblock ? this.page_maxblock : (page_start + this.page_block);

        for(let i = page_start; i < page_end; i++){
            let box = document.createElement("div");
            let now = this.page === i ? "now" : "";
            box.innerHTML = `<button class="fundViewPageNumber ${now}" data-idx="${i}">${i+1}</button>`;

            box.querySelector(".fundViewPageNumber").addEventListener("click",e=>{
                this.page = parseInt(e.target.dataset.idx);
                this.investorPageLoading();
            });

            numberBox.appendChild(box.firstChild);
        }

        leftBtn.addEventListener("click",()=>{
            this.page = this.page - 1 > 0 ? this.page - 1 : 0;
            this.investorPageLoading();
        });

        rightBtn.addEventListener("click",()=>{
            this.page = this.page + 1 < this.page_maxblock ? this.page + 1 : this.page_maxblock-1;
            this.investorPageLoading();
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
                    y.achieve = Math.round(y.pay / (x.current / 100));
                    let flag = -1;
                    this.investorList.forEach((el,idx)=>{if(el.fundIdx === y.fundIdx && y.email === el.email) flag = idx;});

                    if(flag > -1){
                        let fund = this.list[y.fundIdx];
                        this.investorList[flag].pay += y.pay;
                        this.investorList[flag].achieve = Math.round(this.investorList[flag].pay / (fund.current / 100));
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


    investorTemplate() {

    }

    investorPageLoading() {
        this.investorListLoading();
        this.investor_area = document.querySelector("#investorArea");
        this.investor_pageArea = document.querySelector(".fundViewPageBox.investor");
        this.investor_area.innerHTML = '';

        let start = this.page * this.page_max;
        let end = list_start + this.page_max;
        let list = this.investorList.slice(start,end);

        this.page_left = this.page === 0 ? false : true;
        this.page_right = this.page === this.page_maxblock-1 ? false : true;

        this.investorSetting();
        list.forEach(x=>this.investorTemplate(x));
    }
}