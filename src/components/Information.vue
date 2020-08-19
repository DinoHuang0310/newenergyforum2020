<template>
  <div id="information" class="area">
    <h2 data-en="Information">活動資訊</h2>
    <div class="information-box">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.9834902754856!2d121.56668081594542!3d25.034634344418016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb05c516adf%3A0xbba8d3df474edf28!2zMTEw5Y-w5YyX5biC5L-h576p5Y2A5p2-5LuB6LevMTIz6Jmf!5e0!3m2!1szh-TW!2stw!4v1595312729226!5m2!1szh-TW!2stw"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      />
      <div class="information-content">
        <h3>第四屆2020新能源國際論壇</h3>
        <ul>
          <li class="date">2020年9月24日 (四)</li>
          <li class="time">09:30~16:30</li>
          <li class="address">臺北市信義區松仁路123號2F<br>(華南銀行國際會議中心2樓)</li>
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
.information-box {
    position: relative;
    border: solid 0.3em #3FB2AA;
    padding-bottom: 28%;
}
.information-box iframe {
  position: absolute;
  border: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.information-content {
  position: absolute;
  padding: 1em 1.5em;
  top: 2em;
  left: 2em;
  color: white;
  background: #3FB2AA;
}
.information-content h3 {
  font-size: 1.4em;
  font-weight: 500;
  margin: 0 0 0.5em;
}
.information-content li {
  display: flex;
  align-items: baseline;
  margin: 0.5em 0;
  letter-spacing: 0.2em;
}
.information-content li::before {
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
  width: 1.6em;
  text-align: center;
  margin-right: 0.2em;
}
.information-content li.date::before {
  content: "\f274";
}
.information-content li.time::before {
  content: "\f017";
}
.information-content li.address::before {
  content: "\f3c5";
}

@media screen and (max-width: 1024px) {
  .information-box {
    padding-bottom: 40%;
  }
}

@media screen and (max-width: 768px) {
  .information-content {
    padding: 0.8em 1.2em;
    top: 0.6em;
    left: 0.6em;
  }
  .information-content li {
    letter-spacing: 0.1em;
  }
}

@media screen and (max-width: 767px) {
  .information-box {
    padding-bottom: 50%;
  }
  .information-content {
    top: 0;
    left: 0;
    padding: 0.5em 1em;
  }
}

@media screen and (max-width: 640px) {
  .information-box {
    display: flex;
    flex-direction: column;
    padding-bottom: 0;
  }
  .information-box iframe {
    position: relative;
    height: 300px;
  }
  .information-content {
    position: relative;
  }
  .information-content li:last-child {
    margin-bottom: 0;
  }
}

</style>
