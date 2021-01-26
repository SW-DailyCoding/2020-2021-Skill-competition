export default class register {
    constructor(list, common) {
        this.list = list;
        this.common = common;
        this.form = null;

    }

    registerLoading() {
        this.form = document.querySelector("#register");
        this.registerCreate();
        console.log("!");

        document.querySelectorAll(".formGroup").forEach(x => {
            console.log(x);
            if(x.type === "text" || x.type === "number" || x.type === "textarea") {
                $(x).on("propertychange change keyup input", e => {
                    if(e.keyCode === 13) e.preventDefault();
                        this.registerCreate(e.target);
                });
            } else $(x).on("change", e => { this.registerForm(e.target)})
        });
        document.querySelector(".form__btn").addEventListener("click", this.registerSend);
    }

    registerCreate() {
        let number = "";
        let string = "QWERTYUIOPASDFGHJKLZXCVBNM";
        while(true){
            let flag = true;
            number = string.substr(Math.floor(Math.random()*string.length),1)+Math.random().toString(36).substr(2,3).toUpperCase()+Math.random().toString(10).substr(2,1);
            this.list.forEach(x=>{flag = !(x.number == number);});
            if(flag) break;
        }

        let input = this.form.fund__num;
        input.value = number;
    }

    registerSend = e => {
        e.preventDefault();
        document.querySelectorAll("#register .form-control").forEach(x => this.registerForm(x));
        if(document.querySelector("#register .warning")) {
            this.common.toast();
            // this.common.makeToast("올바른 값을 입력하세요.");
            document.querySelectorAll(".register .warning").forEach(x => {
                x.classList.remove("warning");
                setTimeout(() => {
                    x.classList.add("warning");
                }, 200);
            })
        } else location.href = "index.html";
    }

    registerForm(target) {
        console.log(target)
        let id = target.id;
        console.log(id);
        let val = target.value;
        console.log(val);
        let box = target.parentNode.parentNode;
        let fundNum = /^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣 ]+$/g;
        let fundPrice = /^\d+$/g;
        let fundImg = /\.[a-zA-Z]+/g;
        // let t_img = target.files[0].name.match(fundImg)[0];
        if(id === "exp") document.querySelector("#word").innerHTML = val.length;

        if(val.trim().length < 1) return this.common.warningMsg(box, "값이 비워져있습니다.");
        else if(id === "found__fund" && val.match(fundNum) === null)
            return this.common.warningMsg(box, "창업펀드명은 한글, 영문, 띄어쓰기만 가능합니다.");
        else if(id === "price" && val.match(fundPrice) == null)
            return this.common.warningMsg(box, "자연수만 입력이 가능합니다.");
        else if(id === "dead__line" && new Date(val) < new Date())
            return this.common.warningMsg(box, "올바른 날짜만 입력이 가능합니다.");
        else if(id === "exp" && val.length > 500)
            return this.common.warningMsg(box, "상세 설명은 500자를 초과할 수 없습니다.");
        else if(id === "formFile" && (target.files[0].size / 1024 / 1024) > 5)
            return this.common.warningMsg(box, "이미지는 5MB 이하의 jpg, png만 업로드 가능합니다.");
        else if(id === "formFile" && !(target.files[0].name.match(/\.[a-zA-Z]+/g)[0] === ".png" || target.files[0].name.match(/\.[a-zA-Z]+/g)[0] === ".jpg"))
            return this.common.warningMsg(box, "이미지는 5MB 이하의 jpg, png만 업로드 가능합니다.");
        else return this.common.successMsg(box);
    }
}