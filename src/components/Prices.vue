<script>
export default {
  name: "",
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
  <div id="OurPackages" class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <h1 class="mb-3 text-center">Our Packages</h1>
    <div class="text-700 text-xl mb-3 text-center line-height-3">
      Select from our tailored video packages to boost your Minecraft server's
      visibility.
    </div>

    <div class="price-cards grid">
      <div class="col-12 lg:col-4">
        <div class="p-3 h-full">
          <div
            class="shadow-2 p-3 h-full flex flex-column surface-card"
            style="border-radius: 6px"
          >
            <div class="text-900 font-medium text-xl mb-2">Basic</div>
            <div class="text-600">
              Get started with some custom videos to launch and introduce your
              Minecraft server
            </div>
            <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
            <div class="price-container">
              <div class="price-spans">
                <span class="price font-bold text-2xl text-900">$30</span>
                <span class="per-video ml-2 font-medium text-600"
                  >per video</span
                >
              </div>
            </div>
            <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
            <ul class="list-none p-0 m-0 flex-grow-1">
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span class="text-left">IP graphic For Your Video</span>
              </li>
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span class="text-left">2 Revisions per video</span>
              </li>
            </ul>
            <hr
              class="mb-3 mx-0 border-top-1 border-none surface-border mt-auto"
            />
            <Button
              label="Contact Us"
              class="p-3 w-full mt-auto"
              @click="joinDiscord"
            ></Button>
          </div>
        </div>
      </div>

      <div class="col-12 lg:col-4">
        <div class="p-3 h-full">
          <div
            class="shadow-2 p-3 h-full flex flex-column surface-card"
            style="border-radius: 6px"
          >
            <div class="text-900 font-medium text-xl mb-2">Premium</div>
            <div class="text-600">
              Expand your presence with engaging videos designed to grow your
              audience.
            </div>
            <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
            <div class="price-container">
              <div class="price-spans">
                <span class="price font-bold text-2xl text-900">$27</span>
                <span class="per-video ml-2 font-medium text-600"
                  >per video</span
                >
              </div>
              <span class="more-value font-medium text-600 text-green-500">
                (10% More Value)
              </span>
            </div>
            <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
            <ul class="list-none p-0 m-0 flex-grow-1">
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span class="text-left">Minimum of 10 videos</span>
              </li>
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span class="text-left">5 Revisions per video</span>
              </li>
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span class="text-left"
                  >Post Caption and Hashtags Provided</span
                >
              </li>
            </ul>
            <hr class="mb-3 mx-0 border-top-1 border-none surface-border" />
            <Button
              label="Contact Us"
              class="p-3 w-full"
              @click="joinDiscord"
            ></Button>
          </div>
        </div>
      </div>

      <div class="col-12 lg:col-4">
        <div class="p-3 h-full">
          <div
            class="shadow-2 p-3 flex flex-column surface-card"
            style="border-radius: 6px"
          >
            <div class="text-900 font-medium text-xl mb-2">Enterprise</div>
            <div class="text-600">
              Maximize your reach with videos crafted for ongoing engagement and
              promotion.
            </div>
            <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
            <div class="price-container">
              <div class="price-spans">
                <span class="price font-bold text-2xl text-900">$24</span>
                <span class="per-video ml-2 font-medium text-600"
                  >per video</span
                >
              </div>
              <span class="more-value font-medium text-600 text-green-500">
                (20% More Value)
              </span>
            </div>
            <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
            <ul class="list-none p-0 m-0 flex-grow-1">
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span class="text-left">Minimum of 20 videos</span>
              </li>
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span class="text-left">Unlimited Revisions</span>
              </li>
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span class="text-left">Optional Social Media Management</span>
              </li>
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-green-500 mr-2"></i>
                <span class="text-left"
                  >Server & Content Performance Analytics</span
                >
              </li>
            </ul>
            <hr class="mb-3 mx-0 border-top-1 border-none surface-border" />
            <Button
              label="Lets Talk!"
              class="p-3 w-full p-button-outlined"
              @click="joinDiscord"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.surface-card {
  background-color: var(--gray-800) !important;
}
.surface-border {
  background-color: var(--gray-600) !important;
}
hr {
  z-index: 100 !important;
  height: 2px;
}

#OurPackages {
  max-width: 1280px;
  margin: auto;
}
.price-cards {
  text-align: left;
  .price-container {
    display: flex;
    align-items: start;
    flex-direction: row;
    .price-spans {
      display: flex;
      align-items: end;
      .price {
        line-height: 40px;
      }
      .per-video {
        line-height: 40px;
        flex-shrink: 0;
      }
    }

    .more-value {
      margin-left: 0.5rem;
      line-height: 40px;
      flex-shrink: 0;
    }
  }
}

@media only screen and (min-width: 381px) {
}

@media only screen and (min-width: 991px) {
  .price-cards {
    .price-container {
      flex-direction: column;
      .more-value {
        margin-left: 0;
        line-height: unset;
      }
    }
  }
}

@media only screen and (min-width: 1185px) {
  .price-cards {
    .price-container {
      flex-direction: row;
      .more-value {
        margin-left: 0.5rem;
        line-height: 40px;
      }
    }
  }
}
</style>
