class App {
    constructor() {
        this.init();
    }

    async init() {
        let {statusCd, statusMsg, items} = await this.getExchangeData();
        let {type} = location.getQueryString();
        type = !["opera1", "list"].includes(type) ? "album" : type;

        if(statusCd != 200){
            $(".numbers_body").html(statusMsg);
        }
        this.list = items;
        console.log(this.list);

        // if(type == "album") this.album(data, page, end);

        this.arr = ["기획운영과", "기획서무"];
        console.log(this.arr);

        this.render();

        this.addEvent();
    }


    getExchangeData(){
        return fetch("./restAPI/phone.php")
            .then(res => res.json())
    }

    render() {
        this.arr.forEach((item, i) => {
                console.log(this.arr)
                $(".numbers_body").html(`<div class="opera my-5">
                <div class="d-start em-16 t-row">
                    ${this.arr[i]}
                </div>
                <div class="row">
                </div>
            </div>`)
        })  
      
        this.list.forEach(item => {
            console.log(this.arr, item.deptNm)
            if(item.deptNm == this.arr)
            $(".numbers_body .row").append(
                                            `<div class="item m-3">
                                        <div class="d-center">
                                            <div class="img">
                                                <i class="fa fa-user"></i>
                                            </div>
                                            <div class="ml-3">
                                                <p class="em-08">${item.sn}: ${item.deptNm}</p>
                                                <p class="em-14 t-bold">${item.name}</p>
                                                <p class="mt-1 em-08">${item.telNo}</p>
                                            </div>
                                        </div>`
            ) ;

        })
    
    }

    // addItem(item) {
    //     $(".numbers_body .row").html('');
    //     let element = document.createElement("div");
  
    //     document.querySelector(".numbers_body .opera .row").append(element);
    //     console.log(element);
    // }

    addEvent() {

    }
}

window.onload = function() {
    let app = new App();
}