<template>
<form method="GET" @submit.stop.prevent="submit" >
    <h5 ref="inputs"  v-if="!$isMobile">פרטים כלליים </h5>
    <div class="inputs-container" >  

          <q-input lazy-rules="ondemand"  ref="leader"   :rules="typeSomethingRule" v-model="modelObject.leader" dir="rtl" class="direction-class" label="גוף מוביל" />
                            <q-input lazy-rules="ondemand" :model-value=" modelObject.date.from == modelObject.date.to ? modelObject.date.from :modelObject.date.from+ '-'+ modelObject.date.to" :rules="typeSomethingRule" ref="date" :v-model="modelObject.date"    dir="rtl" no-error-icon placeholder=" בחר תאריך התחלה וסיום" >

        <template v-slot:prepend>
          <q-icon name="access_time" class="cursor-pointer">
            <q-popup-proxy ref="prox"  transition-show="scale" transition-hide="scale">
                              <q-date @range-end="handleRange"   range  v-model="modelObject.date">

                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="סגור" color="primary"  />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
                    <q-input lazy-rules="ondemand" ref="location" v-model="modelObject.location" :rules="typeSomethingRule" type="textarea" outlined  dir="rtl" no-error-icon label="(מיקום (פרט עד רמת האולם"  :error="false" />
                    <q-input lazy-rules="ondemand"  ref="kenes-name" v-model="modelObject['kenes-name']" :rules="typeSomethingRule"  dir="rtl" no-error-icon label="שם הכנס"  :error="false" />
                                        <q-input  lazy-rules="ondemand" ref="top-level" v-model="modelObject['top-level']" :rules="typeSomethingRule"  dir="rtl" no-error-icon label="הכנס בראשות"  :error="false" />
      <q-select lazy-rules="ondemand"  :rules="typeSomethingRule" ref="secret-level" v-model="modelObject['secret-level']" dir="rtl" :options="options" label='סיווג הכנס' />
        <div> 
            
        </div>

    </div>
    
    
     <div class="flex-btns">
        <button class="finish-terms-button" type="submit"  v-ripple> הבא</button>
    </div>
     </form>
    
</template>

<script>
import moment from 'moment';
export default {
    props:{
        modelProp:{
              
        }
    },
  beforeMount(){
    if(this.modelProp){
            this.modelObject = {...this.modelProp}

    }
    
        setTimeout(window.scrollTo(0,0),100);
    
    },
    mounted(){
        setTimeout(window.scrollTo(0,0),100);
        if( this.$isMobile){
        setTimeout(window.scrollTo(0,1),100);
            }
    },
    methods:{
        handleRange(range){
            this.$refs.prox.hide()
      
            if(typeof this.modelObject.date == 'string'){
                this.modelObject.date = {from:this.modelObject.date,to:this.modelObject.date}
            } 
        },
        submit(){
            this.$refs['leader'].validate()
            this.$refs['date'].validate()
            this.$refs['location'].validate()
            this.$refs['kenes-name'].validate()
            this.$refs['top-level'].validate()
            this.$refs['secret-level'].validate()
            this.modelObject['submitted-date'] = moment(new Date(),'L', 'he').format("יום dddd  D/M/y")
            if (!this.$refs['leader'].hasError &&  !this.$refs['date'].hasError &&  !this.$refs['location'].hasError &&  !this.$refs['kenes-name'].hasError &&  !this.$refs['top-level'].hasError && !this.$refs['secret-level'].hasError  ){
                this.$emit("action","next",this.modelObject)                
            }
        }
    },
    data(){
        return{
        
            modelObject:{
                leader:"",
                date:'',
                location:"",
                "kenes-name":'',
                "top-level":"",
                "secret-level":""
            },
                    typeSomethingRule:[
                          val => (val && val.length > 0) || 'יש להכניס מידע'
                    ],

            options:['בלמ"ס','שמור',"סודי",'סד"ב']
        }
    }
}
</script>

<style scoped>
@media (max-width:480px){
    h5{
        margin-top: 20px;
        text-align: center;
        margin-bottom: 20px !important;
    }
    .inputs-container{
        margin-bottom: 0px !important;
        gap: 0px !important;
        width: 250px !important;
        flex-wrap: nowrap !important;
        margin-left: auto !important;
        margin-right: auto !important;
        height:auto !important;
    }
    .finish-terms-button{
    font-size: 4rem !important;
}
.flex-btns{
    justify-content: center  !important;
}
}
.finish-terms-button{
    font-size: 2rem ;
}
.flex-btns{
    justify-content: center ;
}
h5{
            color: var(--main-clr);

    font-size: 4rem;
    margin-bottom: 40px;
}
.route-back-btn:hover{
        background-color: rgba(128, 128, 128, 0.37);
}
.route-back-btn{
    /* position: absolute; */
    left: 0%;
    display: inline-block;
    padding: 0.5em 1em;
    text-decoration: none;
    color: rgb(97, 96, 96);
    transition: all 0.2s ease-in;
    font-size: 1rem;
}
.flex-btns{
    /* height: 60px; */
    /* position: absolute; */
    top: 90%;
    gap: 20px;
    display: flex;
    justify-content:center;
}
.form{
    height: 800px;
}
.finish-terms-button{
   /* align-self: center; */
   /* position: absolute; */
   /* left: 50%; */
   /* transform: translateX(-50%); */
   /* margin: 0 auto; */
   font-size: 2rem;
   background-color: var(--main-clr);
   color: white;
   padding: 0.5em 1em;
}

.flex-items{
}
.direction-class{
    height: 60px;
}
.inputs-container{
    margin-bottom: 120px;
    text-align: left;
    gap: 40px 60px;
    font-size: 4rem;
    display: flex;
    align-content: flex-start;
    width: 250px;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap-reverse;
    height:450px;
    direction: rtl !important;
}
</style>