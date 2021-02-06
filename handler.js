function ClickSpin() {
    const button = document.getElementById("button");
    button.addEventListener("click", function(e) {
        let pie = document.getElementById("items");
        pie.classList.add("spin");
        setTimeout(() => {
            // pie.classList.remove('spin');
            // pie.classList.add("spin");
            let computedStyle = window.getComputedStyle(pie);
                let transf = computedStyle.getPropertyValue('transform');
                pie.style.transform = transf;
            pie.style.animationDuration = "1000ms";
            const random = Math.floor(Math.random() * 1000);
            setTimeout(() => {
                let computedStyle = window.getComputedStyle(pie);
                let transf = computedStyle.getPropertyValue('transform');
                pie.style.transform = transf;
                pie.classList.remove("spin");
                pie.style.animationDuration = "700ms";
            }, random);
        }, 2100);
    })
}