const { App } = require("@slack/bolt");
require("dotenv").config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode:true, 
  appToken: process.env.APP_TOKEN
});

let abbreviations ={
  "CT" : "Commerce Tools",
  "COCO" : "Composable Commerce",
  "FLD" :	"Frontline Developer",
  "SRE" :	"Site Reliability Engineer",
  "P&O" :	"People and Operations",
  "MC" : "Merchant Center"
};

function concaty(abbrevationKeys,abbreviations){
  let countDown = "";
  for(let i=0; i<abbrevationKeys.length; i++){
    countDown += `\n${i+1}.- ${abbrevationKeys[i]} - ${abbreviations[abbrevationKeys[i]]}`;
  };
  return countDown;
}

(async () =>  {

  try {

    const port = 3000
    await app.start(process.env.PORT || port);

    app.event(
      { type: 'message', channel: process.env.CHANNEL_ID, text: /^(SRE|COCO|CT|FLD|P&O|MC).*/ },
      // middleware,
      async ({ message, say }) => {
        const mess = message.text;
        let abbrevationKeys = Object.keys(abbreviations).filter(key => mess.includes(key));
        say(`The above message contains abbrevation, the meaning of this abbrevation are: ${concaty(abbrevationKeys,abbreviations)}`);
      }
    );

  } catch(error) {
    console.error(error);
    process.exit();
  }

})();
