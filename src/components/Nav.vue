<template>
  <nav> 
    <router-link to="/"> 
      <img :src="require('@/assets/logo.png')">
    </router-link> 
    <div class="flex-links"> 
            <router-link to="/admin/pending"><span class="bi bi-bell"> </span> בקשות ממתינות</router-link>
                <router-link to="/admin"> <span class="bi bi-card-checklist"> </span>  רשימת בקשות</router-link>
                 <router-link to="/admin/board"> <span class="bi bi-calendar"> </span>  לוח כנסים</router-link>
    </div>
  </nav> 
</template>

<script>
export default {

}
</script>

<style scoped>
.flex-links{
    display: flex;

}.flex-links a span{
        margin: 0px 10px;
}
.flex-links a{
        font-size: 1.5rem;
        color: white;
        margin: 0px 20px;
        text-decoration: none;


}
img{
    position: absolute;
    height: 80px;
        left: 100%;
        transform: translate(-100%,-50%);

}
nav{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* text-align: right; */
    height: 100px;
    position: relative;
    direction: rtl;
    /* height: 100px; */
    background-color: var(--main-clr);
}

</style>