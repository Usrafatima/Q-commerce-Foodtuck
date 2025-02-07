import type { Rule } from "sanity"; // Import Rule type

export default {
  name: "food",
  type: "document",
  title: "Food",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Food Name",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name",
      },
    },
    {
      name: "category",
      type: "string",
      title: "Category",
      description: "Category of the food item (e.g., Desi, Chinese, Fast Food, Drinks)",
      options: {
        list: [
          { title: "Desi", value: "desi" },
          { title: "Chinese", value: "chinese" },
          { title: "Fast Food", value: "fastfood" },
          { title: "Drinks", value: "drinks" },
        ],
      },
    },
    {
      name: "price",
      type: "number",
      title: "Current Price",
    },
    {
      name: "originalPrice",
      type: "number",
      title: "Original Price",
      description: "Price before discount (if any)",
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "Tags for categorization (e.g., Best Seller, Popular, New)",
    },
    {
      name: "image",
      type: "image",
      title: "Food Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Short description of the food item",
    },
    {
      name: "available",
      type: "boolean",
      title: "Available",
      description: "Availability status of the food item",
    },
    {
      name: "reviews",
      type: "array",
      title: "Reviews",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "rating",
              type: "number",
              title: "Rating (1-5)",
              validation: (Rule: Rule) => Rule.min(1).max(5), // Correct type usage
            },
            {
              name: "comment",
              type: "string",
              title: "Comment",
            },
            {
              name: "user",
              type: "string",
              title: "User Name",
            },
          ],
        },
      ],
    },
  ],
};
