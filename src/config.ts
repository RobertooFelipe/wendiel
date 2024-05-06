export const config = {
  stripe: {
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.STRIPE_SECRET_KEY,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
    plans: {
      free: {
        priceId: "price_1PDCisFU3eJKS3cAaShHdPgd",
        quota: {
          TASKS: 5,
        },
      },
      pro: {
        priceId: "price_1PDCj8FU3eJKS3cAtMI7cund",
        quota: {
          TASKS: 100,
        },
      },
    },
  },
};
