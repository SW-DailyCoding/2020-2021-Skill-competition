class App {
    constructor() {
        this.init();

    }

    async init() {
        this.detail = [];
        console.log(this.detail);
        await this.getData();
        setTimeout(()=> {
            this.render();
        }, 500)
    }

    render() {
        let {type, page} = location.getQueryString();
        page = !isNaN(parseInt(page)) && parseInt(page) >= 1 ? parseInt(page) : 1;
        type  = !["album", "list"].includes(type) ? "album" : type;
        console.log(type);
        const LIST_LENGTH = type == "album" ? 8 : 10;
        const BLOCK_LENGTH = 10;
        const SPACING = 9;

        let totalPage = Math.ceil(this.detail.length / LIST_LENGTH);
        let startPage = Math.ceil(page / BLOCK_LENGTH) * BLOCK_LENGTH - SPACING;
        let endPage = startPage + SPACING > totalPage ? totalPage : startPage + SPACING;
        let prev = true;
        let next = true;

        if(startPage == 1) prev = false;
        if(endPage == totalPage) next = false;


        let sp  = (page - 1) * LIST_LENGTH;
        let ep = sp + LIST_LENGTH;

        let data = this.detail.slice(sp, ep);
        console.log(totalPage, endPage, startPage, page);

        $(".pagination").html(`<a href="?page=1&type=${type}" ${!prev ? "disabled" : ""}><i class="fa fa-angle-double-left"></i></a>`)
        $(".pagination").append(`<a class="btn-border" href="?page=${startPage - 1}&type=${type}" ${!prev ? "disabled" : "" }>
              <i class="fa fa-angle-left"></i>
        </a>`)
        for(let i = startPage; i <= endPage; i++) {
        $(".pagination").append(`<a href="?page=${i}&type=${type}" class="${page == i ? 'btn-fill' : ' ' }">${i}</a>`);
        }
    
    $(".pagination").append(`<a class="btn-border" href="?page=${endPage + 1}&type=${type}" ${!next ? "disabled" : "" }>
        <i class="fa fa-angle-right"></i>
    </a>`);
    $(".pagination").append(`<a class="btn-border" href="?page=${totalPage}&type=${type}" ${!next ? "disabled" : "" }>
    <i class="fa fa-angle-right"></i>  <i class="fa fa-angle-right"></i>
</a>`)
        $(`${type}`).addClass("");
        $(".chung .span").html(`총 <span class="t-main t-bold">${this.detail.length}</span> 건 ${page}p / ${Math.ceil(this.detail.length / LIST_LENGTH)}`);

        if(type == "list") this.list(data);
        else this.album(data);
    }

    album(data) {
        console.log(data);
        data.forEach(item => {
            console.log(item);
            $(".album").append(` <div class="card my-2 mx-2" style="width: 18rem">
                                                <div class="img">
                                                    <img src="./nihcImage/${item.image}" alt="" class="fit-cover card-img-top">
                                                </div>
                                                <div class="card-body">
                                                    <div class="em-09 t-bold">${item.code}</div>
                                                    <div class="em-14 t-bold">${item.name}</div>
                                                    <div class="em-085 mt-2 t-e t-bold">${item.content}</div>
                                                </div>
                                            </div>`);
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

                                let item  = xml.querySelector("item");
                                this.detail.push({
                                    id : i+1,
                                    name : item.querySelector("ccbaMnm1").innerHTML.replace("<![CDATA[", "").replace("]]>", ""),
                                    code : item.querySelector("bcodeName").innerHTML.replace("<![CDATA[", "").replace("]]>", ""),
                                    content : item.querySelector("content").innerHTML.replace("<![CDATA[", "").replace("]]>", ""),
                                    image : item.querySelector("imageUrl").innerHTML
                                });
                                return this.detail;
                            })
                        })
                    })
    }
}

window.onload = function() {
    let app = new App;
}