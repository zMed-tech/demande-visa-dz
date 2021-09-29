<template>
  <div class="refresh-page">
    <div class="text">New content is available; please refresh</div>
    <div class="button">
      <button @click="refresh">Refresh</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RefreshPage",
  methods: {
    refresh() {
      location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
.refresh-page {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  padding: 1rem 1rem;
  border-radius: 5px;
  background-color: $color-primary;
  position: absolute;
  right: 0;
  bottom: 0;

  & .text {
    font-size: 1.1rem;
    font-weight: bold;
    margin: 0 1rem;
  }

  & .button {
    & button {
      padding: 2px 5px;
      border-radius: 25px;
      font-weight: bold;
      font-size: 1.2rem;
      cursor: pointer;
      color: white;
      background-color: $color-space;
      transition: 0.7s ease-in;

      &:hover {
        color: $color-dark;
      }
    }
  }
}
</style>
