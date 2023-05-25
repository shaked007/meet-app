<template>
  <Nav :activeLink="'history'" />
  <br>
  <br>
    <h1>היסטוריית כנסים</h1>
      
    <div class="filtering-flex-categories">
      <div class="flex-item"> 
                    <q-input lazy-rules="ondemand"  ref="kenes-name" v-model="filterModel['kenesName']"   dir="rtl" no-error-icon label="שם הכנס"  :error="false" />
      </div>
            <div  class="flex-item" > 

              <q-select  lazy-rules="ondemand" value='כולם'    ref="secret-level" v-model="filterModel['leader']" dir="rtl" :options="options" label='מוביל הכנס' />
      </div>

      <div  class="flex-item" > 

            <q-input :disable="isDisabled"      lazy-rules="ondemand" :model-value="filterModel.date.from == filterModel.date.to ? filterModel.date.from :filterModel.date.from+ '-'+ filterModel.date.to"  ref="date"    dir="rtl" no-error-icon placeholder="כל התאריכים" >

        <template v-slot:prepend>
          <q-icon name="access_time"    class="cursor-pointer">
            <q-popup-proxy  @show="func" ref="prox"  transition-show="scale" transition-hide="scale">
                              <q-date ref="edit" @range-end="handleRange"   range  v-model="filterModel.date">

                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="סגור" color="primary"  />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

         </div>
 
       </div>    <div class="flex-btns-and-categories">

         <div v-if=" isAuthenticated" class="edit-btn-container"> 
       <q-btn  flat  @click="cleanFilter" label="נקה סינון"  />

     <q-btn :color="'blue'" @click="handleEditStart" label="סינון" icon-right="edit" />
         </div>
</div>
    <div class="spinner-container" v-if="!isAuthenticated" >
       <v-progress-circular 
      indeterminate
      color="blue"
      size="90"
    ></v-progress-circular>
</div>
<table v-if="isAuthenticated && knasim.length"> 
                    <thead>
                        <tr>
                                   <th> שם הכנס</th>
                                     <th>מוביל הכנס </th>

                              <th> תאריך הכנס</th>
                            <th> לבקשה המלאה</th>                         

                        </tr>
                    </thead>
                    <tbody> 
                        <tr v-for="kenes in knasim" :key="kenes['_id']">
             
                                                            <td >{{kenes.general['kenes-name']}} </td>
                                                            <td> {{kenes.general['leader']}}</td>
                              <td v-if="kenes.general.date.to  != kenes.general.date.from">     {{kenes.general.date.to}} - {{kenes.general.date.from}} 
                              </td>
                              <td v-else> {{kenes.general.date.to}}  </td>

                            <td> <router-link class="link-to-report" :name="kenes._id" :to="'/kenes/approved/'+kenes['_id']">לצפייה </router-link></td>
                  
                             </tr>
                    </tbody>
                                    </table>
        <h3 v-if="isAuthenticated && !knasim.length"> לא קיימים כנסים כרגע</h3>
  <!-- <div class="knasim-flex" v-if="isAuthenticated">
        <KenesCard v-for="kenes in knasim" :kenesLocation="kenes.general.location" :kenesId="kenes._id" :kenesDate="kenes.general.date" :kenesLeader="kenes.general.leader" :kenesName="kenes.general['kenes-name']"   :key="kenes._id" />
    </div>  -->
</template>

<script>
import KenesCard from "@/components/KenesCard.vue" 
import Nav from "@/components/Nav.vue"
import axios from "axios"
import moment from "moment"
export default {
  data(){
    return{
                                    options:["כולם",'רח"ט מבצעים','ראש אכ"א','הרמטכ"ל','סגן הרמטכ"ל','רח"ט תוה"ד','ראש אג"ת','קשר"ר'],

      isAuthenticated:false,
      allKnasimBackup:[],
      filterModel:{date:'',kenesName:'',leader:'כולם'},
    deleteUrl:"/.netlify/functions/delete_report",
      updateUrl:"/.netlify/functions/update_report",
      getAuthorized:'/.netlify/functions/fetch_authorized',
      knasim:[],
    }
  },
  methods:{
    handleRange(range){
            this.$refs.prox.hide()

            if(typeof this.filterModel.date == 'string'){
                this.filterModel.date = {from:this.filterModel.date,to:this.filterModel.date}
            } 
            this.$emit("on-edit",this.generalModel,"general")

        },
    cleanFilter(){
        this.filterModel.date=''
        this.filterModel.leader=''
        this.filterModel.kenesName=''
        this.knasim = [...this.allKnasimBackup]
    },
    
  },
    components:{
      KenesCard,
        Nav
    },
 
    async mounted(){
      
       const response = await axios.get(this.getAuthorized,{
        headers:{
          Authorization:`Bearer ${sessionStorage.getItem('token')}`
        }
       })
       this.knasim = response.data
      
       this.knasim.forEach(kenes=>{
            kenes.general.date.from = moment(new Date( kenes.general.date.from),'L', 'he').format("D/M")
           kenes.general.date.to = moment(new Date( kenes.general.date.to),'L', 'he').format("D/M")
            kenes.date = moment(new Date(kenes.date),'L', 'he').format("D/M");

        })
        this.allKnasimBackup = [...this.knasim]
       console.log(this.knasim)
       this.isAuthenticated = true
    }
}                                              
</script>

<style scoped>

@media (max-width:1280px) {

}

table{
    width:var(--width-tables);
    display: block;
        border-collapse: collapse;
    table-layout: fixed;
    text-align: center;
    padding: 0;
    table-layout: initial !important;
  /* font-size: 3.4rem !important; */
  /* width: 70% !important; */
  /* min-width: 340px !important; */
    margin: 0 auto;
    color: white;
}
table thead{
  display: block;
    width: var(--width-tables);
}
table tbody{
    display: block;
    width: var(--width-tables);
    overflow: auto;
    height: 380px;
}
table tbody tr{
    display: block;
    width: var(--width-tables);
    border-bottom: 1px solid grey;

}
td,th{
  width: calc(var(--width-tables)/4);
  font-size: 1.4rem;
  /* width: 25%; */
}
table thead tr{
        width:100%;

    text-align: right;
    display:block;
}
table thead tr th{
  /* width: 25%; */
  /* display: block; */
  color:black;
    /* width: 80px; */
    text-align: center;
    /* font-size: 1.2rem; */
    /* border-bottom: 1px solid white; */
}

.flex-item{
  width: 20%;
  min-width: 100px;
}
.action-btn-flex{
  display:flex;
  gap:10px;
  justify-content: center;
}
h3{
  font-size: 1.5rem;
  text-align: center;
}
.link-to-report{
    display: inline-block;
    font-size: 0.8rem;
    padding: 0.5em 1em;
    background-color: var(--main-clr);
    color: white;
    text-decoration: none;
    border-radius: 20px;
}
@media(max-width:480px){
    h3{
  font-size: 3rem !important;
  text-align: center;
}
h1{
    font-size: 6rem !important;

  font-family:var(--font-bold);
  margin-bottom: 6rem !important;
  text-align: center;
}
  .link-to-report{
    display: inline-block;
    font-size: 2rem !important;
    padding: 0.5em 1em;
    background-color: var(--main-clr);
    color: white;
    text-decoration: none;
    border-radius: 20px;
}
table{
  table-layout: initial !important;
  font-size: 3.4rem !important;
  width: 90% !important;
  min-width: 340px !important;
}


}

.spinner-container{
  text-align: center;
}


tr{
      border-bottom: 1px solid grey;

}

.knasim-flex{
  width: 100%;
      gap: 15px;

  max-width: 90rem;
    display: flex;
    margin:0 auto;
    flex-flow: row wrap;
}
tr{
  padding: 10px;
}
td{
  padding:5px;
  font-weight:600;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: rgba(87, 87, 87, 0.849);
}
.flex-btns-and-categories{
 display: flex;
 margin-bottom: 20px;
 justify-content: space-between;
   /* max-width: 100rem; */
  width: var(--width-tables);
  margin-right: auto;
  margin-left: auto;
}
.edit-btn-container{
  display: flex;
  gap: 20px;
  align-items: center;
}
.filtering-flex-categories{
  display: flex;
  justify-content:flex-start;
  align-items: center;
   margin-bottom: 20px;
   width: var(--width-tables);
  margin-right: auto;
  margin-left: auto;
  gap: 30px;
}


h1{
    font-size: 4rem;

  font-family:var(--font-bold);
  margin-bottom: 2rem;
  text-align: center;
}
</style>