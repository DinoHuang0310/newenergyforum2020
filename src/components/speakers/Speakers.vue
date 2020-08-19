<template>
  <div id="speakers" class="area">
    <h2 data-en="Speakers">講者陣容</h2>
    <div class="wrapper">
      <div class="area-box float-box">
        <div class="content">
          <figure class="main-speaker-img" data-aos="fade-right" data-aos-delay="500">
            <img src="../../assets/images/main-speaker.png" alt="Friedrich Koch" />
            <figcaption>
              <div>WP&More 創辦人</div>
              <h5>Friedrich Koch</h5>
            </figcaption>
          </figure>
          <div class="main-speaker shadow-box">
            <article>
              <h4>重要經歷</h4>
              <ul>
                <li>
                  <p>2016年成立離岸發電顧問公司 (WP&More WindPower & More Consulting GmbH)，為多國能源巨頭提供再生能源專業諮詢，如：德國電力產業兩大龍頭萊茵集團(RWE)意昂集團(E.ON)、比利時再生能源公司Elicio、荷蘭離岸風電公司Van Oord等。</p>
                </li>
                <li>
                  <p>2009至2016年於德國第二大電力供應商RWE擔任歐洲大陸專案(Projects Continental Europe）負責人，主要負責離岸風電業務。</p>
                </li>
              </ul>
              <br>
              <h4>研究領域</h4>
              <ul>
                <li>
                  <p>Koch致力於電力系統與再生能源改革，曾協助多家政府與研究機關如「德國聯邦聯邦海洋與水文局」、「德國離岸風電基金會」等共同進行研究，為德國政府與產業連結最重要的橋樑與推手之一。</p>
                </li>
              </ul>
            </article>
          </div>
        </div>
        <ul class="other-speakers">
          <SpeakersDetails
            v-for="(list, index) in speakers"
            :key="index"
            :details="list"
            :myindex="index"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SpeakersDetails from './SpeakersDetails'

export default {
  components: {
    SpeakersDetails
  },
  props: {
    speakers: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
#speakers .content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#speakers .content figure {
  width: 30%;
  color: #505050;
  text-align: center;
}
#speakers figure img {
  border-radius: 50%;
}
.speaker-position {
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}
#speakers h5 {
  font-size: 1.4em;
  margin: 0;
}
.main-speaker {
  width: 65%;
}
.main-speaker article {
  position: relative;
  padding: 1em;
  background: white;
  z-index: 1;
}
.main-speaker article h4 {
  display: inline-block;
  color: white;
  font-size: 1.2em;
  font-weight: 500;
  margin: 0;
  padding: 0.2em 0.8em;
  border-radius: 2em;
  background: #3FB2AA;
}
.main-speaker article ul {
  padding-left: 1.5em;
}
.main-speaker article ul li {
  list-style-type: disc;
  color: #3FB2AA;
}
.main-speaker article ul li p {
  color: #505050;
}
.other-speakers {
  display: flex;
  flex-wrap: wrap;
  margin-top: 2em;
}
.other-speakers > li {
  width: 22%;
  margin: 2% 1.5%;
  text-align: center;
}
.other-speakers img {
  width: 85%;
  border: solid 5px #3FB2AA;
}
.other-speakers li button {
  color: white;
  font-size: inherit;
  font-weight: 500;
  letter-spacing: 0.1em;
  border: none;
  border-radius: 2em;
  background: #3FB2AA;
  margin-top: 0.5em;
  padding: 0.3em 1.5em;
  opacity: 1;
  transition: .5s;
}
.other-speakers li button.empty {
  background: #999;
}
.vm--top-right-slot button.closebox {
  background: none;
  color: white;
  font-size: 50px;
  padding: 0;
  margin: 0.4em;
  width: 50px;
  height: 50px;
  line-height: 50px;
}

@media (hover: hover) {
  .other-speakers li button:hover {
    opacity: .7;
  }
  .other-speakers li button.empty:hover {
    opacity: 1;
  }
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .other-speakers li button:hover {
    opacity: .7;
  }
  .other-speakers li button.empty:hover {
    opacity: 1;
  }
}

@media screen and (max-width: 1024px) {
  #speakers .content {
    padding: 2em;
  }
}

@media screen and (max-width: 768px) {
  .other-speakers > li {
    width: 30%;
    margin: 2% 1.66667%;
  }
}

@media screen and (max-width: 767px) {
  #speakers .content {
    display: block;
  }
  #speakers .content figure {
    width: 100%;
  }
  .main-speaker-img {
    margin-bottom: 1em;
  }
  .main-speaker-img img {
    width: 50%
  }
  .main-speaker {
    width: 100%;
  }
}

@media screen and (max-width: 640px) {
  #speakers .content {
    padding: 1.5em 0;
  }
}

@media screen and (max-width: 480px) {
  .main-speaker article {
    padding: 0 2.5%;
  }
  .main-speaker-img img {
    width: 60%;
  }
  .other-speakers > li {
    width: 45%;
    margin: 5% 2.5%;
  }
  .other-speakers {
    margin-top: 0;
  }
  .other-speakers img {
    width: 100%;
    border-width: 3px;
  }
}

</style>
