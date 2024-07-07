$(function () {
  $(".recent-post-item").velocity(
    {
      left: 0,
      right: 0,
    },
    600,
    "easeInQuad",
    function () {
      $("#recent-posts.recent-posts").css("overflow", "visible");
    }
  );
});
