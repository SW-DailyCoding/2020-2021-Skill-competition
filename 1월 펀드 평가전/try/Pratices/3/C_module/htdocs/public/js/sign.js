export default class Sign {
    constructor(app, list) {
        this.app = app;
        this.list = list;
        this.loading();
    }

    loading() {
        document.querySelectorAll("#sign .form-group").forEach(x => {
            $(x).on("propertychange change keyup paste input", e => {
                if(e.keycode === 13)  {
                    e.preventDefault();
                } else {
                    $(x).on("change", e => { this.signInput(e.target)})
                }
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



        document.querySelector("#sign_btn").addEventListener("click", this.signSend);
        // document.querySelector("#sign_btn").addEventListener("click", e => {
        //     form.forEach ( x => {
        //         array.push(x);
        //     //     console.log(x.checkValidity())
        //     //     if( x.checkValidity()  < 4 ) {
        //     //         this.common.toast();
        //     //     }  else {
        //     //         console.log("!");
        //     //         e.preventDefault();
        //     //         // location.href="index.html";
        //     //     }    
        //     // })
        //     });
        //     console.log(array);
        //     console.log(array[1]);
        //     // console.log(array.checkValidity())
        //     // if(!array.checkValidity()) {
        //     //     this.common.toast();
        //     // } else {
        //     //     e.preventDefault();
        //     //     location.href = "index.html";
        //     // }
        // document.querySelector("#sign_btn").addEventListener("click", e => {
        //     // form.forEach ( x => {
        //     //     console.log(x.checkValidity())
        //     //     if( x.checkValidity()  < 4 ) {
        //     //         this.common.toast();
        //     //     }  else {
        //     //         console.log("!");
        //     //         e.preventDefault();
        //     //         // location.href="index.html";
        //     //     }    
        //     // })
        //     console.log("!");
        // })
    }

    signSend = e => {
        let form = document.querySelectorAll(".form-group input");

        if(!form[0].checkValidity() || !form[1].checkValidity() || !form[2].checkValidity() || !form[3].checkValidity() ) {
            this.app.toast();
  
            // e.preventDefault();
            // location.href = "index.html";
        }
        

    }

    // signSend = e => {
    //     let form = document.querySelectorAll(".form-group input");
    //     let array = [];

    //     form.forEach(x => {
    //         array.push(x);
    //     })
    //     // console.log(array[0]);
    //     if(!array[0].checkValidity || !array[1].checkValidity || array[2].checkValidity || array[3].checkValidity) {
    //         this.common.toast();
    //     } else {
    //         e.preventDefault();
    //         location.href = "index.html"
    //     }
    // }

    // signSend = e => {

        

    //     // let form = document.querySelectorAll(".form-group input");
    //     // let user_email = document.querySelector("#user_email");
    //     // let user_name = document.querySelector("#user_name");
    //     // let password = document.querySelector("#password");
    //     // let passwordc = document.querySelector("#passwordc");
        
    //     // if(user_email == "" || user_name == "" || password == "" || passwordc ==  "" || 
    //     // !user_email.checkValidity() || !user_name.checkValidity() || !password.checkValidity() || !passwordc.checkValidity() ) {
    //     //     this.common.toast();
    //     // } else {
    //     //     e.preventDefault(); location.href="index.html";
    //     // } 
        
    //     document.querySelector("#sign_btn").addEventListener("click", e => {
    //         form.forEach ( x => {
    //             console.log(x.checkValidity())
    //         })
    //     })

        
    // }
}