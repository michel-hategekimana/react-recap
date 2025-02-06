const Cards = () => {
  return (
  
      <div className=" sm:flex justify-center text-white">
        <div className="bg-[#8247C9] px-12 py-5">
          <img
            src="/public/boy.avif"
            alt="boy"
            className="rounded-full h-40 w-40 mb-5"
          ></img>
          <p>Duis aute irure dolor in</p>
          <p>reprehenderit in voluptate velit esse</p>
          <p>cillum dolore eu fugiat nulla.</p>
        </div>
        <div className="bg-[#C8ADE9] px-12 py-5">
          <p>Duis aute irure dolor in</p>
          <p>reprehenderit in voluptate velit esse</p>
          <p>cillum dolore eu fugiat nulla.</p>
          <img
            src="/public/girl.avif"
            alt="girl"
            className="rounded-full h-40 w-40 mt-5"
          ></img>
        </div>
      </div>
  
  );
};

export default Cards;
