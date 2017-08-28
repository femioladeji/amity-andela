<template>
  <div class="wrapper">
    <div ref="login" class="login">
      <img class="logo" src="../assets/images/logo.png" />
      <p>Sign in</p>
      <form v-on:submit.prevent="login">
        <div class="form-field">
          <input v-model.trim="username" type="text" name="username" placeholder="Username" />
        </div>
        <div class="form-field">
          <input v-model.trim="password" type="password" name="password" placeholder="Password" />
        </div>
        <div class="form-field">
          <input type="submit" name="login" value="SIGN IN" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import * as TWEEN from '@tweenjs/tween.js';
export default {
  name: 'hello',
  data() {
    return {
      username: '',
      password: ''
    };
  },

  methods: {
    login: function() {
      console.log(this.username, this.password);
    }
  },

  mounted: function() {
    const login = this.$refs.login;
    animate();
    function animate() {
      requestAnimationFrame(animate);
      TWEEN.update();
    }
    const rotX = {x: 30};
    const tweenA = new TWEEN.Tween(rotX)
      .to({x: 0}, 300)
      .onUpdate(() => {
        login.style.setProperty('transform', `rotateX(${rotX.x}deg)`)
      });
    tweenA.start()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  perspective: 500px;
}
.login {
  width: 90%;
  max-width: 300px;
  box-shadow: 0 3px 10px 1px rgba(0,0,0,0.22);
  transform-origin: 50% 0 0px;
  transform: rotateX(30deg);
}
.login p {
  padding: 0;
  font-weight: bold;
  margin: 0;
  text-align: center;
}
.login form {
  margin-top: 20px;
}
.logo {
  width: 20%;
  margin: 30px 40%;
}
</style>
