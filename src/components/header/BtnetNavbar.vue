<template>
  <div>
    <nav
      :class="showNav ? 'btnet-navbar active' : 'btnet-navbar'"
      @click="toggleNav"
    >
      <ul @click.stop>
        <BtnetNavList
          v-for="(list, index) in navList"
          :key="index"
          :node="navList[index]"
          :isMobile="isMobile"
          :toggleNav="toggleNav"
        />
      </ul>
    </nav>
    <div id="navctr" v-if="isMobile">
      <i class="fa fa-bars" @click="toggleNav" />
    </div>
  </div>
</template>

<script>
import BtnetNavList from "./BtnetNavList";
export default {
  props: {
    navList: {
      type: Array,
      required: true
    },
  },
  components: {
    BtnetNavList
  },
  data: function() {
    return {
      showNav: false,
      isMobile: null,
      windowWidth: null
    }
  },
  methods: {
    checkScreen() {
      const clientWidth = document.documentElement.clientWidth;
      if (clientWidth !== this.windowWidth) {
        this.isMobile = clientWidth > 640 ? false : true;
        this.showNav = this.isMobile ? false : true;
        this.windowWidth = clientWidth;
      }
    },
    toggleNav() {
      if (this.isMobile) {
        this.showNav = !this.showNav;
        this.fixScrollbar(this.showNav);
      }
    },
    fixScrollbar(action) {
      const el = document.getElementsByTagName("html")[0];
      action ? el.classList.add('fixed') : el.classList.remove('fixed');
    }
  },
  mounted() {
    this.checkScreen();
    window.addEventListener('resize', this.checkScreen);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreen);
  }
}
</script>

<style>
.btnet-navbar > ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.btnet-navbar > ul > li a {
  display: block;
  padding: 0.4em 1em;
}
.btnet-navbar > ul > li {
  position: relative;
}
.btnet-navbar > ul > li li a {
  border-right: 0;
}

@media (hover: hover) {
  .btnet-navbar > ul > li a:hover {
    background: #21948C;
  }
}
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .btnet-navbar > ul > li a:hover {
    background: #21948C;
  }
}

@media screen and (min-width: 641px) {
  .btnet-navbar > ul {
    border-bottom: solid 1px white;
  }
  .btnet-navbar ul ul {
    background: #3FB2AA;
  }
  .btnet-navbar ul li a {
    color: white;
  }
  .btnet-navbar > ul > li a {
    opacity: 1;
    transition: .5s;
  }
  .btnet-navbar > ul > li:last-child a {
    border-right: none;
  }
  .btnet-navbar > ul > li a.haschild:after {
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 4px 0 4px;
    border-color: white transparent transparent transparent;
    margin-left: 0.5em;
  }
  .btnet-navbar ul ul {
    position: absolute;
    visibility: hidden;
    min-width: 100%;
    white-space: nowrap;
    text-align: left;
    opacity: 0;
    transition: .3s;
    bottom: -1px;
    transform: translate(0, 100%);
  }
  .btnet-navbar > ul ul li:first-child a {
    box-shadow: inset 0px 10px 5px -5px rgba(0, 0, 0, .2);
  }
  .btnet-navbar > ul > li ul.active {
    visibility: visible;
    opacity: 1;
  }
  .btnet-navbar > ul > li li a {
    padding: 0.4em 1em;
  }
  .btnet-navbar > ul > li.line-share,
  .btnet-navbar > ul > li.facebook-share {
    display: none;
  }
}

@media screen and (max-width: 640px) {
  .btnet-navbar ul ul {
    background: #eee;
  }
  #navctr i {
    font-size: 40px;
    width: 40px;
    text-align: center;
  }
  nav.btnet-navbar {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    text-align: right;
    margin: 0;
    background: rgba(0, 0, 0, .5);
    overflow: hidden;
    transform: translate(100%, 0);
    z-index: 100;
  }
  nav.btnet-navbar.active,
  .btnet-navbar.active > ul
  {
    transform: translate(0, 0);
  }
  .btnet-navbar > ul {
    display: inline-block;
    background: white;
    padding-top: 20px;
    width: auto;
    min-width: 45%;
    max-width: 80%;
    height: 100%;
    overflow-y: auto;
    transform: translate(100%, 0);
    transition: .5s;
  }
  .btnet-navbar > ul > li a {
    padding: 0.6em 1.5em;
    border-bottom: solid 1px #ddd;
  }
  .btnet-navbar > ul > li a.haschild:after {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 4px 0 4px;
    border-color: #2c3e50 transparent transparent transparent;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-8px, 20px);
  }
  .btnet-navbar > ul > li ul {
    display: none;
  }
  .btnet-navbar > ul > li ul.active {
    display: block;
  }
  .btnet-navbar ul li img {
    width: 45px;
  }
  .btnet-navbar > ul > li.line-share,
  .btnet-navbar > ul > li.facebook-share {
    display: inline-block;
    width: auto;
    margin: 10px 10px 10px 0;
  }
  .btnet-navbar > ul > li.line-share a,
  .btnet-navbar > ul > li.facebook-share a {
    padding: 0;
  }
}

</style>
