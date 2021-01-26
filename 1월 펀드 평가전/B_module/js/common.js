export default class common {
    constructor(list) {
        this.list = list;
    }

    makePopUp(number, name, endDate, current, total, owner, content) {
        let element = document.createElement("div");
        element.innerHTML = `<div id="popup__bg">
                                <div class="popup">
                                    <button class="remove btn">닫기<i class="fa fa-remove"></i></button>
                                    <div class="header">
                                        <p>${number}</p>
                                        <p>${name}</p>
                                        <p>${endDate}</p>
                                        <span>${current}</span>/<span>${total}</span>
                                        <p>${owner}</p>
                                    </div>
                                    <div class="content">${content}</div>
                                </div>
                             </div>`;
        document.querySelector("#wrap").appendChild(element.firstChild);
        document.querySelector(".remove").addEventListener("click", this.popupRemove);
        $("#popup__bg").fadeIn(400);
    }

    popupRemove() {
        $(".remove").fadeOut(400, () => {
            document.querySelector("#wrap").removeChild(document.querySelector("#popup__bg"));
        })
    }

    investorPopup = e => {
        let idx = e.target.dataset.idx;
        let data = this.list[idx].investorList;
        let number = this.list[idx].number;
        let name = this.list[idx].name;
        let endDate = this.list[idx].endDate;
        let current = this.list[idx].current;
        let total = this.list[idx].total;
        let owner = this.list[idx].owner;
        console.log(data);
        let title = "투자자 목록";
        let content = `<div id="investorPopupList">`;
        data.forEach(x => {
            content += `<div class="investorPopup mt-5">
                            <h5 class="investorPopup__title"><span class="mr-5">Email</span>${x.email}</h5>
                            <p class="investorPopup_subTitle"><span class="mr-5">투자 날짜</span>${x.datetime}</p>
                            <p class="investorPopup_text">
                                <span class="mr-5">투자 금액</span>
                                <i class="fa fa-krw"></i>${x.pay.toLocaleString()}
                            </p>
                        </div> `
        });
        content += '</div>';
        this.makePopUp(number, name, endDate, current, total, owner, content);
    }

    makeToast(msg) {
        let element = document.createElement("div");
        element.innerHTML = `<div id="toast">
                                <button id="toastRemove">
                                    <i class="fa fa-remove"></i>
                                </button>
                                <p>${msg}</p>
                            </div>`;

        element.querySelector("#toastRemove").addEventListener("click", () => {
            console.log("!");
            document.querySelector("#wrap").removeChild(document.querySelector("#toast"));
        })
        document.querySelector("#wrap").appendChild(element.firstChild);


        $("#toast").css("right", 50+"px");
        $("#toast").css("top", 22+"px");

        console.log(document.querySelector("#toast"))
        document.querySelector("#toast").classList.add("open");

        setTimeout(()=> {
            if(document.querySelector("#toast"))
                document.querySelector("#toast").classList.remove("open");
        }, 3000, ()=> {
            if(document.querySelector("#toast").document.querySelector("#wrap").removeChild(document.querySelector("#toast")));
        });
    }

    successMsg(box) {
        box.querySelector(".formWarningMsg").innerHTML = "";
        box.querySelector(".formWarningMsg").classList.remove("open");
        box.querySelector(".form-control").classList.remove("warning");
        box.querySelector(".formInputIcon").classList.remove("warning");

        box.querySelector(".form-control").classList.add("success");
        box.querySelector(".formInputIcon").classList.add("success");
        if(box.querySelector(".formInputIcon").classList.contains("fa-remove"));
            box.querySelector(".formInputIcon").classList.replace("fa-remove", "fa-check");

        if(!document.querySelector("form .warning"))
            document.querySelector(".btn").classList.add("success");
        else document.querySelector(".btn").classList.remove("success");

    }

    warningMsg(box, msg) {
        console.log(box);
        box.querySelector(".formWarningMsg").innerHTML = msg;
        box.querySelector(".formWarningMsg").classList.add("open");
        box.querySelector(".form-control").classList.add("warning");
        box.querySelector(".formInputIcon").classList.add("warning");
        box.querySelector(".formInputIcon").classList.replace("fa-check", "fa-remove");

        if(!document.querySelector("form .warning"))
            document.querySelector(".btn").classList.add("success");
        else document.querySelector(".btn").classList.remove("success");
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
        $("#toast_content").append(toast);
        $(`#${id}`).toast({
            autohide: true,
            delay: 3000
        });
        $(`#${id} button`).on("click", function() {
            $(`#${id}`).remove();
        });
        $(`#${id}`).toast("show");
    }
}