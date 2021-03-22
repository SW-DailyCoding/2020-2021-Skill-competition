class App {
    constructor() {
        this.init();
        // this.render();
    }

    
    render(items) {
        let {type} = location.getQueryString();

        type = ![
            "type1",
            "type2",
            "type3",
            "type4",
            "type5",
            "type6",
            "type7",
            "type8",
            "type9",
            "type10",
            "type11",
            "type12",
    ].includes(type) ? "type1" : type;

        let type2 = ![
            "type1",
            "type2",
            "type3",
            "type4",
            "type5",
            "type6",
            "type7",
            "type8",
            "type9",
            "type10",
            "type11",
            "type12",
    ].includes(type) ? "type1" : type;

    

    
    let as = 
    
    items.forEach((item, i) => {

        // if(opera[i] == )
    
        // console.log(a);
        let name =  item.deptNm ;
        // console.log(name, type);
        // // console.log(name);
        if(type == name) {
            this.addItem(item, i);
        }  
        console.log(type)
    })
    // console.log(type.index())


    // console.log(type[i]);

    console.log(this.list);
    
}

    async init() {
    
        let {statusCd, statusMsg, items} = await this.getExchangeData();
        
        if(statusCd != 200){
            $(".numbers_body").html(statusMsg);
        }
        this.list = items;
        // console.log(this.list);

        this.render(items);
        
        // if(type == "album") this.album(data, page, end);


        this.render(items);

        this.addEvent();
    }


    getExchangeData(){
        return fetch("./restAPI/phone.php")
            .then(res => res.json())
    }

    addItem(item, i) {
        console.log("!");
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
        // this.a = this.list.indexOf("전승지원과");
        // console.log(this.a);
        // this.arr.forEach((item, i) => {
        //         // console.log(this.arr)
        //         $(".numbers_body").html(`<div class="opera my-5">
        //         <div class="d-start em-16 t-row">
        //             ${this.arr[i]}
        //         </div>
        //         <div class="row">
        //         </div>
        //     </div>`)
        // })  
      
        // this.list.forEach(item => {
        //     // console.log(this.arr, item.deptNm)
        //     if(item.deptNm == this.arr)
        //     $(".numbers_body .row").append(
        //                                     `<div class="item m-3">
        //                                 <div class="d-center">
        //                                     <div class="img">
        //                                         <i class="fa fa-user"></i>
        //                                     </div>
        //                                     <div class="ml-3">
        //                                         <p class="em-08">${item.sn}: ${item.deptNm}</p>
        //                                         <p class="em-14 t-bold">${item.name}</p>
        //                                         <p class="mt-1 em-08">${item.telNo}</p>
        //                                     </div>
        //                                 </div>`
        //     ) ;

        // })
    
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