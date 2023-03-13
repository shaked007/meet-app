<template>
<div class="direction-class">
<div v-if="!$isMobile" class="form-strip">  </div>
<div  class="flex-mobile">
    
<v-icon size="180" class="double-tick"> mdi-check-all</v-icon>
<h3> לפני שמתחילים</h3>
<p> הכנס יתוכנן לארבעה שלבים: תיאום ציפיות מול הגדוד סיור במיקום על מנת לוודא תקינותו, קבלת חומרים יומיים טרם הכנס ויום הקמות </p>
<p>תיאום המיקום והאולם באחריות הלשכה המובילה </p>
<p class="first">  אם  נדרשות עמדות  רישום באחריות מוביל הכנס להעביר דיסק עם רשימה המשתתפים   עפ"י  פורמט  מדויק  שתכתיב   מחלקת <span class="vip-dir">VIP </span> </p>
<div class="inputs-container">
    <form class="checbox-forms" method="GET" @submit.stop.prevent="submit"  >
<v-checkbox  required  class="checkboxes" size="3rem" label="הגשת טופס הבקשה תתבצע עד כשבועיים מתאריך הכנס"> </v-checkbox>
<v-checkbox  required  class="checkboxes" size="3rem" label="הלבנות והשחרות של חומרים לא באחריות גדוד 383"> </v-checkbox>
<v-checkbox  required  class="checkboxes" size="3rem" label="המחשבים בכנס יהיו ברמת הסיווג של הכנס"> </v-checkbox>
<v-checkbox  required  class="checkboxes" size="3rem" label='אין לפרט על חומרי מסווגים על הכנסים מטעמי ביטחון מידע'> </v-checkbox>
<router-link  class="route-back-btn" to="/" v-if="!$isMobile">  חזור</router-link>
<button class="finish-terms-button" type="submit"  v-ripple>קראתי והבנתי</button>

    </form>

</div> 
</div>
</div>
</template>

<script>
export default {
    methods:{
        submit(){
            this.$router.push({to:'/fill-kenes',name:'fill-kenes'})
        },
    },
    data(){
        return{
            vip:'VIP'
        }
    }
}
</script>

<style scoped>

.direction-class{
    direction: ltr !important;
}
.form-strip{
    height: 100%;
    width: 30%;
    position: absolute;
    right: 0%;
    background-color: var(--main-clr);
}
.finish-terms-button{
   align-self: center;
   /* position: absolute; */
   /* left: 50%; */
   margin-left: 50px;
   /* transform: translateX(-50%); */
   /* margin: 0 auto; */
   font-size: 3rem;
   background-color: var(--main-clr);
   color: white;
   padding: 0.5em 1em;
}
.checkboxes{
    text-align: center  ;
    width: 80%;
}
.checkboxes .v-label{
    font-size: 3rem;
}
.vip-dir{
    direction: rtl;
        unicode-bidi: embed;  

}
 .first::after{
    position: absolute;
    right: 50%;
   
}
.inputs-container{
    direction: ltr !important;
    position: relative;
    left: 3%;
    font-size: 6rem;
}
p{
        color: var(--font-clr);
direction: ltr;
    position: relative;
    text-align: left;
    font-weight: 600;
    width:80%;
    line-height: 3.7rem;
    font-size: 3.2rem;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
h3{
            color: var(--font-clr);

    margin-bottom: 30px;
    font-size:5rem;
    font-weight: 1000;
}
.flex-mobile{
    direction: ltr !important;
    margin: 0 auto;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.double-tick{
    color: var(--main-clr);
}
@media (min-width : 480px ) {
    
}
@media (min-width: 1180px) {
    .inputs-container{
    direction: rtl;
    
    position: relative;
    left: 3%;
    width: 30%;
    font-size: 6rem;
}
    p{
    direction: ltr !important;
    color: var(--font-clr);
    position: relative;
    text-align: let;
    font-weight: 600;
    width:30%;
    line-height: 1.5rem;
    font-size: 1.5rem;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.finish-terms-button{
    font-size: 1.5rem;
}
     .inputs-container{
    direction: ltr;
    position: relative;
    left: 0.4%;
    font-size: 4rem;
    
}
.route-back-btn{
    /* position: absolute; */
    left: 0%;
    display: inline-block;
    padding: 0.5em 1em;
    text-decoration: none;
    color: rgb(97, 96, 96);
    transition: all 0.2s ease-in;
    font-size: 1.5rem;
}
.route-back-btn:hover{
        background-color: rgba(128, 128, 128, 0.37);
}
.double-tick{
    color: var(--main-clr);
    font-size: 120px !important;
}
}
</style>