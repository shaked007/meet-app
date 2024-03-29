var elasticemail = require('elasticemail');
const { promisify } = require('util');
var client = elasticemail.createClient({
  username: 'shakedbukai@gmail.com',
  apiKey: '6300BB27D5A1A72D8833377C09A26B86B3192DE0EFE5FF05F2547D79ADD881608900A7253A01B1CC15C985C08BD091FE'
});
const sendEmail = promisify(client.mailer.send.bind(client.mailer));
const emailAdmin = "shakedbukai@gmail.com"
exports.handler = async (event) => {
  
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed', headers: { 'Allow': 'POST' } }
  }
  
  const data = JSON.parse(event.body)
  if (!data['kenes-name'] || !data['megish'] || !data['submitted-date'] || !data['contact-email'] ) {
    return { statusCode: 422, body: 'kenes-name, megish,contact-email and submitted-date are required.' }
  }
const meetappIcon = ``;
const tzameretIcon = ``;
const beeIcon= ``;
const beeFirstLink = ``;
const beeSecondLink = ``;


// const meetappIcon =`<img class="big" src="https://meet-app383.netlify.app/img/logo.a89e8ab6.png" style="display: block; height: auto; border: 0; width: 680px; max-width: 100%;" width="680">`
// const tzameretIcon = `<img class="fullMobileWidth" src="https://upload.wikimedia.org/wikipedia/commons/a/a6/383zameret.png" style="display: block; height: auto; border: 0; width: 136px; max-width: 100%;" width="136" alt="Polar bear sitting on tiny ice" title="Polar bear sitting on tiny ice">`
// const beeIcon = `<img class="icon" alt="Designed with BEE" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/BeeProAgency/53601_510656/Signature/bee.png" height="32" width="34" align="center" style="display: block; height: auto; margin: 0 auto; border: 0;">`
const appLink = `<a href="https://meet-app383.netlify.app/#/kenes/pending/${data.id}" target="_blank" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#133c55;border-radius:4px;width:auto;border-top:1px solid #133C55;font-weight:undefined;border-right:1px solid #133C55;border-bottom:1px solid #133C55;border-left:1px solid #133C55;padding-top:5px;padding-bottom:5px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word; line-height: 32px;">מעבר להזמנה</span></span></a>`
// const beeFirstLink =`<a href="https://www.designedwithbee.com/" target="_blank" style="text-decoration: none;">${beeIcon} </a>`
// const beeSecondLink =`<a href="https://www.designedwithbee.com/" target="_blank" style="color: #9d9d9d; text-decoration: none;">Designed with BEE</a>`
var msgClient = {
  from:'meetapp383@gmail.com',
  from_name:'meetapp',
  to:data['contact-email'],
  subject:` קיבלנו את בקשתכם לכנס ${data['kenes-name']}`,
  body_text:'כדי לצפות בהתקדמות, יש ליצור קשר עם רותם כהן'

}
  var msgToAdmin = {
    from: 'meetapp383@gmail.com',
    from_name: 'meetapp',
    to: emailAdmin,
    subject: `בקשה חדשה לכנס בוצעה על ידי ${data['megish']}` ,
    // body_text:'נשלח בהצלחה!',
    body_html: `<!DOCTYPE html>
    <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
    
    <head>
      <title></title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
      <style>
        * {
          box-sizing: border-box;
        }
    
        body {
          margin: 0;
          padding: 0;
        }
    
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: inherit !important;
        }
    
        #MessageViewBody a {
          color: inherit;
          text-decoration: none;
        }
    
        p {
          line-height: inherit
        }
    
        .desktop_hide,
        .desktop_hide table {
          mso-hide: all;
          display: none;
          max-height: 0px;
          overflow: hidden;
        }
    
        .image_block img+div {
          display: none;
        }
    
        @media (max-width:700px) {
          .desktop_hide table.icons-inner {
            display: inline-block !important;
          }
    
          .icons-inner {
            text-align: center;
          }
    
          .icons-inner td {
            margin: 0 auto;
          }
    
          .fullMobileWidth,
          .image_block img.big,
          .row-content {
            width: 100% !important;
          }
    
          .mobile_hide {
            display: none;
          }
    
          .stack .column {
            width: 100%;
            display: block;
          }
    
          .mobile_hide {
            min-height: 0;
            max-height: 0;
            max-width: 0;
            overflow: hidden;
            font-size: 0px;
          }
    
          .desktop_hide,
          .desktop_hide table {
            display: table !important;
            max-height: none !important;
          }
        }
      </style>
    </head>
    
    <body style="background-color: #133c55; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
      <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #133c55;">
        <tbody>
          <tr>
            <td>
              <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #187296;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #187296;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; width: 680px;" width="680">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                    <div class="alignment" align="center" style="line-height:10px">${meetappIcon}</div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #187296;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <div class="spacer_block block-1" style="height:50px;line-height:50px;font-size:1px;">&#8202;</div>
                              <table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad" style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:15px;text-align:center;width:100%;">
                                    <h1 style="margin: 0; color: #ffffff; direction: ltr; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 48px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">התקבלה הזמנה חדשה לכנס</span></h1>
                                  </td>
                                </tr>
                              </table>
                              <table class="text_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                <tr>
                                  <td class="pad" style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:10px;">
                                    <div style="font-family: sans-serif">
                                      <div class style="font-size: 12px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 24px; color: #ffffff; line-height: 2;">
                                        <p style="margin: 0; font-size: 12px; text-align: center; mso-line-height-alt: 52px;"><span style="font-size:26px;"><span dir='rtl'> ${data['kenes-name']} </span> : הזמנה ל</span></p>
                                        <p style="margin: 0; font-size: 12px; text-align: center; mso-line-height-alt: 52px;"><span style="font-size:26px;"> <span dir='rtl'>  ${data['megish']} </span> : בוצעה על ידי</span></p>
                                        <p style="margin: 0; font-size: 12px; text-align: center; mso-line-height-alt: 52px;"><span style="font-size:26px;"> <span dir='rtl'>  ${data['submitted-date']}  </span> : בתאריך  </span></p>
                                        <p style="margin: 0; font-size: 12px; text-align: center; mso-line-height-alt: 24px;">&nbsp;</p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table class="button_block block-4" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad">
                                    <div class="alignment" align="center"><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="www.example.com" style="height:44px;width:131px;v-text-anchor:middle;" arcsize="10%" strokeweight="0.75pt" strokecolor="#133C55" fillcolor="#133c55"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]-->
                                    ${appLink}
                                    <!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
                                  </td>
                                </tr>
                              </table>
                              <div class="spacer_block block-5" style="height:50px;line-height:50px;font-size:1px;">&#8202;</div>
                              <table class="image_block block-6" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                    <div class="alignment" align="center" style="line-height:10px">
                                   ${tzameretIcon}
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <div class="spacer_block block-7" style="height:55px;line-height:55px;font-size:1px;">&#8202;</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad" style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
                                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                      <tr>
                                        <td class="alignment" style="vertical-align: middle; text-align: center;"><!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                          <!--[if !vml]><!-->
                                          <table class="icons-inner" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;" cellpadding="0" cellspacing="0" role="presentation"><!--<![endif]-->
                                            <tr>
                                              <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;">
                                           ${beeFirstLink}
                                              </td>
                                              <td style="font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 15px; color: #9d9d9d; vertical-align: middle; letter-spacing: undefined; text-align: center;">
                                              ${beeSecondLink}
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table><!-- End -->
    </body>
    
    </html>`
  }
 

 
  return  sendEmail(msgToAdmin).then(() =>sendEmail(msgClient)).then(()=>{
    return {
      statusCode: 200,
      body: "Your message was sent successfully! We'll be in touch."
    }
  }).catch(error => {
    console.log(error)
    console.log(error.message)
    return {
    statusCode: 422,
    body: ` processed data but got Error : ${error}`
  }
  })
}