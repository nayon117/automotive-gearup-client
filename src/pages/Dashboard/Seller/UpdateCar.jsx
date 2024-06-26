// import toast from "react-hot-toast";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateCar = () => {
  const [updateCar, setUpdateCar] = useState({});
  const loadedCar = useLoaderData();

  useEffect(() => {
    if (loadedCar) {
      setUpdateCar(loadedCar);
    }
  }, [loadedCar]);

  const { _id, name, brand, type, price, description, rating, image } =
    updateCar || {};
  const handleUpdateCars = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const image = form.image.value;
    const updatedCar = { name, brand, type, price, description, rating, image };

    fetch(`http://localhost:5000/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCar),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Product updated successfully");
        }
      });
  };

  return (
    <div className="px-24 py-10 bg-[#F4F3F0]">
      <h2 className="text-center font-bold text-2xl py-10">Update a Product</h2>
      <form onSubmit={handleUpdateCars}>
        {/* row */}
        <div className="md:flex mb-6">
          <div className="  md:w-1/2">
            <label className="label" htmlFor="name">
              <span className="label-text">Name</span>
            </label>

            <input
              className="input w-full input-bordered"
              name="name"
              defaultValue={name}
              placeholder="car name"
            />
          </div>
          <div className=" md:w-1/2 md:ml-4">
            <label className="label" htmlFor="brand">
              <span className="label-text">Brand</span>
            </label>
            <input
              className="input w-full input-bordered  "
              name="brand"
              defaultValue={brand}
              placeholder="brand"
            />
          </div>
        </div>
        {/*  type price */}
        <div className="md:flex mb-6">
          <div className="  md:w-1/2">
            <label className="label" htmlFor="type">
              <span className="label-text">Type</span>
            </label>

            <input
              className="input w-full input-bordered"
              name="type"
              defaultValue={type}
              placeholder="type"
            />
          </div>
          <div className=" md:w-1/2 md:ml-4">
            <label className="label" htmlFor="price">
              <span className="label-text">Price</span>
            </label>
            <input
              className="input w-full input-bordered  "
              name="price"
              defaultValue={price}
              placeholder="Enter car price"
            />
          </div>
        </div>
        {/* description rating */}
        <div className="md:flex mb-6">
          <div className="  md:w-1/2">
            <label className="label" htmlFor="description">
              <span className="label-text">Description</span>
            </label>

            <input
              className="input w-full input-bordered"
              name="description"
              defaultValue={description}
              placeholder="description"
            />
          </div>
          <div className=" md:w-1/2 md:ml-4">
            <label className="label" htmlFor="rating">
              <span className="label-text">Rating</span>
            </label>
            <input
              className="input w-full input-bordered  "
              name="rating"
              defaultValue={rating}
              placeholder="rating"
            />
          </div>
        </div>
        {/* photo */}
        <div className="mb-6">
          <div className="w-full">
            <label className="label" htmlFor="image">
              <span className="label-text">Image</span>
            </label>

            <input
              className="input w-full input-bordered"
              name="image"
              defaultValue={image}
              placeholder="Image URL"
            />
          </div>
        </div>

        <input
          className="btn btn-block btn-neutral"
          type="submit"
          value="Update Product"
        />
      </form>
    </div>
  );
};

export default UpdateCar;
