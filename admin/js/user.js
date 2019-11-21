$(function() {
  $.get({
    url: BigNew.user_detail,
    success: function(res) {
      if (res.code === 200) {
        //   console.log(res);
        for (var key in res.data) {
          $("input." + key).val(res.data[key]);
        }
        $(".user_pic").attr("src", res.data.userPic);
      }
    }
  });
  $("#exampleInputFile").on("change", function() {
    //   console.log(this.files[0]);

    var imgIcon = this.files[0];
    var url = URL.createObjectURL(imgIcon);
    $(".user_pic").attr("src", url);
  });
  $("button.btn-edit").on("click", function(e) {
    e.preventDefault();
    var form = $("#form")[0];
    var data = new FormData(form);
    $.post({
      url: BigNew.user_edit,
      data: data,
      contentType: false,
      processData: false,
      success: function(res) {
        //   console.log(res);
        if (res.code === 200) {
          //   window.location.reload();
          //   parent.window.location.reload();

          $.get({
            url: window.BigNew.user_info,
            success: function(res) {
              // console.log(res);

              parent.$(".user_info>img").attr("src", res.data.userPic);
              parent
                .$(".user_info>span")
                .html("欢迎&nbsp;&nbsp;" + res.data.nickname);
              parent.$(".user_center_link>img").attr("src", res.data.userPic);
              window.location.reload();
            }
          });
          // $.ajax({
          //   type: "get",
          //   url: window.BigNew.user_info,
          //   success: function(res) {
          //     //获取到返回的用户信息，在页面渲染
          //     // parent在子页面获取到父页面的元素
          //     parent.$(".user_info>img").attr("src", res.data.userPic);
          //     parent
          //       .$(".user_info>span")
          //       .html("欢迎&nbsp;&nbsp;" + res.data.nickname);
          //     parent
          //       .$(".user_center_link>img")
          //       .attr("src", res.data.userPic);

          //     //刷新子页面
          //     window.location.reload();
          //   }
          // });
        }
      }
    });
  });
});
