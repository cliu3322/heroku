'use strict';

const line = require('@line/bot-sdk');
const express = require('express');
const btcValue = require('btc-value');

// create LINE SDK config from env variables
const config = {
  channelAccessToken: 'Z0avumc1IPrBPzgmijsWDGVPqZsYpiDi2GS9yUlvLkGNTJpLYKQ5QAF320VN/A0GgsDS+7k21cXB8v/d6nc7RvdRgP/s/hb6ArRcruZSmJlwQZaoh/yKlDB4sdPqvATfm/iOyt1ljkBaLboNJu2HvAdB04t89/1O/w1cDnyilFU=',
  channelSecret: '07b219fd964aad64d8d12eff5770e6b6',
};

// create LINE SDK client
const client = new line.Client(config);

// create Express app
// about Express itself: https://expressjs.com/
const app = express();
app.get('/', (req, res) => {

res.send('asdfsd')

})
// register a webhook handler with middleware
// about the middleware, please refer to doc
app.post('/callback', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

// event handler
async function handleEvent(event) {

  if (event.type !== 'message' || event.message.type !== 'text') {
    // ignore non-text-message event
    return Promise.resolve(null);
  }

  // create a echoing text message
  const echo = { type: 'text', text: event.message.text };
  switch (event.message.text) {
    case 'id':
      echo.text = `@758xkumr`
      break;
    case 'line':
      echo.text = `jpnagency`
      break;
    case 'greet':
      echo.text = `ยินดีต้อนรับ! เรารับสมัครเด็กผู้หญิงที่ต้องการทำงานในญี่ปุ่น เราให้บริการที่ดีที่สุดรับประกันสภาพแวดล้อมที่ปลอดภัยให้ผลงานเป็นเวลาสองสัปดาห์และอาจมีงาน 1.4 ล้านบาท หากคุณสนใจโปรดเพิ่ม LINE: jpnagency หรือพิมพ์ "line"

Welcome! we are the best Japanese Model Agency. We provide the best service for girls who want to work in Japan. Make it safer and easier to make 130000+ Baht within two weeks. If you are interested, please add Line: jpnagency

หากคุณสามารถแนะนำเพื่อนหรือพบกับผู้หญิงจำนวนมากโปรดติดต่อเราที่ Line: jpnagency หรือ WeChat: HawaiiMoney เราสามารถเสนอค่าธรรมเนียมตัวแทนที่สำคัญมาก
If you want to introduce your friends or if you have many girls, please add Line: jpnagency OR WeChat: HawaiiMoney. We offer a good reference fee.`
      break;
    case 'system':
      echo.text = `40m 1s 4000 JPY/1112THB
50m 1s 4500-5500 JPY/1251-1530THB
60m 1s 5500-7500 JPY/1530-2087THB
70m 2s 6500-8000 JPY/1810-2225THB
80m 2s 7500-10000 JPY/2087-2781THB
(all above is net income for models)
ตัวเลขข้างต้นเป็นรายได้สุทธิของผู้หญิงทั้งหมด

ราคาห้อง: 3,000 เยนหรือ 835 บาทต่อวัน
สินเชื่อที่อยู่อาศัย: หากคุณต้องการยืนยันการนัดหมายผู้หญิงจะต้องส่งตั๋วที่ซื้อไปแล้วพร้อมเงินมัดจำ 10,000 เยนหรือ 3,000 บาท เงินมัดจำจะคืนให้หลังจากที่หญิงสาวมาถึงญี่ปุ่น
วัสดุสิ้นเปลือง: ร้านค้าจะจัดหาวัสดุสิ้นเปลืองทั้งหมดยกเว้นลูกบอลสีเหลืองขนาดเล็ก`
      break;
    case 'money':
      echo.text = `โดยทั่วไปแล้วการทำงานในญี่ปุ่นเป็นเวลาสองสัปดาห์จะได้รับ 250,000-500,000 เยนหรือ 70,000-1400,000 บาท หากเราทำงานกับเรามากกว่าหนึ่งครั้งเราจะให้เงินเดือนพื้นฐาน 20,000 เยนหรือ 6,000 บาทต่อวัน (เงื่อนไขที่ดีเราจะให้เงินเดือนจากล่างขึ้นบนที่ดีขึ้นเพื่อให้คุณสามารถบันทึกความกังวลของคุณ) สำหรับรายละเอียดของรายได้เช่นแชร์ร้านค้าค่าธรรมเนียมและรายได้รายชั่วโมงโปรดติดต่อเราหรือป้อน "system"

      Usually, girls work two weeks in Japan can make 250000-500000 JPY / 70000-140000 THB in hand. Any girls, who works with me more than once, you have a Guarantee salary 20000 JPY /6000 THB per day. （Those model with super condition, we will pay the basic salary, too)  For details, like Proportion, fee or income per hour, please contact us or type “system”.`
      break;
    case 'job':
      echo.text = `เรามีร้านค้าหลายประเภทในโตเกียวและนาโกย่า คุณสามารถเลือกงานที่คุณชอบ หากคุณรู้สึกว่าสถานที่ไม่ตรงตามความคาดหวังคุณสามารถเปลี่ยนไปที่อื่นได้ตลอดเวลา ผู้จัดการของเรานั้นเป็นมิตรมากและคุณมีอิสระทั้งเวลาและสถานที่
หากคุณเป็นคนไทยคุณสามารถอยู่ในญี่ปุ่นได้ 15 วันโดยไม่ต้องขอวีซ่า แต่ถ้าคุณสมัครวีซ่าล่วงหน้าคุณสามารถทำงานได้นานถึง 3 เดือน สำหรับพลเมืองของประเทศอื่น ๆ เราสามารถช่วยในการยื่นขอวีซ่า แต่ไม่มีการรับประกัน

We own various spa/stores located in Tokyo and Nagoya. You can choose whatever kind of job you like. If you don’t like the one location, we can switch you with another one as you wish. The manager is very friendly, and you have full freedom and control of schedule and location.
If you have a Thailand passport, you can stay in Japan for 15 days visa-free. But if you apply for a visa in advance, you can stay as long as three months.`
      break;
    case 'agency':
      echo.text = `เรามีพนักงานประจำในกรุงเทพที่สามารถช่วยคุณนัดหมาย พนักงานของเรามีความสุขมากที่ได้ใช้เวลานั่งกับคุณและตอบคำถามของคุณ โปรดเพิ่ม Line ID ทุกครั้งที่ทำได้: jpnagency พบกับตัวแทนของเราเพื่อทำการนัดหมาย หากจำเป็นเจ้าหน้าที่สามารถช่วยคุณจองตั๋วหรือกรอกใบสมัครขอวีซ่า

      We have staff located in Bangkok, who can help you schedule your work. Our agency in Bangkok will be very glad to sit down with you and answer your questions. So please, please add our Line: jpnagency and schedule an appointment with our agency. If needed, they can also help on booking flight tickets and paperwork.`
      break;
    case 'hj':
      echo.text = `คุณอาจได้รับ 30,000 เยนหรือ 8350 บาทต่อวัน
60 นาทีในการรวบรวมแขก 10,000 เยนหรือ 2,718 บาทผู้หญิงใช้ 50%, 5,000 เยนหรือ 1,391 บาท (ความร่วมมือระยะยาวสามารถรับ 60%, 6000 เยนหรือ 1670 บาท)

Possibly make 30000 JPY per day.  OR 8350THB per day
60m 10000 JPY/2781THB girl take 5000JPY/1391THB (long-term girl take 6000JPY/1670THB)`
      break;
    case 'contact':
      echo.text = `สำหรับรายละเอียดหรือคำถามอื่น ๆ โปรดเพิ่ม Line: jpnagency WeChat: HawaiiMoney กรุณากรอก "line"
For details, or any other questions, please add Line: jpnagency OR WeChat: HawaiiMoney. Please type “line”`
      break;
    default:
      echo.text = `I do not understand this keyword. Please add our agency Line: jpnagency`
      break;
  }

  // use reply API

  return client.replyMessage(event.replyToken, echo);
}

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
