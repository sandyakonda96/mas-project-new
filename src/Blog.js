import React from "react";
import "./Blog.css";

function Blog() {
  return (
    <div className="blog-page">
      <div className="blog-container">
       <h1>Our Blog</h1>

        {/* Blog Post 1 */}
        <div className="blog-post">
          <h2>How MAS Helps Students Learn Online</h2>
          <img
            src="https://img.freepik.com/free-photo/close-up-student-reading-book_23-2148888822.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Online Learning"
            className="blog-image"
          />
          <p>
            Our online programs at MAS are designed to bridge the gap in education 
            for students who may not have access to traditional learning opportunities. 
            We provide:
          </p>
          <ul>
            <li><strong>Interactive Online Classes:</strong> Live and recorded sessions led by experienced instructors.</li>
            <li><strong>Skill-Based Workshops:</strong> Courses on coding, communication, and life skills tailored to student needs.</li>
            <li><strong>Mentorship Programs:</strong> One-on-one guidance to help students navigate their learning paths and career choices.</li>
            <li><strong>Accessible Resources:</strong> E-books, videos, and online assignments accessible anytime, anywhere.</li>
            <li><strong>Community Support:</strong> Forums and discussion groups for students to collaborate and share ideas.</li>
          </ul>
          <p>
            Through these initiatives, MAS ensures that every student, regardless of their location or background, 
            has the tools and guidance needed to succeed academically and personally.
          </p>
        </div>

        {/* Blog Post 2 */}
        <div className="blog-post">
          <h2>Top 5 Skills to Develop This Year</h2>
          <img
            src="https://t4.ftcdn.net/jpg/04/95/98/03/360_F_495980372_VVbNwcKJJcLQe18DLD5mSHeWuElmYT3v.jpg"
            alt="Skills"
            className="blog-image"
          />
          <p>
            In today’s rapidly changing world, certain skills are essential for personal and professional growth. MAS encourages students to focus on:
          </p>
          <ol>
            <li><strong>Critical Thinking & Problem-Solving:</strong> Learn to analyze situations and find creative solutions.</li>
            <li><strong>Digital Literacy & Coding Skills:</strong> Master technology tools and basic coding for career readiness.</li>
            <li><strong>Communication Skills:</strong> Strong writing, speaking, and presentation skills are crucial.</li>
            <li><strong>Leadership & Teamwork:</strong> Learn how to lead projects, work collaboratively, and motivate others.</li>
            <li><strong>Time Management & Self-Discipline:</strong> Organize your schedule, set goals, and stay consistent.</li>
          </ol>
          <p>
            MAS provides structured courses, workshops, and mentorship opportunities to help students develop these essential skills, 
            preparing them for higher education, jobs, and entrepreneurship.
          </p>
        </div>

        {/* Blog Post 3 */}
        <div className="blog-post">
          <h2>Upcoming Community Events</h2>
          <img
            src="https://cdn.prod.website-files.com/64ad227a3e66387fc5d89320/660cb16111500e8ebcdde1d2_Community-Events-1.png"
            alt="Community Events"
            className="blog-image"
          />
          <p>
            MAS regularly organizes events that combine learning, social impact, and community engagement, including:
          </p>
          <ul>
            <li><strong>Workshops & Seminars:</strong> Hands-on sessions on digital skills, career guidance, and personal development.</li>
            <li><strong>Online Webinars:</strong> Expert talks on trending topics like technology, environment, and social entrepreneurship.</li>
            <li><strong>Community Service Activities:</strong> Opportunities for students to participate in outreach, volunteer work, and social initiatives.</li>
            <li><strong>Competitions & Hackathons:</strong> Creative challenges that promote problem-solving, innovation, and collaboration.</li>
            <li><strong>Parent & Teacher Engagement Sessions:</strong> Involving the community to create a supportive learning ecosystem.</li>
          </ul>
          <p>
            These events are open to all students and community members, creating a platform for networking, learning, and personal growth.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Blog;
