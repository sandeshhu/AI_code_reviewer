import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // For navigation
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHightLight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css"; // Use an available theme from highlight.js
import axios from 'axios';
import './App.css';

function App() {
  useEffect(() => {
    prism.highlightAll();
  }, []);

  const [review, setReview] = useState('');
  const [code, setCode] = useState('function () { return 1 + 1; }');
  // const [clickCount, setClickCount] = useState(0); // Track button clicks
  // const navigate = useNavigate(); // For navigation

  async function codeReview() {
    try {
      const response = await axios.post('http://localhost:3000/ai/get-review', { code });
      setReview(response.data); // Use the response data to update the review state
    } catch (error) {
      
    }
  }

  const handleHover = (event) => {
    const button = event.currentTarget;

    const rect = button.getBoundingClientRect();

    const stars = [
      { size: 7, x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }, // Center of the button
      { size: 10, x: rect.left, y: rect.top + rect.height / 2 }, // Left border
      { size: 12, x: rect.right, y: rect.top + rect.height / 2 }, // Right border
      { size: 16, x: rect.left + rect.width / 2, y: rect.top },
      { size: 18, x: rect.left, y: rect.top + rect.height / 1 }, // Left border
      { size: 10, x: rect.left, y: rect.top + rect.height / 3 }, // Left border
      { size: 20, x: rect.left + rect.width / 2, y: rect.bottom }, // Bottom border
    ];

    stars.forEach((star) => {
      const starElement = document.createElement('div');
      starElement.className = 'star';
      starElement.style.width = `${star.size}px`;
      starElement.style.height = `${star.size}px`;
      starElement.style.left = `${star.x}px`;
      starElement.style.top = `${star.y}px`;

      // Randomize the direction of the shatter
      const randomX = Math.random() * 100 - 50; // Random offset between -50px and 50px
      const randomY = Math.random() * 100 - 50; // Random offset between -50px and 50px
      starElement.style.setProperty('--random-x', `${randomX}px`);
      starElement.style.setProperty('--random-y', `${randomY}px`);

      // Append the star to the body
      document.body.appendChild(starElement);

      // Remove the star after animation ends
      setTimeout(() => {
        starElement.remove();
      }, 1500); // Matches animation duration
    });
  };

  return (
    <main>
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) => prism.highlight(code, prism.languages.javascript, 'javascript')}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
              border: '1px solid #ddd',
              borderRadius: '5px',
              height: '100%',
              width: '100%',
            }}
          />
        </div>
        <div
          id="sparkle-button"
          onMouseEnter={handleHover} // Trigger stars on hover
          onClick={codeReview} // Trigger review functionality
          className="review"
        >
           𝗥𝗲𝘃𝗶𝗲𝘄
        </div>
      </div>
      <div className="right">
        <Markdown rehypePlugins={[rehypeHightLight]}>{review}</Markdown>
      </div>
    </main>
  );
}

export default App;