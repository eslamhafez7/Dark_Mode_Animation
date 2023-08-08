const moonPath = "M15.5 26.2291C15.5 40.5885 28 52.2291 28 52.2291C12.8122 52.2291 0.5 40.5885 0.5 26.2291C0.5 11.8697 12.8122 0.229091 28 0.229091C28 -1.5 15.5 11.8697 15.5 26.2291Z";
const sunPath = "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";
const darkMode = document.getElementById("dark_mode");
let toggle = false;

darkMode.addEventListener("click", () => {
    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    });
    timeline.add({
        targets: ".sun",
        d: [
            {value: toggle ? sunPath :  moonPath}
        ]
    })
    .add({
        targets: "#dark_mode",
        rotate: 320
    }, '-= 350')
    .add({
        targets: "section",
        backgroundColor: toggle ? "rgb(255, 255, 255)" : "rgb(22, 22, 22)",
        color: toggle ? "rgb(22, 22, 22)" : "rgb(255, 255, 255)"
    }, '-= 700')
    if(!toggle) {
        toggle = true;
    }else {
        toggle = false;
    }
});






