<template>
  <div v-if="isAuthenticated"> 
        <Nav/>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue"
import netlifyIdentity  from "netlify-identity-widget"
export default {
    name:'loginAdmin',
    components:{
        Nav
    },
    data(){
        return{
            isAuthenticated:false,
        }
    },
    beforeMount(){
        netlifyIdentity.init({
            locale:"he",
        logo: true // you can try false and see what happens
        });
        netlifyIdentity.on("login", async (user)=>{
                        this.isAuthenticated = true;

            const token =  await user.jwt()
            console.log(token)
            sessionStorage.setItem("token",token)
        })
         if(!localStorage.getItem('gotrue.user')){
            netlifyIdentity.open("login");
        }else{
            this.isAuthenticated = true;
            netlifyIdentity.close()
        }
    },
    mounted(){
       
    }

}
</script>

<style scoped>


</style>