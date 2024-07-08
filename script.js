gsap.registerPlugin(ScrollTrigger, TextPlugin)


let t1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".container",
        start: "90% 90%",
        end: "90% 10%",
        pin: true,
        scrub: true,
        markers: true,
    }
})

t1.to(".pic1_1,.pic1_2", {
    y: "120%",
}, "a")


// PIC 2 ----------------
t1.to(".mid_container", {
    backgroundColor: "#4d27cd",
}, "b")
t1.to(".left_container", {
    backgroundColor: "#4d27cd",
}, "b")
t1.to(".right_container", {
    backgroundColor: "#1a035b",
}, "b")

t1.from(".pic2_1", {
    bottom: "-100%",
}, "b")

t1.from(".pic2_2", {
    top: "-100%",
}, "b")

t1.to(".pic2_1", {
    bottom: "-100%",
}, "c")

t1.to(".pic2_2", {
    top: "-100%",
}, "c")


// PIC 3 ----------------
t1.to(".mid_container", {
    backgroundColor: "#0d1039",
}, "d")
t1.to(".left_container", {
    backgroundColor: "#0d1039",
}, "d")
t1.to(".right_container", {
    backgroundColor: "#131645",
}, "d")
t1.from(".pic3_1", {
    bottom: "-100%",
}, "d")

t1.from(".pic3_2", {
    top: "-100%",
}, "d")

t1.to(".pic3_1", {
    bottom: "-100%",
}, "e")

t1.to(".pic3_2", {
    top: "-100%",
}, "e")

// PIC 4 ----------------
t1.to(".mid_container", {
    backgroundColor: "#16263b",
}, "f")
t1.to(".left_container", {
    backgroundColor: "#16263b",
}, "f")
t1.to(".right_container", {
    backgroundColor: "#0c121a",
}, "f")

t1.from(".pic4_1", {
    top: "-100%",
    left: "-100%"
}, "f")

t1.from(".pic4_2", {
    top: "-100%",
}, "f")

t1.from(".pic4_3", {
    top: "-100%",
}, "f")

t1.from(".pic4_4", {
    bottom: "-100%",
}, "f")

t1.from(".pic4_5", {
    bottom: "-100%",
    right: '-100%'
}, "f")


t1.to(".pic4_1", {
    top: "-100%",
    left: "-100%"
}, "g")

t1.to(".pic4_2", {
    top: "-100%",
}, "g")

t1.to(".pic4_3", {
    top: "-100%",
}, "g")

t1.to(".pic4_4", {
    bottom: "-100%",
}, "g")

t1.to(".pic4_5", {
    bottom: "-100%",
    right: '-100%'
}, "g")



// PIC 5 ----------------
t1.to(".mid_container", {
    backgroundColor: "#124ca1",
}, "h")
t1.to(".left_container", {
    backgroundColor: "#124ca1",
}, "h")
t1.to(".right_container", {
    backgroundColor: "#2cc6d7",
}, "h")
t1.from(".pic5_1", {
    top: "-100%",
    left: "-100%"
}, "h")

t1.from(".pic5_2", {
    top: "-100%",
}, "h")

t1.from(".pic5_3", {
    top: "-100%",
}, "h")

t1.from(".pic5_4", {
    bottom: "-100%",
}, "h")

t1.from(".pic5_5", {
    bottom: "-100%",
    right: '-100%'
}, "h")

t1.to(".pic5_1", {
    top: "-100%",
}, "i")

t1.to(".pic5_2", {
    top: "-100%"
}, "i")

t1.to(".pic5_3", {
    top: "-100%",
}, "i")

t1.to(".pic5_4", {
    bottom: "-100%",
}, "i")

t1.to(".pic5_5", {
    bottom: "-100%",
}, "i")



// PIC 6 ----------------
t1.to(".mid_container", {
    backgroundColor: "#012a8b",
}, "j")
t1.to(".left_container", {
    backgroundColor: "#012a8b",
}, "j")
t1.to(".right_container", {
    backgroundColor: "white",
}, "j")

t1.from(".pic6_1", {
    top: "100%",
    y: "50%"
}, "j")

t1.to(".pic6_1", {
    top: "100%",
    y: "50%"
}, "k")





// PIC 7 ----------------
t1.to(".mid_container", {
    backgroundColor: "#007d49",
}, "l")
t1.to(".left_container", {
    backgroundColor: "#007d49",
}, "l")
t1.to(".right_container", {
    backgroundColor: "#00b769",
}, "l")
t1.from(".pic7_1", {
    bottom: "-100%",
}, "l")

t1.from(".pic7_2", {
    bottom: "-100%",
}, "l")


let word = document.querySelector("#abc");
word.innerHTML = word.innerText.split(" ").map(e => {
    return `<span class="a"><b>${e}</b></span>`
}).join(" ");

gsap.from("#abc span", {
    opacity: 0,
    duration: 1,
    y: 100,
    ease: "back.out(1.7)",
    stagger: 0.05,
    backgroundColor: 'red'
})
