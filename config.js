'use strict';

module.exports = {
  // App name
  appName: 'ROCKETCATEST',

  // Public domain of Rocket Deliveries
  publicDomain: process.env.ENV === 'local' ? 'http://localhost:3000' : 'https://rocket-deliveries-ca-test.herokuapp.com/',

  // Whether to register webhook events. For a local development environment, 
  // you can also forward webhook events with the Stripe CLI:
  //   stripe listen -f localhost:3000/pilots/stripe/webhooks
  registerWebhooks: false,

  // Server port
  port: process.env.PORT || 3000,

  // Secret for cookie sessions
  secret: 'dafhjuklsdhfuilawehuilfhsduilhfuilsdhfasdkfhasdjkhfjklsdh',

  // Configuration for Stripe
  // API Keys: https://dashboard.stripe.com/account/apikeys
  // Connect Settings: https://dashboard.stripe.com/account/applications/settings
  stripe: {
    secretKey: process.env.STRIPE_SECRET_KEY,
    publishableKey: 'pk_test_gOsDEqiK6WPGhBjdt1g0zZGz00CbjyFHRx',
    clientId: 'ca_Gla2rpCfHdxTo0AgggxO93CaK4GWPam5',
  },

  // Configuration for MongoDB
  mongoUri: process.env.MONGODB_URI,
};
