import React, { useState } from "react";
import './CSS/About.css';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const handleLearnMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="page-wrapper">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Website</h1>
          <p>Welcome to ProAI, your gateway to insightful responses powered by advanced artificial intelligence. Our platform integrates three cutting-edge AI models - ChatGPT, BARD, and a proprietary Blackbox AI - to deliver accurate and relevant information to your queries</p>
          <a href="#" className="cta-button" onClick={handleLearnMoreClick}>Learn More</a>
        </div>
      </section>
      
      {showMore && (
        <section className="more-data">
          {/* Additional content to display */}
          <div className="feature-box">
            <h2>Our Mission</h2>
            <p>ProAI's mission is rooted in harnessing cutting-edge AI advancements to provide users with accurate and relevant information, enriching their overall experience and knowledge. We strive to empower users by offering a platform that not only meets but exceeds their expectations for information retrieval. By leveraging the latest AI technologies, we aim to revolutionize the way people access and interact with information, fostering a more informed and connected global community. Our commitment to innovation and excellence drives us to continually enhance our platform, ensuring that users receive the most reliable and valuable insights.</p>
          </div>
          <div className="feature-box">
            <h2>How ProAI Works</h2>
            <p>
        <strong>Ask Questions:</strong> Enter your queries into our user-friendly interface.
      </p>
      <p>
        <strong>AI Processing:</strong> Our AI models analyze your questions using state-of-the-art algorithms.
      </p>
      <p>
        <strong>Comprehensive Responses:</strong> Receive diverse answers from different AI architectures.
      </p>
      <p>
        <strong>User Feedback:</strong> Help us improve and optimize our AI models with your feedback.
      </p>
      <a id="less" href="#" className="cta-button" onClick={handleLearnMoreClick}style={{fontSize:"15px"}}>Show Less</a>
      </div>
      </section>
      )}
      
      <section className="features">
        <div className="feature-box">
          <h2>Multi-Architecture Responses</h2>
          <p>ProAI leverages the power of three distinct AI models - ChatGPT, BARD, and Blackbox AI - to provide users with varied and comprehensive answers to their queries. Each AI model has its own unique architecture and approach to understanding and generating responses, allowing ProAI to offer diverse perspectives and insights..</p>
        </div>
        <div className="feature-box">
          <h2>User-Friendly Interface</h2>
          <p>ProAI's user-friendly interface is meticulously crafted for effortless navigation and accessibility. Its minimalist design promotes a clutter-free experience, allowing users to interact seamlessly with the AI models.The interface's intuitive nature mirrors natural conversation, enabling users to pose questions and receive responses naturally. </p>
        </div>
        <div className="feature-box">
          <h2>Optimized for Accuracy</h2>
          <p>ProAI's AI models are finely tuned for accuracy, providing reliable answers across a wide range of topics. Through continuous refinement, these models deliver precise and relevant information to users. The optimization process ensures that ProAI's responses are dependable and trustworthy, meeting the diverse needs of users.</p>
        </div>
      </section>
      
      <footer className="footer">
        <p>&copy; 2023 ProAi. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
