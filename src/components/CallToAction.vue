<script>
export default {
  name: "CallToAction",
  data() {
    return {};
  },
  methods: {
    joinDiscord() {
      window.open("https://discord.com/invite/3GJtxaeYhD", "_blank");
    },
  },
};
</script>

<template>
  <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="text-700 text-center">
      <div class="text-red-600 font-bold mb-3">
        <i class="pi pi-discord"></i>&nbsp;POWERED BY DISCORD
      </div>
      <div class="text-900 font-bold text-5xl mb-3">
        Join Our Discord Server
      </div>
      <div class="text-700 text-2xl mb-5">
        We're always available if you have any questions!
      </div>
      <Button
        label="Join Now"
        icon="pi pi-discord"
        class="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"
        @click="joinDiscord"
      ></Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
</style>
