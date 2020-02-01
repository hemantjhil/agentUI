<template>
  <div class="flex-container">
    <div class="parenthiv">
      <h1> Lead Home Page</h1>
      <table cellspacing="10">
        <div>
          <tr>
            <th>Sr. No.</th>
            <th>ticketId</th>
            <th>descriptionOfPost</th>
            <th>requestTime</th>
            <th>status</th>
            <th>postPersonId</th>
            <th>comment</th>
            <th>numberOfDislikes</th>
          </tr>
          <div v-for="ticket in getAllTickets" v-bind:key="ticket.ticketId" class="todo">
            <tr>
              <!-- <th>{{index}}</th> -->
              <th>{{ticket.leadId}}</th>
              <th>{{ticket.adDescription}}</th>
              <!-- <th>{{ticket.requestTime}}</th>
              <th>{{ticket.status}}</th>
              <th>{{ticket.postPersonId}}</th>
              <th>{{ticket.comment}}</th>
              <th>{{ticket.numberOfDislikes}}</th> -->
              <button v-on:click="getTicketByID(ticket.leadId )">Click to Open</button>
            </tr>
          </div>
        </div>

        <!-- <button v-on:click="getTicketByID(ticket.ticketId )">
          <div class="child1" style="height:1px,width:5px" v-bind:src="ticket.ticketName">
            dscvd
            <div class="child">
              vs fcv
              <p class="name">fsvfds{{ticket.tickethescription}}</p>
              <p>dfbv{{ticket.noOfDislikes}}</p>
              <p>svfdv{{ticket.timeStamp}}</p>
            </div> 
          </div>
        </button>-->
      </table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
//import MarketingAgenthetails from "@/components/MarketingAgenthetails.vue";

export default {
  name: "marketingAgent",
  components: {},

  data() {
    return {
      ticketDetails: {
        
      }
    };
  },

  methods: {
    // getTickets: function() {
    //   this.ticketdetails = this.$store.getters["geAllTickets"];
    // },
    //  ...mapActions(["geAllTickets"])
    getTicketByID(leadId) {
      window.console.log(leadId);

      //this.$store.dispatch('getTicketDetails',ticketId)

      this.$router.push({ path: `/ticketdetails/${leadId}`});
    },
    getTicketDetails(){
      this.ticketDetails=this.$store.getters['getAllTickets']
    }
  },

  created() {
    this.$store.dispatch("getList", {
      // data: this.getTickets()
      success: this.getTicketDetails()
    });
  },

  computed: {
    ...mapGetters(["getAllTickets"])
  }
};
</script>
<style>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  /*flex-flow: row; */
  justify-content: space-around;
  background-color: white;
  border: solid 1px black;
}
.parenthiv {
  border: solid 1px gray;
  margin: 5px;
  border-radius: 10px;
  box-shadow: 1px 2px rgb(128, 128, 128, 0.5);
}
.parenthiv:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.name {
  font-size: 20px;
  line-height: 22px;
}
.child {
  background-color: white;
  width: 250px;
  margin: 10px;
  text-align: center;
  line-height: 20px;
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  line-clamp: 2;
  overflow: hidden;
}
.child1 {
  background-color: #f1f1f1;
  width: 250px;
  height: 250px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}
th {
  padding: 0 30px;
}
</style> 

