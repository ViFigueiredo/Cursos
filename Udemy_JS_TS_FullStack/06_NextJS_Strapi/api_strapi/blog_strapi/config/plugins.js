module.exports = ({env}) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDNAME_KEY'),
        api_secret: env('CLOUDINARY_SECRET')
      }
    }
  }
})
