export default class common {
    constructor(list) {
        this.list = list;
                
        // this.list.forEach((item, i) => {
        //     // console.log(item);
        //     this.addItem(item);
        // })
    }

  addItem(item) {
        let element = document.createElement("div");
        element.innerHTML = `<div class="item mb-5">
                                                <p>펀드번호 : ${item.number}</p>
                                                <p>펀드이름 : ${item.name}</p>
                                                <p>모집마감일 : ${item.endDate} </p>
                                                <p>현재금액 : ${item.current.toLocaleString()} </p>
                                                <div class="progress">
                                                    <div  class="progress-bar " aria-valuenow="${item.attain}" style="width: 100%;">${item.attain}%</div>
                                                 </div>
                                                <div class="view pointer" data-id=${item.idx}  data-toggle="modal" data-target="#invest-view-modal">상세보기버튼</div>
                                            </div> `;

        document.querySelector(".fund-list").appendChild(element);
        element.querySelector(".view").addEventListener("click", e => {
            this.modal(e);
        })

        // if(new Date(this.data[item.idx].endDate)) {}
  }

  modal(e) {
        let id = e.target.dataset.id;
        let modal = document.querySelector("#invest-view-modal .modal-body");
        modal.innerHTML = ` <div class="title">상세보기</div>
                                                <button class="btn" id="modal_remove"><i class="fa fa-remove">x</i></button>
                                                <div class="mt-2">
                                                    <small class="text-gray">번호</small>
                                                    <p class="ml-2 mb-3">${this.list[id].number}</p>
                                                </div>
                                                <div class="mt-2">
                                                    <small class="text-gray">펀드명</small>
                                                    <p class="ml-2 mb-3">${this.list[id].name}</p>
                                                </div>
                                                <div class="mt-2">
                                                    <small class="text-gray">창업자명</small>
                                                    <p class="ml-2 mb-3">${this.list[id].owner}</p>
                                                </div>
                                                <div class="mt-2">
                                                    <small class="text-gray">모집마감일</small>
                                                    <p class="ml-2 mb-3">${this.list[id].endDate}</p>
                                                </div>
                                                <div class="mt-2">
                                                    <small class="text-gray">투자자 리스트</small>
                                                    <div class="investor pt-1 pl-4" style="max-height: 400px; height: auto; overflow-y: scroll;">
                                                    </div>
                                                </div>
                                            </div>`;

    this.list[id].investorList.forEach(list => {
        let element = document.createElement("div");
        element.innerHTML = `   <div>
                                                    <small class="text-gray">이메일</small>
                                                    <span class="ml-2 mb-0">${list.email}</span>
                                                </div>
                                                <div class="mt-2">
                                                    <small class="text-gray">투자금액</small>
                                                    <span class="ml-2 mb-0">${list.pay}</span>
                                                </div>
                                                <div class="mt-2 mb-2">
                                                    <small class="text-gray">투자시간</small>
                                                    <span class="ml-2 mb-0">${list.datetime}</span>
                                                </div>`;
        modal.querySelector(".investor").appendChild(element);
        })
    }


   
}