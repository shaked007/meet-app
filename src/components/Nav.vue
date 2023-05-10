<template>
  <nav> 
    <router-link to="/"> 
      <img v-if="!$ismobile" :src="require('@/assets/logo.png')">
    </router-link> 
    <div class="flex-links"> 
            <router-link :class="activeLink =='pending'? 'chosen': '' " to="/admin/pending"><span class="bi bi-bell"> </span> בקשות ממתינות</router-link>
                <router-link :class="activeLink =='requests'? 'chosen': ''" to="/admin"> <span class="bi bi-card-checklist"> </span>  רשימת בקשות</router-link>
                 <router-link :class="activeLink =='board'? 'chosen': ''" to="/admin/board"> <span class="bi bi-calendar"> </span>  לוח כנסים</router-link>
    </div>
  </nav> 
</template>

<script>
export default {
    props:["pendingNumber","activeLink"]
}
</script>

<style scoped>
.flex-links{
    display: flex;

}.flex-links a span{
        margin: 0px 10px;
}
.flex-links a{
  padding: 5px 40px;
        font-size: 1.5rem;
        color: white;
        margin: 0px 20px;
        text-decoration: none;
        border-radius: 20px;
}
.chosen{
  background-color: rgba(0,0,0,0.5);

}
img{
    position: absolute;
    height: 80px;
        left: 50%;
        border: 10px solid var(--main-clr);
        /* padding: 100px 100px; */
        transform: translate(-63%,40%);

}
nav{
    display: flex;
    justify-content: center;
    align-items: center;
    /* text-align: right; */
    height: 100px;
    position: relative;
    direction: rtl;
    /* height: 100px; */
    background-color: var(--main-clr);
}

</style>