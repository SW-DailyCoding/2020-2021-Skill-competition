class App {
    constructor() {
        this.init();
    }

    init() {

        let email = document.querySelector("#joinEmail");
        let name = document.querySelector("#joinName");
        let password = document.querySelector("#joinPassword");
        let password2 = document.querySelector("#joinPasswordCh");

        // password.addEventListener("input", e => { this.passwordCheck(e) })

        email.addEventListener("input", () => {
            let regExp = /^[a-zA-Z0-9\_]+@[a-zA-Z0-9\_]+\.[a-z]{2,3}$/;
            if(regExp.test(email.value)) {
                email.setCustomValidity("");
                email.reportValidity();
            }
        })
        
        // password.addEventListener("input", () => {
        //     // let regExp = /^[a-zA-Z]+[0-9]+\.[\!\@\#\$\%\^\&\*\(\)]$/;
        //     let regExp = /\d+/g;
        //     let regExp2 = /[a-zA-Z]+/g;
        //     let regExp3 = /[!@#$%^&*()+]/g;
        //     // let regExp = /^[a-zA-z0-9\!\@\#\$\%\^\&\*\(\)]+$/;
            
        //     if(!regExp.test(password.value) || !regExp2.test(password.value) || !regExp3.test(password.value)) {
        //         password.setCustomValidity("비밀번호는 영문, 특문(!@#$%^&*()), 숫자만 입력하실 수 있습니다.");
        //         password.reportValidity();
        //     } else {
        //         password.setCustomValidity("");
        //         password.reportValidity();
        //     }
        // })

        password.addEventListener("input", () => {
            let regExp = /^[a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)]+$/;
            if(!regExp.test(password.value)) {
                password.setCustomValidity("비밀번호는 영문, 특문(!@#$%^&*()), 숫자만 입력하실 수 있습니다.");
                password.reportValidity();
            } else {
                password.setCustomValidity("");
                password.reportValidity();
            }
        })

        document.querySelector("#joinBtn").addEventListener("click", () => {
            let regExp = /^[a-zA-Z0-9\_]+@[a-zA-Z0-9\_]+\.[a-zA-Z0-9\_]{2,3}$/;
            if(!regExp.test(email.value)) {
                email.setCustomValidity("이메일 형식이 올바르지 않습니다. @ 기호를 써주십시오");
                email.reportValidity();
            }
            if(email == "" || name == "" || password == "" || password2 == "" ||
            !email.checkValidity() || !name.checkValidity() || !password.checkValidity() || !password2.checkValidity()) {
                this.toast();
            } else if(!regExp.test(password.value)) {
                this.showToast();
            }
        })
    }

    passwordCheck(e) {
        let input = e.target;

        let regExp = /^[a-zA-z0-9\!\@\#\$\%\^\&\*\(\)]+$/;

        if(!regExp.test(input.value)) {
            input.setCustomValidity("영문, 숫자, 특수문자만 입력해주세요");
            input.reportValidity();
        } else {
            input.setCustomValidity("");
            input.reportValidity();
        }
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

    succes() {
        let id = new Date().getTime();
        let toast = `<div class="toast" id=${id}>
                        <div class="toast-header d-between">
                            <strong>form 오류</strong>
                            <button class="close">x</button>
                        </div>
                        <div class="toast-body">
                           성공하셨습니다
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
}

window.onload = function() {
    let app = new App();
}