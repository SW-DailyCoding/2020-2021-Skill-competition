window.addEventListener("load", () => {
    new App();
});



class App {
    constructor() {
        this.datas = localStorage.datas == null ? {} : JSON.parse(localStorage.datas);
        this.year_list = Object.keys(this.datas);
        this.year_list = this.year_list.sort((a, b) => b - a);

        this.active_year = localStorage.active_year == null ? "" : localStorage.active_year;
        this.idx = localStorage.idx == null ? 1 : localStorage.idx * 1;


        this.$modal = $(".modal");
        this.$tabs = $(".tabs");
        this.$item = $(".history_list");

        this.init();
    }


    init() {
        this.setEvent();

        this.drawMenu();
        if (this.active_year != "") {
            this.drawItem(this.active_year);
        } else if (this.year_list.length != 0) {
            this.drawItem(this.year_list[0]);
        }
    }

    drawItem(year) {
        this.$item.html('');

        this.datas[year].sort((a, b) => {
            return new Date(a.md) - new Date(b.md)
        });

        $('.item > h1').html(year + "년");
        this.$item.append('<div class="line"></div>');
        this.datas[year].forEach(x => {
            this.$item.append(`
                        <div class="history_item">
                            <div>
                                <h2>${x.md}</h2>
                                <p>${x.info}</p>
                            </div>
                            <div>
                                <button data-idx="${x.idx}" data-year="${year}" class="up btn-border" data-toggle="modal"
                                    data-target="#insert-history">수정</button>
                                <button data-idx="${x.idx}" data-year="${year}" class="del btn_dark btn-border">삭제</button>
                            </div>
                        </div>
            `);
        });

        this.$item.find(".up").on('click', (e) => {
            let idx = $(e.currentTarget).data('idx');
            let year = $(e.currentTarget).data('year');
            let find_idx = this.getIdx(year, idx);

            this.$modal.find(".history_text").val(this.datas[year][find_idx].info);
            this.$modal.find(".history_date").val(year + "-" + this.datas[year][find_idx].md);

            this.$modal.data("idx", idx);
            this.$modal.data("year", year);
        });

        this.$item.find(".del").on("click", (e) => {
            let idx = $(e.currentTarget).data('idx');
            let year = $(e.currentTarget).data('year');

            let bool = confirm("연혁을 삭제하시겠습니까?");
            if (bool) {
                this.deleteItem(year, idx);
                localStorage.datas = JSON.stringify(this.datas);
                location.reload();
            }
        })
    }

    drawMenu() {
        this.$tabs.html('');
        this.year_list.forEach((x, idx) => {
            if (this.active_year == "") {
                this.$tabs.append(`<div data-year="${x}" class="tab_j ${idx == 0 ? 'on' : ''}">${x}년</div>`);
            } else {
                this.$tabs.append(`<div data-year="${x}" class="tab_j ${this.active_year == x ? 'on' : ''}">${x}년</div>`);
            }
        });

        this.$tabs.find(".tab_j").on("click", (e) => {
            let year = $(e.currentTarget).data("year");
            this.$tabs.find(".on").removeClass("on");
            $(e.currentTarget).addClass("on");

            localStorage.active_year = year;
            this.drawItem(year);
        });
    }

    setEvent() {
        $(".register").on("click", (e) => {
            let info = this.$modal.find(".history_text").val();
            let date = this.$modal.find(".history_date").val();

            let idx = this.$modal.data("idx");
            let m_year = this.$modal.data("year");

            let date_arr = date.split("-");
            let year = date_arr[0];
            let md = date_arr[1] + "-" + date_arr[2];

            if (idx != undefined) {
                this.deleteItem(m_year, idx);
            }

            if (this.datas[year] == undefined) {
                this.datas[year] = [];
            }
            this.datas[year].push({
                idx: this.idx,
                info,
                md
            });

            localStorage.datas = JSON.stringify(this.datas);
            localStorage.idx = this.idx + 1;

            location.reload();
        });
        this.$modal.on("hidden.bs.modal", (e) => {
            this.$modal.data("idx", "");
            this.$modal.data("year", "");

            this.$modal.find("input").val('');
        });
    }


    deleteItem(year, idx) {
        let d_idx = this.getIdx(year, idx);
        this.datas[year].splice(d_idx, 1);
        if (this.datas[year].length == 0) {
            delete this.datas[year];
            delete localStorage.active_year;
        }
    }


    getIdx(year, idx) {
        return this.datas[year].findIndex(x => x.idx == idx);
    }
}