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
  },
  mutations: {
    SET_TICKET(state, value){
      state.ticketDetails=value;
    },
    SET_TICKET_DETAILS(state,value){
      state.ticket=value
    }
  },
  actions: {

    getList({commit},{success})
    {
      window.console.log("Getting the tickets list")
      axios({ 
        method: "GET",
         url: "http://172.16.20.3:8082/marketingAgentService/getMADetails/"+"bindu.alaparthi@gmail.com"})
         .then(
        result => {
          window.console.log(result.data)
          localStorage.setItem("agentId","bindu.alaparthi@gmail.com")
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
    sendPostDetails({commit},{params}){
      // image:this.uploadimageurl
      // marketingAgentId:this.state.marketingAgentId
      // leadId:this.state.leadId
      // comments:this.state.comments
      window.console.log(params)
      axios.post(' http://172.16.20.3:8082/marketingAgentService/closeLead/',
      {
        "marketingAgentId":params.marketingAgentId,
        "leadId":params.leadId,
        "comments":params.comments,
        "image":params.uploadimageurl,
        
      }).then(response => {
        window.console.log(response)
        commit
        window.console.log("Image Url:  "+params.uploadimageurl)
        // context.commit('UPDATE_SEARCH_DETAILS', product.data)
      })
      .catch(error => {
        window.console.log(error)
      })


    },
    getTicketDetails({commit}, data)
    {
      window.console.log("Getting product details",  data)
      axios.get("http://172.16.20.3:8082/marketingAgentService/getLeadDetails/bindu.alaparthi@gmail.com/"+ data.ticketId

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
    }
  }

})

