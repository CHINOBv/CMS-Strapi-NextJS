module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '27ec8bd3dbfa9d4b6e7cf5619d924bd5'),
    },
  },
});
