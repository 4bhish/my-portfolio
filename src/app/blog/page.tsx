import { MessageCircle } from "lucide-react";
import React from "react";

function Blog() {
  const blogsArr = [
    {
      id: 1,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png",
      date: "JAN 10, 2024",
      category: "VERSION CONTROL",
      title: "Introduction to Version Control with Git",
      description:
        "Learn the basics of version control using Git, a widely used distributed version control system",
    },
    {
      id: 2,
      img: "https://cdn-peanutsquare.b-cdn.net/wp-content/uploads/2022/11/pwa.png",
      date: "NOV 14, 2023",
      category: "WEB DEVELOPMENT",
      title: "Progressive Web Apps",
      description:"A progressive web application, or progressive web app, is a type of application software delivered through the web",
    },
    {
      id: 3,
      img: "https://yt3.googleusercontent.com/GsP5Yvc5jOSop4SJf_75wdOYaEbO-7ZyYhnARodAGRnEMh-OQjGPGzUz2ZtzsHPtqFyHGvmbEtI=s900-c-k-c0x00ffffff-no-rj",
      date: "OCT 25, 2023",
      category: "CLOUD BACKEND",
      title: "Firebase Cloud Messaging (FCM)",
      description:
        "Firebase Cloud Messaging (FCM) is a cross-platform messaging solution that lets you reliably send messages at no cost.",
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
                    className="w-4/5 h-auto object-contain transform hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="mt-2 flex justify-around gap-4 text-xs text-[#999999]">
                  {blog.date} | {blog.category} |{" "}
                </div>
                <h2 className="font-semibold mt-2">{blog.title}</h2>
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
