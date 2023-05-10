<template>
  <Nav :activeLink="'requests'" />
  <br>
  <br>
  <br>
  <div class="knasim-flex">
        <KenesCard v-for="kenes in knasim"  :kenesName="kenes.general['kenes-name']"   :key="kenes._id" />
    </div> 
  <h1> רשימת כנסים</h1>
</template>

<script>
import KenesCard from "@/components/KenesCard.vue" 
import Nav from "@/components/Nav.vue"
import axios from "axios"
export default {
  data(){
    return{
      getAllUrl:'/.netlify/functions/fetch_all',
      knasim:[],
    }
  },
    components:{
      KenesCard,
        Nav
    },
    async beforeMount(){
       const response = await axios.get(this.getAllUrl,{
        headers:{
          Authorization:`Bearer ${sessionStorage.getItem('token')}`
        }
       })
       this.knasim = response.data
       console.log(this.knasim)
    }
}                                              
</script>

<style scoped>
h1{
  text-align: center;
}

</style>