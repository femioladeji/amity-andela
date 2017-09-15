<template>
  <div class="wrapper">
    <div ref="login" class="login">
      <img ref="logo" class="logo" src="../assets/images/logo.png" />
      <p ref="title">Sign in</p>
      <form v-on:submit.prevent="login">
        <div ref="username" class="form-field">
          <input v-model.trim="username" type="text" name="username" placeholder="Username" />
        </div>
        <div ref="password" class="form-field">
          <input v-model.trim="password" type="password" name="password" placeholder="Password" />
        </div>
        <Loader v-if="loading"></Loader>
        <span v-if="message" :class="{'message': true, 'error-message': !status}">{{message}}</span>
        <div ref="button" class="form-field action">
          <input v-if="!loading" type="submit" class="login" name="login" value="SIGN IN" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import * as TWEEN from '@tweenjs/tween.js';
import api from '../utils/api';
export default {
  name: 'signin',
  data() {
    return {
      username: '',
      password: '',
      loading: false,
      message: '',
      status: true
    };
  },


  methods: {
    login: function() {
      const { username, password } = this;
      this.loading = true;
      api.post('login', { username, password }).then(res => {
        if(res.status === 200) {
          localStorage.setItem('amity', res.data.payload);
          this.showResponse('Login successful', true);
          setTimeout(() => {
            this.$router.push('dashboard');
          }, 1500);
        } else {
          this.showResponse(res.data.payload, false);
        }
      }).catch(err => {
        this.showResponse(err.data.payload, false);
      });
    },

    showResponse: function(message, type) {
      this.message = message;
      this.status = type;
      this.loading = false;
    }
  },

  mounted: function() {
    const parts = [this.$refs.logo, this.$refs.title, this.$refs.username, this.$refs.password, this.$refs.button];
    const tweens = [];
    animate();
    function animate() {
      requestAnimationFrame(animate);
      TWEEN.update();
    }
    parts.forEach((element, index) => {
      let position = {top: 420};
      let theTween = new TWEEN.Tween(position)
        .to({top: 0}, 500)
        .onUpdate(() => {
          parts[index].style.setProperty('top', `${position.top}px`);
        });
      tweens.push(theTween);
    });
    tweens.forEach((eachTween, index) => {
      tweens[index].delay((index*100));
      tweens[index].start();
    });
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
}
.login {
  width: 90%;
  height: 418px;
  overflow: hidden;
  max-width: 300px;
  box-shadow: 0 3px 10px 1px rgba(0,0,0,0.22);
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

.action {
  margin-top: 0px;
}

.logo, .form-field, p {
  position: relative;
  top: 420px;
}

.login {
  margin-top: 20px;
}

.message {
  text-align: center;
  display: inline-block;
  width: 100%;
  font-size: 12px;
}

.error-message {
  color: #D8325E;
}
</style>
