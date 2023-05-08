<template>

</template>

<script>
import Nav from "@/components/Nav.vue"
import netlifyIdentity  from "netlify-identity-widget"
export default {
    name:'loginAdmin',
  
    data(){
        return{
        }
    },
    beforeMount(){
        netlifyIdentity.init({
            locale:"he",
        logo: true // you can try false and see what happens
        });
        netlifyIdentity.on("login", async (user)=>{
            

            const token =  await user.jwt()
            console.log(token)
            sessionStorage.setItem("token",token)
            this.$router.push('/admin')
            console.log('d')
        })
         if(!localStorage.getItem('gotrue.user')){
            netlifyIdentity.open("login");
        }else{
            netlifyIdentity.close()
            this.$router.push('/admin')
            console.log('d')

        }
    },
    mounted(){
       
    }

}
</script>

<style scoped>


</style>