<script>
export default {
  name: "Features",
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <div class="features-container">
    <div class="surface-section py-8 px-4 md:px-6 lg:px-8 text-center">
      <div class="mb-3 font-bold text-3xl">
        <span class="text-900">Creative Solutions, </span>
        <span class="text-red-600">Dynamic Results</span>
      </div>
      <div class="text-700 mb-6">
        At MineMotion, we craft compelling content that transforms how players
        see your Minecraft server.
      </div>
      <div class="grid">
        <div class="col-12 md:col-4 mb-4 px-5">
          <span
            class="p-3 shadow-2 mb-3 inline-block surface-card"
            style="border-radius: 10px"
          >
            <i class="pi pi-pencil text-4xl text-red-500"></i>
          </span>
          <div class="text-900 text-xl mb-3 font-medium">
            Tailored Content Creation
          </div>
          <span class="text-700 line-height-3"
            >Every server has its story. We tell yours through custom video and
            graphic content designed to engage and attract new players.</span
          >
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
          <span
            class="p-3 shadow-2 mb-3 inline-block surface-card"
            style="border-radius: 10px"
          >
            <i class="pi pi-lock text-4xl text-red-500"></i>
          </span>
          <div class="text-900 text-xl mb-3 font-medium">
            Secure Collaboration
          </div>
          <span class="text-700 line-height-3"
            >Your server's details are safe with us. We ensure secure
            communications and data handling throughout our creative
            process.</span
          >
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
          <span
            class="p-3 shadow-2 mb-3 inline-block surface-card"
            style="border-radius: 10px"
          >
            <i class="pi pi-check-circle text-4xl text-red-500"></i>
          </span>
          <div class="text-900 text-xl mb-3 font-medium">
            User-Friendly Service
          </div>
          <span class="text-700 line-height-3"
            >We make it simple. From initial contact to final product, our
            process is designed to be straightforward and hassle-free.</span
          >
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
          <span
            class="p-3 shadow-2 mb-3 inline-block surface-card"
            style="border-radius: 10px"
          >
            <i class="pi pi-globe text-4xl text-red-500"></i>
          </span>
          <div class="text-900 text-xl mb-3 font-medium">Global Reach</div>
          <span class="text-700 line-height-3"
            >No matter where you are, we can help. Our team works across time
            zones to bring your server to the global Minecraft community.</span
          >
        </div>
        <div class="col-12 md:col-4 mb-4 px-5">
          <span
            class="p-3 shadow-2 mb-3 inline-block surface-card"
            style="border-radius: 10px"
          >
            <i class="pi pi-video text-4xl text-red-500"></i>
          </span>
          <div class="text-900 text-xl mb-3 font-medium">
            Innovative Strategies
          </div>
          <span class="text-700 line-height-3"
            >We stay ahead of the curve, utilizing the latest trends and
            technologies to ensure your content is fresh and effective.</span
          >
        </div>
        <div class="col-12 md:col-4 md:mb-4 mb-0 px-3">
          <span
            class="p-3 shadow-2 mb-3 inline-block surface-card"
            style="border-radius: 10px"
          >
            <i class="pi pi-shield text-4xl text-red-500"></i>
          </span>
          <div class="text-900 text-xl mb-3 font-medium">
            Trusted by the Community
          </div>
          <span class="text-700 line-height-3"
            >We're recognized in the Minecraft community for our integrity and
            the high quality of our work, building trust with every
            project.</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.features-container {
  margin-left: 128px;
  margin-right: 128px;

  .surface-card {
    background-color: var(--gray-800) !important;
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
</style>
