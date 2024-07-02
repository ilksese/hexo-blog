$(function () {
  $(".recent-post-item").velocity(
    {
      left: 0,
      right: 0,
    },
    300,
    "easeInQuad",
    function () {
      $("#recent-posts.recent-posts").css("overflow", "visible");
    }
  );
});
