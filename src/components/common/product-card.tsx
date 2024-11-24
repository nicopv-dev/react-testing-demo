import { useMemo } from "react";

interface Props {
  name: string;
  price: number;
}

export default function ProductCard({ name, price }: Props) {
  const priceWithDiscount = useMemo(() => price * 0.9, [price]);

  return (
    <article>
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>Price with discount: {priceWithDiscount}</p>
    </article>
  );
}
