interface ButtonProps {
  title: string;
}

export default function Button({ title }: ButtonProps) {
  return (
    <button className="py-2 px-5 max-w-max bg-blue-400 text-white rounded-xl">
      {title}
    </button>
  );
}
