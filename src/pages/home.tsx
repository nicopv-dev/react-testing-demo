import { useGetProducts } from "@/hooks/useGetProducts";

export default function Home() {
  const { data: products, isPending } = useGetProducts();

  return (
    <div>
      <h1>Home</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
        minima debitis natus culpa quae doloribus cum inventore accusantium, sit
        quod eos totam impedit facere. Voluptatibus amet ipsum sint fuga!
      </p>

      <section>
        {isPending ? (
          <div>Loading...</div>
        ) : products ? (
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}
      </section>
    </div>
  );
}
