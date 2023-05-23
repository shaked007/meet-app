<template>
  <Nav :activeLink="'board'" />
<br> 
<br>
<h1 class="calendar-header"> לוח כנסים חודשי</h1>

    <div class="spinner-container" v-if="!isAuthenticated" >
       <v-progress-circular 
      indeterminate
      color="blue"
      size="90"
    ></v-progress-circular>
    </div>
  <div class="calendar-container">
     <FullCalendar  v-if="isAuthenticated"  :options="calendarOptions" />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue"
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import axios from "axios"

import interactionPlugin from '@fullcalendar/interaction'

export default {
  methods:{
    handleDateClick(info){
      console.log(info)
      this.$router.push(`/kenes/approved/${info.event.id}`)
    }
  },
 async beforeMount(){
       const response = await axios.get(this.getAuthorized,{
        headers:{
          Authorization:`Bearer ${sessionStorage.getItem('token')}`
        }
       })
       this.knasim = response.data
      this.calendarOptions.events = this.knasim.map((kenes)=>{
       const fromDate =  new Date(kenes.general.date.from)
       const toDate = new Date(kenes.general.date.to)
      if( kenes.general.date.from != kenes.general.date.to){
          toDate.setDate(toDate.getDate() + 1)
      }
        return {title:kenes.general['kenes-name'],id:kenes['_id'],allDay:true,start:fromDate,end:toDate,borderColor:'rgb(24, 114, 150)',backgroundColor: 'rgb(24, 114, 150)'
}
      })
      console.log( this.calendarOptions.events)
       this.isAuthenticated = true
    
  },
  data(){
    return{
      colorsObject:{
        'קשר"ר':'#364955',
        'הרמטכ"ל':'#187296'
        ,'סגן הרמטכ"ל':'#9AAEBB',
        'ראש אג"ת':'#88633C',
        'רח"ט תוה"ד':'#BF966D',
        'אחר':'#8C5A7F'
      },
      isAuthenticated:false,
      getAuthorized:'/.netlify/functions/fetch_authorized',
      calendarOptions: {
        locale:'he',
        // timeZone: 'Asia/Jerusalem',
          dayHeaderFormat: {
        weekday: 'long',
        omitCommas: true,
  
      },
          buttonText: {
        today: 'היום' // Set the Hebrew translation for "Today"
      },
        hiddenDays:[6,5],
        direction:'rtl',
        plugins: [ dayGridPlugin, interactionPlugin ],
        initialView: 'dayGridMonth',
        height:'600px',
        
        eventClick: this.handleDateClick,
        events: [
        ]
    }
  }
}
,
    components:{
        Nav,
        FullCalendar 
    }
}
</script>

<style >
@media(max-width:480px){

.calendar-header{
    font-size: 6rem !important;

  font-family:var(--font-bold);
  margin-bottom: 6rem !important;
  text-align: center;
}
}
.calendar-header{
  font-size: 4rem;
  font-family:var(--font-bold);
  margin-bottom: 2rem;
  text-align: center;
}
.fc-h-event .fc-event-main:hover {
  cursor: pointer;
}
.spinner-container{
  text-align: center;
}

.fc .fc-button .fc-icon {
    font-size: 1.5em;
    vertical-align:initial !important;
}
.fc .fc-button-primary {
    background-color: var(--main-clr);
    border-color: var(--main-clr);
    color: white;
}
.calendar-header{
  font-family:var(--font-bold);
  margin-bottom: 3rem;
  text-align: center;
}
.calendar-container{
  width: 80%;
  margin: 0 auto;
}

</style>