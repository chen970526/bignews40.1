(function(w) {
  var baseURL = "http://localhost:8080/api/v1";
  var BigNew = {
    baseURL: baseURL, //基地址
    index_search: baseURL + "/index/search", //1、文章搜索
    index_category: baseURL + "/index/category", //2、文章类型
    index_hotpic: baseURL + "/index/hotpic", //3、热点图
    index_rank: baseURL + "/index/rank", //4、文章热门排行
    index_latest: baseURL + "/index/latest", //5、最新资讯
    index_latest_comment: baseURL + "/index/latest_comment", //6、最新评论
    index_attention: baseURL + "/index/attention", //7、焦点关注
    index_article: baseURL + "/index/article", //8、文章详细内容
    index_post_comment: baseURL + "/index/post_comment", //9、发表评论
    index_get_comment: baseURL + "/index/get_comment" //10、评论列表
  };
  w.BigNew = BigNew;
})(window);
