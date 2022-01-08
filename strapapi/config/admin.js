module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3c527d6e74349701750b103d85def798'),
  },
});
