<template>
<v-app>
<router-view />
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

.q-expansion-item__content > .q-card{
  background-color: rgba(0,0,0,0) !important;
}
.q-stepper__tab--active{
  color: var(--main-clr) !important;
}
.q-gutter-x-sm{
  margin-left: -16px !important;
}
.q-carousel {
    background-color:transparent !important;
}
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
@font-face {
  font-family: openSansBold;
  src: url(@/assets/opensansbold.woff2);
}
@font-face{  
  font-family: secondary;
  src: url(@/assets/FbElectronSans-Regular.woff);
}

body,html{
  overflow-y: auto  !important;
  scroll-behavior: smooth;
  font-family: openSans !important;
  min-height: 100vh;
  
}

*{
   margin:calc() !important;
}
:root{
  --main-font:openSans;
  --font-clr:  rgb(74,87,96);
    --main-clr: rgb(24, 114, 150);
    font-size: 16px;
    --font-bold:openSansBold;
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
  .swal2-popup{
    font-size: 2rem !important;
  }
  .q-stepper {
    box-shadow: none !important;
    border-radius: 0px !important;
    background: rgb(250,250,250) !important;
}
  .q-stepper--horizontal .q-stepper__step-inner {
    padding: 24px;
    font-size: 5rem;
    color: var(--main-clr);
}
  .q-stepper__header--alternative-labels .q-stepper__tab{
    padding: 24px 0px !important;
  }
      .checbox-forms{
            position: relative;
            right: 6%;
        }
   .inputs-container .checkboxes .v-label{
    font-size: 3.2rem;
            text-align: left !important;

        color: black;

} .inputs-container .checkboxes {
    font-size: 3.2rem !important;

        color: black;

}
        
      :root{ 

        font-size:5px !important;
      }
 }
@media (min-width: 1000px) {
      .checbox-forms{
            position: relative;
            right: 3%;
        }
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
@media print{
   h4{
    margin-top: 0.3rem !important;
  }
  h1{
    margin-bottom: 0.8rem !important;
  }
  .btns-flex{
    display: none !important;
  }
  *{
    opacity: 1 !important;
    color: black !important;
  }

  .non-printable-persons{
    display: none !important;
  }
  .edit-btn-container{
    display: none !important;
  }
  .non-printable{
    display: none !important;
  }
  .printable-persons{
  display: block !important;
}
  [dir="rtl"] .q-gutter-x-sm > *, [dir="rtl"] .q-gutter-sm > * {
    margin-right: 16px !important;
}
  [dir="rtl"] .q-field__label {
    right: 0 !important;
    /* transform: translateX(0px) translateY(-10px) !important; */
    transform-origin: right top !important;
}
  *{
    opacity: 1 !important;
    color: black !important;
  }

  .non-printable-persons{
    display: none !important;
  }
  .edit-btn-container{
    display: none !important;
  }
  .non-printable{
    display: none !important;
  }
  .printable-persons{
  display: block !important;
}
}
</style>
