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

const text = " I like Italy MCSRECOCOTurkey CT";

let countriesInText = Object.keys(abbreviations).filter(key => text.includes(key));

console.log("The above message contains abbrevations, the meaning of this abbrevations are")
for(let i = 0; i < countriesInText.length; i++){
  console.log(i+1 + ". " + countriesInText[i] + " :- " + abbreviations[countriesInText[i]])
}

app.message(/CT/, async ({ command, say }) => {
    try {
      say("The above message contains abbrevation, the meaning of this abbrevation is: Commerce Tools");
    } catch (error) {
        console.log("err")
      console.error(error);
    }
});

app.message(/FLD/, async ({ command, say }) => {
    try {
      say("The above message contains abbrevation, the meaning of this abbrevation is: Frontline Developer");
    } catch (error) {
        console.log("err")
      console.error(error);
    }
});

app.message(/COCO/, async ({ command, say }) => {
    try {
      say("The above message contains abbrevation, the meaning of this abbrevation is: Composable Commerce");
    } catch (error) {
        console.log("err")
      console.error(error);
    }
});

app.message(/SRE/, async ({ command, say }) => {
    try {
      say("The above message contains abbrevation, the meaning of this abbrevation is: Site Reliability Engineer");
    } catch (error) {
        console.log("err")
      console.error(error);
    }
});

app.message(/P&O/, async ({ command, say }) => {
    try {
      say("The above message contains abbrevation, the meaning of this abbrevation is: People and Operations");
    } catch (error) {
        console.log("err")
      console.error(error);
    }
});

app.message(/MC/, async ({ command, say }) => {
    try {
      say("The above message contains abbrevation, the meaning of this abbrevation is: Merchant Center");
    } catch (error) {
        console.log("err")
      console.error(error);
    }
});

(async () => {
  const port = 3000
  await app.start(process.env.PORT || port);
  console.log(`⚡️ Slack Bolt app is running on port ${port}!`);
})();