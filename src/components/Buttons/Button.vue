<template>
  <b-button :href="link" :class="`btn-${btnClass}`">{{ text }}</b-button>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: "#"
    },
    btnClass: {
      type: String,
      default: "#5733FF"
    }
  }
};
</script>
<style lang="scss" scoped>
.btn {
  padding: 15px 30px;
  border-radius: 40px;
  font-size: 18px;
  width: 200px;
  color: #5733ff;
  font-weight: 600;
}
.btn-primary {
  background-color: #5733ff;
  border-color: #5733ff;
  color: #fff;
  &:hover {
    background-color: transparent;
    border-color: #5733ff;
    color: #5733ff;
  }
  &:focus {
    background-color: transparent;
    border-color: #5733ff;
    color: #5733ff;
    box-shadow: none;
  }
}
.btn-white {
  background-color: #fff;
  color: #5733ff;
  border-color: #fff;
  &:hover {
    background-color: transparent;
    border-color: #fff;
    color: #fff;
  }
  &:focus {
    background-color: transparent;
    border-color: #fff;
    color: #fff;
    box-shadow: none;
  }
}
</style>