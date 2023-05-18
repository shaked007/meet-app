<template>
  <Nav :activeLink="'pending'" />
  <br>
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
<table> 
                    <thead>
                        <tr>
                                   <th >מחיקה </th>
                              <th> דוח</th>
                            <th>נהג</th>
                            <th> תאריך </th>
                                                     

                        </tr>
                    </thead>
                    <tbody> 
                        <tr v-for="kenes in knasim" :key="kenes['_id']">
                                                            <td ><button class="link-to-report" > מחק </button></td>

                            <td> <router-link class="link-to-report" :name="kenes._id" :to="'/kenes/pending'+kenes['_id']">לצפייה </router-link></td>
                            <!-- <td>{{drive['driver']}} </td>
                            <td>{{drive.date}} </td> -->
                             </tr>
                    </tbody>
                                    </table>
  <!-- <div class="knasim-flex" v-if="isAuthenticated">
        <KenesCard v-for="kenes in knasim" :kenesLocation="kenes.general.location" :kenesId="kenes._id" :kenesDate="kenes.general.date" :kenesLeader="kenes.general.leader" :kenesName="kenes.general['kenes-name']"   :key="kenes._id" />
    </div>  -->
</template>

<script>
import KenesCard from "@/components/KenesCard.vue" 
import Nav from "@/components/Nav.vue"
import axios from "axios"
export default {
  data(){
    return{
      isAuthenticated:false,
      getAllUrl:'/.netlify/functions/fetch_all',
      knasim:[],
    }
  },
    components:{
      KenesCard,
        Nav
    },
    async mounted(){
      
       const response = await axios.get(this.getAllUrl,{
        headers:{
          Authorization:`Bearer ${sessionStorage.getItem('token')}`
        }
       })
       this.knasim = response.data
       this.knasim = this.knasim.filter((kenes)=>{
          return !kenes.isAuthorized
       })
       console.log(this.knasim)
       this.isAuthenticated = true
    }
}                                              
</script>

<style scoped>
@media(max-width:480px){
.knasim-flex{
  gap: 30px !important;
  justify-content: center;
}
}

.spinner-container{
  text-align: center;
}
table th, table td{ /* Added padding for better layout after collapsing */
    padding: 4px 8px;
}
table thead tr th{
    width: 80px;
    text-align: center;
    font-size: 1.2rem;
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
table{
  /* font-family: var(--main-font); */
  border-collapse: collapse;
    table-layout: fixed;
    text-align: center;
    margin: 0 auto;
    /* color: white; */
  padding: 20px;
  font-size: 1.4rem !important;
  max-width: 80rem;
  width: 50%;
  margin: 0 auto;
  /* width: ; */
  /* margin: 0 auto; */
}
h1{
  font-family:var(--font-bold);
  margin-bottom: 5rem;
  text-align: center;
}

</style>