const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPage() {

    var nav = gsap.timeline();
    nav.from("#nav h3,.dropdown h3", {
        y: -100,
        duration: 1
    })

    var data = gsap.timeline();
    data.from("#data>#first_h1", {
        x: -100,
        opacity: 0,
        delay: 1,
        duration: 1
    })
    data.from("#second_h1", {
        x: 70,
        opacity: 0,
    })


    var links = gsap.timeline();
    links.from("#links>a", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: .8
    })

}
// mini_circle
function mini_circle(xScale, yScale) {
    window.addEventListener("mousemove", function (val) {
        document.querySelector("#mini_circle").style.transform = `translate(${val.clientX}px,${val.clientY}px) scale(${xScale} ,${yScale})`;
    })
}

let timer;
//mouseShaper
function mouseFollow() {

    let prevX = 0;
    let prevY = 0;

    let xScale = 1;
    let yScale = 1;

    window.addEventListener("mousemove", function (details) {
        clearTimeout(timer);


        let xDiff = details.clientX - prevX;
        let yDiff = details.clientY - prevY;


        xScale = gsap.utils.clamp(.7, 1, xDiff);
        yScale = gsap.utils.clamp(.7, 1, yDiff);

        prevX = details.clientX;
        prevY = details.clientY;

        mini_circle(xScale, yScale);

        timer = setTimeout(() => {
            document.querySelector("#mini_circle").style.transform = `translate(${details.clientX}px,${details.clientY}px) scale(1, 1)`;
        }, 100);
    })
}

function skills() {
    var skill = gsap.timeline();
    skill.from("#design", {
        y: "-100%",
        // delay: 4,
        duration: 2,
        opacity: 0,
        // scrollTrigger: {
        //     trigger: "#design",
        //     scroller: "body",
        //     markers: true,
        //     start: "top 30%",
        //     end: "top 80%"
        // }
    });
}

function section() {
    let rot = 0, rotateDiff = 0;

    document.querySelectorAll(".elem").forEach(function (elem, i) {
        elem.addEventListener("mousemove", function (details) {
            const imageElem = elem.querySelector("img");
            rotateDiff = details.clientX - rot;
            rot = details.clientX;
            let diff = details.clientY - elem.getBoundingClientRect().top;

            imageElem.style.display = "block";
            gsap.to(imageElem, {
                ease: Power2.in,
                top: diff - 125,
                left: details.clientX - 245,
                rotate: gsap.utils.clamp(-15, 15, rotateDiff),
            })
        })
    })

    document.querySelectorAll(".elem").forEach(function (elem, i) {
        elem.addEventListener("mouseleave", function () {
            const imageElem = elem.querySelector("img");
            imageElem.style.display = "none";
            gsap.to(imageElem, {
                duration: .2,
                ease: Power1.out
            })
        })
    })
}

setInterval(() => {
    let d = new Date();
    var time = (d.getHours()) + ":" + d.getMinutes() + " IST";
    document.querySelector("#time").innerHTML = time;
}, 100);

const downloadResume = () => {
    console.log("clicked")
    window.open("https://drive.google.com/file/d/1osXJygsJ9n9xCsWHx2Y8Ng9yghIGG6Fe/view?usp=drive_link", "_blank")
    // window.location.href = "https://drive.google.com/file/d/1osXJygsJ9n9xCsWHx2Y8Ng9yghIGG6Fe/view?usp=drive_link";
}

// mini_circle();
// mouseFollow();
// firstPage();
skills();
section();

