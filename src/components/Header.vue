<script>
export default {
  name: "Header",
  data() {
    return {
      // Define items for the TabMenu
      items: [
        { label: "Home", icon: "pi pi-fw pi-home", to: "/" },
        { label: "Products", icon: "pi pi-fw pi-calendar", to: "/products" },
        { label: "About Us", icon: "pi pi-fw pi-file", to: "/about" },
      ],
    };
  },
  methods: {
    joinDiscord() {
      window.open("https://discord.com/invite/3GJtxaeYhD", "_blank");
    },
  },
};
</script>

<template>
  <div class="header">
    <div class="logo-container">
      <img src="/src/assets/MM_normal.png" alt="Logo" class="logo-sm" />
      <p class="name">MineMotion</p>
    </div>
    <TabMenu :model="items" class="tab-menu" />
    <div class="contact-us-container">
      <Button
        label="Contact Us"
        icon="pi pi-discord"
        class="p-button"
        @click="joinDiscord"
      ></Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: var(--surface-section);
  padding: 0;
  height: 64px;

  .logo-container {
    display: none;
    flex-direction: row;
    align-items: center;

    .logo-sm {
      height: 24px;
    }

    .name {
      font-weight: bold;
      margin-left: 8px;
    }
  }

  .tab-menu {
    flex-grow: 0; /* Ensures the tab menu does not expand */
    flex-shrink: 0; /* Prevents the tab menu from shrinking */
    display: flex;
    justify-content: center;
  }
  .contact-us-container {
    display: none;
  }
}

@media only screen and (min-width: 428px) {
  .header {
    display: flex;
  }
}

@media only screen and (min-width: 504px) {
}

@media only screen and (min-width: 624px) {
}
@media only screen and (min-width: 768px) {
  .header {
    flex-direction: row;
    padding: 0 32px;

    .logo-container {
      display: flex;
    }

    .contact-us-container {
      width: unset;
      display: flex;
      justify-content: end;
    }
  }
}

@media only screen and (min-width: 990px) {
}

@media only screen and (min-width: 1024px) {
}
</style>
