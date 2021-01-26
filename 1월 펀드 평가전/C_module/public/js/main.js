export default class main {
    constructor(list, common) {
        this.list = list;
        this.common = common;
    }

    mainLoading() {
        if(!document.querySelector(".fund-list")) return false;
        let fundList = JSON.parse(JSON.stringify(this.list)),
            fundListZone = document.querySelector(".fund-list");

        fundListZone.innerHTML = '';
        fundList.sort((x, y) => {
            if(x.attain < y.attain) return 1;
            else return -1;
        })

        for(let i = 0; i < 4; i++) {
            let fund = this.fundTemplate(fundList[i]);
            console.log(fund);
            fundListZone.appendChild(fund);
            this.fundBar(fund.querySelector(".progress"));
            fund.querySelector(".view").addEventListener("click", this.common.investorPopup);
        }
    }

    fundTemplate({name, current, attain, total, endDate, idx, photo, number}) {
        let element = document.createElement("div");
        element.innerHTML = `<div class="fund-box">
                                <h4><strong>${number}</strong></h4>
                                <div class="item d-lg-flex">
                                    <div class="image mt-2">
                                        <img src="${photo}" alt="fundImage" title="fundImage">
                                    </div>
                                    <div class="image__box">
                                        <h3><strong>${name}</strong></h3>
                                        <ul>
                                            <li>SBA는 인스피레이션 게임을 ‘기존과 차별화된 시도를 통해 개발자가 전하고자 하는 사회/문화적 메시지를 유저가 게임 플레이를 통해서 체험할 수 있도록 만든 게임’으로 정의합니다. 새로운 지식습득, 인식전환, 문제해결, 문화 활성화 등이 주제가 되어 플레이어에게 감동과 영감을 전달하는 것이 핵심인 게임입니다.</li>
                                            <li>전체 : ${total.toLocaleString()} 현재 : ${current.toLocaleString()}</li>
                                            <div class="progress" data-attain="${attain}">
                                                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${attain.toLocaleString()}%</div>
                                            </div>
                                        </ul>
                                        <p class="date">마감날짜 : ${endDate}</p>
                                    </div>
                                    <div class="view" data-idx="${idx}">상세보기</div>
                                </div>
                            </div>   `;
        return element.firstChild;
    }

    fundBar(item) {
        let attain = parseFloat(item.dataset.attain);
        let time = 0;
        let progress = setInterval(() => {
            time++;
            if(time > attain) {
                item.querySelector(".progress-bar").style.width = attain + "%";
                return clearInterval(progress)
            } else item.querySelector(".progress-bar").style.width = time + "%";
        }, 80);
    }

}