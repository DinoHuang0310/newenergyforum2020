<template>
  <header>
    <div class="header-top">
      <div class="businesstoday">
        <a href="https://www.businesstoday.com.tw/" target="_blank">
          <img src="../../assets/images/businesstoday.svg" alt="今周刊" />
        </a>
        <a>
          <img src="../../assets/images/esg.svg" alt="esg" />
        </a>
      </div>
      
      <ul>
        <li class="forum">
          <a href="#" v-scroll-to="{el: '#about'}" @click.stop>論壇資訊</a>
        </li>
        <li>
          <a href="https://events.businesstoday.com.tw/2019/newenergyforum/index.html" target="_blank">產業地圖</a>
        </li>
        <li class="facebook-share">
          <a
            href="http://www.facebook.com/share.php?u=https://events.businesstoday.com.tw/2020/newenergyforum"
            target="_blank"
            @click="setGA('facebook')"
          >
            <img src="../../assets/images/ico-facebook.svg" alt="facebook-share" />
          </a>
        </li>
        <li class="line-share">
          <a
            href="https://social-plugins.line.me/lineit/share?url=https://events.businesstoday.com.tw/2020/newenergyforum"
            target="_blank"
            @click="setGA('line')"
          >
            <img src="../../assets/images/ico-line.svg" alt="line-share" />
          </a>
        </li>
      </ul>
    </div>
    <div class="header-bottom">
      <BtnetNavbar :navList="navList" />
    </div>
  </header>
</template>

<script>
import BtnetNavbar from './BtnetNavbar.vue'
import IconFB from '../../assets/images/ico-facebook.svg'
import IconLine from '../../assets/images/ico-line.svg'

export default {
  components: {
    BtnetNavbar,
  },
  data: function() {
    return {
      navList: [
        {
          name: "論壇簡介",
          url: "#about",
          isAnchor: true,
        },
        {
          name: "講者陣容",
          url: "#speakers",
          isAnchor: true,
        },
        {
          name: "活動資訊",
          url: "#information",
          isAnchor: true,
        },
        {
          name: "論壇議程",
          url: "#agenda",
          isAnchor: true,
        },
        {
          name: "前瞻觀點",
          url: "#report",
          isAnchor: true,
        },
        {
          name: "歷屆回顧",
          navList: [
            {
              name: "2019",
              url: "https://events.businesstoday.com.tw/2019/newenergyforum/"
            },
            {
              name: "2018",
              url: "https://event.businesstoday.com.tw/2018/newenergyforum/"
            },
            {
              name: "2017",
              url: "https://events.businesstoday.com.tw/2017/newenergyforum/"
            }
          ]
        },
        {
          name: `<img src="${IconFB}" alt="facebook-share" />`,
          class: "facebook-share",
          url: "http://www.facebook.com/share.php?u=https://events.businesstoday.com.tw/2020/newenergyforum",
          isAnchor: false,
        },
        {
          name: `<img src="${IconLine}" alt="line-share" />`,
          class: "line-share",
          url: "https://social-plugins.line.me/lineit/share?url=https://events.businesstoday.com.tw/2020/newenergyforum",
          isAnchor: false,
        }
      ]
    }
  },
  methods: {
    setGA(label) {
      this.$ga.event('share', 'click', label);
    }
  }
}
</script>

<style>
header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, .85);
    z-index: 99;
}
header img {
  display: block;
}
.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.businesstoday {
  display: flex;
  margin-left: 2%;
}
.businesstoday a {
  margin: 0 1em 0 0;
}
.businesstoday img {
  width: 90px;
  padding: 5px 0;
}
.header-top ul {
  display: flex;
  align-items: center;
}
.header-top ul li {
  position: relative;
}
.header-top ul li a {
  display: block;
  padding: 10px;
}
.forum::after {
  content: '';
  position: absolute;
  height: 40%;
  background: #505050;
  width: 1px;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
}
.facebook-share {
  background: #4267B2;
  width: 60px;
  margin-left: 10px;
}
.line-share {
  background: #00C200;
  width: 60px;
}
.header-top ul li.facebook-share a,
.header-top ul li.line-share a {
  padding: 0;
}
.header-bottom {
  background: #3FB2AA;
  box-shadow: 0 3px 3px rgba(0, 0, 0, .3);
}

@media screen and (max-width: 1024px) {
  .businesstoday img {
    width: 80px;
  }
  .line-share,
  .facebook-share {
    width: 45px;
  }
}

@media screen and (max-width: 640px) {
  .header-bottom {
    position: absolute;
    top: 50%;
    right: 8px;
    margin-top: -20px;
    background: none;
    box-shadow: none;
  }
  .header-top ul {
    padding-right: 58px;
  }
  .header-top .facebook-share,
  .header-top .line-share {
    display: none;
  }
  .line-share,
  .facebook-share {
    width: 100%;
    margin: 0;
  }
}

@media screen and (max-width: 480px) {
  .businesstoday img {
    padding: 8px 0;
  }
  .businesstoday a {
    margin-right: 0;
  }
  .businesstoday a:last-child {
    display: none;
  }
}

</style>
