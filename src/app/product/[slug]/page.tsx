import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import AddToCartButton from "@/app/component/AddToCartButton/AddToCartButton";
import Counter from "@/app/component/counter";
import { FaHeart, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaStar, FaRegStar } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

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

type FoodData = {
  _id: string;
  name: string;
  price: number;
  tags: string[];
  imageUrl: string;
  description: string;
  available: boolean;
  category: string;
  reviews: Review[];
  slug: { current: string };
};

const Page = () => {
  const { slug } = useParams();
  const [food, setFood] = useState<FoodData | null>(null);
  const [relatedItems, setRelatedItems] = useState<RelatedItem[]>([]);
  
  useEffect(() => {
    if (!slug) return;
    
    const fetchData = async () => {
      const query = `*[_type=='food' && slug.current == $slug] {
        _id, name, price, tags, image, description, available, category,
        "imageUrl": image.asset->url,
        "reviews": reviews[]{rating, comment, user},
        slug
      }[0]`;
      
      const foodData = await client.fetch(query, { slug });
      if (foodData) {
        setFood(foodData);
        
        const relatedItemsQuery = `*[_type == 'food' && category == $category && slug.current != $slug] {
          _id, name, price, image, "imageUrl": image.asset->url, slug
        }`;
        
        const relatedItemsData = await client.fetch(relatedItemsQuery, { category: foodData.category, slug: foodData.slug.current });
        setRelatedItems(relatedItemsData);
      }
    };
    
    fetchData();
  }, [slug]);
  
  if (!food) return <p>Loading...</p>;
  
  const averageRating = food.reviews?.length > 0
    ? food.reviews.reduce((acc: number, review: { rating: number }) => acc + review.rating, 0) / food.reviews.length
    : 0;

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 lg:px-16 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="flex justify-center overflow-hidden">
            {food.imageUrl && (
              <Image
                src={food.imageUrl}
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
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div>
          <h2 className="text-2xl font-bold mt-8">Customer Reviews</h2>
          {food.reviews?.length > 0 ? (
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
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Related Items</h2>
          {/* Related Items Content */}
        </div>
      </div>
    </div>
  );
};

export default Page;

