<template>
  <div>
    <v-app>
      <v-navigation-drawer
        style="background-color:grey"
        v-model="drawer"
        :clipped="$vuetify.breakpoint.lgAndUp"
        app
      >
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/men/81.jpg" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Marketing Agent</v-list-item-title>
              <v-list-item-subtitle></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
        </v-list>
        <v-btn style="width:230px;margin-left:15px;" color="primary" @click="viewHome()">HOME</v-btn>
        <br />
        <br>
        <v-btn style="width:230px;margin-left:15px;" color="primary" @click="viewHistory()">HISTORY</v-btn><br><br>
        <v-btn style="width:230px;margin-left:15px;" color="error" @click="logout()">LOGOUT</v-btn>
      </v-navigation-drawer>
      <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="grey" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title style="width: 300px" class="ml-0 pl-4"></v-toolbar-title>
      </v-app-bar>
      <v-content style="padding: 0% !important">
        <v-container fluid>
          <v-layout>
            <router-view></router-view>
          </v-layout>
        </v-container>
      </v-content>
      <v-footer app></v-footer>
    </v-app>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: true
    };
  },
  methods: {
    viewHome() {
      this.$router.push("/home");
    },
    viewHistory() {
      this.$router.push("/history");
    },
    logout(){
      localStorage.clear();
            this.$router.push("/");
    }
    // addMarketingAgent() {
    //   this.$router.push("/addMarketingAgent");
    // },
  }
};
</script>
<style scoped>
v-content {
  width: 100%;
  padding: 0px;
}
.dropdown-menu {
  background-color: grey;
}
.dropdown {
  color: black;
}
main.v-content {
  margin: 6%;
}
</style>










