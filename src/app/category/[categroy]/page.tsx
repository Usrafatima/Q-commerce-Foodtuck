import { client } from '@/sanity/lib/client';

type FoodItem = {
  _id: string;
  name: string;
  category: string;
  description: string;
};

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  console.log('Params:', params); // Debugging the received params

  const { category } = params;

  // Make sure category is a valid string
  if (!category || typeof category !== 'string') {
    return <p>Invalid category parameter.</p>;
  }

  const query = `*[_type == "food" && category == $category] {
    _id,
    name,
    category,
    description
  }`;

  // Fetch data based on the category parameter
  try {
    const foods: FoodItem[] = await client.fetch(query, { category });

    if (!foods || foods.length === 0) {
      return <p>No foods found in this category.</p>;
    }

    return (
      <div>
        <h1>{category} Foods</h1>
        {foods.map((food) => (
          <div key={food._id}>
            <h3>{food.name}</h3>
            <p>{food.description}</p>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return <p>Error fetching data for this category.</p>;
  }
}
