import ImageGrid from "@/components/create-product/ImageGrid";
import ImageUpload from "@/components/create-product/ImageUpload";
import ProductDetails from "@/components/create-product/ProductDetails";
import ProductPricing from "@/components/create-product/ProductPricing";
import LoadingButton from "@/components/shared/LoadingButton";
import { useState } from "react";

const CreateProductPage = () => {
  const [images, setImages] = useState<string[]>([]);
  const [productDeatils, setProductDetails] = useState({
    title: "",
    shortDescription: "",
    fullDescription: "",
    material: "",
    sizes: [],
    gender: "unisex",
  });
  const [productPricing, setProductPricing] = useState({
    regularPrice: "",
    discountPrice: null,
  });

  const handleImagesUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      const imagesArray = filesArray.map((file) => URL.createObjectURL(file));

      setImages((prevImages) => [...prevImages, ...imagesArray].slice(0, 4));
    }
  };

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    if (event.target.files && event.target.files[0]) {
      const newImage = URL.createObjectURL(event.target.files[0]);

      setImages((prevImages) => {
        const updatedImages = [...prevImages];
        updatedImages[idx] = newImage;
        return updatedImages;
      });
    }
  };

  const handleProductDetailsChange = (
    field: string,
    value: string | string[]
  ) => {
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const handleProductPricingChange = (field: string, value: string) => {
    setProductPricing((prevPricing) => ({
      ...prevPricing,
      [field]: value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const productData = {
      title: productDeatils.title,
      shortDescription: productDeatils.shortDescription,
      fullDescription: productDeatils.fullDescription,
      material: productDeatils.material,
      images: images,
      sizes: productDeatils.sizes,
      gender: productDeatils.gender,
      regularPrice: productPricing.regularPrice,
      discountPrice: productPricing.discountPrice,
    };
    console.log(productData);
    e.preventDefault();
  };

  return (
    <div className="min-h-screen w-full flex flex-col p-5 z-10 gap-5">
      <form className="flex flex-col gap-5" onSubmit={onSubmit}>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
          <div className="border bg-background p-10 flex flex-col gap-5  rounded-md">
            <ImageUpload onChange={handleImagesUpload} />
            <ImageGrid images={images} onChange={handleImageUpload} />
          </div>
          <div className="bg-background border p-10 flex flex-col  space-y-5 rounded-md">
            <ProductDetails
              productDetails={productDeatils}
              handleChange={handleProductDetailsChange}
            />
          </div>
          <div className="bg-background border p-10 flex flex-col  space-y-5 rounded-md">
            <ProductPricing
              productPricing={productPricing}
              handleChange={handleProductPricingChange}
            />
          </div>
        </div>
        <LoadingButton loading={false} className="md:max-w-64">
          Create Product
        </LoadingButton>
      </form>
    </div>
  );
};

export default CreateProductPage;
