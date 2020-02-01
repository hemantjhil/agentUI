<template>
  <div class="grid-container">
    <div class="item1">
        <h1>Add Description and upload for Assigned Lead</h1>
      <p>LeadId: {{getTicket.leadId}}</p>
      <p>Lead Description:{{getTicket.leadName}}</p>
      <p>Lead Status:{{getTicket.status}}</p>
      <p>Lead Assigned Time{{format_date(getTicket.getAssignedTime)}}</p>
      <p>Lead Request Time{{format_date(getTicket.requestTime)}}</p>
      <form>
          <div class="insidecreatepost">
            <input class="inputbox" v-model="comments" type="text" placeholder="    Write Something here.....">
            <p>Upload an image to Firebase:</p>
            <input type="file" @change="previewImage" accept="image/*" >
          </div>
          <div>
            <p>Progress: {{uploadValue.toFixed()+"%"}}
            <progress id="progress" :value="uploadValue" max="100" ></progress>  </p>
          </div>
          <div v-if="imageData!=null">
              <img class="preview" :src="picture">
              <br>
            <button @click.prevent="onUpload">Upload</button>
          </div>
      </form>
    </div>
    </div>
    <!-- {{getTicket}} -->
</template>

<script>
import { mapGetters } from "vuex";
import moment from 'moment'
import firebase from 'firebase'
import axios from "axios"
export default {
  name: "ticketdetails",
  data: function() {
    return {
      details: {},
      ticketId: "",
      file:'',
      message:'',
      imageData: null,
      picture: '',
      uploadValue: 0,
      selectedFile:null,
      comments:'',
      image:''
    };
  },
  methods: {
    onFileSelected(event){
      window.console.log(event)
      this.selectedFile=event.target.files[0]
    },
    getDetails() {
      window.console.log("vhjvj");
      // window.console.log(this.getTicket);
      this.details = this.$store.getters["getTicket"];
    },
    previewImage(event) {
      this.uploadValue=0;
      this.picture=null;
      this.imageData = event.target.files[0];
    },

    onUpload(){
      this.picture=null;
      window.console.log("Hi")
      const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
      window.console.log("Firebase"+this.imageData.name+this.imageData)
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{window.console.log(error.message)},
      ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.image =url;
          window.console.log("hi:  "+this.image)
          // this.$store.state.uploadimageurl=this.picture
          // this.$store.state.marketingAgentId=this.marketingAgentId
          // this.$store.state.leadId=this.leadId
          // this.$store.state.comments=this.comments
          window.console.log("pictuere:" +this.image+'agentId '+localStorage.getItem('agentId')+" leadid "+this.details.leadId+" comments: "+this.comments)
          this.$store.dispatch('sendPostDetails',{
            params:{
              uploadimageurl:this.image,
              marketingAgentId:localStorage.getItem('agentId'),
              leadId:this.details.leadId,
              comments:this.comments
            }
          })
        });
      }
      );
    },
    format_date(value){
         if (value) {
           return moment(String(value)).format('DD/MM/YYYY')
          }
      },
    handleFileUpload(){
        this.file = this.$refs.file;
      },
    uploadImage(event) {
        let data = new FormData();
    window.console.log("MarketingAgentId",localStorage.getItem('agentId'))
    data.append("marketingAgentId",this.getTicket.leadId)
    data.append("leadId",localStorage.getItem('productId'))
    data.append("comments",this.message);
    data.append('image', event.target.file); 
    window.console.log(data)
    const URL = 'http://172.16.20.3:8082/marketingAgentService/closeLead/'; 

    


    let config = {

      method:"POST"
    }

    axios.post(
      URL, 
      data,
      config
    ).then(
      response => {
        window.console.log('image upload response > ', response)
      }
    )
  }
  },
  created() {
    window.console.log("getting into created");
    this.ticketId = this.$route.params.id;
    window.console.log('this', this.ticketId);

    this.$store.dispatch("getTicketDetails", {
      ticketId: this.ticketId,
      success: this.getDetails
    });

    window.console.log("File hello", this.getTicket);
  },

  computed: mapGetters(["getTicket"])
};
</script>

<style scoped>
.grid-container {
  margin: 80px 100px;
  height: 900px;
  display: grid;
}
</style>