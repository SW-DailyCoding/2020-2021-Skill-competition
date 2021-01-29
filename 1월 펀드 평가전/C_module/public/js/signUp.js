class App {
    constructor() {
        console.log("!");
        this.init();
    }

    init() {

        let email = document.querySelector("#joinEmail");
        let name = document.querySelector("#joinName");
        let password = document.querySelector("#joinPassword");
        let password2 = document.querySelector("#joinPasswordCh");

        password.addEventListener("input", e => { this.passwordCheck(e) })

        email.addEventListener("input", () => {
            let regExp = /^[a-zA-Z0-9\_]+@[a-zA-Z0-9\_]+\.[a-z]{2,3}$/;
            if(regExp.test(email.value)) {
                email.setCustomValidity("");
                email.reportValidity();
            }
        })
        
        document.querySelector("#joinBtn").addEventListener("click", () => {
            if(email.value == "" || name.value == "" || password.value == "" || password2.value == "") {
                var regExp = /^[a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)]+$/;
                if(!regExp.test(input.value))
                    $(".toast").toast("show");
            }
        })
    }

    passwordCheck(e) {
        console.log("!");
        let input = e.target;
        console.log(input);

        let regExp = /^[a-zA-z0-9\!\@\#\$\%\^\&\*\(\)]+$/;

        if(!regExp.test(input.value)) {
            e.target.setCustomValidity("영문, 숫자, 특수문자만 입력해주세요");
            input.reportValidity();
        } else {
            e.target.setCustomValidity("");
            input.reportValidity();
        }
    }

    // toast() {
    //     let id = new Date().getTime();
    //     let toast = `<div class="toast" id=${id}>
    //                     <div class="toast-header d-between">
    //                         <strong>form 오류</strong>
    //                         <button class="close">x</button>
    //                     </div>
    //                     <div class="toast-body">
    //                         입력하신 정보가 양식과 일치하지 않습니다.
    //                     </div>
    //                 </div>`;
    //     $("#toast_container").append(toast);
    //     $(`#${id}`).toast({
    //         autohide: true,
    //         delay: 3000
    //     });
    //     $(`#${id} button`).on("click", function() {
    //         $(`#${id}`).remove();
    //     });
    //     $(`#${id}`).toast("show");
    // }

    // succes() {
    //     let id = new Date().getTime();
    //     let toast = `<div class="toast" id=${id}>
    //                     <div class="toast-header d-between">
    //                         <strong>form 오류</strong>
    //                         <button class="close">x</button>
    //                     </div>
    //                     <div class="toast-body">
    //                        성공하셨습니다
    //                     </div>
    //                 </div>`;
    //     $("#toast_container").append(toast);
    //     $(`#${id}`).toast({
    //         autohide: true,
    //         delay: 3000
    //     });
    //     $(`#${id} button`).on("click", function() {
    //         $(`#${id}`).remove();
    //     });
    //     $(`#${id}`).toast("show");
    // }
}

window.onload = function() {
    let app = new App();
}