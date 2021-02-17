export default class View {
    constructor(app, list) {
        this.app = app;
        this.list = list;
        
       
        this.loading();
    }

    loading() {
        // let box = document.querySelector("#fund-section");
        // box.innerHTML = "";
    }


    insertModal(e) {
        console.log(e);

        let name = document.querySelector("#fund_name");
        let price = document.querySelector("#fund_price");
        let endDate = document.querySelector("#fund_date");

        let element = `<div>

                                </div>`;
    }

}