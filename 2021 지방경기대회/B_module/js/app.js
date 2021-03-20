class App {
    constructor() {
        this.init();
    }

    async init() {
        this.festival = await this.getFestival();
        console.log(this.festival);
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

            return festivals.map(item => ({...item, imagePath: "/xml/festivalImages/" + `${item.id}`.padStart(3, '0') + "_" + item.no,}))
        });
    }

    render() {
        console.log(localStorage,getQueryString());
        let {page,  type} = localStorage.getQueryString();
       
        page = !isNaN(parseInt(page)) && page >= 1 ? page : 1;
        type = !["album", "list"].includes(type)? "normal" : type;

        const COUNT = type == 'album' ? 6 : 10;
        const B_COUNT = 5;

        let totalPage = Math.ceil(this.festival.length / COUNT);
        let c_block = Math.ceil(page / B_COUNT);

        let start = (c_block -1) * B_COUNT + 1;
        let end = start + B_COUNT - 1;
        end = end > totalPage ? totalPage : end;

        let prevPage = start - 1;
        let prev = prevPage >= 1;

        let nextPage = end + 1;
        let next = nextPage <= totalPage;

        let sp = (page - 1) * COUNT;
        let ep = sp + COUNT;
        let data = this.festival.slice(sp, ep);

        $(".pagination").html(`<a href="?page=${prevPage}&type=${type}" ${!prev ? "disabled" : ""}><i class="fa fa-angle-left"></i></a>`)  
        for(let i = start; i <= end; i++) {
            $(".pagination").append(`<a href="?page=${i}&type=${type} class="${page == i ? 't-main' : 't-black'}">${i}</a>`);
        }
        $(".pagination").html(`<a href="?page=${nextPage}&type=${type}" ${!next ? "disabled" : ""}><i class="fa fa-angle-right"></i></a>`)
        

        if(type == "album") this.album(data);
        else this.list(data);
    }

    album(data) {
        let element= this.festivals[ this.festivals.length - 1 ];
        data.forEach(item => {
            $(".culture_body .row").append(`<div class="item  m-3">
                                                                    <div class="item_header">
                                                                        <img src="${item.imagePath}/${item.images.length > 0 && item.image[0]}" alt="축제이미지">
                                                                    </div>
                                                                    <div class="item_body my-3">
                                                                        <div class="em-14 t-bold">${item.name}</div>
                                                                    </div>
                                                                </div>`);
            $(".culture_body img").on("error", e => {
                e.target.src = "/image/no-image.jpg";
                // $(e.target).closest(".f")
            })
        })
    }

    // list(data) {
    //     let 
    // }
}

window.onload = function() {
    let app = new App();
}