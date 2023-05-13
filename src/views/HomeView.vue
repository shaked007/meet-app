<template>
<div  v-if="!$isMobile" class="flex-of-page"> 


   <div class="hero-section"> 
    <div class="melel-container"> 

<h1 class="main-title"> MeetApp</h1>
<!-- <FormView  v-if="isFormView" />
<ReportView :urlParams="urlParams" v-if="isReportView" /> -->

<div class="links-flex">
    <router-link v-ripple  class="report" to="/terms-and-conditions">להזמנת כנס </router-link>
  <router-link class="history" to="login"> לצפייה בכנסים</router-link>

   </div>
</div>
</div>
</div>
<div v-if="$isMobile" class="mobile-layout-container">
   <div class="melel-container"> 

<h1 class="main-title"> MeetApp</h1>

    <router-link v-ripple  class="report" to="/terms-and-conditions"><div class="icon-and-text-flex"><v-icon size="100">mdi-calendar-plus </v-icon>להזמנת כנס </div></router-link>
  <router-link class="history" to="login"> לצפייה בכנסים</router-link>

</div>
   </div>
<!-- <img :src="require('../assets/383zameret.png')">  -->
</template>

<script>


export default {
  name: 'homeView',
  data(){
    return{
      isMobile:"",
      isFormView:false,
      isReportView:false,
      urlParams:""
    }
  },
  methods:{


     
    checkViewToRender(){
   
        const url = window.location.href;
      
        if(url.includes('?')){
        
            this.urlParams = url.split('?')[1];
            this.isReportView = true;
        }else{
          this.isFormView = true;
        }

    } 

    
  },
    beforeMount(){
      // this.checkViewToRender()
    },
    components:{
     
      
    }
  
}
</script>

<style scoped>

 @media (max-width: 480px) {
      .mobile-layout-container{
        position: relative;
      background: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.7) 20%,
 rgba(0, 0, 0, 0.7) 20%
  ), url(@/assets/kenes3.jpeg) !important;
    background-position: 60% 50% !important;
  background-size: cover !important;
  height: 100%;
  background-repeat: no-repeat !important;
}
.melel-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 30px;
  position: relative !important;
 
}
.icon-and-text-flex{
  display: flex;
  height: 190px;
  justify-content: space-evenly;
  transform: translate(-18%,0);
  width: 140px;
  top: -40px;
  position: relative;
  flex-direction: column;
  align-items: center;
}
.history{
  display: inline-block;
  background-color:white;
  border-radius: 25px;
  padding:0.5em 1em;
    font-size: 4rem;

  text-decoration: none;
  color:var(--main-clr) ;
}
.report{
  display: block;
  font-size: 4rem;
  /* box-shadow: rgb(24, 114, 150) 0px 2px 4px 0px, rgb(24, 114, 150) 0px 2px 16px 0px; */

  width: 250px;
  height: 250px;
  margin-bottom: 50px;
  border-radius: 50%;
  color: white;
  text-decoration: none;
  padding: 4em;
  background-color:var(--main-clr) ;
}
 .main-title{
  position: relative;
  letter-spacing: 6px;
  text-align: center;
  font-size: 10rem;
  margin-top: 30px;
  margin-bottom: 200px;
  font-weight: 800;
  color:white;
}
.main-title::before{
    font-size: 2.8rem;
    letter-spacing: 7px;
    /* font-style: italic; */
    position: absolute;
    top:150%;
    /* left: 3%; */
  content:'קל לקבוע כנס רמטכ"ל'
}
 }
  @media   (min-width: 480px) and (max-width:1400px) {
     .melel-container{
        position: absolute;
        height: 50%;
        left: 55%;
        transform: translate(-45%,0) !important;
        top: 15%;
}
  }
 @media   (min-width: 1000px) and (max-width:3000px) {
    .melel-container{
  position: absolute;
  height: 50%;
  left: 55%;
  transform: translate(-50%,0);
  top: 15%;
}
.illustration-section{
  width: 60%;
  height: 100%;

}
.flex-of-page{
  direction: rtl !important;
  display: flex;
  flex-direction: row;
     background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.7) 20%,
  var(--main-clr)
  ), url(@/assets/kenes3.jpeg) !important;
  
  background-position: 50% 50% !important;

  background-size: cover !important;
  background-repeat: no-repeat !important;
  justify-content: flex-end;
   height: 100%;
  width: 100%;
}
.hero-section{
  
  position: relative;
  height: 100%;
  width: 60%;
}
.printer-link{
  position: relative;
  top: 100%;
  display: inline-block;
  color: white;
  background-color: black;
  text-decoration: none;
  outline: none;
  border-radius: 20px;
  padding: 0.5em 1em;
}
.print-icon-container{
  color: white;
  text-align: center;


}
.print-icon-container button{
    border-radius: 50%;
  
    padding: 1em;
    background-color: rgba(0, 0, 0, 0.76);
} 
.links-flex .report{
  color:white;
  display: inline-block;
  background-color: var(--main-clr);
  /* border-radius: 20px; */
  transition: all 0.2s ease-in;
  padding:0.5em 1em;
  text-decoration:none;
}
.links-flex .report:hover{
  box-shadow: var(--main-clr) 0px 2px 4px 0px, var(--main-clr) 0px 2px 16px 0px;
  color: rgb(24, 114, 150) ;
  background-color: white;
 }
.links-flex .history{
  color:white;
  /* border: 1px solid grey; */
  display: inline-block;
  /* background-color: rgba(128, 128, 128, 0.753); */
  transition: all 0.2s ease-in-out;
  padding:0.5em 1em;
  text-decoration:none;
}
.links-flex .history:hover{
  color:white;
  /* border: 1px solid grey; */
  display: inline-block;
  background-color: rgba(128, 128, 128, 0.473);
  padding:0.5em 1em;
  text-decoration:none;
}
.links-flex{
  font-size: 2rem;
  /* margin-top: 40px; */
  display: flex;
  flex-direction: row;
  /* gap: 50px;
  padding-right: 70px; */
  justify-content: space-around;
}
img{
  position: absolute;
  bottom: 10%;
  height:180px;
  width: 140px;
  left: 50%;
  transform: translate(-50%,0);
}
.main-title{
  position: relative;
  letter-spacing: 6px;
  text-align: center;
  font-size: 10rem;
  margin-top: 20px;
  margin-bottom: 100px;
  font-weight: 800;
  color:white;
}
.main-title::before{
    font-size: 2.5rem;
    letter-spacing: 7px;
    /* font-style: italic; */
    position: absolute;
    top:88%;
    right: 3%;
  content:'קל לקבוע כנס רמטכ"ל'
}

 
 }


</style>
