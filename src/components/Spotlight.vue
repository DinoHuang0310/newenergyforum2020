<template>
  <div id="spotlight" class="area">
    <h2 data-en="Spotlight">論壇亮點</h2>
    <div class="wrapper">
      <div class="area-box float-box">
        <ul class="spotlight-list">
          <li data-aos="fade-down" data-aos-delay="500">
            <article>
              <h3>掌握最新<br>綠能產業趨勢</h3>
              <div>
                <span>20</span>位
              </div>
              <p>國內外再生能源產官學界菁英趨勢分析</p>
            </article>
          </li>
          <li data-aos="fade-down" data-aos-delay="500">
            <article>
              <h3>搭建政府<br>與產業對話橋梁</h3>
              <div>
                <span>500</span>人次
              </div>
              <p>產官學研領袖、企業CEO與會交流</p>
            </article>
          </li>
          <li data-aos="fade-down" data-aos-delay="500">
            <article>
              <h3><br>多元通路曝光</h3>
              <div>
                <span>1,300</span>萬次
              </div>
              <p>今周刊全方位通路與友好媒體整合</p>
            </article>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
#spotlight {
  background: #E8F6F5;
}
.spotlight-list {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 4em 0;
  z-index: 1;
}
.spotlight-list li {
  position: relative;
  width: 27%;
  padding-bottom: 27%;
  margin-right: 5%;
  border-radius: 50%;
  background: white;
}
.spotlight-list li:after {
  content: '';
  position: absolute;
  width: 122%;
  height: 122%;
  top: -11%;
  left: -11%;
  background-image: url('../assets/images/circle.svg');
  background-size: cover;
}
.spotlight-list article {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 97%;
  height: 97%;
  top: 1.5%;
  left: 1.5%;
  border-radius: 50%;
  text-align: center;
  overflow: hidden;
}
.spotlight-list article >* {
  color: #3FB2AA;
  margin: 0;
  padding: 0 10%;
  flex: auto;
}
.spotlight-list article h3 {
  font-size: 1.2em;
  line-height: 1.2;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  letter-spacing: 0.1em;
}
.spotlight-list article > div {
  display: flex;
  padding-top: 1em;
  font-weight: 500;
  align-items: flex-end;
  justify-content: center;
  flex: 1; 
}
.spotlight-list article > div span {
  font-family: 'Exo', sans-serif;
  font-size: 3.8vw;
  line-height: 0.8;
}
.spotlight-list article p {
  color: white;
  height: 25%;
  font-weight: 500;
  background: linear-gradient(to bottom, #3FB2AA, #2285BC);
  padding-top: 0.5em;
}

@media screen and (max-width: 1280px) {
  .spotlight-list article > div span {
    font-size: 4.5vw;
  }
}

@media screen and (max-width: 768px) {
  .spotlight-list article > div span {
    font-size: 6vw;
  }
  .spotlight-list article p {
    height: 34%;
  }
  .spotlight-list li {
    width: 30%;
    padding-bottom: 30%;
  }
}

@media screen and (min-width: 768px) {
  .spotlight-list li:last-child {
    margin-right: 0;
  }
}

@media screen and (max-width: 767px) {
  .spotlight-list {
    flex-wrap: wrap;
  }
  .spotlight-list li {
    width: 35%;
    padding-bottom: 35%;
    margin-left: 5%;
  }
}

@media screen and (max-width: 640px) {
  .spotlight-list {
    display: block;
    padding: 3em 0 0;
  }
  .spotlight-list li {
    width: 50%;
    padding-bottom: 50%;
    margin: 0 auto 4em auto;
  }
  .spotlight-list li:last-child {
    margin-bottom: 0;
  }
  .spotlight-list article > div span {
    font-size: 10vw;
  }
}

@media screen and (max-width: 480px) {
  .spotlight-list li {
    width: 70%;
    padding-bottom: 70%;
  }
  .spotlight-list article > div span {
    font-size: 14vw;
  }
}

</style>
