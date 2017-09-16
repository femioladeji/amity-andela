<template>
  <div>
    <div class="nav-bar">
      <div class="logo"><img src="../assets/images/logo.png" /></div>
    </div>

    <div class="floor">
      <div class="horizontal top">

      </div>
      <div class="vertical left">

      </div>
      <div class="vertical right">

      </div>
      <div class="horizontal bottom">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard',

  methods: {

  },

  mounted: () => {
    console.log('mounted');
  }
}
</script>

<style>
  .floor {
    width: 100%;
    min-width: 800px;
    max-width: 1000px;
    min-height: 600px;
    margin: auto;
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .horizontal {
    height: 200px;
    width: 100%;
    background: rgba(20, 45, 100, 0.3);
  }

  .vertical {
    width: 30%;
    height: 600px;
    background: rgba(10, 200, 120, 0.4);
  }
</style>

