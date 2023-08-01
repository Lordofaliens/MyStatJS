window.addEventListener("load", () => {
  $("body").click(() => {
    $("*").fadeOut(1000).fadeIn(1000);
  })
});