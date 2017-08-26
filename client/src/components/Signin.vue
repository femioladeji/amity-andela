<template>
  <div class="wrapper">
    <div ref="login" class="login">
      <img class="logo" src="../assets/images/logo.png" />
      <p>Sign in</p>
      <form v-on:submit.prevent="onSubmit">
        <div class="form-field">
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div class="form-field">
          <input type="password" name="password" placeholder="Password" />
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
      msg: 'Welcome to Your Vue.js App',
    };
  },

  mounted: function() {
    const login = this.$refs.login;
    console.log(this.$refs.login);
    animate();
    function animate() {
      requestAnimationFrame(animate);
      TWEEN.update();
    }
    const rotX = {x: 30};
    const tweenA = new TWEEN.Tween(rotX)
      .to({x: -30}, 300)
      .onUpdate(() => {
        login.style.setProperty('transform', `rotateX(${rotX.x}deg)`)
      });

    const tweenB = new TWEEN.Tween(rotX)
      .to({x: 15}, 400)
      .onUpdate(() => {
        login.style.setProperty('transform', `rotateX(${rotX.x}deg)`)
      });

    const tweenC = new TWEEN.Tween(rotX)
      .to({x: -10}, 200)
      .onUpdate(() => {
        login.style.setProperty('transform', `rotateX(${rotX.x}deg)`)
      });

    const tweenD = new TWEEN.Tween(rotX)
      .to({x: 10}, 300)
      .onUpdate(() => {
        login.style.setProperty('transform', `rotateX(${rotX.x}deg)`)
      });

    const tweenE = new TWEEN.Tween(rotX)
      .to({x: 0}, 200)
      .onUpdate(() => {
        login.style.setProperty('transform', `rotateX(${rotX.x}deg)`)
      });
    const tweenF = new TWEEN.Tween(rotX)
      .to({x: 0}, 100)
      .onUpdate(() => {
        login.style.setProperty('transform', `rotateX(${rotX.x}deg)`)
      });
    // tweenA.start();
    tweenA.chain(tweenB);
    tweenB.chain(tweenC);
    tweenC.chain(tweenD);
    tweenD.chain(tweenE);
    // tweenE.chain(tweenF);
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
