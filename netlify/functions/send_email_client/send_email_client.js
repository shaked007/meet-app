var elasticemail = require('elasticemail');
const { promisify } = require('util');
var client = elasticemail.createClient({
  username: 'shakedbukai@gmail.com',
  apiKey: '6300BB27D5A1A72D8833377C09A26B86B3192DE0EFE5FF05F2547D79ADD881608900A7253A01B1CC15C985C08BD091FE'
});
const sendEmail = promisify(client.mailer.send.bind(client.mailer));
exports.handler = async (event) => {
  
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed', headers: { 'Allow': 'POST' } }
  }
  
  const data = JSON.parse(event.body)
  if (!data['kenes-name'] || !data['megish'] || !data['submitted-date'] || !data['contact-email'] ) {
    return { statusCode: 422, body: 'kenes-name, megish,contact-email and submitted-date are required.' }
  }




var msgClient = {
  from:'meetapp383@gmail.com',
  from_name:'meetapp',
  to:data['contact-email'],
  subject:` קיבלנו את בקשתכם לכנס ${data['kenes-name']}`,
  body_text:'כדי לצפות בהתקדמות, יש ליצור קשר עם רותם כהן'

}
  

 
  return  sendEmail(msgClient).then(()=>{
    return {
      statusCode: 200,
      body: "Your message was sent successfully! We'll be in touch."
    }
  }).catch(error => {
    return {
    statusCode: 422,
    body: ` processed data but got Error : ${error}`
  }
  })
}