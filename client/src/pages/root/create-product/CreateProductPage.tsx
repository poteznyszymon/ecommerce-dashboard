import ImageGrid from "@/components/create-product/ImageGrid";
import ImageUpload from "@/components/create-product/ImageUpload";
import ProductDetails from "@/components/create-product/ProductDetails";
import ProductPricing from "@/components/create-product/ProductPricing";
import ProductSelectors from "@/components/create-product/ProductSelectors";
import LoadingButton from "@/components/shared/LoadingButton";
import useCreateNewProduct from "@/hooks/products/useCreateNewProduct";
import { addProductData } from "@/lib/types";
import { useState } from "react";

const CreateProductPage = () => {
  const { addProduct, isPending } = useCreateNewProduct({
    onSuccess: () => resetData(),
  });
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
    discountPrice: undefined,
  });
  const [productSelects, setProductSelects] = useState({
    category: "",
    color: "",
  });

  const handleImagesUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      const imagePromises = filesArray.map((file) => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            if (reader.result) {
              resolve(reader.result as string);
            }
          };
          reader.onerror = () => reject("Failed to read file");
          reader.readAsDataURL(file);
        });
      });

      Promise.all(imagePromises)
        .then((imagesArray) => {
          setImages((prevImages) =>
            [...prevImages, ...imagesArray].slice(0, 4)
          );
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.result) {
          setImages((prevImages) => {
            const updatedImages = [...prevImages];
            updatedImages[idx] = reader.result as string;
            return updatedImages;
          });
        }
      };

      reader.onerror = () => console.error("Failed to read file");
      reader.readAsDataURL(file);
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

  const handleProductSelectsChange = (field: string, value: string) => {
    setProductSelects((prevSelects) => ({
      ...prevSelects,
      [field]: value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const productData: addProductData = {
      title: productDeatils.title,
      shortDescription: productDeatils.shortDescription,
      fullDescription: productDeatils.fullDescription,
      material: productDeatils.material,
      images: images,
      sizes: productDeatils.sizes,
      gender: productDeatils.gender,
      regularPrice: productPricing.regularPrice,
      discountPrice: productPricing.discountPrice,
      category: productSelects.category,
      color: productSelects.color,
    };
    addProduct(productData);
    console.log(productData);
    e.preventDefault();
  };

  const resetData = () => {
    setImages([]);
    setProductDetails({
      title: "",
      fullDescription: "",
      gender: "",
      material: "",
      shortDescription: "",
      sizes: [],
    });
    setProductSelects({
      category: "",
      color: "",
    });
    setProductPricing({ regularPrice: "", discountPrice: undefined });
  };

  return (
    <div className="min-h-screen w-full flex flex-col p-5 z-10 gap-5">
      <form className="flex flex-col gap-5" onSubmit={onSubmit}>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 xl:grid-rows-2 gap-5">
          <div className="border shadow-sm bg-background p-10 flex flex-col gap-5 rounded-md xl:row-span-2">
            <ImageUpload onChange={handleImagesUpload} />
            <ImageGrid images={images} onChange={handleImageUpload} />
          </div>
          <div className="bg-background border shadow-sm p-10 flex flex-col space-y-5 rounded-md xl:row-span-2">
            <ProductDetails
              productDetails={productDeatils}
              handleChange={handleProductDetailsChange}
            />
          </div>
          <div className="bg-background shadow-sm border p-10 flex flex-col space-y-5 rounded-md">
            <ProductSelectors
              productSelects={productSelects}
              handleChange={handleProductSelectsChange}
            />
          </div>
          <div className="bg-background shadow-sm border p-10 flex flex-col space-y-5 rounded-md">
            <ProductPricing
              productPricing={productPricing}
              handleChange={handleProductPricingChange}
            />
          </div>
        </div>
        <LoadingButton loading={isPending} className="md:max-w-64">
          Create Product
        </LoadingButton>
      </form>
    </div>
  );
};

export default CreateProductPage;
