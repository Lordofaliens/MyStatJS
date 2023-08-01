window.addEventListener("load", () => {
  const videos = [
    { title: "Spring", src: "./videos/video-1.mp4", quote: "Genius is one percent inspiration and ninety-nine percent perspiration." },
    { title: "Summer", src: "./videos/video-2.mp4", quote: "From small beginnings come great things."  },
    { title: "Autumn", src: "./videos/video-1.mp4", quote: "Learning is a treasure that will follow its owner everywhere."  },
  ];

  let currentVideoIndex = 0;

  const videoElement = document.querySelector("#video");
  const h1 = document.querySelector("h1");
  const h2 = document.querySelector("h2");

  const prev = document.querySelector("#prev");
  const next = document.querySelector("#next");

  setVideo(currentVideoIndex);

  document.body.addEventListener("click", () => {
    videoElement.play();
  });

  function setVideo(index, delay = 0) {
    const action = () => {
      const { src, title, quote } = videos[index];
      videoElement.src = src;
      h1.textContent = title;
      h2.textContent = quote;
      videoElement.play();
    };
    delay ? setTimeout(() => action(), delay) : action();
  }

  prev.onclick = () => {
    currentVideoIndex--;

    if (videos[currentVideoIndex]) {
      setVideo(currentVideoIndex, 1000);
    } else {
      currentVideoIndex = videos.length - 1;
      setVideo(currentVideoIndex, 1000);
    }
  };

  next.onclick = () => {
    currentVideoIndex++;

    if (videos[currentVideoIndex]) {
      setVideo(currentVideoIndex, 1000);
    } else {
      currentVideoIndex = 0;
      setVideo(currentVideoIndex, 1000);
    }
  };
});