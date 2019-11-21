$(function() {
  getData();
  function getData() {
    $.get({
      url: BigNew.category_list,
      success: function(res) {
        //   console.log(res);
        var htmlStr = template("list", res);
        //   console.log(htmlStr);
        $("tbody").html(htmlStr);
      }
    });
  }
  $("#myModal").on("show.bs.modal", function(e) {
    console.log(e.relatedTarget);
    if (e.relatedTarget === $("#xinzengfenlei")[0]) {
      $("#exampleModalLabel").text("新增文章分类");
      $("#btn-confirm")
        .text("发布")
        .addClass("btn-success")
        .removeClass("btn-primary");
      //当点击新增分类的时候，将模态框中的表单全部重置一次
      console.log($(".modal-body form")[0]);
      // .reset()  用来重置
      $(".modal-body form")[0].reset();
    } else {
      $("#exampleModalLabel").text("编辑文章分类");
      $("#btn-confirm")
        .text("修改")
        .addClass("btn-primary")
        .removeClass("btn-success");
      // console.log(e.relatedTarget);
      var cateId = $(e.relatedTarget).attr("data-id");
      console.log(cateId);
      $.get({
        url: BigNew.category_search,
        data: {
          id: cateId
        },
        success: function(res) {
          console.log(res);

          if (res.code === 200) {
            $("#recipient-name").val(res.data[0].name);
            $("#message-text").val(res.data[0].slug);
            $("#categoryId").val(res.data[0].id);
          }
        }
      });
    }
    $("#btn-confirm").on("click", function() {
      // $(this).hasClass("btn-success");  判断条件
      if ($(this).hasClass("btn-success")) {
        var name = $("#recipient-name").val();
        var slug = $("#message-text").val();
        $.post({
          url: BigNew.category_add,
          data: {
            name: name,
            slug: slug
          },
          success: function(res) {
            if (res.code === 201) {
              // $("#myModal").modal("hide");  隐藏模态框
              $("#myModal").modal("hide");
              getData();
            }
          }
        });
      } else {
        var name = $("#recipient-name").val();
        var slug = $("#message-text").val();
        var id = $("#categoryId").val();

        $.post({
          url: BigNew.category_edit,
          data: {
            id: id,
            name: name,
            slug: slug
          },
          success: function(res) {
            // console.log(res);
            $("#myModal").modal("hide");
            getData();
          }
        });
      }
    });
  });
  $("tbody").on("click", ".btn-delete", function() {
    var ans = confirm("删除？");
    var deleteId = $(this).attr("data-id");
    console.log(deleteId);
    if (ans) {
      $.post({
        url: BigNew.category_delete,
        data: {
          id: deleteId
        },
        success: function(res) {
          // console.log(res);
          getData();
        }
      });
    }
  });
});
