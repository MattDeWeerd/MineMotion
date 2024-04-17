<script>
export default {
  name: "Hero",
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <div class="hero-container">
    <div class="main">
      <img class="hero-name" src="/src/assets/MineMotion_normal.png" />
      <h1 class="hero-title">Advertize Your Minecraft Server</h1>
      <h2 class="hero-subtitle">
        We play the game, so we know the game. Let us handle the hastle and
        watch your server grow.
      </h2>
      <div class="actions">
        <Button label="Get Started" class="p-button" rounded></Button>
        <Button
          label="Why MineMotion?"
          severity="secondary"
          class="p-button"
          rounded
        ></Button>
        <Button
          label="View our Work"
          severity="secondary"
          class="p-button"
          rounded
        ></Button>
        <Button
          label="Contact Us"
          icon="pi pi-discord"
          class="p-button"
          rounded
        ></Button>
      </div>
    </div>
    <div class="image">
      <img class="logo" src="/src/assets/MM_normal.png" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero-container {
  margin: 64px auto 64px;
  text-align: start;
  display: flex;
  flex-direction: column-reverse;
  width: fit-content;

  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 576px;
    .hero-name {
      margin: auto;
      width: 373px;
      height: 56px;
    }
    .hero-title {
      margin: 0;
      font-size: 56px;
      line-height: 64px;
      font-weight: 700;
      color: var(--text-color);
      text-align: center;
    }

    .hero-subtitle {
      padding-top: 12px;
      font-size: 24px;
      line-height: 36px;
      font-weight: 500;
      color: var(--text-secondary);
      text-align: center;
    }

    .actions {
      margin: 32px auto 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 95%;

      .p-button {
        border: none;
        line-height: 22px;
        font-size: 14px;
        font-weight: 600;
      }
    }
  }

  .image {
    width: 560px;
    margin-bottom: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 200px;
      height: 200px;
      background: linear-gradient(90deg, #ff0000, #e9ecee);
      border-radius: 50%;
      filter: blur(72px);
      z-index: 1;
    }

    .logo {
      width: 200px;
      z-index: 2;
      flex-shrink: 1;
    }
  }
}

@media only screen and (min-width: 428px) {
}

@media only screen and (min-width: 504px) {
}

@media only screen and (min-width: 624px) {
}

@media only screen and (min-width: 768px) {
}

@media only screen and (min-width: 990px) {
}

@media only screen and (min-width: 1024px) {
}

@media only screen and (min-width: 1250px) {
  .hero-container {
    flex-direction: row;
    margin-top: 140px;

    .main {
      display: block;

      .hero-name {
        width: unset;
      }

      .hero-title {
        text-align: left;
      }

      .hero-subtitle {
        text-align: left;
      }

      .actions {
        margin: 32px 0;
      }
    }

    .image {
      align-items: start;
      margin-bottom: unset;

      &::before {
        top: 25%;
        width: 340px;
        height: 340px;
      }

      .logo {
        width: 320px;
      }
    }
  }
}
</style>
