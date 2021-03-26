class App {
    constructor() {
        this.d = document.querySelector("tbody");
        this.init();
        this.arr = [];
    }

    init() {
        let {type} = location.getQueryString();
        type = !["2021", "2020", "2019", "2018", "2017"].includes(type) ? "2021" : type;
       
        $(".link_" + type).addClass("active");
        console.log(`${type}`)
        this.itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
        this.data = JSON.parse(localStorage.getItem('items'));
        console.log(this.data);

        this.data ? type : $(".history_body .title").html(`${type}`);
        // localStorage.setItem('items', JSON.stringify(this.itemsArray));
        // $(".history_body .title").html(`${type}`);
        if(this.data) {
            this.data.sort(function(a, b) {
                return  new Date(a['date']).getTime() <  new Date(b['date']).getTime() ? 1 : -1;
            }) // 내림차순
            this.data.forEach((item, i) => {
                let date = item.date.substring(0,4);
                console.log(i);
                $(".history_body .title").html(`${type}`);
                if(type == date ) {
                    this.addItem(item, i);
                }  
            })
        }

        //연혁 등록 
        $('#insert-history').on("submit", (e) => {
            e.preventDefault();
            console.log("!");
 
            let text = $('#history_text').val();
            let date = $('#history_date').val();
            console.log(date);

            // console.log(li);
            let li = this.itemsArray.length;
            console.log(li);

            let obj = {
                id : li,
                text : text,
                date : date
            }

            this.itemsArray.push(obj);
            localStorage.setItem('items', JSON.stringify(this.itemsArray));
            $(".modal").modal("hide");
            location.href="history.html";
        })

        $(".btn_remove").on("click", e => {
            this.deleteBtn(e);
        })

        $("tr").on("click", "[data-target='#modify-history']", e => {
            e.preventDefault();
      
            let datas = this.data.find((data, i) => i == e.currentTarget.dataset.id);
   

            $("#modify-history .modal-body").html(`<div class="my-3">
                                                        <div class="em-1 t-bold mr-3">연혁수정</div>
                                                        <input class="form-control" type="text"  class="text" name="text"  id="history2_text"
                                                            placeholder="${datas.text}" required>
                                                    </div>
                                                    <div class="mb-3">
                                                        <span class="em-1 t-bold mr-3">연혁일자</span>
                                                        <span class="em-1  mr-3">${datas.date}</span>
                                                        <input class="form-control" type="date"  name="date" class="date" id="history2_date"  id="date" required>
                                                    </div>`);

                $("#modify-history").on("submit", e => {
                    e.preventDefault();
            
                    let text = $('#history2_text').val();
                    let date = $('#history2_date').val();
        
                    console.log(this.itemsArray.length);
                    let li = datas.id;
                    console.log(li);
        
                    let obj = {
                        id : li,
                        text : text,
                        date : date
                    }
        
                    console.log(obj);
                    this.itemsArray.splice(1, 2, obj);
                    localStorage.setItem('items', JSON.stringify(this.itemsArray));
                    $(".modal").modal("hide");
                    // location.href="history.html";
                })                                      
            // location.href="history.html";

        })

        
    }

    addItem(item, i) {
        console.log(item);
        let element = document.createElement("tr");
        element.dataset.id = item.id;
        console.log(item.id);
        let a = item.id
        element.id = this.id;
        item.date;
        console.log(item.id);
        element.innerHTML = `<th scope="row">${item.id}</th>
                                            <td>${item.text}</td>
                                            <td>${item.date}</td> 
                                            <td>
                                                <a  href="#" class="tab_btn" data-toggle="modal" data-target="#modify-history" data-id=${i}>수정</a>
                                                <a  href="#" class="tab_btn btn_remove" data-toggle="modal" data-target="#delete" data-id="${i}">삭제</a>
                                            </td>`;
        this.d.append(element);

        
    }

    deleteBtn(e) { 
        console.log(e.target.dataset.id);
        let btn = e.target.parentNode.parentNode;
        console.log(btn);
        document.querySelector("tbody").removeChild(btn);

        console.log(this.itemsArray);
        this.itemsArray.forEach((item, i)=> {
            console.log(i);
            console.log(item, item.id, btn.dataset.id);
            if(item.id === i) this.itemsArray.splice(i, 1);
            // parseInt(btn.dataset.id)
            localStorage.setItem("items",JSON.stringify(this.itemsArray)) ;
            // location.href="history.html";
        })
        // for(let i = 0; i < this.itemsArray.length; i++) {
        //     console.log(this.itemArray[i], btn.id);
        //     console.log(this.itemsArray[i] )
        //     if(this.itemsArray[i] == btn.id ) {
        //         this.itemsArray.splice(index, 1);
        //         console.log(this.itemArray);
        //         localStorage.setItem("items",JSON.stringify(this.itemsArray)) ;
        //     }
        // }
        // console.log(index);
    }
}

window.onload = function() {
    let app = new App();
}