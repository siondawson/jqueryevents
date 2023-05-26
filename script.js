$(document).ready(function() {
    $("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
   $("p").on("click", function () {
    $("p").addClass('red-p')
   })
   $("h2").hover(function() {
    $(this).addClass("blue-h2");
   }, function() {
    $(this).removeClass("blue-h2");
   });
   $("h2").hover(function() {
    $(this).addClass("font-inc");
   }, function() {
    $(this).removeClass("font-inc");
   });
   $(".bottom_button").hover(function() {
    $("body").css("background-color" , "black");
   }, function() {
    $("body").css("background-color" , "grey");
   });
}); 