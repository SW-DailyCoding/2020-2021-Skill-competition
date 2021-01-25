export default class view {
    constructor(list, common) {
        this.list = list;
        this.common = common;

        this.signDrow = [];
        this.signDrow_flag = 1;
    }

    viewLoading() {
        if(!document.querySelector(".fund__view .item")) return false;
        let FundViewBox = document.querySelector(".investor__list");
        FundViewBox.innerHTML = "";

        this.list.forEach(x=>{
            let fund = this.viewTemplate(x);
            FundViewBox.appendChild(fund);
            fund.querySelector(".fundMoreBtn").addEventListener("click",this.system.investor_list_popup_more);
            if(fund.querySelector(".fundBtn"))fund.querySelector(".fundBtn").addEventListener("click",this.view_fund_popup);
            this.fundBar(fund.querySelector(".progress"));
        });
    }

    viewTemplate({name, current, total, number, endDate, attain, idx}) {
        let now = new Date();
        let date = new Date(endDate);
        let element = document.createElement("div");
        let content = '';
        content = `<div class="item">
                    <ul>
                        <li>${number}</li>
                        <li>${name}</li>
                        <li>${endDate}</li>
                        <li>${total.toLocaleString()}</li>
                        <li>${current.toLocaleString()}</li>
                    </ul>`;
        if(now < date ) content += `<button data-idx="${idx}" class="fundItem__btn">투자하기</button>`
        else content += `<p class="fundEnd"> 모집완료</p>`;
        content += `<div data-idx="${idx}" class="readMore d-center">자세히보기</div>
                    <div class="progress" data-attain="${attain}">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${attain}%</div>
                    </div>
                </div>`;
        element.innerHTML = content;
        return element.firstChild;
    }


    fundBar(item) {
        let attain = parseFloat(item.dataset.attain);
        let time = 0;
        let progress = setInterval(() => {
            time++;
            if (time > attain) {
                item.querySelector(".progress-bar").style.width = attain + "%";
                return clearInterval(progress)
            } else item.querySelector(".progress-bar").style.width = time + "%";
        }, 80);
    }

    viewPopup = e => {
        let idx = e.target.dataset.idx;
        let {number,name,total} = this.list[idx];
        let title = "투자 펀딩 계약서";
        let content = `<form id="viewForm">
                            <div class="formGroup">
                                <label for="viewNumber" class="formLabel">펀드번호</label>
                                <p class="formCondition"></p>
                                <div class="formInputBox">
                                    <input type="email" class="formInput success" name="viewNumber" id="viewNumber" value="${number}" disabled>
                                    <i class="fa fa-check formInputIcon success"></i>
                                </div>
                                <p class="formWarnningMsg"></p>
                            </div>
                            <div class="formGroup">
                                <label for="viewName" class="formLabel">창업펀드명</label>
                                <p class="formCondition"></p>
                                <div class="formInputBox">
                                    <input type="text" class="formInput success" name="viewName" id="viewName" value="${name}" disabled>
                                    <i class="fa fa-check formInputIcon success"></i>
                                </div>
                                <p class="formWarnningMsg"></p>
                            </div>
                            <div class="formGroup">
                                <label for="viewUser" class="formLabel">투자자명</label>
                                <p class="formCondition"></p>
                                <div class="formInputBox">
                                    <input type="text" class="formInput" name="viewUser" id="viewUser" placeholder="투자자명">
                                    <i class="fa fa-check formInputIcon"></i>
                                </div>
                                <p class="formWarnningMsg"></p>
                            </div>
                            <div class="formGroup">
                                <label for="viewMoney" class="formLabel">투자금액</label>
                                <p class="formCondition"></p>
                                <div class="formInputBox">
                                    <input type="number" class="formInput" name="viewMoney" id="viewMoney" placeholder="투자금액" max="${total}" min="1">
                                    <i class="fa fa-check formInputIcon"></i>
                                </div>
                                <p class="formWarnningMsg"></p>
                            </div>
                            <div class="formGroup">
                                <label for="viewSign" class="formLabel">서명</label>
                                <p class="formCondition"></p>
                                <div class="formInputBox">
                                    <div id="viewSign">
                                        <canvas id="viewFormSign" class="warnning"></canvas>
                                        <div id="viewSignWeightBox">
                                            <label for="viewSignWeight" id="viewSignWeightLabel">서명굵기</label>
                                            <div id="viewSignWeightInput">
                                                <select class="viewSignWeight" id="viewSignWeight" name="viewSignWeight">
                                                    <option value="1">1</option>
                                                    <option value="3" selected>3</option>
                                                    <option value="5">5</option>
                                                    <option value="7">7</option>
                                                    <option value="9">9</option>
                                                </select>
                                                <span>px</span>
                                            </div>
                                        </div>
                                    </div>
                                    <i class="fa fa-check formInputIcon"></i>
                                </div>
                                <p class="formWarnningMsg"></p>
                            </div>
                            <div id="viewPopupButtonBox">
                                <button id="viewFundBtn" class="viewPopupBtn">투자</button>
                                <button id="viewCloseBtn" class="viewPopupBtn">취소</button>
                            </div>
                        </form>`;


        this.common.makePopUp(title,content);

        document.querySelector("#viewCloseBtn").addEventListener("click",e=>{e.preventDefault();this.system.popup_close_process();})
        $("#viewUser").on("propertychange change keyup paste",e=>{
            if(e.keyCode === 13)e.preventDefault();
            this.viewPopup_input(e.target);
        });

        $("#viewMoney").on("propertychange change keyup paste",e=>{
            if(e.keyCode === 13) e.preventDefault();
            this.viewPopup_input(e.target);
        });

        this.signDrow_flag = 1;

        document.querySelector("#viewFormSign").addEventListener("mousedown",this.viewPopup_signStart);
        document.querySelector("#viewFormSign").addEventListener("mousemove",this.viewPopup_signDraw);
        document.querySelector("#viewFormSign").addEventListener("mouseup",this.viewPopup_signEnd);

        document.querySelector("#viewFundBtn").addEventListener("click",this.viewSend);
    }

    viewPopup_signStart = e => {
        if(this.signDrow_flag !== 1) return false;
        let x = e.offsetX,
            y = e.offsetY;

        const canvas = document.querySelector("#viewFormSign");
        const ctx = canvas.getContext("2d");
        const weight = document.querySelector("#viewSignWeight").value+"px";

        canvas.width = 300;
        canvas.height = 150;
        ctx.strokeStyle = "#000";
        ctx.lineWidth = weight;

        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x,y);
        ctx.stroke();

        this.signDrow.push({x,y});
        this.signDrow_flag = 2;
    }

    viewPopup_signDraw = e => {
        if(this.signDrow_flag !== 2) return false;
        let x = e.offsetX,
            y = e.offsetY;
        let idx = this.signDrow.length-1;
        let sx = this.signDrow[idx].x,sy = this.signDrow[idx].y;

        const canvas = document.querySelector("#viewFormSign");
        const ctx = canvas.getContext("2d");
        const weight = document.querySelector("#viewSignWeight").value;
        ctx.strokeStyle = "#000";
        ctx.lineWidth = weight;

        ctx.beginPath();
        ctx.moveTo(sx,sy);
        ctx.lineTo(x,y);
        ctx.stroke();

        this.signDrow.push({x,y});
    }

    viewPopup_signEnd = e => {
        if(this.signDrow_flag !== 2) return false;
        let x = e.offsetX,
            y = e.offsetY;
        let idx = this.signDrow.length-1;
        let sx = this.signDrow[idx].x,sy = this.signDrow[idx].y;

        const canvas = document.querySelector("#viewFormSign");
        const ctx = canvas.getContext("2d");
        const weight = document.querySelector("#viewSignWeight").value+"px";
        ctx.strokeStyle = "#000";
        ctx.lineWidth = weight;

        ctx.beginPath();
        ctx.moveTo(sx,sy);
        ctx.lineTo(x,y);
        ctx.stroke();

        this.signDrow.push({x,y});
        this.signDrow_flag = 0;

        canvas.parentNode.parentNode.querySelector(".formInputIcon").classList.add("success");
        canvas.classList.remove("warnning");
        this.viewPopup_input(canvas);
    }

    viewPopup_input(target) {
        let box = target.parentNode.parentNode;
        if(target.id === "viewFormSign"){
            box = box.parentNode;
            if(target.classList.contains("warnning")){
                box.querySelector(".formWarnningMsg").innerHTML = "서명을 입력해주세요!";
                box.querySelector(".formWarnningMsg").classList.add("open");

                box.querySelector(".formInputIcon").classList.add("warnning");
                box.querySelector(".formInputIcon").classList.replace("fa-check","fa-remove");
            }else{
                box.querySelector(".formWarnningMsg").innerHTML = "";
                box.querySelector(".formWarnningMsg").classList.remove("open");

                box.querySelector(".formInputIcon").classList.remove("warnning");
                box.querySelector(".formInputIcon").classList.add("success");
                if(box.querySelector(".formInputIcon").classList.contains("fa-remove")) box.querySelector(".formInputIcon").classList.replace("fa-remove","fa-check");
            }
        }else{
            let val = target.value;

            if(val.trim().length < 1) return this.system.form_warnning_msg(box,"값을 입력해주세요!");
            else if(target.id === "viewUser" && val.match(/^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣 ]+$/g) === null) return this.system.form_warnning_msg(box,"투자자명은 한글, 영문, 띄어쓰기만 입력가능합니다!");
            else if(target.id === "viewMoney" && val.match(/^\d+$/g) === null) return this.system.form_warnning_msg(box,"자연수만 입력할 수 있습니다!");
            else if(target.id === "viewMoney" && Number(val) > 1000000) return target.value = parseInt(target.getAttribute("max"));
            else this.common.success(box);
        }
    }


    viewSend = e => {
        e.preventDefault();

        this.viewPopup_input(document.querySelector("#viewFormSign"));
        this.viewPopup_input(document.querySelector("#viewUser"));
        this.viewPopup_input(document.querySelector("#viewMoney"));
        if(document.querySelector("#viewForm .warnning")){
            document.querySelectorAll("#viewForm .warnning").forEach(x=>{
                x.classList.remove("warnning");
                setTimeout(()=>{x.classList.add("warnning")},200);
            });

            return this.common.makeToast("모든 올바른 값을 입력해주세요!");
        }
    }

}