import Link from "next/link";

async function RecommendationProducts() {
  const res = await fetch(
    "https://api.escuelajs.co/api/v1/products/?categoryId=1&offset=0&limit=12"
  );
  const data = await res.json();
  return (
    <>
      {data.map((product) => (
        <div key={product.id}>
          <Link href={`/products/${product.id}`}>
            <img
              src={product.images[0]}
              className="object-cover duration-300 hover:contrast-125 rounded-2xl aspect-[9/10] w-full relative"
              alt={product.title}
            />
          </Link>
          <div className="mt-5 px-4 flex justify-between">
            <div className="flex flex-col w-full">
              <Link
                href={`/products/${product.id}`}
                className="font-semibold text-primary"
              >
                {product.title}
              </Link>
              <span className="text-bodyColor font-medium mt-2">
                ${product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default RecommendationProducts;
