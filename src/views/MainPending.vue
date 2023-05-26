<template>
  <Nav :activeLink="'pending'" />
  <br>
  <br>
    <h1> ממתינים לאישור</h1>
    <div class="spinner-container" v-if="!isAuthenticated" >
       <v-progress-circular 
      indeterminate
      color="blue"
      size="90"
    ></v-progress-circular>
</div>
<table v-if="isAuthenticated && knasim.length"> 
                    <thead>
                        <tr>
                          <th v-if="!$isMobile"> </th>
                                   <th> שם הכנס</th>
                              <th> תאריך הכנס</th>
                            <th> תאריך הבקשה</th>
                            <th>  מגיש הבקשה</th>
                            <th> לבקשה המלאה</th>                         

                        </tr>
                    </thead>
                    <tbody> 
                        <tr v-for="kenes in knasim" :key="kenes['_id']">
                          <td v-if="!$isMobile" >   
                            <div class="action-btn-flex"> 
                            <q-btn :size="'md'" round color="red" @click="handleDelete(kenes['_id'],kenes.general['kenes-name'])"  icon="delete" />
                   <q-btn @click="handleAuthorized(kenes['_id'])" round :size="'md'"  color="green" icon="mdi-check" />
                            </div>
                  </td>
                                                            <td >{{kenes.general['kenes-name']}} </td>
                              <td v-if="kenes.general.date.to  != kenes.general.date.from">     {{kenes.general.date.to}} - {{kenes.general.date.from}} 
                              </td>
                              <td v-else> {{kenes.general.date.to}}  </td>
                              <td> {{kenes.date}} </td>
                              <td> {{kenes.tohen.megish['full-name']}}</td>

                            <td> <router-link class="link-to-report" :name="kenes._id" :to="'/kenes/pending/'+kenes['_id']">לצפייה </router-link></td>
                            <!-- <td>{{drive['driver']}} </td>
                            <td>{{drive.date}} </td> -->
                             </tr>
                    </tbody>
                                    </table>
        <h3 v-if="isAuthenticated && !knasim.length"> לא קיימות בקשות  </h3>
  <!-- <div class="knasim-flex" v-if="isAuthenticated">
        <KenesCard v-for="kenes in knasim" :kenesLocation="kenes.general.location" :kenesId="kenes._id" :kenesDate="kenes.general.date" :kenesLeader="kenes.general.leader" :kenesName="kenes.general['kenes-name']"   :key="kenes._id" />
    </div>  -->
</template>

<script>
import KenesCard from "@/components/KenesCard.vue" 
import Nav from "@/components/Nav.vue"
import axios from "axios"
import moment from "moment"
export default {
  data(){
    return{
      isAuthenticated:false,
    deleteUrl:"/.netlify/functions/delete_report",
      updateUrl:"/.netlify/functions/update_report",
      getUnauthorized:'/.netlify/functions/fetch_unauthorized',
      knasim:[],
    }
  },
  methods:{

      async handleAuthorized(id){
        this.$swal({title:'מאשר פריט',text:'אנא המתן'})
                this.$swal.showLoading()

         const res  = await axios.post(this.updateUrl,JSON.stringify({'_id':id,object:{isAuthorized:true}}),{
              headers:{
                Authorization:`Bearer ${sessionStorage.getItem('token')}`
              }
             })
         if (res.status == 200){
                   this.$swal.hideLoading()
            this.$swal({text:'הפריט אושר בהצלחה',timer:1000})
              this.knasim  =this.knasim.filter(kenes=>{
              return kenes['_id'] != id
             })
            // this.$router.push('/admin')
        }

    },
     async handleDelete(id,kenes){
       const outcome = await this.$swal({
          icon:'warning',
          title:` בטוח שברצונך למחוק את הבקשה ל : ${kenes}?`,
          text:'לא תוכל להחזיר פעולה זו ',
          showCancelButton:true,
          confirmButtonColor:'red',
          confirmButtonText:'מחק',
          cancelButtonText:'בטל'
        })
        if(outcome.isConfirmed){
          this.$swal({title:'מוחק פריט',text:'אנא המתן'})
                this.$swal.showLoading()

         const res  = await axios.post(this.deleteUrl,JSON.stringify({'_id':id}),{
              headers:{
                Authorization:`Bearer ${sessionStorage.getItem('token')}`
              }
             })
         if (res.status == 200){
                   this.$swal.hideLoading()
            this.$swal({text:'הפריט נמחק בהצלחה'})
             this.knasim  =this.knasim.filter(kenes=>{
              return kenes['_id'] != id
             })
            // this.$router.push('/admin')
        }
      }
    },
  },
    components:{
      KenesCard,
        Nav
    },
 
    async mounted(){
      
       const response = await axios.get(this.getUnauthorized,{
        headers:{
          Authorization:`Bearer ${sessionStorage.getItem('token')}`
        }
       })
       this.knasim = response.data
      
       this.knasim.forEach(kenes=>{
            kenes.general.date.from = moment(new Date( kenes.general.date.from),'L', 'he').format("D/M")
           kenes.general.date.to = moment(new Date( kenes.general.date.to),'L', 'he').format("D/M")
            kenes.date = moment(new Date(kenes.date),'L', 'he').format("D/M");

        })
       console.log(this.knasim)
       this.isAuthenticated = true
    }
}                                              
</script>

<style scoped>
.action-btn-flex{
  display:flex;
  gap:10px;
  justify-content: center;
}
h3{
  font-size: 1.5rem;
  text-align: center;
  font-size:1.5rem;
}
.link-to-report{
    display: inline-block;
    font-size: 0.8rem;
    padding: 0.5em 1em;
    background-color: var(--main-clr);
    color: white;
    text-decoration: none;
    border-radius: 20px;
}
@media(max-width:480px){
    h3{
  font-size: 3rem !important;
  text-align: center;
}
h1{
    font-size: 6rem !important;

  font-family:var(--font-bold);
  margin-bottom: 6rem !important;
  text-align: center;
}
  .link-to-report{
    display: inline-block;
    font-size: 2rem !important;
    padding: 0.5em 1em;
    background-color: var(--main-clr);
    color: white;
    text-decoration: none;
    border-radius: 20px;
}
table{
  table-layout: initial !important;
  font-size: 3.4rem !important;
  width: 90% !important;
  min-width: 340px !important;
}
table thead tr th{
    /* width: 80px; */
    text-align: center;
    font-size: 3rem !important;
    border-bottom: 1px solid grey;
}
table thead tr {
    /* width: 80px; */
    text-align: center;
    font-size: 3rem !important;
    border-bottom: 1px solid grey;
}

}

.spinner-container{
  text-align: center;
}
table th, table td{ /* Added padding for better layout after collapsing */
    padding: 8px 8px;
}
table thead tr th{
    /* width: 80px; */
    text-align: center;
    font-size: 1.4rem;
    border-bottom: 1px solid grey;
}
tr{
      border-bottom: 1px solid grey;

}
table thead tr {
    /* width: 80px; */
    text-align: center;
    font-size: 1.4rem;
    border-bottom: 1px solid grey;
}
.knasim-flex{
  width: 100%;
      gap: 15px;

  max-width: 90rem;
    display: flex;
    margin:0 auto;
    flex-flow: row wrap;
}
tr{
  padding: 10px;
}
td{
  padding:5px;
  font-weight:600;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgba(87, 87, 87, 0.849);
}
table{
  /* font-family: var(--main-font); */
  border-collapse: collapse;
    table-layout: fixed;
    text-align: center;
    margin: 0 auto;
    /* color: white; */
  padding: 20px;
  font-size: 1.4rem ;
  max-width: 100rem;
  width: 70%;
  margin: 0 auto;
  /* width: ; */
  /* margin: 0 auto; */
}


h1{
    font-size: 4rem;

  font-family:var(--font-bold);
  margin-bottom: 2rem;
  text-align: center;
}
</style>