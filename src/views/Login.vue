<template>
  <div>
    <form>
      <div class="container">
        <h1>Marketing Agent</h1>
        <hr />
        <label for="email">
          <b>Email</b>
        </label>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          required
          v-model="adminLog.email"
        />
        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          v-model="adminLog.password"
          required
        />
        <hr />
        <button @click.prevent="login()" type="submit" class="registerbtn"><b>Login</b></button>

      </div>
    </form>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}
/* Add padding to containers */
.container {
  width:500px;
  padding: 16px;
  background-color: white;
}
/* Full-width input fields */
input[type="text"],
input[type="password"],
input[type="email"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #F1F1F1;
}
input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}
/* Overwrite default styles of hr */
hr {
  border: 1px solid #F1F1F1;
  margin-bottom: 25px;
}
/* Set a style for the submit button */
.registerbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}
.registerbtn:hover {
  opacity: 1;
}
</style>
<script>
export default {
  data: function() {
    return {
      adminLog: {
        email:"",
        password: ""
      }
    };
  },
  methods: {
    login:function() {
        
      this.$store.dispatch("adminLogin",{
        params:{
              email: this.adminLog.email,
          password: this.adminLog.password
        }
      })
              this.$router.push("/home");

    }
  }
};
</script>


















M