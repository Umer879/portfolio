import React from "react";
import one from "../../assets/blog/blogOne.avif";
import Two from "../../assets/blog/blogTwo.avif";
import Three from "../../assets/blog/blogThree.avif";
import Four from "../../assets/blog/blogFour.avif";
import Five from "../../assets/blog/blogFive.avif";
import Six from "../../assets/blog/blogSix.avif";
import Seven from "../../assets/blog/blogSeven.avif";
import Eight from "../../assets/blog/blogEight.avif";
import Nine from "../../assets/blog/blogNine.avif";
import PageHeading from "../heading/PageHeading";

const blogData = [
  {
    img: one,
    publish: "20 January, 2023",
    title: "Become a UI/UX Designer With Career Foundary",
  },
  {
    img: Two,
    publish: "15 January, 2023",
    title: "The Best App Developement For Your Future",
  },
  {
    img: Three,
    publish: "08 January, 2023",
    title: "The Best Portfolio For Agency Design",
  },
    {
    img: Four,
    publish: "10 January, 2023",
    title: "Become a UI/UX Designer With Career Foundary",
  },
  {
    img: Five,
    publish: "11 January, 2023",
    title: "The Complete Guide to UI Breadcrumbs",
  },
  {
    img: Six,
    publish: "06 January, 2023",
    title: "The Top 5 UI Design Principles to Know",
  },
    {
    img: Seven,
    publish: "27 January, 2023",
    title: "What is Coding? A Beginner's Guide Detail",
  },
  {
    img: Eight,
    publish: "29 January, 2023",
    title: "What is Redux? A Complete Guide",
  },
  {
    img: Nine,
    publish: "21 January, 2023",
    title: "Angular VS React: Which is Better and Why?",
  },
];

const BlogDetail = () => {
  return (
    <div className="container-fluid">
      <div className="container my-5">
         <PageHeading  title={'My Blog'} heading={'Our Blog'} />
        <div className="row g-4">
          {blogData.map((data, index) => (
            <div className="col-lg-4 col-sm-6 col-12 " key={index}>
              <div className="card h-100 partnerCol">
                <img src={data.img} className="card-img-top blogImg" alt="blog" />
                <div className="blogHover"></div>
                <div className="card-body">
                  <h5 className="card-title fw-normal" style={{ color: "#6f6b80" }}>
                    {data.publish}
                  </h5>
                  <p
                    className="card-text my-4 fs-4 fw-bold lh-sm blogTitle"
                    style={{ cursor: "pointer" }}
                  >
                    {data.title}
                  </p>
                  <a
                    href="#"
                    className="btn fw-bold blogLink"
                    style={{ fontSize: "14px", color: "#ff6b00" }}
                  >
                    Read More{" "}
                    <i className="fa-solid fa-arrow-right" style={{ color: "#ff6b00" }}></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
