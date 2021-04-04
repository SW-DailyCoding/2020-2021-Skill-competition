class App {
    constructor() {
        this.datas = localStorage.datas == null ? {} : JSON.parse(localStorage.datas);
        this.year_list = Object.keys(this.datas);
        this.year_list = this.year_list.sort((a,b)=> b - a);

        

        this.init();
    }   
    
    init() {
        this.addEvent();

        this.drawMenu();
        if(this.active_year !== "") {
            this.addItem(this.active_year);
        } else if (this.year_list.length != 0) {
            this.addItem(this.year_list[0]);
        }
    }

    addItem(year) {
        this.$item.html('');

        this.datas[year].sort((a,b)=> {
            return new Date(a.mon) - new Date(b.mon)
        });

        this.$item.append(``);
    }
}

window.onload = function() {
    let app = new App();
}