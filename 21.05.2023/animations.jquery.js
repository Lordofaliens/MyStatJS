window.addEventListener("load", () => {
  //   $("#video").css({ opacity: 0 });
  $("#video, h1").fadeOut(1).fadeIn(1000);

  $("#prev, #next").on("click", () => {
    $("#video").fadeOut(1000).fadeIn(1000);

    $("h1").animate(
      {
        top: "-=50",
      },
      1,
      () => {
        $("h1").animate({ top: "+=50", opacity: "-=1" }, 1000, () => {
          $("h1").animate({ opacity: "+=1" });
        });
      }
    );
    $("h2").animate(
      {
        top: "+=50",
      },
      1,
      () => {
        $("h2").animate({ top: "-=50", opacity: "-=1" }, 1000, () => {
          $("h2").animate({ opacity: "+=1" });
        });
      }
    );
  });
});