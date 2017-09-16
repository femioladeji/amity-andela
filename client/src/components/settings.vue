<template>
  <div>
    <div class="nav-bar">
      <div class="logo"><img src="../assets/images/logo.png" /></div>
    </div>

    <div class="wrapper">
      <div class="card">
        <p>Add Room</p>

        <form v-on:submit.prevent="addRoom">
          <div ref="name" class="form-field">
            <span class="label">Room Name</span>
            <input v-model.trim="name" type="text" name="name" />
          </div>
          <div ref="totalNumberOfOccupants" class="form-field">
            <span class="label">Number of Occupants</span>
            <input v-model.trim="totalNumberOfOccupants" type="number" name="noofoccupants" />
          </div>
          <div ref="totalNumberOfOccupants" class="form-field">
            <span class="label">Floor</span>
            <select v-model.trim="floor">
              <option value="">--Select floor--</option>
              <option v-for="(option, index) in floors" :value="index" :key="index">{{option}}</option>
            </select>
          </div>
          <Loader v-if="loading[0]"></Loader>
          <span v-if="message[0]" :class="{'message': true, 'error-message': !status[0]}">{{message[0]}}</span>
          <div ref="button" class="form-field action">
            <input v-if="!loading[0]" type="submit" class="" name="addroom" value="ADD ROOM" />
          </div>
        </form>
      </div>

      <div class="card">

      </div>

      <div class="card">

      </div>

      <div class="card">

      </div>
    </div>
  </div>
</template>

<script>
import api from '../utils/api';
export default {
  name: 'settings',
  data() {
    return {
      name: '',
      totalNumberOfOccupants: '',
      floor: '',
      floors: ['Ground floor', 'first floor'],
      loading: [false],
      message: [''],
      status: [false]
    }
  },
  methods: {
    addRoom() {
      const { name, totalNumberOfOccupants, floor } = this;
      this.loading[0] = true;
      api.post('room', { name, totalNumberOfOccupants, floor }, { authorization: localStorage.getItem('amity') })
        .then(res => {
          if(res.status === 201) {
            this.showResponse(true, 0, res.data.payload);
          } else {
            this.showResponse(false, 0, res.data.payload);
          }
        }).catch(err => {
          this.showResponse(false, 0, 'Check your internet');
        });
    },

    showResponse(status, index, message) {
      console.log('here');
      this.message[index] = message;
      this.status[index] = status;
      this.loading[index] = false;
    }
  },

  mounted: () => {
    console.log('settings');
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    max-width: 1000px;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media screen and (min-width:400px){
      justify-content: space-between;
    }

    .card {
      width: 80%;
      min-height: 400px;
      box-shadow: 0 2px 5px 2px rgba(0,0,0,.1);
      // border: 1px solid red;
      margin: 50px 0;
      transition: all 0.5s;

      &:hover {
        box-shadow: 0 2px 5px 2px rgba(0,0,0,.4);
      }

      p {
        text-align: center;
      }

      @media screen and (min-width:400px) {
        width: 40%;
      }
    }
  }
</style>
