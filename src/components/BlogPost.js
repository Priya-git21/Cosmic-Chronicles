import React from 'react';
import {  useParams } from 'react-router-dom';
import ScrollToTopLink from "./ScrollToTopLink";
import BlogData from './BlogData.json';
import './BlogPost.css'

function BlogPost() {
  const { id } = useParams();
  const blogId = parseInt(id, 10);
  const sortedBlogData = BlogData.slice().sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  const blog = sortedBlogData.find((post) => post.id === blogId);

  if (!blog) {
    return (
      <div className="post container my-3">
        <h1 className="font">Blog Post not found</h1>
        <ScrollToTopLink to="/blogs" className="btn btn-primary">
          Back to Astro Blogs
        </ScrollToTopLink>
      </div>
    );
  }

  return (
    <div className="post container my-3 phone">
      <h1 className="font" style={{ fontSize: "34px" }}>{blog.title}</h1>
      <img
        src={blog.imageUrl}
        alt={` ${blog.title}`}
        style={{ width: '80%' }}
        className="custom-image centered-image"
      />
      {blog.content.map((section, index) => (
        <div key={index}>
          <h2 className="font" style={{ fontSize: "28px" }}>{section.heading}</h2>
          <div className="content-with-image">
            <div className="content">
              <ul className="custom-list">
                {section.bulletPoints.map((point, pIndex) => (
                  <li key={pIndex}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="images">
              {section.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image}
                  alt={` ${imgIndex + 1}`}
                  style={{ width: '50%' }}
                  className="custom-image centered-image"
                />
              ))}
            </div>
          </div>
        </div>
      ))}
      <ScrollToTopLink to="/blogs" className="btn btn-outline-primary card-link">
        Back to Astro Blogs
      </ScrollToTopLink>
    </div>
  );
}

export default BlogPost;
