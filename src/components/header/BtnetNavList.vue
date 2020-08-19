<template>
  <li
    @mouseover="handleMouseover"
    @mouseout="handleMouseout"
    @click="handleClick"
    :class="node.class ? node.class : ''"
  >
    <a
      v-if="node.navList && node.navList.length"
      v-html="node.name"
      :style="{cursor: 'pointer'}"
      class="haschild"
    />
    <a
      v-else-if="node.isAnchor"
      :href="node.url"
      v-scroll-to="{el: node.url}"
      v-html="node.name"
      @click="toggleNav"
    />
    <a
      v-else
      :href="node.url"
      target="_blank"
      v-html="node.name"
    />
    <ul
      v-if="node.navList && node.navList.length"
      :class="show && 'active'"
    >
      <node
        v-for="child in node.navList"
        :key="child.index"
        :node="child"
        :toggleNav="toggleNav"
      />
    </ul>
  </li>
</template>

<script>
export default {
  name: "node",
  props: {
    node: Object,
    isMobile: {
      type: Boolean,
      defaule: null
    },
    toggleNav: {
      type: Function,
      required: true
    }
  },
  data: function() {
    return {
      show: false
    }
  },
  methods: {
    handleMouseover() {
      if(this.node.navList && !this.isMobile) {
        this.show = true
      }
    },
    handleMouseout() {
      if(this.node.navList && !this.isMobile) {
        this.show = false
      }
    },
    handleClick() {
      if(this.node.navList && this.isMobile) {
        this.show = !this.show
      }
    }
  }
};
</script>
