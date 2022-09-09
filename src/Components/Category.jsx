import React from "react";
import burger from "D:/Web-Dev/Embersx/reactx/src/images/2- Categories/burger.jpg";
const Category = () => {
  return (
    <section className="flex flex-wrap lg:w-2/12 w-2/6">
      <div className="mx-auto">
        <div className="xl:w-60 aspect-vedio py-1">
          <a
            href="#"
            className="category-block block overflow-hidden w-full h-full sm:h-[125px] rounded-md relative
              before:absolute before:h-full before:w-full before:bg-green-500 before:z-10 before:scale-0 hover:before:scale-150 before:transition-all before:duration-700
              before:rounded-full hover:before:rounded-none before:origin-top-left"
          >
            <img src={burger} className="image-cover w-full h-full" />

            <div className="category-layer absolute inset-0 w-full h-full bg-black/60 flex items-center justify-center">
              <span className="category-name font-medium text-white lg:text-lg sm:text-base z-20">
                Burger
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Category;
