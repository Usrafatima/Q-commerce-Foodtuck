"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import AddToCartButton from "@/app/component/AddToCartButton/AddToCartButton";
import Counter from "@/app/component/counter";
import { FaHeart, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaStar, FaRegStar } from "react-icons/fa";
import Link from "next/link";
import ProjectStatus from "@/app/public/Project Status.png"; // Consider renaming to remove spaces if needed

// Define additional types
type Review = {
  user: string;
  comment: string;
  rating: number;
};

type RelatedItem = {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  slug: { current: string };
};

interface Food {
  _id: string;
  name: string;
  price: number;
  tags: string[];
  image: any; // Adjust type if needed
  description: string;
  available: boolean;
  category: string;
  imageUrl: string;
  reviews?: Review[];
  slug: { current: string };
}

export default function Page() {
  // Obtain the slug from the URL parameters
  const { slug } = useParams() as { slug: string };

  // Local state for food item, related items, loading, and error states.
  const [food, setFood] = useState<Food | null>(null);
  const [relatedItems, setRelatedItems] = useState<RelatedItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Define an async function to fetch the data
    async function fetchFoods() {
      try {
        // Query to fetch the food item based on the slug
        const query = `*[_type=='food' && slug.current == $slug] {
          _id, name, price, tags, image, description, available, category,
          "imageUrl": image.asset->url,
          "reviews": reviews[]{rating, comment, user},
          slug
        }[0]`;

        const foodData = await client.fetch(query, { slug });
        if (!foodData) {
          setError("Product not found");
          setLoading(false);
          return;
        }
        setFood(foodData);

        // Query to fetch related items (same category but different slug)
        const relatedItemsQuery = `*[_type == 'food' && category == $category && slug.current != $slug] {
          _id, name, price, image, "imageUrl": image.asset->url, slug
        }`;

        const relatedData = await client.fetch(relatedItemsQuery, {
          category: foodData.category,
          slug: foodData.slug.current,
        });
        setRelatedItems(relatedData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Error fetching data");
        setLoading(false);
      }
    }

    if (slug) {
      fetchFoods();
    }
  }, [slug]);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!food) return <div className="text-center text-red-500">Product not found</div>;

  // Calculate average rating from reviews
  const averageRating =
    food.reviews && food.reviews.length > 0
      ? food.reviews.reduce((acc: number, review: { rating: number }) => acc + review.rating, 0) / food.reviews.length
      : 0;

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 lg:px-16 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="flex justify-center overflow-hidden">
            {food.image && (
              <Image
                src={urlFor(food.image).url()}
                alt={food.name}
                width={500}
                height={500}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md mt-20"
              />
            )}
          </div>

          {/* Food Details Section */}
          <div>
            <p className="text-black mt-20 border-2 bg-[#FF9F0D] w-24 text-center">
              {food.available ? "Available" : "Not Available"}
            </p>
            <p className="text-4xl font-bold text-black mt-4">{food.name}</p>
            <p className="text-gray-600 mt-2">{food.description}</p>
            <hr className="mt-3" />

            {/* Price and Rating */}
            <p className="text-3xl font-bold mt-2">Rs {food.price}</p>
            <div className="flex items-center gap-2 mt-2">
              {Array.from({ length: 5 }, (_, index) => (
                <span
                  key={index}
                  className={index < Math.round(averageRating) ? "text-yellow-500" : "text-gray-300"}
                >
                  ★
                </span>
              ))}
              <p className="text-gray-700 text-sm">
                {averageRating.toFixed(1)} | {food.reviews?.length || 0} reviews
              </p>
            </div>
            <div className="mt-2 flex flex-col sm:flex-row gap-5">
              <Counter />
              <AddToCartButton
                food={{
                  id: food._id,
                  name: food.name,
                  price: food.price,
                  image: food.imageUrl || "/default-image.jpeg",
                }}
              />
            </div>
            <hr className="mt-3" />

            {/* Wishlist and Compare Buttons */}
            <div className="flex flex-row gap-3 mt-2">
              <FaHeart className="mt-1 text-[#4F4F4F]" />
              <p className="text-[#4F4F4F]">Add To Wishlist</p>
              <div className="flex flex-row gap-2">
                <Image src={ProjectStatus} alt="Project Status" className="mt-1" />
                <p className="text-[#4F4F4F]">Compare</p>
              </div>
            </div>

            {/* Category and Tags */}
            <div className="flex flex-row gap-3 mt-1">
              <p>Category:</p>
              <p className="text-gray-600">{food.category}</p>
            </div>
            <div className="flex flex-row gap-3 mt-1">
              <p>Tags:</p>
              <p className="text-gray-600">{food.tags.join(", ")}</p>
            </div>

            {/* Social Media Share */}
            <div className="flex flex-row gap-5 mt-1">
              <p>Share:</p>
              <div className="flex flex-row gap-3 text-2xl">
                <FaFacebook />
                <FaInstagram />
                <FaYoutube />
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div>
          <h2 className="text-2xl font-bold mt-8">Customer Reviews</h2>
          {food.reviews && food.reviews.length > 0 ? (
            <div className="mt-4">
              {food.reviews.map((review: Review, index: number) => (
                <div key={index} className="border-b-2 py-4 w-1/2">
                  <div className="flex items-center">
                    <p className="font-semibold mr-2">{review.user}</p>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) =>
                        i < review.rating ? (
                          <FaStar key={i} className="text-yellow-500" />
                        ) : (
                          <FaRegStar key={i} className="text-gray-400" />
                        )
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 mt-2">{review.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No reviews yet. Be the first to review!</p>
          )}
        </div>

        {/* Related Items Section */}
        {relatedItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {relatedItems.map((item: RelatedItem) => (
              <div key={item._id} className="border p-3 rounded-lg shadow-md">
                <Link href={`/product/${item.slug.current}`}>
                  <Image
                    src={item.imageUrl || "/default-image.jpeg"}
                    alt={item.name}
                    width={200}
                    height={200}
                    className="w-full h-36 sm:h-40 md:h-48 object-cover rounded-md"
                  />
                  <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm">${item.price}</p>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>No related items found.</p>
        )}
      </div>
    </div>
  );
}
