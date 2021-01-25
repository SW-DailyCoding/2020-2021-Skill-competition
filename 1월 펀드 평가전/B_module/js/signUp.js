export default class signUp {
    constructor(list, common) {
        this.list = list;
        this.common = common;
    }

    signLoading() {
        document.querySelectorAll(".sign input").forEach(x => {
            $(x).on("propertychange change keyup paste input", e => {
                if(e.keyCode === 13) 
                    e.preventDefault(); 
                    this.signInput(e.target);
            })
        })
        document.querySelector(".sign__btn").addEventListener("click", this.signCheck)
    }

    signInput(target) {
        let box = target.parentNode.parentNode;
        let val = target.value;
        let reg2ID = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        let reg2PD = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;

        let regID = /^[0-9a-zA-Z_]+@[a-zA-Z]+\.[a-z]{2,3}$/g;
        let regPD1 = /\d+/g;
        let regPD2 = /[a-zA-Z]+/g;
        let regPD3 = /[!@#$%^&*()]+/g;

        if(val.trim().length < 1)
            return this.common.warningMsg(box, "값을 입력해주세요");
        else if(target.id == "signEmail" && (val.match(regID) == null)) return this.common.warningMsg(box, "올바른 이메일을 입력해주세요.");
        else if(target.id == "signPassword" && (val.match(regPD1) == null || val.match(regPD2) == null || val.match(regPD3) == null)) return this.common.warningMsg(box, "비밀번호는 영문, 특수문자[!@#$%^&*()] 숫자 형식에 맞춰 입력해주세요.");
        else if(target.id == "signPasswordc" &&  document.querySelector("#signPassword").value !== val)
            return this.common.warningMsg(box, "비밀번호가 일치하지 않습니다.");
        else return this.common.successMsg(box);
    }

    signCheck = e => {
        e.preventDefault();

        document.querySelectorAll(".sign input").forEach(x => {
            this.signInput(x);
        })
        if(document.querySelector(".sign input.warning"))
            return this.common.makeToast("올바른 값을 입력해주세요.");
    }




}