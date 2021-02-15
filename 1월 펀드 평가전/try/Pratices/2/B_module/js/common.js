export default class common {
    constructor() {
        
    }

    toast() {
        let id = new Date().getTime();
        let toast = `<div class="toast" id=${id}>
                        <div class="toast-header d-between">
                            <strong>form 오류</strong>
                            <button class="close">x</button>
                        </div>
                        <div class="toast-body">
                            입력하신 정보가 양식과 일치하지 않습니다.
                        </div>
                    </div>`;
        $("#toast_container").append(toast);
        $(`#${id}`).toast({
            autohide: true,
            delay: 3000
        });
        $(`#${id} button`).on("click", function() {
            $(`#${id}`).remove();
        });
        $(`#${id}`).toast("show");
    }
}