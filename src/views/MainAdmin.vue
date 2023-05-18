<template>
  <Nav :activeLink="'requests'" />
  <br>
  <br>
  <br>
    <h1> רשימת כנסים</h1>
    <div class="spinner-container" v-if="!isAuthenticated" >
       <v-progress-circular 
      indeterminate
      color="blue"
      size="90"
    ></v-progress-circular>
</div>
  <div class="knasim-flex" v-if="isAuthenticated">
        <KenesCard v-for="kenes in knasim" :kenesLocation="kenes.general.location" :kenesId="kenes._id" :kenesDate="kenes.general.date" :kenesLeader="kenes.general.leader" :kenesName="kenes.general['kenes-name']"   :key="kenes._id" />
    </div> 
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

.knasim-flex{
  width: 100%;
      gap: 15px;

  max-width: 90rem;
    display: flex;
    margin:0 auto;
    flex-flow: row wrap;
}
h1{
  font-family:var(--font-bold);
  margin-bottom: 5rem;
  text-align: center;
}

</style>