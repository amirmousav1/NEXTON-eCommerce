import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 text-center mt-10">
      <h2 className="mb-2">Not Found</h2>
      <p className="mb-5">Could not find requested resource</p>
      <Link className="bg-primary text-white py-2 px-4" href="/">
        Return Home
      </Link>
    </div>
  );
}
