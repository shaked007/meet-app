<template>
<Nav/>  <br>
  <br>
  <br>
 <h1> כנס </h1>

 <h6 >מצב עריכה </h6>

 <div class="spinner-class">

    <v-progress-circular v-if="!isFinished && spinnerStarter"
      indeterminate
      color="blue"
      size="90"
    ></v-progress-circular>
    </div>


  <div class="flex-subjects" v-if="isAuthenticated  && isFinished">

      <GeneralCard :general="{...report.general}" @on-edit="updateKenes" />
    <ExtraCard :extra="{...report.final}" @on-edit="updateKenes" />
    <!-- <PersonCard v-for="person in Object.keys(personsObject)" :person="{...personsObject[person]}" :key="person" @on-edit="updateKenes" />  -->
 

  </div>
  <div class="btns-flex">
     <q-btn color="red" label="מחק כנס" icon-right="delete" />
    <q-btn  color="green" label="סיים עריכה" icon-right="mdi-check" />

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
      personsObject:{},
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
        this.personsObject['megish'] = {...this.report.tohen.megish}
        this.personsObject['leader'] = {...this.report.tohen.leader}
        this.personsObject['approver'] = {...this.report.logistics.approver}
        this.personsObject['supplier'] = {...this.report.logistics.supplier}


        this.report.date = moment(new Date(this.report.date),'L', 'he').format("יום dddd  D/M/y");
           this.isAuthenticated = true;
           this.isFinished = true
        
      }
  }
}
</script>

<style scoped> 
h6{
  text-align: center;
  color: grey;
}
h1{
  font-family:var(--font-bold);
  /* margin-bottom: 2rem; */
  text-align: center;
}
.flex-subjects{
  display: flex;
  width: 100%;
  margin:0 auto;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 80rem;
}
.btns-flex{
    gap: 20px;
    display: flex;
    justify-content: center;
}
.spinner-class{
display: flex;
position: relative;
top: 30%;
align-items: center;
justify-content: center;
}


</style>