let content = document.querySelector(".content");

function makeChart() {
    for (let i = 2; i < 10; i++) {
        let chart = document.createElement("div"); //產生圖板
        chart.classList.add("chart");
        let mainNum = document.createElement("div"); //產生大數字
        let divleft = document.createElement("div"); //產生左邊格子
        let divright = document.createElement("div"); //產生右邊格子
        mainNum.textContent = i;
        mainNum.classList.add("mainNum");
        divleft.classList.add("divpattern");
        divleft.classList.add("left");
        divright.classList.add("divpattern");
        divright.classList.add("right");
        for (let j = 1; j < 10; j++) {
            let equation = document.createElement("div");
            equation.textContent = i + " x " + j + " = " + (i * j);
            equation.classList.add("equation");
            if (j < 4) {
                divleft.appendChild(equation);
            } else {
                divright.appendChild(equation);
            }
        }
        //將大數字、左邊格子、右邊格子放進圖板
        chart.appendChild(mainNum);
        chart.appendChild(divleft);
        chart.appendChild(divright);
        //將圖板放進內容中
        content.appendChild(chart);
    }
}
makeChart();
