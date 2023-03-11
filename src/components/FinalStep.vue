<template>
<form method="GET" @submit.stop.prevent="submit" >
                    <h5>פרטים נוספים</h5>
<img :src="require('@/assets/final.png')" > 
    <div class="inputs-container">  
      
                                                  
        <div> 
            <h6> האם יש צורך בחברה אזרחית?</h6> 
                <q-option-group
                ref="is-dovrim-clock"
                color="rgb(74,87,96)"
      v-model="modelObject['is-hevra-ezrahit']"
      :options="options"
      :rules="typeSomethingRule"
            left-label

    />
        </div>
        <div> 
            <h6> האם יש צורך בשעון דוברים?</h6> 

            <q-option-group
            ref='is-dovrim-clock'
                  left-label
                color="rgb(74,87,96)"

            v-model="modelObject['is-dovrim-clock']"
            :options="options"
            :rules="typeSomethingRule"
            />
        </div>

    </div>
    
    <div class="flex-btns">
                     <button class="route-back-btn" @click="$emit('action','back')" v-if="!$isMobile">  חזור </button>

        <button class="finish-terms-button" type="submit"  v-ripple> סיים</button>

    </div>
    
     </form>
</template>

<script>
export default {
    methods:{
        
        submit(){
         
        

            if (this.modelObject['is-dovrim-clock'] !=="" &&  this.modelObject['is-hevra-ezrahit'] !=="" )
              {
                this.$emit("action","next",this.modelObject)                
            }
        }
    },
    data(){
        return{
        
            modelObject:{
            "is-hevra-ezrahit":"",
           "is-dovrim-clock":"", 

            },
                    typeSomethingRule:[
                          val => (val && val.length > 0) || 'יש להכניס מידע'
                    ],

            options:[  {
            label: 'לא',
            value: false
            },
                {
                label: 'כן',
                value: true
                },]
        }
    }
}
</script>

<style  scoped>
img{
        height: 350px;
    width: 350px;
    position: absolute;
    left: 50%;
}
h5{
    
    font-size: 2rem;
    margin-bottom: 10px;
}
h6{
    color: var(--font-clr);
    font-size: 1rem;
}


.route-back-btn:hover{
        background-color: rgba(128, 128, 128, 0.2           );
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
   font-size: rem;
   background-color: var(--main-clr);
   color: white;
   padding: 0.5em 1em;
}

.flex-items{
}
.direction-class{
 
}
.inputs-container{
    text-align: left;
                    color:rgb(74,87,96);

    gap: 10px 100px;
    /* font-size: 4rem; */
    display: flex;
    align-content: flex-start;
    width: 200px;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap-reverse;
    height: 450px;
    direction: rtl !important;
}
</style>