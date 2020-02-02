import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
//import { renderSync } from 'sass'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ticketDetails:{},
    ticket:{},
    uploadimageurl:'',
    marketingAgentId:'',
    leadId:'',
    comments:'',
    history:{}
  },
  mutations: {
    SET_TICKET(state, value){
      state.ticketDetails=value;
    },
    SET_TICKET_DETAILS(state,value){
      state.ticket=value
    },
    SET_HISTORY(state,value){
      state.history=value
    }
  },
  actions: {

    getList({commit},{success})
    {
      window.console.log("Getting the tickets list")
      //localStorage.setItem("agentId","ramesh.dhulipalla@gmail.com"),
      axios({ 
        method: "GET",
         url: "http://172.16.20.3:8082/marketingAgentService/getMADetails/"+localStorage.getItem("agentId")})
         .then(
        result => {
          window.console.log(result.data)
         // this.ticketDetails = result.data;
          commit('SET_TICKET', result.data)
          success()
          
          
        //  window.console.log(this.ticketDetails);
        },
        error => {
          window.console.error(error);
        }
      );
     window.console.log("after api")
    },
    sendPostDetails({context},data){
      // image:this.uploadimageurl
      // marketingAgentId:this.state.marketingAgentId
      // leadId:this.state.leadId
      // comments:this.state.comments
    //  window.console.log(params)
      axios({ method:'POST',url:'http://172.16.20.3:8082/marketingAgentService/closeLead/' , data:data
      }).then(response => {
        window.console.log(response)
        context()
       // window.console.log("Image Url:  "+params.uploadimageurl)
        // context.commit('UPDATE_SEARCH_DETAILS', product.data)
      })
      .catch(error => {
        window.console.log(error)
      })


    },
    getTicketDetails({commit},{data})
    {
   //   window.console.log("Getting ticket details",  data.params)
      axios.get("http://172.16.20.3:8082/marketingAgentService/getLeadDetails/"+localStorage.getItem("agentId")+'/'+ localStorage.getItem("leadId")

      ).then(
        result=>{
          window.console.log('res', result);
          // this.details=result.data;
          // window.console.log('hi',this.details);
          commit('SET_TICKET_DETAILS',result.data)
          data.success()
      },
      error=>{
          window.console.log(error);
      }
      );
      window.console.log("after api")
    },
    ticketHistory({commit},{success})
    {
      window.console.log("Getting the history of marketing Agent"+localStorage.getItem("agentId"))
      axios({ 
        method: "GET",
         url: "http://172.16.20.3:8082/marketingAgentService/getHistory/"+localStorage.getItem("agentId")})
         .then(
        result => {
          window.console.log(result.data)
         // this.ticketDetails = result.data;
          commit('SET_HISTORY', result.data)
          success()
          
          
        //  window.console.log(this.ticketDetails);
        },
        error => {
          window.console.error(error);
        }
      );
     window.console.log("after api")

    },
    adminLogin({context},{params}) {
      let data={
        email: params.email,
          password: params.password,
          
      }
      localStorage.setItem("agentId",params.email)
      axios({
        method: 'POST',
        url: 'http://172.16.20.32:8080/auth/signin' ,data:data
      })
        .then(function (response) {
          localStorage.setItem('adminAccessToken',response.data.accessToken)
          window.console.log(response)
          window.console.log(response.data.accessToken)
          window.console.log(response.status)
          localStorage.setItem('status',response.status)
          //context('SET_ACCESS_TOKEN', localStorage.getItem('adminAccessToken'))
          // if(response.status==401)
          //   alert("Access denied");
          // if(response.status == 200)
          // this.$router.push('/home');
          context('SET_ACCESS_TOKEN', localStorage.getItem('adminAccessToken'))
        })
        .catch(function (error) {
          window.console.log(error);
        })
    },






    
  },
  modules: {
  },
  getters: {
    getAllTickets(state){
      //window.console.log(state)
      return state.ticketDetails;
    },
    getTicket(state){
      return state.ticket;
    },
    getHistory(state){
      return state.history;
    }
  }

})

