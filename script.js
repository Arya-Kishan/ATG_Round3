gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin)


let t1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".container",
        start: "500% 500%",
        end: "500% 10%",
        pin: true,
        scrub: 2,
        markers: true,
    }
})

t1.to(".pic1_1,.pic1_2", {
    y: "120%",
}, "a")

t1.to(".case", {
    scale: 0.2,
}, "a")

t1.set(".case", {
    text: "coming soon"
}, "b")


// PIC 2 ----------------
t1.to(".scroll1", {
    y: "-28px"
}, "b")
t1.to(".scroll2", {
    y: "-90px"
}, "b")
t1.to(".scroll3", {
    y: "-24px"
}, "b")
t1.to(".abc_inner", {
    y: "-75px"
}, "b")

t1.to(".left_container_text_2_1_inner,.left_container_text_2_2_inner,.left_container_text_2_3_inner", {
    y: "-23px"
}, "b")

t1.to(".case", {
    scale: 1
}, "b")

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

t1.to(".logo_inner", {
    opacity: 0,
}, "b")

t1.to(".pic2_1", {
    bottom: "-100%",
}, "c")

t1.to(".pic2_2", {
    top: "-100%",
}, "c")

t1.to(".case", {
    scale: 0.2
}, "c")


// PIC 3 ----------------
t1.to(".scroll1", {
    y: "-56px"
}, "d")
t1.to(".scroll2", {
    y: "-180px"
}, "d")
t1.to(".scroll3", {
    y: "-48px"
}, "d")
t1.to(".abc_inner", {
    y: "-150px"
}, "d")

t1.to(".left_container_text_2_1_inner,.left_container_text_2_2_inner,.left_container_text_2_3_inner", {
    y: "-46px"
}, "d")

t1.to(".case", {
    scale: 1
}, "d")

t1.set(".case", {
    text: "view case study"
}, "d")

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

t1.to(".case", {
    scale: 0.2
}, "e")

// PIC 4 -------------------------------------
t1.to(".scroll1", {
    y: "-84px"
}, "f")
t1.to(".scroll2", {
    y: "-270px"
}, "f")
t1.to(".scroll3", {
    y: "-72px"
}, "f")
t1.to(".abc_inner", {
    y: "-225px"
}, "f")
t1.to(".left_container_text_2_1_inner,.left_container_text_2_2_inner,.left_container_text_2_3_inner", {
    y: "-69px"
}, "f")

t1.to(".case", {
    scale: 1
}, "f")

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

t1.to(".case", {
    scale: 0.2
}, "g")



// PIC 5 ----------------------------
t1.to(".scroll1", {
    y: "-112px"
}, "h")
t1.to(".scroll2", {
    y: "-360px"
}, "h")
t1.to(".scroll3", {
    y: "-96px"
}, "h")
t1.to(".abc_inner", {
    y: "-300px"
}, "h")

t1.to(".left_container_text_2_1_inner,.left_container_text_2_2_inner,.left_container_text_2_3_inner", {
    y: "-92px"
}, "h")

t1.to(".case", {
    scale: 1
}, "h")

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

t1.to(".case", {
    scale: 0.2
}, "i")



// PIC 6 -------------------------------
t1.to(".scroll1", {
    y: "-140px"
}, "j")
t1.to(".scroll2", {
    y: "-450px"
}, "j")
t1.to(".scroll3", {
    y: "-120px"
}, "j")
t1.to(".abc_inner", {
    y: "-375px"
}, "j")

t1.to(".left_container_text_2_1_inner,.left_container_text_2_2_inner,.left_container_text_2_3_inner", {
    y: "-115px"
}, "j")

t1.to(".case", {
    scale: 1
}, "j")

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

t1.to(".case", {
    scale: 0.2
}, "k")

t1.to(".logo_inner", {
    y: "-90px",
}, "k")





// PIC 7 ------------------------------
t1.to(".scroll1", {
    y: "-168px"
}, "l")
t1.to(".scroll2", {
    y: "-540px"
}, "l")
t1.to(".scroll3", {
    y: "-144px"
}, "l")
t1.to(".abc_inner", {
    y: "-450px"
}, "l")
t1.to(".left_container_text_2_1_inner,.left_container_text_2_2_inner,.left_container_text_2_3_inner", {
    y: "-138px"
}, "l")

t1.to(".case", {
    scale: 1
}, "a")

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

t1.to(".case", {
    scale: 1
}, "l")

t1.set(".case", {
    text: "coming soon"
}, "l")

t1.to(".logo", {
    height: "100px",
}, "l")

t1.to(".logo_inner", {
    opacity: 1,
}, "l")
