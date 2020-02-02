<template>
  <div class="flex-container">
    <div class="parenthiv">
      <h1>Lead Home Page</h1>
     
      <!-- <button v-on-click="history(this.agentId)">History Of Leads</button> -->
      <table>
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
          <div v-for="ticket in ticketDetails" v-bind:key="ticket" class="todo">
            <tr>
              <!-- <th>{{index}}</th> -->
              <th>{{ticket.leadId}}</th>
              <th>{{ticket.adDescription}}</th>
              <!-- <th>{{ticket.requestTime}}</th>
              <th>{{ticket.status}}</th>
              <th>{{ticket.postPersonId}}</th>
              <th>{{ticket.comment}}</th>
              <th>{{ticket.numberOfDislikes}}</th>-->
              
              <button v-on:click.prevent="getTicketByID(ticket.leadId )">Click to Open</button>
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
      ticketDetails: {},
      agentId: localStorage.getItem("leadId")
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
        localStorage.setItem('leadId',leadId)
     this.$router.push({ path: "/ticketdetails" });
    },
    getTicketDetails() {
      this.ticketDetails = this.$store.getters["getAllTickets"];
    },
    history(agentId) {
      window.console.log(agentId);
      this.$router.push({ path: "/history/${agentId}" });
    }
  },

  created() {
    this.$store.dispatch("getList", {
      // data: this.getTickets()
      success: this.getTicketDetails
    });
  },

  computed: {
    ...mapGetters(["getAllTickets"])
  }
};
</script>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style> 

