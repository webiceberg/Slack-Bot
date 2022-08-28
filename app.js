const { App } = require("@slack/bolt");
require("dotenv").config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode:true, 
  appToken: process.env.APP_TOKEN
});

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