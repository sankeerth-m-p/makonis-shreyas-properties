import React from "react";
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
        tag: "PROPERTY",
    },
    {
        id: 2,
        image:blogImg,
        date: "March 05, 2026",
        title: "Common Legal Mistakes Homebuyers Make And How to Avoid Them",
        desc: "Every project is planned with long-term value in mind focusing on quality.",
        tag: "REAL ESTATE",
    },
    {
        id: 3,
        image:blogImg,
        date: "March 05, 2026",
        title: "Transform Your Space: Top House Interior Ideas for 2025",
        desc: "Every project is planned with long-term value in mind focusing on quality.",
        tag: "INVESTMENT",
    },
    {
        id: 4,
        image: blogImg,
        date: "March 05, 2026",
        title: "Why Real Estate Is Still the Safest Long Term Investment",
        desc: "Every project is planned with long-term value in mind focusing on quality.",
        tag: "REAL ESTATE",
    },
];



/* ---------------- BLOG LIST PAGE ---------------- */
const BlogList = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-white pt-28 pb-24 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">

                <AnimatedHeading className="text-3xl font-semibold text-gray-900">
                    Stories That Shape Better Living
                </AnimatedHeading>
                <FloatUpText className="text-gray-500 mt-2">
                    Expert views, trends, and tips for informed buyers
                </FloatUpText>

                <div className="grid md:grid-cols-2 gap-10 mt-12">
                    {blogData.map((blog) => (
                        <FloatUpText>
                        <div key={blog.id} className="bg-white  rounded-2xl shadow overflow-hidden">

                            <img src={blog.image} className="h-64 w-full object-cover" />

                            <div className="p-6">
                                <p className="text-xs text-gray-400">{blog.date}</p>

                                <h3 className="text-lg font-semibold mt-2 text-gray-900">
                                    {blog.title}
                                </h3>

                                <p className="text-sm text-gray-500 mt-3">
                                    {blog.desc}
                                </p>

                                <button
                                    onClick={() => navigate(`/blogs/${blog.id}`)}
                                    className="mt-5 px-6 py-2 border hover:border-ORANGE hover:text-ORANGE hover:bg-ORANGE2/5 border-gray-300 rounded-full text-xs text-gray-600"
                                >
                                    {blog.tag}
                                </button>
                            </div>
                        </div></FloatUpText>
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
    const handleShare = async () => {
    const shareData = {
        title: blog.title,
        text: blog.title,
        url: window.location.href,
    };

    try {
        if (navigator.share) {
            await navigator.share(shareData);   // Mobile + supported browsers
        } else {
            await navigator.clipboard.writeText(window.location.href); // Desktop fallback
            alert("Link copied to clipboard!");
        }
    } catch (error) {
        console.log("Share cancelled");
    }
};

    return (
        <section className="bg-white pt-24 pb-24 relative">
            <div className="max-w-6xl mx-auto px-6">

                <AnimatedHeading className="text-2xl font-semibold mb-5">
                    {blog.title}
                </AnimatedHeading>

                    <FloatUpText>
                <div className="rounded-2xl overflow-hidden shadow">

                    {/* Orange Header */}
                    <div className="bg-orange-500 flex items-center justify-between px-5 py-3">
                        <button onClick={() => navigate(-1)} className="text-white text-lg">
                            ←
                        </button>

                        <span className="border border-white text-white text-xs px-4 py-1 rounded-full">
                            {blog.tag}
                        </span>

                        <span className="text-white text-xs">{blog.date}</span>
                    </div>

                    {/* Image */}

                    <img
                        src={blog.image}
                        className="w-full h-[420px] object-cover"
                        />

                    {/* Content */}
                    <div className="p-8 text-sm text-gray-700 leading-relaxed space-y-6">
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text...
                        </p>

                        <h2 className="text-lg font-semibold text-gray-900">
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
                        </h2>

                        <p>
                            It has survived not only five centuries, but also the leap into electronic typesetting.
                        </p>

                        <div className="flex justify-end">
                            <button
                                onClick={handleShare}
                                className="border px-6 py-2 rounded-full text-xs text-gray-600"
                                >
                                SHARE
                            </button>

                        </div>
                    </div>
                </div>
                                </FloatUpText>
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
