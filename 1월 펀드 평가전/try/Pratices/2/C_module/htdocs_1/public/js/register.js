export default class Register {
    constructor(app,list) {
        this.app = app;
        this.list = list;
        this.form = null;
        this.loading();
        
    }

    loading() {
        this.form = document.querySelector("#fund-section");
        this.registerCreate();

        document.querySelectorAll("#register .form-group").forEach(x=> {
            if(x.type === 'text' || x.type === 'number' || x.type === 'textarea' ) {
                $(x).on("propertychange change keyup input", e => {
                    if(e.KeyCode == 13 ) e.preventDefault();
                })
            } else $(x).on("change", e => { this.registerForm(e.target)})
        })
        // document.querySelector("#register_btn").addEventListener("click",  this.registerSend);
    } 

    registerSend = e => {
        let form = document.querySelectorAll(".form-group input");
        let textarea = document.querySelector("#fund_txt");
        let array = [];
        array.push(form);

        console.log(form);
        if(!form[0].checkValidity() || !form[1].checkValidity() || !form[2].checkValidity() || !form[3].checkValidity() || !form[4].checkValidity() || !textarea.checkValidity()  ) {
            this.app.toast();
        }
    }
    
    // registerSend = e =>  {


    //     if(user_email == "" || user_name == "" || password == "" || passwordc ==  "" || 
    //     !user_email.checkValidity() || !user_name.checkValidity() || !password.checkValidity() || !passwordc.checkValidity() ) {
    //         this.common.toast();
    //     } else {
    //         e.preventDefault(); location.href="index.html";
    //     } 
    // }

    registerCreate() {
        let string = "QWERTYUIOPASDFGHJKLZXCVBNM";
        let number = document.querySelector("#fund_num");
        if(number) number.value = string.substr(Math.floor(Math.random()*string.length),1)+Math.random().toString(36)
        .substr(2,3).toUpperCase()+Math.random().toString(10).substr(2,1);
    }

    // registerSend = e => {
    //     // document.querySelectorAll(".form-group").forEach(x => this.registerForm(x));
    //      location.href = "index.html";
    // }

    registerForm(target) {        
        let id = target.id;
        let val = target.value;

        if(id ==="fund_txt")  document.querySelector("#exp").innerHTML = val.length;

        // target.setCustomValidity("가능합니다");
        // target.reportValidity();
        if(val.trim().length < 1) {
            target.setCustomValidity("값이 비워져 있습니다.");
            target.reportValidity();
        }
        if(id === "fund_name" && val.match(/^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣 ]+$/g) === null) {
            target.setCustomValidity("한글, 영문,공백문자만 입력할 수 있습니다.");    
            target.reportValidity();
        } 
        else if(id === "fund_date" && new Date(val) < new Date()) {
            target.setCustomValidity("이전 날짜는 등록할 수 없습니다.");
            target.reportValidity();
        }
        else if (id === "fund_price" && val.match(/^\d+$/g) === null) {
            target.setCustomValidity("자연수만 입력 가능합니다.")
            target.reportValidity();
        } 
        else if(id === "fund_txt" && val.length > 500)  {
            target.setCustomValidity("상세설명은 500자를 초과할 수 없습니다.");
            target.reportValidity();
        }
        else if(id === "fund_image" && target.files[0].size > 5 * 1024 * 1024 && !(target.files[0].name.match(/\.[a-zA-Z]+/g)[0] === ".png" || target.files[0].name.match(/\.[a-zA-Z]+/g)[0] === ".jpg" ) )  {
            target.setCustomValidity("이미지는 5MB 이하의 jpg, png만 업로드 가능합니다.");
            target.reportValidity();
        }
        else {
            target.setCustomValidity("");
            target.reportValidity();
            
            let image = document.querySelector("#fund_image");
            document.querySelector(".custom-file-label").innerHTML = image.value;
        }
        // console.log(target.files[0]);

        document.querySelector("#register_btn").addEventListener("click",  this.registerSend);

        // document.querySelector("#register_btn").addEventListener("click", () => {
        //     if(target === "" || !target.checkValidity()) {
        //         this.app
        //     } else {
        //         // e.preventDefault();
        //         location.href="naver.com";
        //     }
        // })

        // let name = document.querySelector("#fund_name");
        // let endDate = document.querySelector("#fund_date");
        // let price = document.querySelector("#fund_price");
        // let text = document.querySelector("#fund_txt");
        // let image = document.querySelector("#fund_image");
        // let exp = document.querySelector("#exp").innerHTML = text.value.length;

        // name.addEventListener("input", () => {
        //     let regExp = /^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]+$/g;
        //     if(!regExp.test(name.value)) {
        //         name.setCustomValidity("한글, 영문,공백문자만 입력할 수 있습니다.");    
        //         name.reportValidity();
        //     }
        // })

        // endDate.addEventListener("input", () => {
        //     if(new Date(endDate.value) < new Date()) {
        //         endDate.setCustomValidity("현재 시간보다 이전 시간 등록할 수 없습니다.");
        //         endDate.reportValidity();
        //     } else {
        //         endDate.setCustomValidity("");
        //         endDate.reportValidity();
        //     }
        // })

        // price.addEventListener("input", () => {
        //     let regExp = /^\d+$/g;
        //     if(value.match(regExp) == null) {
        //         price.setCustomValidity("자연수만 입력할 수 있습니다");
        //         price.reportValidity();
        //     }
        // })

        // text.addEventListener("input", () => {
        //     if(text.value.length > 500) {
        //         text.setCustomValidity("상세설명은 500자를 초과할 수 없습니다.");
        //         text.reportValidity();
        //     } else {
        //         text.setCustomValidity("");
        //         text.reportValidity();
        //     }
        // })

        // image.addEventListener("input", () => {
        //     let regExp = /\.[a-zA-Z]+/g;
        //     let imageType = image.value.slice(-4, image.value.length);
        //     if((imageType == ".jpg" || imageType == ".png") && image.files[0].size <= 5 * 1024 * 1024) {
        //         image.setCustomValidity("");
        //         image.reportValidity();
        //         document.querySelector(".custom-file-label").innerHTML = image.value;
        //     } else {
        //         image.setCustomValidity("이미지 크기가 5MB를 초과하거나 양식에 맞지않습니다.");
        //         image.reportValidity();
        //     }
        // })
    }




}