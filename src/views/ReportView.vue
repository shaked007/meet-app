<template>
 <!-- <h2> gg</h2> -->
<Nav/>
 <div class="spinner-class">

    <v-progress-circular v-if="!isFinished && spinnerStarter"
      indeterminate
      color="blue"
      size="90"
    ></v-progress-circular>
    </div>


  <div v-if="isAuthenticated  && isFinished">








  </div>
</template>

<script>
import axios from "axios"
import moment from "moment"
import Nav from "@/components/Nav.vue"
import GeneralCard from "@/components/singleKenes/GeneralCard.vue"
import ExtraCard from "@/components/singleKenes/ExtraCard.vue"
import PersonCard from "@/components/singleKenes/PersonCard.vue"
export default {
    components:{
      GeneralCard,
      ExtraCard,
      PersonCard,

      Nav
    },
  name:"ReportView",
  data(){
    return{
      spinnerStarter:false,
    currentDate:'',
    isFinished:false,
      check:true,
      isAuthenticated:true,
      drivesObject:{},
      contactsObject:{},
      stopsObject:{},
      report:[],
       jobs:[{hebrewName:'מפקד משלח משימה',name:"mefaked-meshaleh-mesima"},
      {name:'mefaked-mesima',hebrewName:"מפקד המשימה"},
       {name:'driver',hebrewName:"נהג"}
      ],

          url:"/.netlify/functions/fetch_chosen?id=" + window.location.href.split('/')[window.location.href.split('/').length-1],

      // url:"http://localhost:3000/reports/" + window.location.href.split('/')[window.location.href.split('/').length-1]
    }
  },
  beforeMount(){
    
       
        this.getReportById()
    
    
  },
  methods:{
    print(){
      window.print()
    },
       async getReportById(){
        this.spinnerStarter = true;
        const reportResponse = await axios.get(this.url);
        this.report = reportResponse.data[0];
        console.log(this.report)
         this.currentDate = moment(new Date( this.report['date']),'L', 'he').format("יום dddd  D/M/y")
         

        console.log(this.report)
        this.report.date = moment(new Date(this.report.date),'L', 'he').format("יום dddd  D/M/y");
           this.isAuthenticated = true;
           this.isFinished = true
        
      }
  }
}
</script>

<style scoped> 
.printer-link{
  position: absolute;
  top: 1%;
  left: 1%;
  display: inline-block;
  color: white;
  background-color: black;
  text-decoration: none;
  outline: none;
  border-radius: 20px;
  padding: 0.5em 1em;
}
.phone-container a{
  color: white;
}
.phone-container{
  text-align: center;
  color: white;
}
.spinner-class{
display: flex;
position: relative;
top: 30%;
align-items: center;
justify-content: center;
  
}
h6{
  margin-bottom: 10px !important;
}
.nosim-title{
  color: white;
  font-size: 1.25rem;
}


.person--job-title{
  display: inline-block;
  color: rgba(255, 255, 255, 0.829);
  margin-bottom: 10px;
  font-size: 1rem;
}
.input-group__input *{
  color: rgba(255, 255, 255, 0.87) !important;
  }
.names-container{
  text-align: center;
}
.no-permissions-header{
  color: white;
  position: relative;
  top: 30%;
  text-align: center;
}
.main-title{
  color:white;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
-webkit-appearance: none;
margin: 0;
}
.font-sizer label{
  font-size:0.9rem !important;
}
.direction-wrapper{
  direction: ltr !important;
}
.form-subtitle{
  text-align: center;
  font-size: 1.4rem;
}
.grey-zone-container{

 border-radius: 20px;
  background-color: rgb(0,0,0,0.5);
  direction: rtl !important;
  width: 95%;
    min-height: 80vh;
  margin-left :auto;
  margin-right:auto;
  margin-bottom: 15px;
}
.flex-inputs{
  display: flex;
  text-align: center;
  flex-direction: column;
  color: white !important;
  width: 95%;
  padding-top: 10px;
  /* align-items: center; */
  gap: 10px 10px;
  margin: 0 auto;
  justify-content: flex-start;
}
.finish-report-button{
    margin: 0 auto;
    border-radius: 20px;
    background-color: white;
    padding: 0.5em 1.8em;
}
form{
  padding-bottom: 20px;
  text-align: center;
}
.current-date{
  text-align: center;
  color: rgba(255, 255, 255, 0.781);
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-weight: 400 !important;

}

.main-title{

  text-align: center;
  font-size: 3rem;
  margin-top: 20px;
  margin-bottom: 20px;
  color:white;
}

</style>