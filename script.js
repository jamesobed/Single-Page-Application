const footerDiv = document.querySelector("#footer");
footerDiv.setAttribute("class", "footer");
footerDiv.innerText = ` ©  copyright ${new Date().getFullYear()} Obed James. All rights reserved`;

$(function () {
  var image = $("#resturant").find("img").attr("src");
  //console.log(image);
  $("#resturant ul li a").mouseover(function () {
    var currentImage = $(this).attr("data-image");
    //console.log(currentImage);
    $(this).parent().parent().parent().find("img").attr("src", currentImage);
    $("#resturant img").css("opacity", "1");
  });
  $("resturant ul li a").mouseout(function () {
    $("resturant ul li a").css("opacity", "0.2");
    s;
  });
});
