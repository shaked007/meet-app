<template>
<h3 class="no-permissions-header" v-if="!isAuthenticated"> אין לך הרשאות לעמוד זה </h3>
   <button class="printer-link" v-if="!$isMobile" @click="print" to="/print-view"><v-icon x-large   size="60">  mdi mdi-printer</v-icon></button>

 <div class="spinner-class">

    <v-progress-circular v-if="!isFinished && spinnerStarter"
      indeterminate
      color="white"
      size="90"
    ></v-progress-circular>
    </div>


<div v-if="isAuthenticated  && isFinished">

 <h4 class="main-title">טופס שילוח משימה</h4>

 <div class="flex-and-submit-container">
 <h6 class="current-date"> {{report['date']}} </h6>

    <input type="hidden" name="date" :value="report['date']" />
    <div class="grey-zone-container">
      <div class="flex-inputs" > 
                <div>

          <h6 > בעלי תפקידים</h6>
        <div class="names-container" v-for="job in jobs" :key="job.name">
          <span class="person--job-title"> {{job.hebrewName}}</span>
          
            <v-text-field
            dark
            autocomplete="off"
          class="disabled"
      :persistent-placeholder="report[job.name]"
            
            
            :value="report[job.name]"
              required                     

          ></v-text-field>
             <v-text-field
                autocomplete="off"
                   class="disabled"
                dark
       readonly
             :persistent-placeholder="report[job.name +'-num']"

            :value="report[job.name +'-num']"
                            required                             

          ></v-text-field>
           </div>
      </div>
   
<div>
    <h6> שעת תדרוך</h6>

          <q-input filled dark  readonly required   :value="report['tidruh-time']" name="tidruh-time" :placeholder="report['tidruh-time']"  >
        <template v-slot:append>
          <q-icon name="access_time" class="cursor-pointer">
          
          </q-icon>
        </template>
      </q-input>
      </div>
<div>
                                <h6  > נוסעים </h6>

 <div class="names-container" v-for="(nosea,index) in Object.keys(drivesObject)" :key="nosea">
          <span class="person--job-title"> נוסע {{index+1}} </span>
          
            <v-text-field
            dark
            autocomplete="off"
          class="disabled"
      :persistent-placeholder="drivesObject[nosea]['name']"
            
            
            :value="drivesObject[nosea]['name']"
              required                     

          ></v-text-field>
             <v-text-field
                autocomplete="off"
                   class="disabled"
                dark
       readonly
             :persistent-placeholder="drivesObject[nosea]['num']"

            :value="drivesObject[nosea]['num']"
                            required                             

          ></v-text-field>
           </div>
      </div>

    <div> 
                <h6 > תיאור המשימה</h6>

           <v-textarea
           required
               autocomplete="off"
       dark
       
            :value="report['description']"
                      append-inner-icon="mdi-clipboard-outline"

          ></v-textarea>
    </div>

<div>
                  <h6 > רכב</h6>

             <v-select
             required
             readonly
          :items="cars"
          :value="report['car']"
    dark
          append-inner-icon="mdi-car"

        ></v-select>
    </div>
          <v-radio-group   readonly required v-model="report['is-sleep']" class="font-sizer" label="האם הנהג ישן 7 שעות לפני ביצוע המשימה?">
              <v-radio label="כן"    value="true" ></v-radio>
              <v-radio label="לא"  value="false" ></v-radio>
</v-radio-group >
   <v-radio-group  readonly required class="font-sizer" v-model="report['is-licensed']"  label="האם לנהג יש רישיון והיתר מתאים לסוג הרכב?">
    
              <v-radio label="כן"  value="true" ></v-radio>
              <v-radio label="לא" value="false" ></v-radio>
</v-radio-group >
 <v-radio-group   readonly required  v-model="report['is-drove-before']" label="האם הנהג נסע בציר זה בעבר?">
              <v-radio label="כן"  name="is-drove-before" value="true" ></v-radio>
              <v-radio label="לא" name="is-drove-before" value="false" ></v-radio>
</v-radio-group >
<div> 
  <h6>יעד הנסיעה </h6>
  <v-text-field required 
         
          :value="report['destination']"
             autocomplete="off"
          readonly
          dark 
            append-inner-icon="mdi-map-marker"
          ></v-text-field>
</div>
<div>
  <h6> יעדי עצירה</h6>
    <h6 v-if="!Object.keys(stopsObject).length">לא נרשמו יעדי עצירה בנסיעה זו</h6>

 <div class="names-container" v-for="(stop,index) in Object.keys(stopsObject)" :key="stop">
          <span class="person--job-title">  עצירה {{index+1}}</span>
          
            <v-text-field
            dark
            autocomplete="off"
          class="disabled"
      :persistent-placeholder="stopsObject[stop]['name']"
            
            
            :value="stopsObject[stop]['name']"
              required                     

          ></v-text-field>
         
           </div>




</div>
<div>
  <h6> סכנות בדרך</h6>
           <v-textarea required 
           readonly
           dark
          :value="report['dangers']"
          append-inner-icon="mdi-alert"
          ></v-textarea>
</div>

<div>
                                <h6  > אנשי קשר חיוניים </h6>

 <div class="names-container" v-for="(phone,index) in Object.keys(contactsObject)" :key="phone">
          <span class="person--job-title">  טלפון {{index+1}}</span>
          
            <v-text-field
            dark
            autocomplete="off"
          class="disabled"
      :persistent-placeholder="contactsObject[phone]['name']"
            
            
            :value="contactsObject[phone]['name']"
              required                     

          ></v-text-field>
             <v-text-field
                autocomplete="off"
                   class="disabled"
                   
                dark
       readonly
             :persistent-placeholder="contactsObject[phone]['num']"

            :value="contactsObject[phone]['num']"
                            required                             

          ></v-text-field>
           </div>
      </div>

           <v-checkbox required 
           v-model="check"
           dark
           readonly
      label="הנהג עבר תדרוך נסיעה"
      
    ></v-checkbox>
     <div class="label-alignment"> 
          <v-checkbox required 
          readonly
          dark 
          v-model="check"

          
      label="כרטיס עבודה מלא וחתום ע״י בעלי התפקידים"
    ></v-checkbox>
     </div>
</div>
    </div>
   
  </div>
 <div class="phone-container">
    <h6 > גדוד 383 - משרד קצין רכב </h6>
   <h6> <a href="tel:054-993-6883"> 0549936883</a> - יוסי שושן</h6>
    </div>
    <br>
  </div>
</template>

<script>
import axios from "axios"
import moment from "moment"
export default {
  name:"ReportView",
  data(){
    return{
      spinnerStarter:false,
    currentDate:'',
    isFinished:false,
      check:true,
      isAuthenticated:true,
      drivesObject:{},
      contactsObject:{},
      stopsObject:{},
      report:[],
       jobs:[{hebrewName:'מפקד משלח משימה',name:"mefaked-meshaleh-mesima"},
      {name:'mefaked-mesima',hebrewName:"מפקד המשימה"},
       {name:'driver',hebrewName:"נהג"}
      ],

          url:"/.netlify/functions/fetch_chosen?id=" + window.location.href.split('/')[window.location.href.split('/').length-1],

      // url:"http://localhost:3000/reports/" + window.location.href.split('/')[window.location.href.split('/').length-1]
    }
  },
  beforeMount(){
    if(JSON.parse(sessionStorage.getItem("isAuthenticated"))){
       
        this.getReportById()
    }else{
      this.isAuthenticated = false;
    }
    
  },
  methods:{
    print(){
      window.print()
    },
       async getReportById(){
        this.spinnerStarter = true;
        const reportResponse = await axios.get(this.url);
        this.report = reportResponse.data[0];
         this.currentDate = moment(new Date( this.report['date']),'L', 'he').format("יום dddd  D/M/y")
         
        Object.keys(this.report).forEach((item)=>{
            if(item.includes('nosea')){
              if(this.drivesObject[item.split('nosea')[1][0]]){
                if(item.includes('num')){
                        this.drivesObject[item.split('nosea')[1][0]]['num'] =this.report[item]
                }else{
                this.drivesObject[item.split('nosea')[1][0]]['name'] = this.report[item]

                }
              }else{
                        this.drivesObject[item.split('nosea')[1][0]] = {}
                             if(item.includes('num')){
                        this.drivesObject[item.split('nosea')[1][0]]['num'] =this.report[item]
                }else{
                this.drivesObject[item.split('nosea')[1][0]]['name'] = this.report[item]

                }
              }
            }
  if(item.includes('contact')){
              if(this.contactsObject[item.split('contact')[1][0]]){
                if(item.includes('num')){
                        this.contactsObject[item.split('contact')[1][0]]['num'] =this.report[item]
                }else{
                this.contactsObject[item.split('contact')[1][0]]['name'] = this.report[item]

                }
              }else{
                        this.contactsObject[item.split('contact')[1][0]] = {}
                             if(item.includes('num')){
                        this.contactsObject[item.split('contact')[1][0]]['num'] =this.report[item]
                }else{
                this.contactsObject[item.split('contact')[1][0]]['name'] = this.report[item]

                }
              }
            }
 if(item.includes('stop')){
              if(this.stopsObject[item.split('stop')[1][0]]){
                if(item.includes('num')){
                        this.stopsObject[item.split('stop')[1][0]]['num'] =this.report[item]
                }else{
                this.stopsObject[item.split('stop')[1][0]]['name'] = this.report[item]
                }
              }else{
                        this.stopsObject[item.split('stop')[1][0]] = {}
                             if(item.includes('num')){
                        this.stopsObject[item.split('stop')[1][0]]['num'] =this.report[item]
                }else{
                this.stopsObject[item.split('stop')[1][0]]['name'] = this.report[item]

                }
              }
            }







        })
        console.log( this.drivesObject)
        console.log(this.report)
        this.report.date = moment(new Date(this.report.date),'L', 'he').format("יום dddd  D/M/y");
           this.isAuthenticated = true;
           this.isFinished = true
        
      }
  }
}
</script>

<style scoped> 
.printer-link{
  position: absolute;
  top: 1%;
  left: 1%;
  display: inline-block;
  color: white;
  background-color: black;
  text-decoration: none;
  outline: none;
  border-radius: 20px;
  padding: 0.5em 1em;
}
.phone-container a{
  color: white;
}
.phone-container{
  text-align: center;
  color: white;
}
.spinner-class{
display: flex;
position: relative;
top: 30%;
align-items: center;
justify-content: center;
  
}
h6{
  margin-bottom: 10px !important;
}
.nosim-title{
  color: white;
  font-size: 1.25rem;
}


.person--job-title{
  display: inline-block;
  color: rgba(255, 255, 255, 0.829);
  margin-bottom: 10px;
  font-size: 1rem;
}
.input-group__input *{
  color: rgba(255, 255, 255, 0.87) !important;
  }
.names-container{
  text-align: center;
}
.no-permissions-header{
  color: white;
  position: relative;
  top: 30%;
  text-align: center;
}
.main-title{
  color:white;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
-webkit-appearance: none;
margin: 0;
}
.font-sizer label{
  font-size:0.9rem !important;
}
.direction-wrapper{
  direction: ltr !important;
}
.form-subtitle{
  text-align: center;
  font-size: 1.4rem;
}
.grey-zone-container{

 border-radius: 20px;
  background-color: rgb(0,0,0,0.5);
  direction: rtl !important;
  width: 95%;
    min-height: 80vh;
  margin-left :auto;
  margin-right:auto;
  margin-bottom: 15px;
}
.flex-inputs{
  display: flex;
  text-align: center;
  flex-direction: column;
  color: white !important;
  width: 95%;
  padding-top: 10px;
  /* align-items: center; */
  gap: 10px 10px;
  margin: 0 auto;
  justify-content: flex-start;
}
.finish-report-button{
    margin: 0 auto;
    border-radius: 20px;
    background-color: white;
    padding: 0.5em 1.8em;
}
form{
  padding-bottom: 20px;
  text-align: center;
}
.current-date{
  text-align: center;
  color: rgba(255, 255, 255, 0.781);
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-weight: 400 !important;

}

.main-title{

  text-align: center;
  font-size: 3rem;
  margin-top: 20px;
  margin-bottom: 20px;
  color:white;
}

</style>