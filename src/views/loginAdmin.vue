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
    },
    mounted(){
        netlifyIdentity.open("login");
    }

}
</script>

<style scoped>


</style>