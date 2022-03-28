import "./styles.scss";

document.getElementById("app").innerHTML = `
<div class="card">
  <div class="back"></div>
  <div class="front">
    <div class="cover-shape-large">
      <div class="shape-diamond"></div>
      <div class="shape-block"></div>
    </div>
    <div class="cover-shape-small">
      <div class="shape-diamond"></div>
      <div class="shape-block">
        <div class="cake">
          <div class="layer layer-bottom"></div>
          <div class="layer layer-middle"></div>
          <div class="layer layer-top"></div>
          <div class="icing"></div>
          <div class="drip drip1"></div>
          <div class="drip drip2"></div>
          <div class="drip drip3"></div>
          <div class="candle">
            <div class="flame"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="text-container">
    <p id="head">Happy Birthday Phương!</p>
    <p>Lại thêm 1 tuổi mới rồi nhỉ. Chúc Em luôn hạnh phúc và tự tin vào bản thân, chúc cho những điều may mắn luôn vay quanh Em.</p>
    <p>Yêu Em ❤️</p>
<!--     <p>Your first digital birthday card! <span class="strikethrough">Handcrafted</span> Handcoded from scratch just for you.</p>
    <p>Hope your day goes great!</p> -->
  </div>
</div>
`;
