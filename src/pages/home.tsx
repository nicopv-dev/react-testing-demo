import { useProducts } from "@/hooks/products";

export default function Home() {
  const { data, isPending } = useProducts();

  return (
    <div>
      <h1>Home</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
        minima debitis natus culpa quae doloribus cum inventore accusantium, sit
        quod eos totam impedit facere. Voluptatibus amet ipsum sint fuga!
      </p>

      <section>{isPending ? <div>Loading...</div> : <p>{data}</p>}</section>
    </div>
  );
}
