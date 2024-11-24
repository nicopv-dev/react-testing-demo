interface Props {
  title: string;
}

export default function Button({ title }: Props) {
  return <button type="button">{title}</button>;
}
