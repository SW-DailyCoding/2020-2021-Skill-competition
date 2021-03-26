class App {
    constructor() {
        this.init();
        // this.render();
    }

    
    render(items) {
        let {type} = location.getQueryString();


    //     type = ![
    //         "type1",
    //         "type2",
    //         "type3",
    //         "type4",
    //         "type5",
    //         "type6",
    //         "type7",
    //         "type8",
    //         "type9",
    //         "type10",
    //         "type11",
    //         "type12",
    // ].includes(type) ? "type1" : type;


        let type2 = [
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
    ]

    let opera = [
    "전체",
    "기획운영과",
    "기획서무",
    "홍보",
    "시설",
    "전승지원과",
    "조사연구기록과",
    "조사연구",
    "기록화사업",
    "교육협력",
    "전시",
    "공연",
    ]


    for(let i = 0; i < 12; i++) {
        if(type === type2[i] ) {
                let a = type2[i];
                a = opera[i];
                a = a.toString()
                console.log(a);
                $(".numbers_body .title").html(`${opera[i]}`);
            
                if ( i == 0) {
                    items.forEach((item,i) => {
                        // console.log(item, item.deptNm, a.toString());
                        // console.log(item.deptNm ===  a.toString())
                            this.addItem(item, i, a);
                    })
              
                }
                items.forEach((item,i) => {
                    // console.log(item, item.deptNm, a.toString());
                    // console.log(item.deptNm ===  a.toString())
                    if(item.deptNm === a ) {
                        this.addItem(item, i, a);
                    } 
                })
                        // items.forEach((item, i) => {
        //     this.addItem(item, i);
        //     let name =  item.deptNm ;
        //     // console.log(name, type);
        //     // // console.log(name);
        //     if(type == name) {
        //         this.addItem(item, i);
        //     }  
            //  return a;
            // this.addItem(item);
        }

    // items.forEach((item, i) => {
    //     this.addItem(item, i);
    //     let name =  item.deptNm ;
    //     // console.log(name, type);
    //     // // console.log(name);
    //     if(type == name) {
    //         this.addItem(item, i);
    //     }  
    //     // console.log(type)
    // })
    }
    // console.log(type.index())
    $(".link_" + type).addClass("item");

    
}

    async init() {
        let {statusCd, statusMsg, items} = await this.getExchangeData();
        if(statusCd != 200){
            $(".numbers_body").html(statusMsg);
        }
        this.list = items;
        this.render(items);
        
    }


    getExchangeData(){
        return fetch("./restAPI/phone.php")
            .then(res => res.json())
    }

    addItem(item, i, opera) {

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


}

window.onload = function() {
    let app = new App();
}