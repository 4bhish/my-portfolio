import { MessageCircle } from "lucide-react";
import React from "react";

function Blog() {
  const blogsArr = [
    {
      id: 1,
      img: "https://preview.colorlib.com/theme/jackson/images/blog-1.jpg.webp",
      date: "APRIL 14, 2018",
      category: "WEB DESIGN",
      title: "RENOVATING NATIONAL GALLERY",
      description:
        " Searticlearated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      id: 2,
      img: "https://preview.colorlib.com/theme/jackson/images/blog-1.jpg.webp",
      date: "APRIL 14, 2018",
      category: "WEB DESIGN",
      title: "RENOVATING NATIONAL GALLERY",
      description:
        " Searticlearated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      id: 3,
      img: "https://preview.colorlib.com/theme/jackson/images/blog-1.jpg.webp",
      date: "APRIL 14, 2018",
      category: "WEB DESIGN",
      title: "RENOVATING NATIONAL GALLERY",
      description:
        " Searticlearated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
  ];
  return (
    <div className="m-12 lg:m-8 max-w-screen-md">
      <div className="lg:mt-36">
        <p className="font-thin  text-sm tracking-widest">READ </p>
        <h2 className="font-bold text-lg mt-6 tracking-widest">RECENT BLOG</h2>
      </div>
      <section className="lg:mt-10 mt-4 lg:block flex items-center justify-center ">
        <div className="lg:grid grid-cols-2 lg:gap-4 flex flex-col gap-10 ">
          {blogsArr.map((blog) => {
            return (
              <div key={blog.id} className="h-auto w-80 mt-5  cursor-pointer  ">
                <div className="overflow-hidden w-full h-auto hover:overflow-hidden">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-auto object-cover transform hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="mt-2 flex justify-around gap-4 text-xs text-[#999999]">
                  {blog.date} | {blog.category} |{" "}
                </div>
                <h2 className=" mt-2">{blog.title}</h2>
                <article className="text-sm mt-2 leading-5	">
                  {blog.description}
                </article>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Blog;
