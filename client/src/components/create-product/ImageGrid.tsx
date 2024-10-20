import { Image } from "lucide-react";

interface ImageGridProps {
  images: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>, idx: number) => void;
}

const ImageGrid = ({ images, onChange }: ImageGridProps) => {
  return (
    <div className="grid grid-cols-4 gap-5">
      {[1, 2, 3, 4].map((_, idx) => (
        <label
          htmlFor={`image-input-${idx}`}
          key={idx}
          className="border-dashed border-2 aspect-square rounded-md overflow-hidden flex items-center justify-center hover:border-muted-foreground cursor-pointer"
        >
          {images[idx] ? (
            <img src={images[idx]} className="w-full h-full" />
          ) : (
            <Image className="sm:size-7 size-5 text-muted-foreground" />
          )}
          <input
            accept="image/*"
            type="file"
            hidden
            id={`image-input-${idx}`}
            onChange={(e) => onChange(e, idx)}
          />
        </label>
      ))}
    </div>
  );
};

export default ImageGrid;
