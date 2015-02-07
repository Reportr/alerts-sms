# SMS Alerts for Reportr

### How to add it to your instance?

Add `reportr-alerts-sms` to the `package.json` and load it in your Reportr configuration:

```js
reportr.configure({
    alerts: [
        {
            alert: require("reportr-alerts-sms"),
            options: {
                sId: process.env.TWILIO_SID,
                token: process.env.TWILIO_TOKEN,
                from: process.env.TWILIO_FROM
            }
        }
    ]
});
```
