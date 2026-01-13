import { useState } from "react";


const programsData = [
  {
    title: "Education",
    image: "https://media.istockphoto.com/id/1358014313/photo/group-of-elementary-students-having-computer-class-with-their-teacher-in-the-classroom.jpg?s=612x612&w=0&k=20&c=3xsykmHXFa9ejL_sP2Xxiow7zdtmKvg15UxXFfgR98Q=",
  },
  {
    title: "Skill Development",
    image: "https://timestech.in/wp-content/uploads/2025/01/Untitled-design-2025-01-13T143931.901.jpg",
  },
  {
    title: "Nutrition",
    image: "https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?s=612x612&w=0&k=20&c=v48RE0ZNWpMZOlSp13KdF1yFDmidorO2pZTu2Idmd3M=",
  },
  {
    title: "Environment",
    image: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-118143566.jpg",
  },
  {
    title: "Disaster Management",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    title: "Water & Sanitation",
    image: "https://media.istockphoto.com/id/2017196787/photo/world-water-day-concept-with-world-in-clean-water-drop-on-and-fresh.jpg?s=612x612&w=0&k=20&c=wiOI8zEjn3FwyUuD97AqsqTdgzAkN7p3oL2WzDVUVig=",
  },
  {
    title: "Health",
    image: "https://health-e.in/wp-content/uploads/2023/09/family-shape-figure-with-heart-stethoscope.webp",
  },
  {
    title: "Youth",
    image: "https://mindbodyunite.com/wp-content/uploads/2023/09/youthDev.jpeg",
  },
  {
    title: "Technology",
    image: "https://www.wscubetech.com/blog/wp-content/uploads/2024/04/generative-ai.webp",
  },
  // 3 new images
  {
    title: "Women Empowerment",
    image: "https://tarunias.com/exams/wp-content/uploads/2025/09/Tarun-IAS-10.png",
  },
  {
    title: "Community Service",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLFaEzvNZUWRN0YYimlFYRhS4KX-aXEIS5xw&s",
  },
  {
    title: "Cultural Awareness",
    image: "https://clipart-library.com/images/gie5oAABT.jpg",
  },
];

function Programs() {
  const [startIndex, setStartIndex] = useState(0);

  const next = () => {
    setStartIndex((prev) =>
      prev + 4 >= programsData.length ? 0 : prev + 4
    );
  };

  const prev = () => {
    setStartIndex((prev) =>
      prev - 4 < 0 ? Math.max(programsData.length - 4, 0) : prev - 4
    );
  };

  const visiblePrograms = programsData.slice(startIndex, startIndex + 4);

  return (
    <section className="programs">
      <h2>Our Programs</h2>

      <div className="slider-container">
        {/* Left Arrow */}
        <span className="arrow left-arrow" onClick={prev}>
          &#10094;
        </span>

        {/* Cards */}
        <div className="program-cards">
          {visiblePrograms.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <span className="arrow right-arrow" onClick={next}>
          &#10095;
        </span>
      </div>
    </section>
  );
}

export default Programs;
