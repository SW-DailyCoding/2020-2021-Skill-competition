export default class signUp {
    constructor(list, common) {
        this.list = list;
        this.common = common;
    }

    signLoading() {
        document.querySelectorAll(".sign input").forEach(x => {

        })
        document.querySelector(".sign__btn").addEventListener("click", this.signCheck)
    }

    signInput(target) {
        let box = target.parentNode.parentNode;
        let val = target.value;
        let regID = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        let regPD = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;


        if(val.trim().length < 1)
            return this.common.warningMsg(box, "값을 입력해주세요");
        else if(target.id == "" && (val.match(regID) == null)) return this.common;
        else if(target.id == "" && (val.match(regPD) == null)) return this.common;
        else if();
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