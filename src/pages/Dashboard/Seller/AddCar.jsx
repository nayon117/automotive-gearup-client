import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";

const AddCar = () => {
  const { user } = useAuth();
  console.log(user);
  const handleAddCars = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const image = form.image.value;
    const email = user.email || "";
    const newCar = {
      name,
      brand,
      type,
      price,
      description,
      rating,
      image,
      email,
    };
    console.log(newCar);

    fetch("http://localhost:5000/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCar),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data._id) {
          toast.success("Product added successfully");
          form.reset();
        } else {
          toast.error("Failed to add product");
        }
      })
      .catch((error) => {
        console.error("Error adding product:", error);
        toast.error("Failed to add product");
      });
  };

  return (
    <div className="px-24 py-10 bg-[#F4F3F0]">
      <h2 className="text-center font-bold text-2xl py-10">Add a Product</h2>
      <form onSubmit={handleAddCars}>
        {/* row */}
        <div className="md:flex mb-6">
          <div className="  md:w-1/2">
            <label className="label" htmlFor="name">
              <span className="label-text">Name</span>
            </label>
            <input
              className="input w-full input-bordered"
              name="name"
              placeholder="Car name"
            />
          </div>
          <div className="md:w-1/2 md:ml-4">
            <label className="label" htmlFor="brand">
              <span className="label-text">Brand</span>
            </label>
            <select
              className="input w-full input-bordered"
              name="brand"
              id="brandSelect"
            >
              <option value="" disabled selected>
                Select a Brand
              </option>
              <option value="Toyota">Toyota</option>
              <option value="Ford">Ford</option>
              <option value="BMW">BMW</option>
              <option value="Mercedes-Benz">Mercedes-Benz</option>
              <option value="Tesla">Tesla</option>
              <option value="Honda">Honda</option>
            </select>
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
              placeholder="Type"
            />
          </div>
          <div className=" md:w-1/2 md:ml-4">
            <label className="label" htmlFor="price">
              <span className="label-text">Price</span>
            </label>
            <input
              className="input w-full input-bordered  "
              name="price"
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
              placeholder="Description"
            />
          </div>
          <div className=" md:w-1/2 md:ml-4">
            <label className="label" htmlFor="rating">
              <span className="label-text">Rating</span>
            </label>
            <input
              className="input w-full input-bordered  "
              name="rating"
              placeholder="Rating"
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
              placeholder="Image URL"
            />
          </div>
        </div>
        <input
          className="btn btn-block btn-neutral"
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddCar;
