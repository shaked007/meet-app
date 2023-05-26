<template>
  <nav> 
    <router-link to="/"> 
      <img  :src="require('@/assets/logo.png')">
    </router-link> 
    <div class="flex-links"> 
            <router-link :class="activeLink =='history'? 'chosen': '' " to="/admin/history"><span  :class="activeLink == 'history'  ? 'bi bi-funnel-fill' : 'bi bi-funnel' "> </span> היסטוריית כנסים</router-link>
            <router-link :class="activeLink =='pending'? 'chosen': '' " to="/admin/pending"><span :class="activeLink=='pending' ? 'bi bi-bell-fill' : 'bi bi-bell' "> </span> בקשות ממתינות</router-link>
                <router-link :class="activeLink =='requests'? 'chosen': ''" to="/admin"> <span :class="activeLink=='requests' ? 'bi bi-archive-fill' : 'bi bi-archive' "> </span>  רשימת כנסים</router-link>
                 <router-link :class="activeLink =='board'? 'chosen': ''" to="/admin/board"> <span :class="activeLink=='board'?'bi bi-calendar-fill':'bi bi-calendar'"> </span>  לוח כנסים</router-link>
    </div>
        <a  v-if="$isMobile" class="toggle-button" @click="isActive = !isActive">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </a>
  </nav> 
  <div v-if="$isMobile && isActive" class="mobile-flex"> 
  <router-link :class="activeLink =='history'? 'chosen': '' " to="/admin/history"><span  :class="activeLink == 'history'  ? 'bi bi-funnel-fill' : 'bi bi-funnel' "> </span> היסטוריית כנסים</router-link>
            <router-link :class="activeLink =='pending'? 'chosen': '' " to="/admin/pending"><span :class="activeLink=='pending' ? 'bi bi-bell-fill' : 'bi bi-bell' "> </span> בקשות ממתינות</router-link>
                <router-link :class="activeLink =='requests'? 'chosen': ''" to="/admin"> <span :class="activeLink=='requests' ? 'bi bi-archive-fill' : 'bi bi-archive' "> </span>  רשימת כנסים</router-link>
                 <router-link :class="activeLink =='board'? 'chosen': ''" to="/admin/board"> <span :class="activeLink=='board'?'bi bi-calendar-fill':'bi bi-calendar'"> </span>  לוח כנסים</router-link>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isActive:false,
    }
  },
    props:["pendingNumber","activeLink"]
}
</script>

<style scoped>
@media print{
  nav{
    display: none !important;

  }
  .mobile-flex{
    display: none !important;
  }
}
@media (max-width:1400px) and (min-width:481px) {
  .flex-links a{

        font-size: 1.1rem !important;
        padding: 5px 20px !important;
    
}
}
@media(max-width:480px){
  .mobile-flex{
    background-color: var(--main-clr);
    display: flex;
    align-items: center;
    flex-direction: column;
     font-size:2.3rem;
     gap: 5px;
   
        color: white;
  }
  .mobile-flex a{
       padding: 5px 20px;
      border-radius: 20px;
     color: white;
  text-decoration: none;
  }
  .flex-links{
    display: none !important;
}
    .toggle-button {
        display: flex !important;
    }
nav{
  height: 80px !important;
  justify-content: space-between !important;
}
img{
    position: relative !important;
    height: 80px;
        left: 0% !important;
        border: 10px solid var(--main-clr);
        padding: 0 !important;
      transform: none  !important;

}
}

.flex-links{
    display: flex;

}
.flex-links a span{
        margin: 0px 10px;
}
.flex-links a{
  padding: 5px 40px;
        font-size: 1.5rem;
        color: white;
        margin: 0px 5px;
        text-decoration: none;
        border-radius: 20px;
}
.chosen{
  background-color: rgba(0,0,0,0.5);

}
img{
    position: absolute !important;
    height: 80px;
        right:0% !important;
        top: 50%;
        border: 10px solid var(--main-clr);
        padding: 0 !important;
      transform: translate(0%,-50%)  !important;

}
nav{
    display: flex;
    justify-content: left;
    align-items: center;
    /* text-align: right; */
    height: 100px;
    position: relative;
    direction: rtl;
    /* height: 100px; */
    background-color: var(--main-clr);
}

.toggle-button {
    position: relative;
    top: .75rem;
    left: 3rem;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
}

.toggle-button .bar {
    height: 3px;
    width: 100%;
    background-color: white;
    border-radius: 10px;
}



</style>