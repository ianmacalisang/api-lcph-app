module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-ftp-upload",
      providerOptions: {
        host: env("FTP_HOST"),
        port: env("FTP_PORT", 21),
        user: env("FTP_USER"),
        password: env("FTP_PASSWORD"),
        secure: env.bool("FTP_SECURE", false),
        path: env("FTP_BASE_PATH"),
        baseUrl: env("FTP_BASE_URL"),

        connectionConcurrency: env("FTP_CONNECTION_CONCURRENCY", 5), // 👈 Optional. Default to 5
        useSentry: true, // 👈 Optional. Default to false
      },
    },
  },
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.example.com"),
        port: env("SMTP_PORT", 587),
        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: env("SMTP_DEFAULT_FROM"),
        defaultReplyTo: env("SMTP_DEFAULT_REPLY_TO"),
      },
    },
  },
});
