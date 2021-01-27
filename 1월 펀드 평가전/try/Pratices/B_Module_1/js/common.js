export default class common {
    constructor(list) {
        this.list = null;
    }

    makePopup(number, name, endDate, current, total, owner, content) {
        let element = document.createElement("div");
        element.innerHTML = `<div class="modal fade">
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

    investorPopUp = e => {
        let idx = e.target.idx;
        let data = this.list[idx].investorList;
    }

}