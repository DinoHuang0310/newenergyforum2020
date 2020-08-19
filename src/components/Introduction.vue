<template>
  <div v-if="mediaId" id="introduction" class="area">
    <h2 data-en="Introduction">介紹影片</h2>
    <div class="wrapper">
      <div class="area-box float-box">
        <div class="content">
          <div class="media-box shadow-box">
            <iframe
              :src="'https://www.youtube.com/embed/' + mediaId"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mediaId: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
#introduction {
  padding-bottom: 0;
}
#introduction::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 30%;
  bottom: 0;
  left: 0;
  background: #E8F6F5;
}
.media-box {
  position: relative;
  padding-bottom: 56.25%;
}
.media-box iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}

</style>
