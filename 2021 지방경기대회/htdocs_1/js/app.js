class App {
    constructor() {
        this.init();
    }

    async init() {
        this.festivals = await this.getFestival();
        this.sum = this.festivals.length;
        console.log(this.sum);
        console.log(this.festivals.length);
        
        this.render();
        this.addEvent();
    }

    getFestival(){
        return fetch("./xml/festivalList.xml")
        .then(res => res.text())
        .then(xmlText => {
            let parser = new DOMParser();
            let xml = parser.parseFromString(xmlText, "text/xml");
            
            let festivals = Array.from( xml.querySelectorAll("item") ).map(festival => ({
                id: parseInt(festival.querySelector("sn").innerHTML),
                no: parseInt(festival.querySelector("no").innerHTML),
                name: festival.querySelector("nm").innerHTML,
                area: festival.querySelector("area").innerHTML,
                location: festival.querySelector("location").innerHTML,
                period: festival.querySelector("dt").innerHTML,
                content: festival.querySelector("cn").innerHTML,
                images: Array.from(festival.querySelectorAll("image")).map(xmlImg => xmlImg.innerHTML),
            }));

            return festivals.map(item => ({...item, imagePath: "./xml/festivalImages/" + `${item.id}`.padStart(3, '0') + "_" + item.no,}))
        });
    }

    render() {
        let {page, type} = location.getQueryString();
        page = !isNaN(parseInt(page)) && page >= 1 ? page : 1;
        type = !["album", "list"].includes(type) ? "album" : type;

        const COUNT = type == 'album' ? 6 : 10;
        const BCOUNT = 5;

        let totalPage = Math.ceil(this.festivals.length / COUNT);
        let c_block = Math.ceil(page / BCOUNT);

        let start = (c_block - 1) * BCOUNT + 1;
        let end = start + BCOUNT - 1;
        end = end > totalPage ? totalPage : end;

        let prevPage = start - 1;
        let prev = prevPage >= 1;

        let nextPage = end + 1;
        let next = nextPage <= totalPage;

        let sp = (page-1) * COUNT;
        let ep = sp + COUNT;
        let data = this.festivals.slice(sp, ep);

        $(".link_" + type).addClass("active");
        $(".pagination").html(`<li><a href="?page=${prevPage}&type=${type}" ${!prev ? "disabled" : ""}><i class="fa fa-angle-left"></i></a></li>`)  
       
        for(let i = start; i <= end; i++) {
            $(".pagination").append(`<li  class="${page == i ? 'active' : 't-black'}"><a href="?page=${i}&type=${type}">${i}</a></li>`);
        }

        $(".pagination").append(`<li><a href="?page=${nextPage}&type=${type}" ${!next ? "disabled" : ""}><i class="fa fa-angle-right"></i></a></li>`)
        

        if(type == "album") this.album(data, page, end);
        else this.list(data, page, end);
    
    }

    album(data, page, end) {
        let getPage = page;
        let getEnd = end;

        $(".culture_header .d-flex").prepend(` <span>총 게시물 <strong>${this.sum}</strong>,</span> 
                                                                    <span class="ml-2 mr-2">페이지 <strong>${getPage}</strong> / ${end}</span>`);

        data.forEach(item => {
            // console.log(item.imagePath);
            $(".culture_body .row").append(`<div class="item  m-3" data-toggle="modal" data-target="#view-culture" data-id="${item.id}">
                                                                    <div class="item_header ">
                                                                        <img src="${item.imagePath}/${item.images.length > 0 && item.images[0]}" alt="축제이미지">
                                                                    </div>
                                                                    <div class="item_body my-3">
                                                                        <div class="em-14 t-bold">${item.name}</div>
                                                                    </div>
                                                                </div>`);
            $(".culture_body img").on("error", e => {
                e.target.src = "./images/no-image.jpg";
                // $(e.target).closest(".festival").find(".image-cnt").remove();
            })
        })
    }

    list(data, page, end) {
        // let getData = data;
        let getPage = page;
        let getEnd = end;

        $(".culture_header .d-flex").prepend(` <span>총 게시물 <strong>${this.sum}</strong>,</span> 
                                                                    <span class="ml-2 mr-2">페이지 <strong>${getPage}</strong> / ${end}</span>`);


        $(".culture_body").append(` <table class="table">
                                                                <thead>
                                                                <tr>
                                                                    <th scope="col">순번</th>
                                                                    <th scope="col">문화재명</th>
                                                                    <th scope="col">문화재 종목</th>
                                                                    <th scope="col">지정호수</th>
                                                                    <th scope="col">소재지</th>
                                                                    <th scope="col"></th>
                                                                </tr>
                                                                </thead>`);
        data.forEach(item => {
            $(".culture_body .table").append(`   <tr data-toggle="modal" data-target="#view-culture" data-id="${item.id}">
                                                                        <th scope="row">${item.id}</th>
                                                                        <td>${item.name}</td>
                                                                        <td>${item.period}</td>
                                                                        <td>${item.area}</td>
                                                                        <td></td>
                                                                        <td>
                                                                            <a href="#" class="tab_btn" data-toggle="modal" data-target="#view-culture" data-id="${item.id}">보기</a>
                                                                        </td>
                                                                    </tr>`)
        })
    }

    addEvent() {
        $(".culture_body").on("click", "[data-target='#view-culture']", e => {
            // let festival = this.festivals.find(festival => festival.id == e.target.dataset.id);
            let festival = this.festivals.find(festival => festival.id == e.currentTarget.dataset.id);
            console.log(festival);
            $("#view-culture .modal-body").html(`        <div class="row">
                                                                            <div class="col-lg-4">
                                                                                <img class="fit-cover"src="${festival.imagePath}/${festival.images.length > 0 && festival.images[0]}" alt="">
                                                                            </div>
                                                                            <div class="col-lg-8">
                                                                                <div class="my-3 em-16 t-bold">${festival.name}</div>
                                                                                <div class="my-2">
                                                                                    <span class="em-095 t-bold">주소</span>
                                                                                    <span class="em-1 ml-3">${festival.name}</span>
                                                                                </div>
                                                                                <div class="my-2">
                                                                                    <span class="em-095 t-bold">주소</span>
                                                                                    <span class="em-1 ml-3">${festival.name}</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>`);
        })

        $(".modal_hide").on("click", e => {
            $(".modal").modal("hide");
        })
    }
}

window.onload = function() {
    let app = new App();
}