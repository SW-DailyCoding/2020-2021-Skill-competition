export default class sign {
    constructor(list, common) {
        this.list = list;
        this.common = common;
        this.loading();
    }

    loading() {
        document.querySelectorAll(".form-group").forEach(x => {
            $(x).on("propertychange change keyup paste input", e => {
                if(e.keycode === 13) 
                    e.preventDefault();
                    this.signInput(e.target);
            })
        })
    }

    signInput(target) {
        let val = target.value;
        let id = target.id;
        
        let email = /^[0-9a-zA-Z\_]+@[0-9a-zA-Z\_]+\.[a-z]{2,3}$/g;
        let password = /\d+/g; 
        let password2 =  /[a-zA-Z]+/g;
        let password3 = /[!@#$%^&*()]+/g;

        if(val.trim().length < 1) {
            target.setCustomValidity("값을 입력해주세요");
            target.reportValidity();
        }
        else if(id === "user_email" && (val.match(email) === null)) {
            target.setCustomValidity("올바른 이메일을 작성해야합니다.");
            target.reportValidity();
        } 
        else if(id === "password" && (val.match(password) === null  || val.match(password2) === null || val.match(password3) === null)) {   
            target.setCustomValidity("비밀번호는 영문, 특수문자[!@#$%^&*()] 숫자 형식에 맞춰 입력해주세요");
            target.reportValidity();
        } 
        else if(id === "passwordc" && document.querySelector("#password").value !== val) {
            target.setCustomValidity("비밀번호가 일치하지 않습니다.");
            target.reportValidity();
        }
        else target.setCustomValidity(""); target.reportValidity();


        let form = document.querySelectorAll(".form-group");
        let user_email = document.querySelector("#user_email")
        console.log(user_email.checkValidity());
        document.querySelector("#sign_btn").addEventListener("click", () => {
            if( !user_email.checkValidity()) {
                console.log("!")
                this.common.toast;
            }  else if (val.match(email) !== null){
                console.log("!!")

                location.href="index.html";
            }    
        })
       
    }
}