
$(document).ready(function(){
    $(".status").click(function(){
        $(this).siblings(".aside__examp").toggleClass("aside__examp--open")
        $(this).siblings(".skills__skills").toggleClass("skills__skills--open")
        $(this).siblings(".hobbi__hobbis").toggleClass("hobbi__hobbis--open")
    })
})


$(document).ready(function () {
    $(".basic__burger").click(function(){
        $(".basic__line:nth-child(1)").toggleClass("basic__line--first")
        $(".basic__line:nth-child(2)").toggleClass("basic__line--middle")
        $(".basic__line:nth-child(3)").toggleClass("basic__line--last")
        $(".aside").toggleClass("aside--open")
    })
})

$(document).ready(function (){
    $(".status__title").click(function(){
        $(this).siblings(".status__arrow").toggleClass("status__arrow--open")
    })
       
})
