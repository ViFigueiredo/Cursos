module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '130.211.226.255'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'blog_strapi'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'dev'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
