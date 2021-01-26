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
            fund.querySelector(".viewMore").addEventListener("click",this.common.investorPopup);
            if(fund.querySelector(".fundItem__btn"))fund.querySelector(".fundItem__btn").addEventListener("click",this.viewPopup);
            this.fundBar(fund.querySelector(".progress"));
        });
    }

    viewTemplate({name, current, owner, total, number, endDate, photo, attain, idx}) {
        let now = new Date();
        let date = new Date(endDate);
        let element = document.createElement("div");
        let content = '';
        content = `<div class="item">
                        <div class="img">
                            <img src="${photo}" alt="">
                        </div>
                        <div class="txt">
                            <div class="txt-p">
                                <div class="tit mb-1 d-between"><p>${number}</p><p data-idx="${idx}" class="viewMore">상세보기</p></div>
                                <strong>${name}</strong>
                                <p class="sub mt-1">
                                    ${owner}
                                </p>
                                <div class="price mt-3">
                                    ${current.toLocaleString()} / ${total.toLocaleString()}
                                </div>
                                <div class="date mt-3 mb-2">
                                    ${endDate}
                                </div>
                            </div>
                            <div class="progress" data-attain="${attain}">
                                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${attain.toLocaleString()}%</div>
                            </div>
                            `;
        if(now < date ) content += `<div data-idx="${idx}" class="readMore__btn d-center fundItem__btn">투자하기</div>`
        else content += `<p class="readMore__btn d-center fundEnd"> 모집완료</p>`;
        content += `</div>`;
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
                                <div class="input-group input-group-sm mb-2">
                                    <p class=" form-label">펀드번호</p>
                                    <input type="text" class="form-control success" id="fund__num" name="fund__num" value="${number}" disabled>
                                    <i class="fa fa-check formInputIcon success"></i>
                                    <br/>
                                </div>
                                <p class="formWarningMsg"></p>
                            </div>
                            <div class="formGroup">
                                <div class="input-group input-group-sm mb-2">
                                    <p class="found__fund form-label">창업펀드</p>
                                    <input type="text" class="form-control" name="found__fund" id="found__fund" value="${name}">
                                    <i class="fa fa-check formInputIcon"></i>
                                </div>
                                <p class="formWarningMsg"></p>
                            </div>
                            <div class="formGroup">
                                <div class="input-group input-group-sm mb-2">
                                    <p class="price form-label" >투자자명</p>
                                    <input type="text" class="form-control" id="viewUser">
                                    <i class="fa fa-check formInputIcon"></i>
                                    <p class="formWarningMsg"></p>
                                </div>
                                <p class="formWarningMsg"></p>
                            </div>
                            <div class="formGroup">
                                <div class="input-group input-group-sm mb-2">
                                    <p class="price form-label" >투자금액</p>
                                    <input type="number" class="form-control" id="viewMoney">
                                    <i class="fa fa-check formInputIcon"></i>
                                    <p class="formWarningMsg"></p>
                                </div>
                                <p class="formWarningMsg"></p>
                            </div>
                            <div class="formGroup">
                                <label for="viewSign" class="formLabel mb-3">서명</label>
                                <p class="formCondition"></p>
                                <div class="formInputBox">
                                    <div id="viewSign">
                                        <canvas id="viewFormSign" class="warning"></canvas>
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
                                    </div><i class="fa fa-check formInputIcon"></i>
                                    <p class="formWarningMsg"></p>
                                </div>
                            </div>
                            <div id="viewPopupButtonBox">
                                <button id="viewFundBtn" class="viewPopupBtn">투자</button>
                                <button id="viewCloseBtn" class="viewPopupBtn">취소</button>
                            </div>
                        </form>`;


        this.common.makePopUp(title,content);

        document.querySelector("#viewCloseBtn").addEventListener("click",e=>{e.preventDefault();this.common.popupRemove();})
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
        canvas.classList.remove("warning");
        console.log(canvas);
        this.viewPopup_input(canvas);
    }

    viewPopup_input(target) {
        console.log(target);
        let box = target.parentNode;
        if(target.id === "viewFormSign"){
            box = box.parentNode
            console.log(box);
            if(target.classList.contains("warning")){

                box.querySelector(".formWarningMsg").innerHTML = "서명을 입력해주세요!";
                box.querySelector(".formWarningMsg").classList.add("open");

                box.querySelector(".formInputIcon").classList.add("warning");
                box.querySelector(".formInputIcon").classList.replace("fa-check","fa-remove");
            }else{
                box.querySelector(".formWarningMsg").innerHTML = "";
                box.querySelector(".formWarningMsg").classList.remove("open");

                box.querySelector(".formInputIcon").classList.remove("warning");
                box.querySelector(".formInputIcon").classList.add("success");
                if(box.querySelector(".formInputIcon").classList.contains("fa-remove")) box.querySelector(".formInputIcon").classList.replace("fa-remove","fa-check");
            }
        }else{
            let val = target.value;

            if(val.trim().length < 1) return this.common.warningMsg(box,"값을 입력해주세요!");
            else if(target.id === "viewUser" && val.match(/^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣 ]+$/g) === null) return this.common.warningMsg(box,"투자자명은 한글, 영문, 띄어쓰기만 입력가능합니다!");
            else if(target.id === "viewMoney" && val.match(/^\d+$/g) === null) return this.common.warningMsg(box,"자연수만 입력할 수 있습니다!");
            else if(target.id === "viewMoney" && Number(val) > 1000000) return target.value = parseInt(target.getAttribute("max"));
            else this.common.successMsg(box);
        }
    }


    viewSend = e => {
        e.preventDefault();
        this.viewPopup_input(document.querySelector("#viewFormSign"));
        this.viewPopup_input(document.querySelector("#viewUser"));
        this.viewPopup_input(document.querySelector("#viewMoney"));
        if(document.querySelector("#viewForm .warning")){
            document.querySelectorAll("#viewForm .warning").forEach(x=>{
                console.log(x);
                x.classList.remove("warning");
                setTimeout(()=>{x.classList.add("warning")},200);
            });

            return this.common.makeToast("모든 올바른 값을 입력해주세요!");
        } else location.href = "index.html";
    }

}