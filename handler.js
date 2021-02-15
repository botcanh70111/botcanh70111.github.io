function ClickSpin() {
    const button = document.getElementById("button");
    button.addEventListener("click", function (e) {
        let header = document.getElementById("header");
        let pie = document.getElementById("items");
        pie.classList.add("spin");
        const random = Math.floor(Math.random() * 1200 + 1200);
        setTimeout(() => {
            pie.style.animationDuration = "600ms";
        }, 1200);
        setTimeout(() => {
            pie.style.animationDuration = "850ms";

            setTimeout(() => {
                setStyle(pie);
            }, random);
        }, 3200);
    })
}

function setStyle(pie) {
    let computedStyle = window.getComputedStyle(pie);
    let transf = computedStyle.getPropertyValue('transform');
    pie.style.transform = transf;
    pie.classList.remove("spin");
    pie.style.animationDuration = "400ms";
}