let hash = window.location.hash;
console.log(hash);
$(".highlight").removeClass("highlight");
$(hash).addClass("highlight");

$(window).on("hashchange", function() {
    hash = window.location.hash;
    console.log(hash);
    $(".highlight").removeClass("highlight");
    $(hash).addClass("highlight");
});