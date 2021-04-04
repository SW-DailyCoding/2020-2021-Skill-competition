class App {
    constructor() {
        this.$tab = $(".tabs");
        this.$table = $(".table");
        this.init();
    }

    async init() {
        // this.datas = JSON.parse(await $.ajax("/restAPI/phone.php"));
        let {statusCd, statusMsg, items} = await this.getData();
        console.log(items);
        this.item = items;
        if(statusCd != 200) {
            alert(statusMsg);
            location.href="index.html"; 
            return;
        }

        this.item = this.item.reduce((obj, x)=> {
            if(obj[x.deptNm] == undefined) {
                obj[x.deptNm] = [];
            }
            obj[x.deptNm].push(x);
            return obj;
        }, {});

        console.log(this.item);
        this.item_list = Object.keys(this.item);
        console.log(this.item_list);

        this.selectMenu();
        this.addItem("전체");
    }

    selectMenu() {
        this.$tab.html(``);
        console.log(this.item_list);
        let view = this.item_list.map(x => {
            return `<div class="tab_j tab">${x}</div>`
        });
        this.$tab.html(`<div class="tab_j tab on active">전체</div>` + view.join(''));

        this.$tab.find(".tab").on("click", e => {
            let dept = $(e.currentTarget).html();
            this.$tab.find(".active").removeClass("active");
            $(e.currentTarget).addClass("active");

            this.addItem(dept);
        })
    }

    render() {

    } 

    addItem(dept) {
        console.log(dept);
        this.$table.html('');
        if(dept == "전체") {
            let a = Object.values(this.item);
            a.forEach(item => {
                console.log(item);
                let view = item.map(x => {
                    console.log(x);
                    return `  <table class="table">
                                                        <p>${x.name}</p>
                                                        <p>${x.telNo}</p>
                                                    </table>`;
                                                    }); 
                    this.$table.append(`       
                                                        <h1>${item[0].deptNm}</h1>
                                                            <tr>
                                                                <td>${view.join()}</td>
                                                            </tr>`)
            })
        } else {
            let item = this.item[dept];
            let view = item.map(x => {
                return `<tr>
                                <td>${x.name}</td>
                                <td>${x.telNo}</td>
                            </tr>`
            }); 
            this.$table.append(`<h1>${item[0].deptNm}</h1>
            <tr>
                <td>${view}</td>
            </tr>`)
        }
    }

    getData() {
        return fetch("./restAPI/phone.php")
        .then(res => res.json())
    }

}

window.onload = function() {
    let app = new App();
}