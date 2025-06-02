import cx from "@/libs/cx";

interface ButtonProps {
  title: string;
  className?: string;
}

export default function Button({ title, className }: ButtonProps) {
  return (
    <button
      className={cx(
        "py-2 px-5 max-w-max bg-blue-400 text-white rounded-xl",
        className
      )}
    >
      {title}
    </button>
  );
}
