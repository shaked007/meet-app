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
        height="800px"
        color="transparent"    
        control-color="rgb(74,87,96)"
        >
            <q-carousel-slide :name="1" class="">

               <GeneralStep @action="changeFormData" />
                              </q-carousel-slide>
  <q-carousel-slide :name="2" class="">

               <TohenStep  @action="changeFormData" />
                              </q-carousel-slide>
            <q-carousel-slide :name="3" class="">

               <LogisticsStep  @action="changeFormData" />
                              </q-carousel-slide>
                                <q-carousel-slide :name="4" class="">

               <FinalStep  @action="postForm" />
                              </q-carousel-slide>
        </q-carousel>
        </div>
    </div> 
    <div class="blue-stripe"> 

        <img :src="require('@/assets/logo.png')">
        <div class="container-flex"> 
        <q-stepper
        ref="stepper"
        v-model="step"
        vertical
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
                    <router-link  class="route-back-btn" to="/" v-if="!$isMobile">  חזרה למסך הבית  <v-icon>mdi-home </v-icon> </router-link>

    </div>
    <div> 
    </div>
 
  </div>

</template>

<script>
import GeneralStep from '@/components/GeneralStep.vue'
import TohenStep from "@/components/TohenStep.vue"
import LogisticsStep from "@/components/LogisticsStep.vue"
import FinalStep from "@/components/FinalStep.vue"


export default {
    data(){
        return{
            formData:[],
            step:1
        }
    },
    methods:{
        returnToMain(){
            this.$router.push('/')
        },
      async  postForm(data){
            this.formData.push(data)
            console.log(this.formData)
           this.$swal({title:'מעלה דוח',text:'אנא המתן'})
                this.$swal.showLoading()
    //   const response = await axios.post(this.currentUrl,JSON.stringify(data))
    //   if(response.status== 200){
            this.$swal.hideLoading()
            this.$swal.close()
                this.$refs.dialog.showModal()
                this.$refs.dialog.classList.add("ani-class")
    //   }

        },
        changeFormData(action,data){
                if(action =='next'){
                    this.formData.push(data)
                    this.step++;
                }else if(action == 'back'){
                        this.formData.pop()
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
.route-back-btn{
    position: absolute;
    left: 0%;
    color: var(--main-clr);
top: 80%;
    left: 50%;
    box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    transform: translateX(-50%);
    display: inline-block;
    padding: 0.5em 1em;
    text-decoration: none;
    transition: all 0.2s ease-in;
    font-size: 1rem;
      background-color:white;
}
.wrapper-car{
    position: relative;
    width: 800px;
}
.form-carousel-container{
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.header{
    color: green !important;
    font-size: 4rem;
}
img{
    position: relative;
    top: 5%;
    width: 300px;
    margin: 0 auto;
}
.container-flex{
    position: absolute;
    left: 50%;
    /* padding: 50px; */
    top: 50%;
    transform: translate(-50%,-50%);
}
.back-clr{
    
    /* font-size: 1.5rem; */
    font-weight:600;
       
    
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
  height: 40%;
  border: none;
  border-radius: 20px;
  left: 50%;
  transform: translate(50%,-50%) scale(0.8);
}
dialog::backdrop {
  background-color: rgba(0,0,0,0.7);
}
</style>