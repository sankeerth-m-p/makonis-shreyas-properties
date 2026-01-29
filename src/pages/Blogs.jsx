import React, { useState } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import blogImg from "/blogs/blogs.webp";
import FloatUpText from "../components/floatUpText";
import AnimatedHeading from "../components/animatedHeading";

/* ---------------- BLOG DATA ---------------- */
const blogData = [
  {
    id: 1,
    image: blogImg,
    date: "March 05, 2026",
    title: "What to Look for During a Home Inspection: A Complete Checklist",
    desc: "Every project is planned with long-term value in mind focusing on quality.",
    tag: "Property",
  },
  {
    id: 2,
    image: blogImg,
    date: "March 05, 2026",
    title: "Common Legal Mistakes Homebuyers Make And How to Avoid Them",
    desc: "Every project is planned with long-term value in mind focusing on quality.",
    tag: "Real estate",
  },
  {
    id: 3,
    image: blogImg,
    date: "March 05, 2026",
    title: "Transform Your Space: Top House Interior Ideas for 2025",
    desc: "Every project is planned with long-term value in mind focusing on quality.",
    tag: "Investment",
  },
  {
    id: 4,
    image: blogImg,
    date: "March 05, 2026",
    title: "Why Real Estate Is Still the Safest Long Term Investment",
    desc: "Every project is planned with long-term value in mind focusing on quality.",
    tag: "Lifestyle",
  },
  {
    id: 5,
    image: blogImg,
    date: "March 05, 2026",
    title: "Home Loans Made Easy: A Beginner’s Guide to Housing Finance",
    desc: "Every project is planned with long-term value in mind focusing on quality.",
    tag: "Housing loan",
  },
  {
    id: 6,
    image: blogImg,
    date: "March 05, 2026",
    title: "Modern Living: How Smart Homes Are Changing Our Lifestyle",
    desc: "Every project is planned with long-term value in mind focusing on quality.",
    tag: "Lifestyle",
  },
];


/* ---------------- BLOG LIST PAGE ---------------- */
const BlogList = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Property", "Investment", "Real estate", "Housing loan", "Lifestyle"];

  const filteredBlogs =
    activeCategory === "All"
      ? blogData
      : blogData.filter((blog) => blog.tag === activeCategory);

  return (
    <section className="bg-white pt-5 pb-24 relative overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-0">

        <AnimatedHeading className="text-3xl font-semiboldx text-gray-900">
          Stories That Shape Better Living
        </AnimatedHeading>

        <FloatUpText className="text-gray-500 mt-2">
          Expert views, trends, and tips for informed buyers
        </FloatUpText>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap gap-6 mt-10 mb-12 text-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`${
                activeCategory === cat
                  ? "font-semiboldx text-black"
                  : "text-gray-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* BLOG CARDS */}
        <div className="grid md:grid-cols-2 gap-10">
          {filteredBlogs.map((blog) => (
            <FloatUpText key={blog.id}>
              <div className="bg-white rounded-2xl shadow overflow-hidden">

                {/* Image with black rectangle tag */}
                <div className="relative">
                  <img
                    src={blog.image}
                    className="h-64 w-full object-cover cursor-pointer"
                    onClick={() => navigate(`/blogs/${blog.id}`)}
                  />

                  <div className="absolute bottom-4 right-4 bg-black text-white text-xs px-4 py-2">
                    {blog.tag.toUpperCase()}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs text-gray-400">{blog.date}</p>

                  <h3 className="text-lg font-semiboldx mt-3 text-gray-900">
                    {blog.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-3">
                    {blog.desc}
                  </p>

                  <button
                    onClick={() => navigate(`/blogs/${blog.id}`)}
                    className="mt-5 px-6 py-2 border hover:border-ORANGE hover:text-ORANGE hover:bg-ORANGE2/5 border-gray-300 rounded-full text-xs text-gray-600"
                  >
                    Read More
                  </button>
                </div>

              </div>
            </FloatUpText>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- BLOG DETAIL PAGE ---------------- */
const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogData.find((b) => b.id === Number(id));

  return (
    <section className="bg-white pt-24 pb-24 relative">
      <div className="max-w-[1120px] mx-auto px-0">

        <AnimatedHeading className="text-2xl font-semiboldx mb-5">
          {blog.title}
        </AnimatedHeading>

        <div className="rounded-2xl overflow-hidden shadow">

          <div className="bg-orange-500 flex items-center justify-between px-5 py-3">
            <button onClick={() => navigate(-1)} className="text-white text-lg">
              ←
            </button>

            <div className="flex items-center gap-3">
              <span className="border border-white text-white text-xs px-4 py-1 rounded-full">
                {blog.tag}
              </span>
              <span className="text-white text-xs">{blog.date}</span>
            </div>
          </div>

          <img
            src={blog.image}
            className="w-full h-[420px] object-cover"
          />

          <div className="p-8 text-sm text-gray-700 leading-relaxed space-y-6">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text...
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

/* ---------------- ROUTES ---------------- */
const Blogs = () => {
  return (
    <Routes>
      <Route path="/" element={<BlogList />} />
      <Route path="/:id" element={<BlogDetail />} />
    </Routes>
  );
};

export default Blogs;
