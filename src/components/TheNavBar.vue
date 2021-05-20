<template>
  <div id="the-nav-bar">
    <div class="logo"><img src="@/assets/images/logo.png" alt="Logo" /></div>
    <ul class="links">
      <li class="link">
        <span
          ><img
            src="@/assets/icons/spain.png"
            alt="Spain"
            width="15px"
            height="15px"
        /></span>
        Spain
      </li>
      <li class="link">
        <span
          ><img
            src="@/assets/icons/france.png"
            alt="france"
            width="15px"
            height="15px"
        /></span>
        Franch
      </li>
      <li class="link">
        <span
          ><img
            src="@/assets/icons/germany.png"
            alt="Germany"
            width="15px"
            height="15px"
        /></span>
        German
      </li>
    </ul>
    <div class="last">Contact</div>
  </div>
</template>

<script>
export default {
  name: "TheNavBar",
};
</script>

<style lang="scss" scoped>
#the-nav-bar {
  position: absolute;
  top: 0;
  height: $nav-height;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;

  & .logo {
    border-radius: 30px;
    overflow: hidden;
    max-width: 200px;

    & img {
      max-width: 200px;
    }
  }

  & .links {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    cursor: pointer;

    & .link {
      display: flex;
      justify-content: space-between;
      align-items: center;

      color: $color-secondary;
      font-weight: bold;
      transition: all ease-in-out 0.7s;
      margin: 0 2rem;
      list-style: none;
      font-size: 1rem;

      border-radius: 25px;

      & span {
        margin: 0 1rem;
      }

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  & .last {
    background-color: $color-space;
    padding: 0.2rem 0.5rem;
    border-radius: 20px;
    color: white;
    font-weight: bold;
    position: relative;
    transition: all ease-in-out 0.7s;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      background-color: $color-dark;
      width: 0%;
      height: 3px;
      transition: all ease-in-out 0.7s;
    }

    &:hover::before {
      width: 80%;
    }
  }
}
</style>
