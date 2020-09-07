<template>
  <footer class="btnet-footer">
    <div class="footer-box">
      <p>
        <small>今周文化事業(股)公司/今周行銷(股)公司/今周出版(股)公司 版權所有 本網站圖文非經本社同意不得刊載 Copyright © {{ year }} Business Today All rights reserved</small>
        <br>
        <span>經濟部能源局廣告</span>
      </p>
    </div>
    <transition>
      <div class="fixed-side" v-show="showButton">
        <button v-if="goTop" @click="backTop(500)">
          <i class="fa fa-chevron-circle-up" />
        </button>
        <a
          href="#"
          v-scroll-to="{el: '#register'}"
        >
          立即報名<i class="fas fa-edit" />
        </a>
      </div>
    </transition>
  </footer>
</template>

<script>
export default {
  props: {
    goTop: {
      type: Boolean,
      default: true
    },
  },
  data: function() {
    return {
      year: new Date().getFullYear(),
      showButton: false,
    }
  },
  created() {
    if(this.goTop) window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    backTop (duration) {
      if (document.scrollingElement.scrollTop === 0) return;
      const totalScrollDistance = document.scrollingElement.scrollTop;
      let scrollY = totalScrollDistance, oldTimestamp = null;

      function step (newTimestamp) {
        if (oldTimestamp !== null) {
          scrollY -= totalScrollDistance * (newTimestamp - oldTimestamp) / duration;
          if (scrollY <= 0) return document.scrollingElement.scrollTop = 0;
          document.scrollingElement.scrollTop = scrollY;
        }
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
    },
    handleScroll () {
      if (window.scrollY > (window.innerHeight / 2)) {
        this.showButton = true;
      } else {
        this.showButton = false;
      }
    }
  },
  destroyed () {
    if(this.goTop) window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style>
.btnet-footer {
  color: white;
  background: #4b4b4b;
  text-align: center;
}
.footer-box {
  width: 90%;
  margin: 0 auto;
}
.footer-box > p {
  margin: 0;
  padding: 2em 0;
  letter-spacing: 0;
}
.footer-box > p span {
  display: inline-block;
  border: solid 1px white;
  letter-spacing: 4px;
  text-indent: 4px;
  margin-top: 2em;
  padding: 0.4em 0.8em;
}
.btnet-footer small {
  font-size: 0.9em;
}
.fixed-side {
  position: fixed;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  z-index: 98;
}
.btnet-footer button {
  display: block;
  padding: 0;
  margin: 0 auto;
  border: none;
  font-size: 50px;
  color: #3FB2AA;
  background: white;
  border-radius: 50%;
  border: solid 1px white;
}
.btnet-footer button i {
  display: block;
  opacity: 1;
  transition: .5s;
}
.fixed-side a {
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  padding: 0.8em 0.8em 0.8em 0.4em;
  margin: 0.5em auto;
  border: solid 1px white;
  border-right: none;
  background: #3FB2AA;
  opacity: 1;
  border-top-left-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
  letter-spacing: 0.2em;
  writing-mode: vertical-lr;
  -webkit-writing-mode: vertical-lr;
  transition: .5s;
}
.v-leave {
  opacity: 1;
}
.v-leave-active {
  transition: .5s
}
.v-leave-to {
  opacity: 0;
}
.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: .5s
}
.v-enter-to {
  opacity: 1;
}

@media (hover: hover) {
  .btnet-footer button i:hover,
  .fixed-side a:hover {
    opacity: .7;
  }
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .btnet-footer button i:hover,
  .fixed-side a:hover {
    opacity: .7;
  }
}

@media screen and (max-width: 768px) {
  .btnet-footer button {
    font-size: 40px;
  }
  .fixed-side a {
    font-size: 17px;
  }
}

@media screen and (max-width: 480px) {
  .btnet-footer button {
    font-size: 40px;
    right: 1rem;
    bottom: 0.5rem;
  }
  .fixed-side a {
    font-size: 15px;
  }
}

</style>
