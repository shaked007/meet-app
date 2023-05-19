<template>
<dialog @animationend.once="$refs.anim.play()" ref="dialog">  
    <h6> הבקשה הועלתה בהצלחה</h6> 
  <h5>ניצור עמכם קשר בהמשך</h5> 
  <lottie-animation
  ref="anim"
  :animationData="require('@/assets/success.json')"
  :loop="false"
  :autoPlay="false"
  :speed="1"
@complete="returnToMain"
/>  </dialog>
  <div class="flex-multi-form">
       <div class="form-carousel-container"> 
        <div class="wrapper-car"> 
        <q-carousel
        v-model="step"
        transition-prev="slide-right"
        animated
        transition-next="slide-left"
        :height="$isMobile? 'auto':'auto'"
        color="transparent"    
        control-color="rgb(74,87,96)"
        >
            <q-carousel-slide :name="1" class="">

               <GeneralStep :modelProp="formData[step]" @action="changeFormData" />
                              </q-carousel-slide>
  <q-carousel-slide :name="2" class="">

               <TohenStep   :modelProp="formData[step]"  @action="changeFormData" />
                              </q-carousel-slide>
            <q-carousel-slide  :modelProp="formData[step]"  :name="3" class="">

               <LogisticsStep   :modelProp="formData[step]"  @action="changeFormData" />
                              </q-carousel-slide>
                                <q-carousel-slide :name="4" class="">

               <FinalStep   :modelProp="formData[step]"  @back="changeFormData" @action="postForm" />
                              </q-carousel-slide>
        </q-carousel>
        </div>
    </div> 
    <div class="blue-stripe"> 

        <img class="icon" v-if="!$isMobile" :src="require('@/assets/logo.png')">
        <div class="container-flex"> 
        <q-stepper
        ref="stepper"
         :alternative-labels="$isMobile"
        v-model="step"
    color="#187296"
        :vertical="!$isMobile"
        animated
        class="back-clr"
    
        
        >
        <q-step
        :name="1" 
         title="שלב ראשון"
         
        >
        פרטים כלליים
             </q-step>
                <q-step 
                        title="שלב שני"

        :name="2"

        >
            אנשי קשר תוכן
             </q-step>
                <q-step
        :name="3"
        
                        title="שלב שלישי"

        >
אנשי קשר לוגיסטיקה
             </q-step>
                  <q-step
        :name="4"
        
                        title="שלב רביעי"

        >
פרטים נוספים
             </q-step>
        </q-stepper>
        
        </div>
                    <router-link  class="route-back-btn" to="/" v-if="!$isMobile">   למסך הבית  <v-icon>mdi-home </v-icon> </router-link>
    </div>
    <img class="zameret-img" v-if="!$isMobile" :src="require('@/assets/383zameret.png')" > 

    <div> 
    </div>
 
  </div>

</template>

<script>
import GeneralStep from '@/components/RequestSteps/GeneralStep.vue'
import TohenStep from "@/components/RequestSteps/TohenStep.vue"
import LogisticsStep from "@/components/RequestSteps/LogisticsStep.vue"
import { scroll } from 'quasar'
import axios from "axios"
import moment from "moment"

import FinalStep from "@/components/RequestSteps/FinalStep.vue"


export default {
    data(){
        return{
            postUrl:'/.netlify/functions/post_request',
            mailUrl:'/.netlify/functions/send_email',
            formData:{"1":"","2":'',"3":'','4':''},
            step:1
        }
    },
    methods:{
    
        returnToMain(){
            this.$router.push('/')
        },
      async  postForm(data){
            console.log(data)
            this.formData[this.step] = {...data}
            var storageData ={}
            storageData['general'] = {...this.formData['1']}
            storageData['tohen'] = {...this.formData['2']}
            storageData['logistics'] = {...this.formData['3']}
            storageData['final'] = {...this.formData['4']}
      
           this.formData = {...storageData}
           this.formData['isAuthorized'] = false;
            this.formData['date'] = new Date();
            console.log(this.formData)
            this.$swal({title:'מעלה דוח',text:'אנא המתן'})
                this.$swal.showLoading()
      const postResponse = await axios.post(this.postUrl,JSON.stringify(this.formData),{
        headers:{
            'Content-Type': 'application/json'
        }
      })
      if(postResponse.status== 200){
          

            const mailResponse = await axios.post(this.mailUrl,JSON.stringify({
                    'contact-email':this.formData['final']['contact-email'],
                    'kenes-name':this.formData['general']['kenes-name'],
                    'megish':this.formData['tohen']['megish']['full-name'],
                    'submitted-date':moment(new Date(),'L', 'he').format("יום dddd  D/M/y")
            }))
            if(mailResponse.status == 200){
                this.$swal.hideLoading()
                        this.$swal.close()
                            this.$refs.dialog.showModal()
                            this.$refs.dialog.classList.add("ani-class")
                }

            }
        
        },
        changeFormData(action,data){
           
                if(action =='next'){
                   this.formData[this.step] = {...data}
                    this.step++;
            
                }else if(action == 'back'){
                        this.formData[this.step] = {...data}

                    this.step--;
                }
        }
    },
    components:{
        GeneralStep,
        TohenStep,
        FinalStep,
        LogisticsStep
    },
    name:"StepFormContainer"
}
</script>

<style scoped>
@media (max-width:480px){
    .wrapper-car{
    position: relative;
    width: 800px;
    margin-top: 0px !important;
}
    dialog{
  opacity: 0;
  text-align: center;
  direction: ltr !important;
  width: 320px;
  
  position: fixed;
  top: 50%;
  z-index: 100;
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
  height: 50% !important;
  border: none;
  border-radius: 20px;
  left: 50%;
  transform: translate(50%,-50%) scale(0.8);
}
    
    dialog h5{
 
  text-align: center;
  color: grey;
  font-size: 3rem !important; 
}
    dialog h6{
        margin-top: 20px !important;
           margin-bottom: 20px !important;
  text-align: center;
  color: black;
  font-size: 4rem !important; 
}
    .inputs-container{
        margin-bottom: 0px !important;
        gap: 0px !important;
        align-items: center !important;
        width: 330px !important;
    }
    .wrapper-car{
        width: 100% !important;
    }
    .form-carousel-container{
        width: 100% !important;
    }
    .container-flex{
    margin-bottom:0px !important;
    width: 100% !important;
        position: relative !important;
        left: 0 !important;
        top: initial !important;
        transform: translate(0) !important;
    }
    .blue-stripe{
           text-align: center;
    position: relative;
    /* height: 100%; */
    width: auto !important;
    }
    .flex-multi-form{
    font-family: openSans !important;
    display: flex;
    height: 100%;
    flex-direction: column-reverse;
    justify-content: space-between;
}

}
.route-back-btn{
       font-size: 2rem;

       padding: 0.5em 1em;
    /* position: absolute; */
    /* left: 0%; */
    color: var(--main-clr);
/* top:58%; */
    /* left: 50%; */
    box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    /* transform: translateX(-50%); */
    display: inline-block;
    padding: 0.5em 1em;
    text-decoration: none;
    transition: all 0.2s ease-in;
    /* font-size: 1rem; */
      background-color:white;
}

.wrapper-car{
    position: relative;
    width: 800px;
    margin-top: 45px;
}
.form-carousel-container{
    width: 60%;
    display: flex;
    justify-content: center;
    /* align-items: center; */
}
.header{
    color: green !important;
    font-size: 4rem;
}
.icon{
    margin-bottom: 100px;
    position: relative;
    /* top: 50px; */
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
}
.container-flex{
    margin: 0 auto;
    width: 180px ;
    margin-bottom: 205px;
}
.zameret-img{
    position: absolute;
    top: 80%;
    width: 220px;
    left: 60%;
        transform: translate(-50%,-50%);

    /* left: 37.8%; */
    height: 280px !important;
}
.back-clr{
    
    /* font-size: 1.5rem; */
    /* font-weight:600; */
    color: var(--main-clr);
       
    
        /* justify-content: center; */
        font-family: var(--main-font) !important;
}
.blue-stripe{
    text-align: center;
    position: relative;
    height: 100%;
    width: 40%;
    background-color: var(--main-clr);
}
.flex-multi-form{
    font-family: openSans !important;
    display: flex;
    height: 100%;
    justify-content: space-between;
}
.ani-class{
  animation: zoom 0.3s ease-in-out forwards;
  
}
@keyframes zoom{
  0%{
    opacity: 0;
    transform:translate(50%,-50%) scale(0.8) ;
    
  }
  100%{
    opacity: 1;
    transform: translate(50%,-50%)  scale(1);
  }
  
}
dialog h5{
  text-align: center;
  color: grey;
  font-size: 1rem;
}
dialog{
  opacity: 0;
  text-align: center;
  direction: ltr !important;
  width: 320px;
  
  position: fixed;
  top: 50%;
  z-index: 100;
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
  height: 45%;
  border: none;
  border-radius: 20px;
  left: 50%;
  transform: translate(50%,-50%) scale(0.8);
}
dialog::backdrop {
  background-color: rgba(0,0,0,0.7);
}
</style>