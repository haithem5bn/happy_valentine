const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

noBtn.addEventListener("mouseover", function () {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 200 - 100;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", function () {
  document.body.innerHTML = `
    <div style="
      height:10vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      background:;
      color:rouge;
    ">
      <h1> waaaaayyyyyyyyyyyyyyyyyyyy </h1>
      <video width="50%" controls autoplay>
        <source src="video.mp4/Video Project.mp4" type="video/mp4">
      </video>
    </div>
  `;
});