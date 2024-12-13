import AddToCart from "@/app/_components/AddToCart";
import ProductSlider from "@/app/_components/ProductSlider";

export default async function Page({ params }) {
  const { productid } = await params;
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/products/${productid}`
  );
  const data = await res.json();

  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="gap-8 flex flex-col md:grid md:grid-cols-5">
        <ProductSlider data={data} />
        <AddToCart data={data} />
      </div>
      <div className="border mt-10 p-[33px] border-[#E5E7EB] rounded-2xl">
        <h1 className="text-xl font-semibold md:text-3xl xl:text-4xl">
          {data.title}
        </h1>
        <p className="text-bodyColor text-sm md:text-base leading-6 mt-4">
          {data.description}
        </p>
      </div>
    </div>
  );
}
