class App {
    constructor() {
        this.init();
    }   

    async init() {
        this.detail = [];
        console.log(this.detail);
        await this.getData();
        
        setTimeout(() => {
            this.render();
        }, 300);
    }

    render() {
        let {page, type} = location.getQueryString();
        page = !isNaN(parseInt(page)) && parseInt(page) >= 1 ? parseInt(page) : 1;
        type = !["album, list"].includes(type) ? "album" : type;

        const LIST_LENGTH = type == "album" ? 8 : 10;
        const BLOCK_LENGTH = 5;
        const SPACING = 4;

        let totalPage = Math.ceil(this.detail.length / LIST_LENGTH);
        let startPage = Math.ceil(page / BLOCK_LENGTH) * BLOCK_LENGTH - SPACING;
        let endPage = startPage + SPACING > totalPage ? totalPage : startPage + SPACING;
        let prev = true;
        let next = true;

        if(startPage == 1) prev = false;
        if(endPage == totalPage) next = false;

        let sp = (page - 1) * LIST_LENGTH;
        let ep = sp + LIST_LENGTH;

        console.log(totalPage, endPage, startPage);
        let data = this.detail.slice(sp, ep);

        $(".pagination").html(`<a href="?page=${startPage - 1}&type=${type}" ${!prev ? "disabled" : "" }>
                                                <i class="fa fa-angle-left"></i>
                                            </a>`)
        for(let i = startPage; i <= endPage; i++) {
            $(".pagination").append(`<a href="?page=${i}&type=${type}" class="${page == i ? 'active' : 'n-active'}">${i}</a>`);
        }
                                            
        $(".pagination").append(`<a href="?page=${endPage + 1}&type=${type}" ${!next ? "disabled" : "" }>
                                                <i class="fa fa-angle-right"></i>
                                            </a>`)
        $(`${type}`).addClass("active");

        $(".chng").html(`총 ${this.detail.length} 페이지 ${page} / ${Math.ceil(this.detail.length / LIST_LENGTH)} `);
        if(type == "list") this.list(data);
        else this.album(data);
    }

    album(data) {
        console.log(data);

        data.forEach(item => {
            // $(".culture_body").html("");
            $(".culture_body .row").append(`
                                                                    <div class="item m-3 ">
                                                                                    <div class="item_header">
                                                                                        <div class="img">
                                                                                            <img src="./nihcImage/${item.image}" alt="" class="fit-cover">
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="item_body">
                                                                                        <div class="em-14">${item.name}</div>
                                                                                    </div>
                                                                                </div>`);
            $(".culture_body img").on("error", e => {
                e.target.src = "./images/no-image.png";
                // $(e.target).closest(".festival").find(".image-cnt").remove();
            })
        })
    }

    getData() {
        return fetch("./xml/nihList.xml")
        .then(res => res.text())
        .then(xmlText => {
            let parser = new DOMParser();
            let xml = parser.parseFromString(xmlText, "text/xml");

            Array.from(xml.querySelectorAll("item")).map((item, i)=> {
                let ccbaKdcd = item.querySelector("ccbaKdcd").innerHTML;
                let ccbaCtcd = item.querySelector("ccbaCtcd").innerHTML;
                let ccbaAsno = item.querySelector("ccbaAsno").innerHTML;
                
                fetch(`xml/detail/${ccbaKdcd}_${ccbaCtcd}_${ccbaAsno}.xml`)
                .then(res => res.text())
                .then(xmlText => {
                    let parser = new DOMParser();
                    let xml = parser.parseFromString(xmlText, "text/xml");

                    let item = xml.querySelector("item");
                    this.detail.push({
                        id : i + 1,
                        name: item.querySelector("ccbaMnm1").innerHTML.replace("<![CDATA[", "").replace("]]>", ""),
                        code: item.querySelector("bcodeName").innerHTML.replace("<![CDATA[", "").replace("]]>", ""),
                        content: item.querySelector("content").innerHTML.replace("<![CDATA[", "").replace("]]>", ""),
                        image: item.querySelector("imageUrl").innerHTML
                    });
                    return this.detail;
                })
            })
        })
    }
}

window.onload = function() {
    let app = new App();
}