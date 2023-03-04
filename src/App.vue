<template>
<v-app>
<router-view/>
</v-app>

</template>

<script>


export default {
  name: 'App',
  mounted(){
    


    sessionStorage.setItem('isAuthenticated',JSON.stringify(false))

  },
 methods: {

      changeRTL () {
        this.$vuetify.rtl = true
      },
    },
  components: {

  },

}
</script>


<style >



.q-field--filled .q-field__control:after{
    height: 0px !important;
}
.q-date__range-from:before {
    left: 0% !important;
        border-radius: 50% 0% 0%  50% !important

}
.q-date__range-to:before {
    right: 0% !important;
    border-radius: 0% 50% 50%  0% !important
}
.q-date__header{
  direction: rtl;

}
.q-date__navigation {
  direction: rtl;
}
.v-overlay{
  direction:rtl !important;
}
.v-window__controls {
 
    align-items: flex-start !important;

}
.v-btn--variant-elevated {
    background:  transparent !important;
    color: white !important;
}
 .v-text-field input   {
  color: white;
}
 .v-text-field label{
  color: white;
 }
@font-face {
  font-family: openSans;
  src: url(@/assets/OpenSansHebrew-Bold.ttf);
}
@font-face{  
  font-family: secondary;
  src: url(@/assets/FbElectronSans-Regular.woff);
}

body,html{
  font-family: openSans !important;
  min-height: 100vh;
  
}

*{
   margin:calc() !important;
}
:root{
    --main-clr: rgba(24, 114, 150);
    font-size: 16px;
  }
.v-application{
   
  
  background-position: 50% 50% !important;

  background-size: cover !important;
  background-repeat: no-repeat !important;

}
#app{
  /* min-width: 480px; */
  background-position: 70% 50%;

  background-size: cover;
  background-repeat: no-repeat;
}
 

 @media (max-width: 480px) {
   .inputs-container .checkboxes .v-label{
    font-size: 3.2rem;
        color: black;

} .inputs-container .checkboxes {
    font-size: 3.2rem;
        color: black;

}
        
      :root{ 

        font-size:5px !important;
      }
 }
@media (min-width: 1460px) {
         .inputs-container .checkboxes .v-label{
    font-size: 1.5rem;
        color: black;

} .inputs-container .checkboxes {
    font-size: 1.5rem;
        color: black;

}
        :root{ 

          font-size:14px;
          
        }

}
        .v-label{
  text-align: right !important;
}
</style>
