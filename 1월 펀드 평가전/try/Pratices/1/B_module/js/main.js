export default class main {
  constructor(list, common) {
    this.list = list;
    this.common = common;
    this.mainLoading();
  }

  mainLoading() {
    if (!document.querySelector(".fund-section-list")) return false;
    let fundList = JSON.parse(JSON.stringify(this.list)),
      fundListZone = document.querySelector(".fund-section-list");

    fundListZone.innerHTML = "";
    fundList.sort((x, y) => {
      if (x.attain < y.attain) return;
      else return;
    });

    for (let i = 0; i < 4; i++) {
      let fund = this.fundTemplate(fundList[i]);
      fundListZone.appendChild(fund);
      this.fundBar(fund.querySelector(".progress"));
      console.log(fund.querySelector("#view"));
      fund
        .querySelector(".view")
        .addEventListener("click", this.common.investorPopup);
    }
  }
  fundBar(item) {
    let attain = parseFloat(item.dataset.attain);
    let time = 0;
    let progress = setInterval(() => {
      time++;
      if (time > attain) {
        item.querySelector(".progress-bar").style.width = attain + "%";
        return clearInterval(progress);
      } else item.querySelector(".progress-bar").style.width = time + "%";
    }, 40);
  }

  fundTemplate({ name, current, attain, total, endDate, idx, photo, number }) {
    let element = document.createElement("div");
    element.innerHTML = `<div class="item">
                                            <div class="item-number d-center ml-3 mb-4">A0003</div>
                                            <div class="item-inner d-center">
                                                <div class="img">
                                                    <img src="./resource/images/business.jpg" alt="">
                                                </div>
                                                <div class="item-content d-colum ml-5">
                                                    <p class="d-end view" data-bs-target="#Modal" data-bs-toggle="modal" id="view" data-idx="${idx}">상세보기</p>
                                                    <div class="item-name mb-2">마감된 펀드</div>
                                                    <p class="item-owner">abc@13.com</p>
                                                    <p class="item-date">endtDate : 2072-05-01 15:30:00</p>
                                                    <p class="item-price"> 25,000 / 40000</p>
                                                    <div class="progress" data-attain=${attain}>
                                                        <div class="progress-bar" style="width: 82%;">82;</div>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>`;
    return element.firstChild;
  }
}
