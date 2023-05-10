<template>
  <Nav :activeLink="'requests'" />
</template>

<script>
import Nav from "@/components/Nav.vue"
import axios from "axios"
export default {
    components:{
        Nav
    },
    async beforeMount(){
        
    }
}                                              
</script>

<style scoped>

</style>