<template>
  <li>
    <figure>
      <img :src="details.image" :alt="details.name" />
      <figcaption>
        <div class="speaker-position">{{ details.position }}</div>
        <h5>{{ details.name }}</h5>
        <button
          v-if="details.experience || details.description"
          @click="show(`nob${$attrs.myindex}`)">More</button>
        <button v-else class="empty">More</button>
      </figcaption>
    </figure>
    <!-- popup box -->
    <modal
      :name="`nob${$attrs.myindex}`"
      width="90%"
      height="70%"
      @closed="closed"
    >
      <div slot="top-right">
        <button
          class="closebox"
          @click="$modal.hide(`nob${$attrs.myindex}`)"
        >
          <i class="far fa-times-circle" />
          <!-- <i class="fas fa-times" /> -->
        </button>
      </div>
      <figure>
        <img :src="details.image" :alt="details.name" />
        <figcaption>
          <div>{{ details.position }}</div>
          <h5>{{ details.name }}</h5>
          <!-- 經歷、學歷清單 -->
          <div v-if="details.experience" class="speakers-experience">
            <div
              v-for="(list, index) in details.experience"
              :key="index"
            >
              <h6>{{ list.title }}</h6>
              <div v-if="list.subtitle">{{ list.subtitle }}</div>
              <ol>
                <li
                  v-for="(experienceList, index) in list.list"
                  :key="index"
                >
                  {{ experienceList }}
                </li>
              </ol>
            </div>
          </div>
          <!-- 段落描述 -->
          <div v-if="details.description" class="speakers-description">
            <p
              v-for="(descriptionList, index) in details.description"
              :key="index"
            >
              {{ descriptionList }}
            </p>
          </div>
        </figcaption>
      </figure>
    </modal>
  </li>
</template>

<script>
export default {
  props: {
    details: {
      type: Object,
      required: true
    }
  },
  methods: {
    show(target) {
      this.$modal.show(target);
      const el = document.getElementsByTagName("html")[0];
      el.classList.add('fixed');
    },
    closed() {
      const el = document.getElementsByTagName("html")[0];
      el.classList.remove('fixed');
    }
  }
}
</script>

<style>
#app .vm--overlay {
  background: rgba(0, 0, 0, .7);
}
#app .vm--modal {
  max-width: 900px;
  max-height: 900px;
  left: 0 !important;
  top: 0 !important;
  right: 0;
  bottom: 0;
  padding: 2em;
  position: absolute !important;
  margin: auto;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
#speakers .vm--container img {
  width: 35%;
}
.speakers-experience,
.speakers-description {
  text-align: left;
}
.speakers-experience h6 {
  font-size: 1.2em;
  margin: 0.5em 0 0;
}
.speakers-experience ol {
  padding-left: 1em;
}
.speakers-experience ol li {
  list-style: disc;
  margin: 0;
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  #app .vm--modal {
    min-width: 800px;
    min-height: 600px;
  }
}

@media screen and (max-width: 1280px) {
  #app .vm--modal {
    max-width: 760px;
  }
  .speakers-experience ol {
    padding-left: 1.5em;
  }
}

@media screen and (max-width: 480px) {
  #app .vm--modal {
    padding: 1em;
  }
  #speakers .vm--container img {
    width: 60%;
  }
}

</style>
