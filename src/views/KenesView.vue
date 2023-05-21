<template>
<Nav/>  <br>
  <br>
  <br>
 <h1> כנס </h1>

 <h6  v-if="!isReadOnly" >מצב עריכה </h6>
 <h6  v-else>לפני שמאשרים </h6>

 <div class="spinner-class">

    <v-progress-circular v-if="!isFinished && spinnerStarter"
      indeterminate
      color="blue"
      size="90"
    ></v-progress-circular>
    </div>


  <div class="flex-subjects" v-if="isAuthenticated  && isFinished">
    <h4> פרטים כללים</h4>

      <GeneralCard :isDisabled="isReadOnly" :general="report.general" @on-edit="updateKenes" />
          <h4> פרטים נוספים</h4>

    <ExtraCard :isDisabled="isReadOnly"  :extra="report.final" @on-edit="updateKenes" />
          <h4> אנשי קשר</h4>

    <PersonCard  :isDisabled="isReadOnly" v-for="person in Object.keys(personsObject)" :job="personsObject[person].job" :type="person" :person="personsObject[person].data" :icon="personsObject[person].icon" :key="person" @on-edit="updateKenes" /> 

  </div>
  <div    class="btns-flex" v-if="isAuthenticated  && isFinished && !isReadOnly" >
     <q-btn color="red" @click="handleDelete" label="מחק כנס" icon-right="delete" />
    <q-btn @click="handleEdit" color="green" label="סיים עריכה" icon-right="mdi-check" />
 </div>
  <div  class="btns-flex" v-if="isAuthenticated  && isFinished  && isReadOnly" >
     <q-btn color="red" @click="handleDelete" label="מחק בקשה" icon-right="delete" />
    <q-btn @click="handleAuthorize" color="green" label="אשר כנס" icon-right="mdi-check" />
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
      
      isReadOnly :  window.location.href.includes('pending'),
      isAuthenticated:true,
      drivesObject:{},
      contactsObject:{},
      stopsObject:{},
      report:{},

       jobs:[{hebrewName:'מפקד משלח משימה',name:"mefaked-meshaleh-mesima"},
      {name:'mefaked-mesima',hebrewName:"מפקד המשימה"},
       {name:'driver',hebrewName:"נהג"}
      ],
      deleteUrl:"/.netlify/functions/delete_report",
      updateUrl:"/.netlify/functions/update_report",
          url:"/.netlify/functions/fetch_chosen?id=" + window.location.href.split('/')[window.location.href.split('/').length-1],

      // url:"http://localhost:3000/reports/" + window.location.href.split('/')[window.location.href.split('/').length-1]
    }
  },
  beforeMount(){
      if(!localStorage.getItem('gotrue.user')){
        window.location.href = `https://meet-app383.netlify.app/#/login?redirect=${window.location.href}` 
      }
       
        this.getReportById()
    
    
  },
  methods:{
    async handleAuthorize(){
          this.$swal({title:'מאשר פריט',text:'אנא המתן'})
                this.$swal.showLoading()

         const res  = await axios.post(this.updateUrl,JSON.stringify({'_id':this.report['_id'],object:{isAuthorized:true}}),{
              headers:{
                Authorization:`Bearer ${sessionStorage.getItem('token')}`
              }
             })
         if (res.status == 200){
                   this.$swal.hideLoading()
            this.$swal({text:'הפריט אושר בהצלחה',timer:1000})
         
             if (this.isReadOnly){
              this.$router.push('/admin/pending')
            }else{
            this.$router.push('/admin')

            }
        }

    },
    async handleDelete(){
       const outcome = await this.$swal({
          icon:'warning',
          title:`בטוח שברצונך למחוק את: ${this.report.general['kenes-name']}?`,
          text:'לא תוכל להחזיר פעולה זו ',
          showCancelButton:true,
          confirmButtonColor:'red',
          confirmButtonText:'מחק',
          cancelButtonText:'בטל'
        })
        if(outcome.isConfirmed){
          this.$swal({title:'מוחק פריט',text:'אנא המתן'})
                this.$swal.showLoading()

         const res  = await axios.post(this.deleteUrl,JSON.stringify({'_id':this.report['_id']}),{
              headers:{
                Authorization:`Bearer ${sessionStorage.getItem('token')}`
              }
             })
         if (res.status == 200){
                   this.$swal.hideLoading()
            this.$swal({text:'הפריט נמחק בהצלחה'})
            if (this.isReadOnly){
              this.$router.push('/admin/pending')
            }else{
            this.$router.push('/admin')

            }
        }
      }
    },
   async handleEdit(){
      this.$swal({title:'מעדכן פריט',text:'אנא המתן'})
                this.$swal.showLoading()

         const res  = await axios.post(this.updateUrl,JSON.stringify({'_id':this.report['_id'],object:this.report}),{
              headers:{
                Authorization:`Bearer ${sessionStorage.getItem('token')}`
              }
             })
         if (res.status == 200){
                   this.$swal.hideLoading()
            this.$swal({text:'הפריט עודכן בהצלחה',timer:1000})
            this.$router.push('/admin')
        }

    },
      updateKenes(updatedData,type){
          if(type == 'supply' || type =='approver'){
                this.report.logistics[type] =updatedData
              return
          }else if (type =='leader' || type =='megish'){
              this.report.tohen[type] = updatedData
              return
          }
          this.report[type] =updatedData
          console.log(this.report)

      },
       async getReportById(){
        this.spinnerStarter = true;
        const reportResponse = await axios.get(this.url,{
        headers:{
          Authorization:`Bearer ${sessionStorage.getItem('token')}`
        }
       });
        this.report = reportResponse.data[0]; 
        console.log(this.report)
      
        this.personsObject['megish'] = {icon:'mdi-human-greeting-proximity',data:{...this.report.tohen.megish},job:'מגיש הבקשה'}
        this.personsObject['leader'] = {icon:'mdi-account-star',data:{...this.report.tohen.leader},job:'מוביל חומרים'}
        this.personsObject['approver'] = {icon:'mdi-account-check',data:{...this.report.logistics.approver},job:'גורם מאשר אישורי כניסה'}
        this.personsObject['supply'] =  {icon:'mdi-account-cog',data:{...this.report.logistics.supply},job:'אחראי אספקת ריהוט'}


        // this.report.date = moment(new Date(this.report.date),'L', 'he').format("יום dddd  D/M/y");
           this.isAuthenticated = true;
           this.isFinished = true
        
      }
  }
}
</script>

<style scoped> 
@media(max-width:480px){
   h6{
            margin-top: 20px !important;
        margin-bottom: 20px !important;
           /* color: var(--font-clr); */
    font-size: 3rem !important;
    /* text-align: center; */
    }
      h4{
        margin-top: 20px !important;
        margin-bottom: 20px !important;
    /* color: var(--font-clr); */
    font-size: 3.4rem !important;
    /* text-align: center; */
}
}
h4{
  margin-top: 50px;
  margin-bottom: 20px;
}
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
  flex-direction: column;;
  flex-wrap: wrap;
  max-width: 50rem;
  /* gap: 30px; */
  margin-bottom: 20px;
}
.btns-flex{
    margin-bottom: 20px;

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