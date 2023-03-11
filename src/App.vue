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

input[type=number] {
  -moz-appearance: textfield;
  appearance: textfield;
}

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
  --main-font:openSans;
  --font-clr:  rgb(74,87,96);
    --main-clr: rgba(24, 114, 150);
    font-size: 16px;
  }
.v-application{
   
  
  background-position: 50% 50% !important;
  background-color: rgb(250,250,250);

  background-size: cover !important;
  background-repeat: no-repeat !important;

}
#app{

}
 

 @media (max-width: 480px) {
   .inputs-container .checkboxes .v-label{
    /* font-size: 3.2rem; */
            text-align: left !important;

        color: black;

} .inputs-container .checkboxes {
    font-size: 3.2rem;

        color: black;

}
        
      :root{ 

        font-size:5px !important;
      }
 }
@media (min-width: 1000px) {
  .q-field--with-bottom {
    padding-bottom: 0px !important;
}
.q-field__label {
  font-size: 0.8rem !important;
}
         .inputs-container .checkboxes .v-label{
    font-size: 1.2rem;
                text-align: left !important;

        color: black;

} .inputs-container .checkboxes {
    font-size: 1.2rem;
    text-align: right !important;
        color: black;

}
        

}
        .v-label{
  text-align: right !important;
}
</style>
