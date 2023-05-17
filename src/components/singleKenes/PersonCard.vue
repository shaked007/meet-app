<template>
   <q-expansion-item
        expand-separator
        :icon="icon"
        :label="job"
      >
      <!-- mdi-account-check  -->
       <!-- mdi-truck-cargo-container  -->
              <!-- mdi-human-greeting-proximity  -->
              <!-- mdi-account-star -->

        <q-card>
          <q-card-section >
                                               <q-input  lazy-rules="ondemand" ref="supply-full-name" v-model="personModel['full-name']"   dir="rtl" no-error-icon label="שם מלא"  :error="false" />

  <q-input lazy-rules="ondemand"  type="number" ref="supply-personal-number"  v-model="personModel['personal-number']" dir="rtl" class="direction-class" label="מספר אישי" />

                    <q-input lazy-rules="ondemand"  ref="supply-level" v-model="personModel['level']"   dir="rtl" no-error-icon label="דרגה"  :error="false" />
                   
                                       <q-input lazy-rules="ondemand"  ref="supply-job" v-model="personModel['job']"  dir="rtl" no-error-icon label="תפקיד"  :error="false" />
 <q-input lazy-rules="ondemand" type="number" ref="supply-phone" v-model="personModel['phone']"   dir="rtl" no-error-icon label="טלפון נייד"  :error="false" />
 <q-input lazy-rules="ondemand" type="number" ref="supply-phone-office" v-model="personModel['phone-office']"   dir="rtl" no-error-icon label="טלפון משרד"  :error="false" />
           
          </q-card-section>
        </q-card>
      </q-expansion-item>

</template>

<script>
export default {
    props:["person","icon","job"],
    data(){
        return{
        personModel:{}
    }},
    beforeMount(){
        this.personModel = {...this.person}
        console.log(this.personModel)
    }
}
</script>

<style scoped>

</style>