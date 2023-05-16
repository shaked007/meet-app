<template>
    <div class="kenes-card">
        <span class="kenes-leader">{{kenesLeader}} </span>
        <div class="kenes-name"> 
                 {{kenesName}}
                 
                         </div>
        <div class="flex-date-and-location"> 
            <div class="location">
                {{kenesLocation}}
            </div>
             <div class="dates"> 
                <span v-if="this.kenesDate.to  != this.kenesDate.from">{{newFrom}} - {{newTo}} </span>
                  <span v-else>{{newFrom}} </span>
                  <span class="days" v-if="this.kenesDate.to != this.kenesDate.from" >{{newFromDay}} - {{newToDay}} </span> 
                <span class="days" v-else>{{newFromDay}} </span>
            </div>
        </div>
        
        <div> 

        </div>
        <router-link class="to-report-link" :name="kenesId" :to="`/kenes/${kenesId}`">  מעבר לכנס</router-link>
         </div>
</template>

<script>
import moment from "moment"
export default {
    data(){
        return{
            newFrom:moment(new Date(this.kenesDate.from),'L', 'he').format("D/M"),
            newTo:moment(new Date(this.kenesDate.to),'L', 'he').format("D/M"),
            newFromDay:moment(new Date(this.kenesDate.from),'L', 'he').format("dddd"),
            newToDay:moment(new Date(this.kenesDate.to),'L', 'he').format("dddd"),
            
        }   
    },
    props:["kenesLocation","kenesName","kenesLeader","kenesId","kenesDate"]
}
</script>

<style scoped>

@media(max-width:480px){
  
    .kenes-card{
        display: flex;
        gap: 15px;
        /* align-items: center; */
        flex-direction: column;
        border-radius: 20px;
        font-size: 4rem !important;
        position: relative;
        background-color: #EEE;
        padding: 0.7em;
        max-width:380px !important;
        flex: 0 0 100% !important; 
 }
 .days{
    font-size:4rem !important;
}
.to-report-link{

    font-size:4rem !important;
}
.kenes-leader{
     font-size:3rem !important;
}
}
.days{
    font-size: 1.4rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.location{
  text-overflow:ellipsis;
  white-space:nowrap;
  overflow:hidden;
      flex: 0 0 50%;
}
.dates{
    padding-left: 1em;
    border-left: 1px solid silver;
    align-items: center;
        flex: 0 0 50%;
        

    display: flex;
    flex-direction: column;
}
.flex-date-and-location{
    display: flex;
    padding: 0.2em;
}
.kenes-name{
  text-overflow:ellipsis;
  white-space:nowrap;
  overflow:hidden;
    font-family: var(--font-bold);
    text-align: center;
  
}
.to-report-link{
    align-self: center;
       background-color: var(--main-clr);
    border-radius: 20px;
    text-decoration: none;
    color: white;
     padding: 0.5em 2em;
    font-size: 1.3rem;
}
.kenes-leader{
    
    padding: 0.2em 1em;
    font-size: 1.3rem;
    background-color: var(--main-clr);
    border-radius: 20px;
    color: white;
  
    position: absolute;
    top: 0%;
    right: 50%;
    transform: translate(50%,-50%);
}
 .kenes-card{
    display: flex;
    gap: 15px;
    /* align-items: center; */
    flex-direction: column;
    border-radius: 20px;
    font-size: 2rem;
    position: relative;
    background-color: #EEE;
    padding: 0.7em;
    max-width:450px;
    flex: 0 0 33%;
 }


</style>