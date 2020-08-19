<template>
  <div id="app">
    <Header />
    <MainTop />
    <About />
    <Introduction v-if="data" :mediaId="data.mediaId" />
    <Spotlight />
    <Speakers v-if="data" :speakers="data.speakers" />
    <Information />
    <Agenda />
    <Register />
    <Report
      v-if="data"
      :slider1="data.slider1"
      :slider2="data.slider2"
    />
    <Organizer v-if="data" :agencys="data.agencys" />
    <BtnetFooter :goTop="true" />
  </div>
</template>

<script>
import Header from './components/header/Header'
import MainTop from './components/MainTop'
import About from './components/About'
import Introduction from './components/Introduction'
import Spotlight from './components/Spotlight'
import Speakers from './components/speakers/Speakers'
import Information from './components/Information'
import Agenda from './components/Agenda'
import Register from './components/Register'
import Report from './components/report/Report'
import Organizer from './components/organizer/Organizer'
import BtnetFooter from './components/BtnetFooter.vue'

import axios from 'axios'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'App',
  components: {
    Header,
    MainTop,
    About,
    Introduction,
    Spotlight,
    Speakers,
    Information,
    Agenda,
    Register,
    Report,
    Organizer,
    BtnetFooter
  },
  data: function() {
    return {
      data: null
    }
  },
  mounted() {
    axios.get(`data.json?${new Date().getTime()}`).then(response => {
      this.data = response.data;
      AOS.init();
    }).catch(error => {
      console.log(error);
    });
  }
}
</script>

<style src='./assets/css/style.css'></style>
