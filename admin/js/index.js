$(function() {
  $.ajax({
    type: "get",
    //   url: "http://localhost:8080/api/v1/admin/user/info",
    url: window.BigNew.user_info,
    //   headers: { Authorization: window.localStorage.getItem("token") },
    success: function(res) {
      $(".user_info>img").attr("src", res.data.userPic);
      $(".user_info>span").html("欢迎&nbsp;&nbsp;" + res.data.nickname);
      $(".user_center_link>img").attr("src", res.data.userPic);
      // console.log(res);
    }
  });
  $(".logout").on("click", function() {
    window.localStorage.removeItem("token");
    window.location.href = "./login.html";
  });
  $("div.level01").on("click", function() {
    $(this)
      .addClass("active")
      .siblings("div")
      .removeClass("active");
    if ($(this).index() === 1) {
      $("ul.level02").toggle();
      $("ul.level02 li:eq(0)>a")[0].click();
      $(this)
        .find("b")
        .toggleClass("rotate0");
    }
  });
  $("ul.level02 li").on("click", function() {
    $(this)
      .addClass("active")
      .siblings("li")
      .removeClass("active");
  });
});
