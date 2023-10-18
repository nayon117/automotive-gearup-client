const Banner = () => {
  return (
    <div className=" min-h-[80vh] pt-12  ">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-5xl font-semibold">Drive Your Dreams</h2>
          <p className="text-lg">Explore a world of possibilities with our extensive range of quality vehicles and expert automotive solutions. Your dream car is just a click away.</p>
          <button className="btn btn-sm btn-neutral  ">Get Started</button>
        </div>
        <div className="flex-1">
          <img className="rounded-md" src="https://i.ibb.co/cC63qJH/banner-640x427.webp" alt="" />
        </div>
        </div>
</div>
  );
};

export default Banner;
