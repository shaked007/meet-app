<template>
  <div class="general-card-container">
     <div class="flex-fields">
        
                      <q-input lazy-rules="ondemand"  :disable="isDisabled" :borderless="isDisabled"  @update:model-value="updateParent" ref="leader"    v-model="generalModel.leader" dir="rtl" class="direction-class" label="גוף מוביל" />
       <q-input :disable="isDisabled"    :borderless="isDisabled"  lazy-rules="ondemand" :model-value="generalModel.date.from == generalModel.date.to ? generalModel.date.from :generalModel.date.from+ '-'+ generalModel.date.to"  :rules="typeSomethingRule" ref="date"    dir="rtl" no-error-icon placeholder=" בחר תאריך התחלה וסיום" >

        <template v-slot:prepend>
          <q-icon name="access_time"    class="cursor-pointer">
            <q-popup-proxy  @show="func" ref="prox"  transition-show="scale" transition-hide="scale">
                              <q-date ref="edit" @range-end="handleRange"   @range-start="handleRangeStart" range  v-model="generalModel.date">

                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="סגור" color="primary"  />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

                    <q-input  :borderless="isDisabled" :disable="isDisabled"  lazy-rules="ondemand" @update:model-value="updateParent" ref="kenes-name" v-model="generalModel['kenes-name']" :rules="typeSomethingRule"  dir="rtl" no-error-icon label="שם הכנס"  :error="false" />
        
         </div>
           <q-input :borderless="isDisabled" :disable="isDisabled"  lazy-rules="ondemand" @update:model-value="updateParent" ref="location" v-model="generalModel.location" :rules="typeSomethingRule" type="textarea" outlined  dir="rtl" no-error-icon label="(מיקום (פרט עד רמת האולם"  :error="false" />
                                                    <q-select :options="leaderOptions" :borderless="isDisabled" :disable="isDisabled"  @update:model-value="updateParent" lazy-rules="ondemand" ref="top-level" v-model="generalModel['top-level']" :rules="typeSomethingRule"  dir="rtl" no-error-icon label="הכנס בראשות"  :error="false" />
      <q-select :borderless="isDisabled" :disable="isDisabled"  lazy-rules="ondemand"   @update:model-value="updateParent"   :rules="typeSomethingRule" ref="secret-level" v-model="generalModel['secret-level']" dir="rtl" :options="options" label='סיווג הכנס' />
  </div>
</template>

<script>
export default {
    name:"generalCard",
    data(){
        return{
          leaderOptions:['רח"ט מבצעים','ראש אכ"א','הרמטכ"ל','סגן הרמטכ"ל','רח"ט תוה"ד','ראש אג"ת','קשר"ר'],
             options:['שו"ס','בלמ"ס','שמור',"סודי",'סד"ב'],
      
            generalModel:'',
        }
    },
    methods:{
     
        handleRangeStart(){
    
            // this.$refs.edit.setEditingRange(0,0)

        },
        updateParent(){
          console.log(this.generalModel)
          this.$emit("on-edit",this.generalModel,"general")
            
        },
handleRange(range){
            this.$refs.prox.hide()

            if(typeof this.generalModel.date == 'string'){
                this.generalModel.date = {from:this.generalModel.date,to:this.generalModel.date}
            } 
            this.$emit("on-edit",this.generalModel,"general")

        },
    },
    mounted(){
   

    },
    props:['general','isDisabled'],
    beforeMount(){
        console.log(this.isDisabled)
        this.generalModel = {...this.general}
    }
}
</script>

<style scoped>
@media print{

}
@media(max-width:480px){
    
   .flex-fields{
    margin-bottom: 20px !important;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
}

.flex-fields{
    margin-bottom: 30px;
    display: flex;
    gap: 20px;
}
.general-card-container{
    /* padding: 10px; */
    /* opacity: 0.7; */
    /* height: 30rem; */
    /* background-color: #27e650; */
}
</style>