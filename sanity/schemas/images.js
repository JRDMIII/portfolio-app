export const artImages = {
  name: 'artimages',
  title: 'Art Images',
  type: 'document',
  fields: [
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true
      },
    }
  ],
}
