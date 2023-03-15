<template>
<form method="GET" @submit.stop.prevent="submit" >
                <h5>אנשי קשר תוכן</h5>

    <div class="inputs-container">  

            <h4> מגיש הבקשה</h4>
                                                    <q-input  lazy-rules="ondemand" ref="megish-full-name" v-model="modelObject.megish['full-name']" :rules="typeSomethingRule"  dir="rtl" no-error-icon label="שם מלא"  :error="false" />

          <q-input lazy-rules="ondemand"  type="number" ref="megish-personal-number" :rules="typeSomethingRule" v-model="modelObject.megish['personal-number']" dir="rtl" class="direction-class" label="מספר אישי" />

                    <q-input lazy-rules="ondemand"  ref="megish-level" v-model="modelObject.megish['level']" :rules="typeSomethingRule"  dir="rtl" no-error-icon label="דרגה"  :error="false" />
                   
                                       <q-input lazy-rules="ondemand"  ref="megish-job" v-model="modelObject.megish['job']" :rules="typeSomethingRule"  dir="rtl" no-error-icon label="תפקיד"  :error="false" />
 <q-input lazy-rules="ondemand" type="number" ref="megish-phone" v-model="modelObject.megish['phone']" :rules="typeSomethingRule"  dir="rtl" no-error-icon label="טלפון נייד"  :error="false" />
 <q-input lazy-rules="ondemand" type="number" ref="megish-phone-office" v-model="modelObject.megish['phone-office']" :rules="typeSomethingRule"  dir="rtl" no-error-icon label="טלפון משרד"  :error="false" />


            <h4>מוביל חומרים </h4>
                                        <q-input  lazy-rules="ondemand" ref="leader-full-name" v-model="modelObject.leader['full-name']" :rules="typeSomethingRule"  dir="rtl" no-error-icon label="שם מלא"  :error="false" />

  <q-input lazy-rules="ondemand"  type="number" ref="leader-personal-number" :rules="typeSomethingRule" v-model="modelObject.leader['personal-number']" dir="rtl" class="direction-class" label="מספר אישי" />

                    <q-input lazy-rules="ondemand"  ref="leader-level" v-model="modelObject.leader['level']" :rules="typeSomethingRule"  dir="rtl" no-error-icon label="דרגה"  :error="false" />
                   
                                       <q-input lazy-rules="ondemand"  ref="leader-job" v-model="modelObject.leader['job']" :rules="typeSomethingRule"  dir="rtl" no-error-icon label="תפקיד"  :error="false" />
 <q-input lazy-rules="ondemand" type="number" ref="leader-phone" v-model="modelObject.leader['phone']" :rules="typeSomethingRule"  dir="rtl" no-error-icon label="טלפון נייד"  :error="false" />
 <q-input lazy-rules="ondemand" type="number" ref="leader-phone-office" v-model="modelObject.leader['phone-office']" :rules="typeSomethingRule"  dir="rtl" no-error-icon label="טלפון משרד"  :error="false" />
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
     mounted(){
        window.scrollTo(0,0)
    },
    methods:{
        
        submit(){
            this.$refs['megish-personal-number'].validate()
            this.$refs['megish-level'].validate()
            this.$refs['megish-full-name'].validate()
            this.$refs['megish-job'].validate()
            this.$refs['megish-phone'].validate()
            this.$refs['megish-phone-office'].validate()

            this.$refs['leader-personal-number'].validate()
            this.$refs['leader-level'].validate()
            this.$refs['leader-full-name'].validate()
            this.$refs['leader-job'].validate()
            this.$refs['leader-phone'].validate()
            this.$refs['leader-phone-office'].validate()

            if (!this.$refs['megish-personal-number'].hasError && 
             !this.$refs['megish-level'].hasError &&  !this.$refs['megish-full-name'].hasError && 
              !this.$refs['megish-job'].hasError &&  !this.$refs['megish-phone'].hasError 
              && !this.$refs['megish-phone-office'].hasError 
              &&
              !this.$refs['leader-personal-number'].hasError && 
             !this.$refs['leader-level'].hasError &&  !this.$refs['leader-full-name'].hasError && 
              !this.$refs['leader-job'].hasError &&  !this.$refs['leader-phone'].hasError 
              && !this.$refs['leader-phone-office'].hasError 
              )
              {
                this.$emit("action","next",this.modelObject)                
            }
        }
    },
    data(){
        return{
        
            modelObject:{
                megish:{
                    'personal-number':"",
                    'level':'',
                    'full-name':'',
                    "job":'',
                    "phone":'',
                    "phone-office":''
                }, leader:{
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