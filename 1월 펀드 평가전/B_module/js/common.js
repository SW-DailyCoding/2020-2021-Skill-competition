export default class common {
    constructor(list) {
        this.list = list;
    }

    makePopUp(title, content) {
        let element = document.createElement("div");
        element.innerHTML = `<div id="popup__bg">
                                <div class="popup">
                                    <button class="remove"><i class="fa fa-remove"></i></button>
                                    <div class="header">${title}</div>
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
        this.makePopUp(title, content);
    }

    makeToast(msg) {
        let element = document.createElement("div");
        element.classList.add("toast");
        element.id = "toast";
        element.innerHTML = `
                                      <div id="toast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                                        <div class="toast-header">
                                        <div id="toastRemove"></div>
                                          <img src="..." class="rounded me-2" alt="...">
                                          <strong class="me-auto">Bootstrap</strong>
                                          <small class="text-muted">just now</small>
                                          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                        </div>
                                        <div class="toast-body">
                                            ${msg}
                                        </div>
                                        
                                      </div>`;

        document.querySelector("#wrap").appendChild(element);
        console.log(element);
        element.querySelector("#toastRemove").addEventListener("click", () => {
            document.querySelector("#wrap").removeChild(document.querySelector("#toast"));
        })



        // $("#toast").css("left", ((($("#wrap").width()/2) - ($("#toast").width())/2))+"px");
        // document.querySelector("#toast").classList.add("open");

        // setTimeout(()=> {
        //     if(document.querySelector("#toast"))
        //         document.querySelector("#toast").classList.remove("open");
        // }, 3000, ()=> {
        //     if(document.querySelector("#toast").document.querySelector("#wrap").removeChild(document.querySelector("#toast")));
        // });
    }

    // successMsg(box) {
    //     console.log("!");
    //     console.log(box);
    //     box.querySelector(".formWarningMsg").innerHTML = "";
    //     box.querySelector(".formWarningMsg").classList.remove("open");
    //     // box.querySelector(".formInput").classList.remove("warnning");
    //
    //     box.querySelector("").classList.remove("");
    //
    //     box.querySelector("formInput").classList.add("success");
    //     box.querySelector("formInputIcon").classList.add("success");
    //
    //     if(box.querySelector("formInputIcon").classList.contains("fa-remove"));
    //         box.querySelector("formInputIcon").classList.replace("fa-remove", "fa-check");
    //
    //     if(!document.querySelector("warningMsg"))
    //         document.querySelector(".form__btn").classList.add("success");
    //     else document.querySelector(".form__btn").classList.remove("success");
    //
    // }

    warningMsg(box, msg) {
        box.querySelector(".formWarningMsg").innerHTML = msg;
        box.querySelector(".formWarningMsg").classList.add("open");
        box.querySelector(".form-control").classList.add("warning");
        // box.querySelector(".formInputIcon").classList.add("warning");
        // box.querySelector(".formInputIcon").classList.replace("fa-check", "fa-remove");

        // if(!document.querySelector("warningMsg"))
        //     document.querySelector(".form__btn").classList.add("success");
        // else document.querySelector("form__btn").classList.remove("sucess");
    }

    // toast() {
    //
    //
    // }
}