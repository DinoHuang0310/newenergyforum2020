<template>
  <div id="report" class="area">
    <h2 data-en="Report">前瞻觀點</h2>
    <div class="report-box" v-if="slider1">
      <h3>國際與產業面面觀</h3>
      <BtnetSlider :sliderData="slider1" sliderName="slider1" />
    </div>
    <div class="report-box" v-if="slider2">
      <h3>能源新世代領袖</h3>
      <BtnetSlider :sliderData="slider2" sliderName="slider2" />
    </div>
  </div>
</template>

<script>
import BtnetSlider from './BtnetSlider'

export default {
  components: {
    BtnetSlider
  },
  props: {
    slider1: {
      type: Array,
      required: false
    },
    slider2: {
      type: Array,
      required: false
    }
  }
}
</script>

<style>
#report {
  overflow: hidden;
}
.report-box {
  padding: 2em 2%;
}
.report-box h3 {
  text-align: center;
  font-size: 1.4em;
  margin: 0 0 0.5em;
}

</style>
