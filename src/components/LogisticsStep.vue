<template>
<form method="GET" @submit.stop.prevent="submit" >
                    <h5 v-if="!$isMobile" ref="inputs">אנשי קשר תוכן</h5>

    <div class="inputs-container"   >  
            <h4> גורם מאשר אישורי כניסה</h4>
                                                    <q-input  lazy-rules="ondemand" ref="approver-full-name" v-model="modelObject.approver['full-name']" :rules="typeSomethingRule"  dir="rtl" no-error-icon label="שם מלא"  :error="false" />

          <q-input lazy-rules="ondemand"  type="number" ref="approver-personal-number" :rules="typeSomethingRule" v-model="modelObject.approver['personal-number']" dir="rtl" class="direction-class" label="מספר אישי" />

                    <q-input lazy-rules="ondemand"  ref="approver-level" v-model="modelObject.approver['level']" :rules="typeSomethingRule"  dir="rtl" no-error-icon label="דרגה"  :error="false" />
                   
                                       <q-input lazy-rules="ondemand"  ref="approver-job" v-model="modelObject.approver['job']" :rules="typeSomethingRule"  dir="rtl" no-error-icon label="תפקיד"  :error="false" />
 <q-input lazy-rules="ondemand" type="number" ref="approver-phone" v-model="modelObject.approver['phone']" :rules="typeSomethingRule"  dir="rtl" no-error-icon label="טלפון נייד"  :error="false" />
 <q-input lazy-rules="ondemand" type="number" ref="approver-phone-office" v-model="modelObject.approver['phone-office']" :rules="typeSomethingRule"  dir="rtl" no-error-icon label="טלפון משרד"  :error="false" />


            <h4> אחראי אספקת ריהוט</h4>
                                        <q-input  lazy-rules="ondemand" ref="supply-full-name" v-model="modelObject.supply['full-name']" :rules="typeSomethingRule"  dir="rtl" no-error-icon label="שם מלא"  :error="false" />

  <q-input lazy-rules="ondemand"  type="number" ref="supply-personal-number" :rules="typeSomethingRule" v-model="modelObject.supply['personal-number']" dir="rtl" class="direction-class" label="מספר אישי" />

                    <q-input lazy-rules="ondemand"  ref="supply-level" v-model="modelObject.supply['level']" :rules="typeSomethingRule"  dir="rtl" no-error-icon label="דרגה"  :error="false" />
                   
                                       <q-input lazy-rules="ondemand"  ref="supply-job" v-model="modelObject.supply['job']" :rules="typeSomethingRule"  dir="rtl" no-error-icon label="תפקיד"  :error="false" />
 <q-input lazy-rules="ondemand" type="number" ref="supply-phone" v-model="modelObject.supply['phone']" :rules="typeSomethingRule"  dir="rtl" no-error-icon label="טלפון נייד"  :error="false" />
 <q-input lazy-rules="ondemand" type="number" ref="supply-phone-office" v-model="modelObject.supply['phone-office']" :rules="typeSomethingRule"  dir="rtl" no-error-icon label="טלפון משרד"  :error="false" />
        <div> 
            
        </div>

    </div>
    
    <div class="flex-btns">
                     <button class="route-back-btn" @click="$emit('action','back')" >  חזור </button>

        <button class="finish-terms-button" type="submit"  v-ripple> הבא</button>

    </div>
    
     </form>
</template>

<script>
export default {
   beforeMount(){
        setTimeout(window.scrollTo(0,0),100);
     
    },
    mounted(){
        setTimeout(window.scrollTo(0,0),100);
        if( this.$isMobile){
        setTimeout(window.scrollTo(0,1),100);
            }
    },
    methods:{
        
        submit(){
            this.$refs['approver-personal-number'].validate()
            this.$refs['approver-level'].validate()
            this.$refs['approver-full-name'].validate()
            this.$refs['approver-job'].validate()
            this.$refs['approver-phone'].validate()
            this.$refs['approver-phone-office'].validate()

            this.$refs['supply-personal-number'].validate()
            this.$refs['supply-level'].validate()
            this.$refs['supply-full-name'].validate()
            this.$refs['supply-job'].validate()
            this.$refs['supply-phone'].validate()
            this.$refs['supply-phone-office'].validate()

            if (!this.$refs['approver-personal-number'].hasError && 
             !this.$refs['approver-level'].hasError &&  !this.$refs['approver-full-name'].hasError && 
              !this.$refs['approver-job'].hasError &&  !this.$refs['approver-phone'].hasError 
              && !this.$refs['approver-phone-office'].hasError 
              &&
              !this.$refs['supply-personal-number'].hasError && 
             !this.$refs['supply-level'].hasError &&  !this.$refs['supply-full-name'].hasError && 
              !this.$refs['supply-job'].hasError &&  !this.$refs['supply-phone'].hasError 
              && !this.$refs['supply-phone-office'].hasError 
              )
              {
                this.$emit("action","next",this.modelObject)                
            }
        }
    },
    data(){
        return{
        
            modelObject:{
                approver:{
                    'personal-number':"",
                    'level':'',
                    'full-name':'',
                    "job":'',
                    "phone":'',
                    "phone-office":''
                }, supply:{
                    'personal-number':"",
                    'level':'',
                    'full-name':'',
                    "job":'',
                    "phone":'',
                    "phone-office":''
                }

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
    h4{
        margin-top: 20px !important;
        margin-bottom: 20px !important;
    color: var(--font-clr);
    font-size: 3.4rem !important;
    text-align: center;
}
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
.route-back-btn{
    /* position: absolute; */
    left: 0%;
    display: inline-block;
    padding: 0.5em 1em;
    text-decoration: none;
    color: rgb(97, 96, 96);
    transition: all 0.2s ease-in;
    font-size: 4rem !important;
}
.flex-btns{
    justify-content: center  !important;
}
}
.form{
    height: 800px;
}
h5{
     font-size: 5rem;
    margin-bottom: 40px;
}
h4{
    color: var(--font-clr);
    font-size: 1rem;
    text-align: center;
}

.route-back-btn:hover{
        background-color: rgba(128, 128, 128, 0.2           );
}
.route-back-btn{
    /* position: absolute; */
    left: 0%;
    display: inline-block;
    padding: 0.5em 1.5em;
    text-decoration: none;
    color: rgb(97, 96, 96);
    transition: all 0.2s ease-in;
    font-size: 2rem;
}
.flex-btns{
    /* height: 40px; */
    gap:   20px ;
    display: flex;
    justify-content: flex-end;
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
   padding: 0.5em 1.5em;
}

.flex-items{
}
.direction-class{
 
}
.inputs-container{
    margin-bottom: 120px;
    text-align: left;
    gap: 20px 150px;
    font-size: 4rem;
    display: flex;
    align-content: flex-start;
    width: 200px;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap-reverse;
    height: 500px;
    direction: rtl !important;
}
</style>