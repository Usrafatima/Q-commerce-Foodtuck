import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';


const DataFetch = async () => {
  const query = await client.fetch(
    `*[_type == "chef"]{
        _id,
        name,
        position,
        experience,
        speciality,
        description,
        "imageUrl": image.asset->url
    }`
  );
  console.log(query);

  return (
    <div className="bg-white p-6 mt-5">
      <h1 className="text-2xl font-bold mb-6 flex justify-center">Chefs</h1>
      <div className="flex flex-wrap justify-between gap-6">
        {query.map((food: any) => {
          return (
            <div
              key={food._id}
              className="bg-gray-100 rounded-lg shadow-lg p-4 w-[300px] flex flex-col items-center"
            >
              <Image
                src={urlFor(food.imageUrl).url()}
                alt={food.name}
                width={300}
                height={200}
                className="rounded-lg"
              />
              <h2 className="text-lg font-semibold text-gray-800 mt-4">
                {food.name}
              </h2>
              <p className="text-gray-600 text-sm mt-1">${food.position}</p>
              <p className="text-gray-500 text-xs mt-2">{food.experience}</p>
              <p className="text-gray-700 text-sm mt-2">{food.speciality}</p>
              <p className="text-gray-700 text-sm mt-2">{food.description}</p>
              
              
              
             
           
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default DataFetch;

