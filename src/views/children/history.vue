<template>
    <div>
       <h2> History Page:</h2>
        <table>
        
          <tr>
            <!-- <th>Sr. No.</th> -->
            <th>Lead Id</th>
            <th>Description Of Post</th>
            <th>RequestTime</th>
            <th>Assigned Time</th>
            <th>Closure Time</th>
            <!-- <th>status</th> -->
            <!-- <th>postPersonId</th> -->
            <th>comment</th>
            <!-- <th>numberOfDislikes</th> -->
          </tr>
            <tr  v-for="ticket in historyDetails" v-bind:key="ticket" class="todo">
              <!-- <th>{{index}}</th> -->
              <th>{{ticket.leadId}}</th>
              <th>{{ticket.adDescription}}</th>
              <th>{{ticket.requestTime}}</th>
              <th>{{ticket.assignedTime}}</th>
              <th>{{ticket.closureTime}}</th>
              <!-- <th>{{ticket.status}}</th> -->
              <!-- <th>{{ticket.postPersonId}}</th> -->
              <th>{{ticket.comments}}</th>
              <!-- <th>{{ticket.numberOfDislikes}}</th> -->

            </tr>
          
        </table>
    </div>
</template>
<script>
//import { mapGetters } from "vuex";

export default {
    name: "history",
  data(){
  return {
    historyDetails:{
      leadId:'1',
      adDescription:'ad'
    }
  }
  },

    methods:{
    //     getTicketDetails(){
    //   this.ticketDetails=this.$store.getters['getHistory']
    // },
    ticketDetails(){
        this.historyDetails=this.$store.getters['getHistory']
    }

    },
    created(){
        this.$store.dispatch('ticketHistory',{
            success:this.ticketDetails
        })
        
    },
    // computed:{ ...mapGetters(["getHistory"])
    // }
};
</script>
<style scoped>

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
