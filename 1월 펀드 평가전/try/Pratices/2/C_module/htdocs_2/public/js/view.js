export default class View {
    constructor(app, list) {
        this.app = app;
        this.list = list;
    }

    investModal() {
       document.querySelector("#invest_investor").value="";
       document.querySelector("#invest_price").value ="";

        price.addEventListener("input", () => {
            if(price.value < 1) {
                price.setCustomValidity("자연수만 입력할 수 있습니다.");
                price.reportValidity();
            } else {
                price.setCustomValidity("");
                price.reportValidity();
            }
        })
        this.sign();
        $(".close_btn").click(function (e) {
            // $("#insert-modal").find('canvas')[0].reset();
            // this.canvas = $("canvas");
            // this.ctx = this.canvas[0].getContext("2d");
            // console.log(this.ctx);
            // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            $("#insert-modal").modal("hide");
        })
    }
    

    sign() {
        this.canvas = $("canvas");
        this.ctx = this.canvas[0].getContext("2d");
        this.ctx.clearRect(0, 0, 300, 150);
        this.flag = false;

        this.canvas[0].addEventListener("mousedown", (e) => {
            let wh = document.querySelector("#wh").value;
            this.ctx.lineWidth = wh;
            const [ x, y ] = this.getXY(e);
            this.ctx.beginPath();
            this.ctx.moveTo(x, y);
            this.flag = true;
        })
        this.canvas[0].addEventListener("mousemove", (e) => {
            if(this.flag) {
                const  [ x, y ] = this.getXY(e);
                this.ctx.lineTo(x, y);
                this.ctx.stroke();
            }
        })
        this.canvas[0].addEventListener("mouseup", (e) => {
            if(this.flag) {
                const  [ x, y ] = this.getXY(e);
                this.ctx.lineTo(x, y);
                this.ctx.stroke();
                this.flag = false;
            }
        })
    }

    getXY({pageX, pageY}) {
      let { left, top } = this.canvas.offset();
      let { width, height} = this.canvas[0];

      // 실제 대회에서는 jQuery.offset() 함수를 사용하는 것이 이롭다.
      // 그 이유는 offset(Top)은 position을 줌으로써 값이 달라지기 때문이다.

      let x = pageX - left;
      x = x > width ? width : x < 0 ? 0 : x;

      let y = pageY - top;
      y = y > height ? height : y < 0 ? 0 : y;

      return [x , y];
        // return [
        //     x < 0 ? 0 : x > width ? width : x,
        //     y < 0 ? 0 : y > height ? height : y
        // ];
    }


}