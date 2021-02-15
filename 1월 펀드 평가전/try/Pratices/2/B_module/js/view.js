export default class View {
    constructor(list) {
        this.list = list;

        this.list.forEach(x => {
            
        })
        console.log(list);
    }

    loading() {
        let box = document.querySelector("#fund-section");
        box.innerHTML = "";

        // this.list.forEach(x => {
        //     let fund = this.view
        // })
    }

    addItem(item) {

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