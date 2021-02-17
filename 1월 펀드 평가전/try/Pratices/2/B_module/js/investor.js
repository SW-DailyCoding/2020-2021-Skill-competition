export default class Investor {
    constructor(app, list) {
        this.app = app;
        this.list = list;

        // this.list.forEach((item, i) => {
        //     if(i <5 )
        //         this.app.addItem(item);
        // })
        this.loading();
    }

    loading() {
    }
}