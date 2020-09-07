<template>
  <div id="organizer">
    <div class="wrapper">
      <OrganizerList
        v-for="(list, index) in agencys"
        :key="index"
        :agencysList="list"
      />
    </div>
  </div>
</template>

<script>
import OrganizerList from './OrganizerList'

export default {
  components: {
    OrganizerList
  },
  props: {
    agencys: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
#organizer {
  padding-bottom: 8em;
  text-align: center;
}
#organizer h3 {
  font-size: 1.4em;
  margin: 3em 0 0.4em;
}
#organizer ul {
  margin: 0 auto 4em;
  font-size: 0;
  max-width: 1200px;
  text-align: left;
}
#organizer ul.center {
  text-align: center;
}
#organizer ul li {
  display: inline-block;
  vertical-align: middle;
  width: 29.3%;
  margin: 2%;
}
#organizer ul li img {
  display: block;
  margin: auto;
}

@media screen and (max-width: 480px) {
  #organizer ul li {
    width: 50%;
    margin: 0;
    padding: 5% 2%;
  }
  #organizer {
    padding-bottom: 4em;
  }
}

</style>
