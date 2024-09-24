import { Star } from "lucide-react";

interface Props {
  star: number;
  size?: number;
}

export function StarRating({ star, size = 12 }: Props) {
  return (
    <div className="flex gap-1 text-primary">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={size}
          fill={index < star ? "currentColor" : "none"}
          stroke="currentColor"
        />
      ))}
    </div>
  );
}
