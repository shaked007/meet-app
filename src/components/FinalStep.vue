<template>
<form method="GET" @submit.stop.prevent="submit" >
                    <h5 ref="inputs" v-if="!$isMobile">פרטים נוספים</h5>
<!-- <img :src="require('@/assets/final.png')" >  -->
    <div class="inputs-container"  ref="inputs" >  
      
                                                  
        <div> 
            <h6>? האם יש צורך בחברת  הגברה/התקנה </h6> 
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
            <h6> ? האם יש צורך בשעון דוברים</h6> 

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
                     <button class="route-back-btn" @click.prevent="$emit('back','back',modelObject)"  >  חזור </button>

        <button class="finish-terms-button" type="submit"  v-ripple> סיים</button>

    </div>
    
     </form>
</template>

<script>
export default {    props:{
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
.direction-class{
    direction: rtl !important;
}
@media (max-width:480px){
    form{
    height: 700px ;
}
    img{
    
    }
       h5{
        margin-top: 20px;
        text-align: center;
        margin-bottom: 20px !important;
    }
    h4{
        margin-top: 20px !important;
        margin-bottom: 20px !important;
    color: var(--font-clr);
    font-size: 3.4rem !important;
    text-align: center;
}
    h6{
            margin-top: 20px !important;
        margin-bottom: 10px !important;
           color: var(--font-clr);
    font-size: 3rem !important;
    text-align: center;
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
form{
    /* height: 700px; */
}

/* img{
        height: 350px;
    width: 350px;
    position: absolute;
    left: 50%;
} */
h5{
        color: var(--main-clr);

    font-size: 4rem;
    margin-bottom: 50px;
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
    justify-content: center;
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
    gap: 40px 40px;
    /* font-size: 4rem; */
    display: flex;
    align-content: flex-start;
    width: 270px;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap-reverse;
    height: 500px;
    direction: rtl !important;
}
</style>