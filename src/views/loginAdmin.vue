<template>
  
</template>

<script>
import netlifyIdentity  from "netlify-identity-widget"
export default {
    name:'loginAdmin',
    beforeMount(){
        netlifyIdentity.init({
            locale:"he",
        logo: true // you can try false and see what happens
        });
        netlifyIdentity.on("login", async (user)=>{
            const token =  await user.jwt()
            console.log(token)
            sessionStorage.setItem("token",token)
        })
    },
    mounted(){
        netlifyIdentity.open("login");
    }

}
</script>

<style scoped>


</style>