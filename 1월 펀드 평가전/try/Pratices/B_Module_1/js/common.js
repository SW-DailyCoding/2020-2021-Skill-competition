export default class common {
  constructor(list) {
    this.list = list;
  }

  makePopup(number, name, endDate, current, total, owner, content) {
    let element = document.createElement("div");
    element.innerHTML = `<div id="Modal" data-bs-backdrop="static" class="modal fade">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <div class="modal-title">팝업</div>
                                            <button class="btn-close" data-bs-dismiss="modal"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p>${number}</p>
                                            <p>${name}</p>
                                            <p>${endDate}</p>
                                            <span>${current}</span><span>${total}</span>
                                            <p>${owner}</p>    
                                            <p>${content}</p>
                                        </div>
                                    </div>
                               </div>
                            </div>`;
    document.querySelector("#wrap").appendChild(element.firstChild);
  }

  investorPopup = (e) => {
    let idx = e.target.dataset.idx;
    let data = this.list[idx].investorList;
    let number = this.list[idx].number;
    let name = this.list[idx].name;
    let endDate = this.list[idx].endDate;
    let current = this.list[idx].current;
    let total = this.list[idx].total;
    let owner = this.list[idx].owner;
    let content = `<div id="investor-popup-list">`;
    data.forEach((x) => {
      content += `  <div class="investor-popup mt-5">
                                <h5>Email ${x.email}</h5>
                            </div>`;
    });
    content += `</div>`;
    this.makePopup(number, name, endDate, current, total, owner, content);
  };

  toast() {
    let id = new Date().getTime();
    let toast = `<div class="toast" id=${id}">
                                <div class="toast-header d-between">
                                        <strong>form 오류</strong>
                                        <button class="close>x</button>
                                </div>  
                                <div class="toast-body">
                                    입력하신 정보가 양식이 올바르지 않습니다.
                                </div>  
                            </div>`;
    $("#toast_container").append(toast);
    $(`#${id}`).toast({
      autohide: true,
      delay: 3000,
    });
    $(`#${id} button`).on("click", function () {
      $(`#${id}`).remove();
    });
    $(`#${id}`).toast("show");
  }
}
