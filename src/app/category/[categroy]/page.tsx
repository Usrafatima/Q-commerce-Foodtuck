import { GetServerSideProps } from "next";
import { client } from "@/sanity/lib/client";

type FoodItem = {
  _id: string;
  name: string;
  category: string;
  description: string;
};

interface CategoryPageProps {
  category: string;
  foods: FoodItem[];
}

export default function CategoryPage({ category, foods }: CategoryPageProps) {
  if (!category) return <p>Invalid category parameter.</p>;

  return (
    <div>
      <h1>{category} Foods</h1>
      {foods.length > 0 ? (
        foods.map((food) => (
          <div key={food._id}>
            <h3>{food.name}</h3>
            <p>{food.description}</p>
          </div>
        ))
      ) : (
        <p>No foods found in this category.</p>
      )}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const category = context.params?.category as string;

  if (!category) {
    return { notFound: true };
  }

  const query = `*[_type == "food" && category == $category] {
    _id,
    name,
    category,
    description
  }`;

  try {
    const foods: FoodItem[] = await client.fetch(query, { category });

    return { props: { category, foods } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { category, foods: [] } };
  }
};
