<template>
  <div class="extra-card-container">
                  <h6> האם יש צורך בחברת  הגברה/התקנה ?</h6> 
                <q-option-group :disable="isDisabled"
                @update:model-value="updateParent"
                ref="is-dovrim-clock"
                color="rgb(74,87,96)"
      v-model="extraModel['is-hevra-ezrahit']"
      :options="options"
            left-label

    />
        <div class="dir"> 
            <h6>  האם יש צורך בשעון דוברים ?  </h6> 

            <q-option-group :disable="isDisabled"
            @update:model-value="updateParent"
            ref='is-dovrim-clock'
                  left-label
                color="rgb(74,87,96)"

            v-model="extraModel['is-dovrim-clock']"
            :options="options"
      
            />
        </div>
          <q-input  :borderless="isDisabled"  :disable="isDisabled"  @update:model-value="updateParent" v-model="extraModel['contact-email']" ref="email" type="email"  :rules="['email']"  lazy-rules="ondemand" label=" אימייל"/> 

    
  </div>
</template>

<script>
export default {
    props:['extra',"isDisabled"],
    data(){
        return{
            extraModel:{},
              options:[  {
            label: 'לא',
            value: false
            },
                {
                label: 'כן',
                value: true
                },]
        }
    },
    methods:{
        updateParent(){
            console.log(this.extraModel)
          this.$emit("on-edit",this.extraModel,"final")
            
        },
    },
       beforeMount(){
            this.extraModel = {...this.extra}
    }
}
</script>

<style scoped>
@media(max-width:480px){
   h6{
            margin-top: 20px !important;
        margin-bottom: 20px !important;
           /* color: var(--font-clr); */
    font-size: 3rem !important;
    /* text-align: center; */
    }
}

h6{
    font-size: 1rem;
}
h4{
    margin-bottom: 20px;
}
.extra-card-container{
    /* padding: 10px; */

}

</style>