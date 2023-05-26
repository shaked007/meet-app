<template>
  <Nav :activeLink="'requests'" />
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
  <div class="knasim-flex" v-if="isAuthenticated && !knasim.length">
        <KenesCard v-for="kenes in knasim" :kenesLocation="kenes.general.location" :kenesId="kenes._id" :kenesDate="kenes.general.date" :kenesLeader="kenes.general.leader" :kenesName="kenes.general['kenes-name']"   :key="kenes._id" />
    </div> 
    <h3 v-if="isAuthenticated && !knasim.length">לא קיימים כנסים </h3>

</template>

<script>
import KenesCard from "@/components/KenesCard.vue" 
import Nav from "@/components/Nav.vue"
import axios from "axios"
export default {
  data(){
    return{
      isAuthenticated:false,
      getAuthorized:'/.netlify/functions/fetch_authorized',
      knasim:[],
    }
  },
    components:{
      KenesCard,
        Nav
    },
    async mounted(){
      
       const response = await axios.get(this.getAuthorized,{
        headers:{
          Authorization:`Bearer ${sessionStorage.getItem('token')}`
        }
       })
       this.knasim = response.data
       console.log(this.knasim)
       this.knasim.sort((a,b)=>new Date(a.general.date.from).getTime()-new Date(b.general.date.from).getTime());
       this.knasim = this.knasim.filter((kenes)=>{
        return new Date(kenes.general.date.from) > new Date() ||  new Date(kenes.general.date.to) > new Date() })


   
       console.log(this.knasim)
       this.isAuthenticated = true
    }
}                                              
</script>

<style scoped>
@media(max-width:480px){
  h3{
  font-size: 3rem !important;
  text-align: center;
}
h1{
    font-size: 5rem !important;

  font-family:var(--font-bold);
  margin-bottom: 7rem !important;
  text-align: center;
}
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
h3{
  font-size: 1.5rem;
  text-align: center;
}

h1{
    font-size: 4rem;

  font-family:var(--font-bold);
  margin-bottom: 2rem;
  text-align: center;
}
</style>