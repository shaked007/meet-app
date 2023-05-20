<template>

</template>

<script>
import Nav from "@/components/Nav.vue"
import netlifyIdentity  from "netlify-identity-widget"
import { SessionStorage } from 'quasar'
export default {
    name:'loginAdmin',
  
    data(){
        return{
        }
    },
    methods:{
        asyncParse(str){
            return new Promise((res,rej)=>{
                res(JSON.parse(str))
            })
        }
    },
      async beforeMount(){
        netlifyIdentity.init({
            locale:"he",
        logo: true // you can try false and see what happens
        });
        netlifyIdentity.on("login", async (user)=>{
            

            const token =  await user.jwt()
            sessionStorage.setItem("token",token)
            this.$router.push('/admin')
        })
         if(!localStorage.getItem('gotrue.user')){
            netlifyIdentity.open("login");
            const urlArr= window.location.href
            if(urlArr.includes('redirect')){
                window.location.href = urlArr.split('=')[1]
            }else{
                 this.$router.push('/admin')

            }
        }else{
            netlifyIdentity.close()
            const parsedResponse = await this.asyncParse(localStorage.getItem('gotrue.user'))
            sessionStorage.setItem('token',parsedResponse.token.access_token)
                             this.$router.push('/admin')

       


        }
    },
    mounted(){
       
    }

}
</script>

<style scoped>


</style>