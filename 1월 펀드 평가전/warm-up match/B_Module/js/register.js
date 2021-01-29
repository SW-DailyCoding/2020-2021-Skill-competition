class App {
    constructor() {
        this.registerLoading();   
    }

    registerLoading() {
        this.numberCreate();
        console.log("!");
        let name = document.querySelector("#registerName");
        let endDate = document.querySelector("#registerDate");
        let price = document.querySelector("#registerMoney");
        let text = document.querySelector("#registerComment");
        let image = document.querySelector("#registerImg");

        name.addEventListener("input", () => {
            let regExp = /^[ㄱ-ㅎ가-힣a-z\s]+$/;
            if(!regExp.test(name.value)) {
                name.setCustomValidity("한글, 영문, 공백문자만 입력할 수 있습니다.");
                name.reportValidity();
            } else {
                name.setCustomValidity("");
                name.reportValidity();
            }
        })
        
        endDate.addEventListener("input", () => {
            if(new Date(endDate.value) < new Date()) {
                endDate.setCustomValidity("현재시간보다 이전시간은 등록하실 수 없습니다.");
                endDate.reportValidity();
            } else {
                endDate.setCustomValidity("");
                endDate.reportValidity();
            }
        })
        
        text.addEventListener("input", () => {
            if(text.value.length > 500) {
                text.setCustomValidity("상세설명은 500자를 초과하실 수 없습니다.");
                text.reportValidity();
            } else {
                text.setCustomValidity("");
                text.reportValidity();
            }
        })

        price.addEventListener("input", () => {
            if(price.value < 0) {
                price.setCustomValidity("자연수만 입력할 수 있습니다.");
                price.reportValidity();
            } else {
                price.setCustomValidity("");
                price.reportValidity();
            }
        })

        image.addEventListener("input", () => {
            let imageType = image.value.slice(-4, image.value.length);
            if((imageType == ".jpg" || imageType == ".png") && image.files[0].size <= 5 * 1024 * 1024) {
                image.setCustomValidity("");
                image.reportValidity();
                document.querySelector(".custom-file-label").innerHTML = image.value;
            } else {
                image.setCustomValidity("이미지의 크기가 5MB를 초과하거나 양식에 맞지 않습니다.");
                image.reportValidity();
            }
        })

        document.querySelector("#registerBtn").addEventListener("click", () => {
            if(name == "" || endDate == "" || price == "" || text == "" || image == "" ||
            !name.checkValidity() || !endDate.checkValidity() || !price.checkValidity() || !text.checkValidity() || !image.checkValidity()) {
                this.toast();
            } else location.href = "/index.html";
        })
    }

    numberCreate() {
        document.querySelector("#registerNumber").value = Math.random().toString(36).substr(2, 5);
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


}

window.onload = function() {
    let app = new App();
}