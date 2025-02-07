// schemas/food.js
export default {
  name: 'food',
  type: 'document',
  title: 'Food',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { title: 'Desi', value: 'desi' },
          { title: 'Chinese', value: 'chinese' },
          { title: 'Fast Food', value: 'fastfood' },
        ],
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
  ],
};