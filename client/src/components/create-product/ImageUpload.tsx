import { Upload } from "lucide-react";

interface ImageUploadProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageUpload = ({ onChange }: ImageUploadProps) => {
  return (
    <div className="flex-1 border-dashed rounded-md border-2 p-5 hover:border-muted-foreground cursor-pointer">
      <label
        htmlFor="images-input"
        className="flex items-center justify-center h-full text-muted-foreground py-5 lg:py-0 flex-col gap-3 cursor-pointer"
      >
        <Upload />
        <div className="flex flex-col items-center gap-3 md:gap-0">
          <p className="text-sm md:text-base text-center">
            Drop here some images, or click to select files.
          </p>
          <p className="text-xs">(max 4 images allowed)</p>
        </div>
      </label>
      <input
        type="file"
        hidden
        id="images-input"
        multiple
        accept="image/*"
        onChange={onChange}
      />
    </div>
  );
};

export default ImageUpload;
