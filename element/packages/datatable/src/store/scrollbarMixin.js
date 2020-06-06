export default {
  data() {
    return {
      scrollbarWidth: 10,
      scrollTop: 0,
      scrollLeft: 0
    };
  },
  methods: {
    setScrollTop(scrollTop) {
      this.$nextTick(()=> {
        // console.log(scrollTop)
        this.scrollTop = scrollTop;
      });
    }
  }
};
