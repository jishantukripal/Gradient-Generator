import { useState } from "react";

function App() {
  const [gradient, setGradient] = useState("");
  const [tailwindGradient, setTailwindGradient] = useState("");
  const [copied, setCopied] = useState(false);

  const generateGradient = () => {
    const colors = [
      "#FF5733",  // Red/Orange
      "#FF6F61",  // Coral
      "#FF8C42",  // Orange Peel
      "#FFB6C1",  // Light Pink
      "#FFD700",  // Gold
      "#FFC300",  // Saffron
      "#F39C12",  // Orange
      "#FFA07A",  // Light Salmon
      "#FF6347",  // Tomato
      "#C70039",  // Crimson
      "#900C3F",  // Dark Red
      "#581845",  // Dark Purple
      "#8A2BE2",  // Blue Violet
      "#6A5ACD",  // Slate Blue
      "#483D8B",  // Dark Slate Blue
      "#1E90FF",  // Dodger Blue
      "#6495ED",  // Cornflower Blue
      "#4682B4",  // Steel Blue
      "#00BFFF",  // Deep Sky Blue
      "#87CEEB",  // Sky Blue
      "#00CED1",  // Dark Turquoise
      "#20B2AA",  // Light Sea Green
      "#008080",  // Teal
      "#2E8B57",  // Sea Green
      "#3CB371",  // Medium Sea Green
      "#32CD32",  // Lime Green
      "#00FF7F",  // Spring Green
      "#ADFF2F",  // Green Yellow
      "#90EE90",  // Light Green
      "#228B22",  // Forest Green
      "#FFDAB9",  // Peach Puff
      "#DDA0DD",  // Plum
      "#BA55D3",  // Medium Orchid
      "#9370DB",  // Medium Purple
      "#DA70D6",  // Orchid
      "#FF1493",  // Deep Pink
      "#FF69B4",  // Hot Pink
      "#FFB6C1",  // Light Pink
      "#F08080",  // Light Coral
      "#D2691E",  // Chocolate
      "#F4A460",  // Sandy Brown
      "#FFA07A",  // Light Salmon
      "#FFE4C4",  // Bisque
      "#FFD700",  // Gold
      "#F5DEB3",  // Wheat
      "#E0FFFF",  // Light Cyan
      "#00FA9A",  // Medium Spring Green
      "#7FFFD4",  // Aquamarine
    ];
    
    const directions = [
      "to right",   // equivalent to bg-gradient-to-r
      "to left",    // equivalent to bg-gradient-to-l
      "to top",     // equivalent to bg-gradient-to-t
      "to bottom",  // equivalent to bg-gradient-to-b
      "to top right",  // equivalent to bg-gradient-to-tr
      "to bottom left", // equivalent to bg-gradient-to-bl
      "to bottom right", // equivalent to bg-gradient-to-br
      "to top left", // equivalent to bg-gradient-to-tl
    ];
    
    const tailwindDirections = {
      "to right": "bg-gradient-to-r",
      "to left": "bg-gradient-to-l",
      "to top": "bg-gradient-to-t",
      "to bottom": "bg-gradient-to-b",
      "to top right": "bg-gradient-to-tr",
      "to bottom left": "bg-gradient-to-bl",
      "to bottom right": "bg-gradient-to-br",
      "to top left": "bg-gradient-to-tl",
    };

    const randomDirection = directions[Math.floor(Math.random() * directions.length)];
    const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
    const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
    
    // Construct the gradient in CSS format for the background
    const newGradient = `linear-gradient(${randomDirection}, ${randomColor1}, ${randomColor2})`;
    setGradient(newGradient);

    // Generate the Tailwind CSS code
    const newTailwindGradient = `${tailwindDirections[randomDirection]} from-[${randomColor1}] to-[${randomColor2}]`;
    setTailwindGradient(newTailwindGradient);
    
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(tailwindGradient);
    setCopied(true);
  };

  return (
    <div className="h-screen flex justify-center items-center"
      style={{ background: gradient }} // Apply the inline CSS gradient as background
    >
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Gradient Generator</h1>
        <button
          onClick={generateGradient}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Generate Random Gradient
        </button>
        {tailwindGradient && (
          <div>
            <div
              onClick={copyToClipboard}
              className="border border-gray-300 rounded p-2 bg-gray-100 cursor-pointer hover:bg-gray-200"
            >
              <p className="text-sm text-gray-700">{tailwindGradient}</p>
            </div>
            {copied && (
              <div className="mt-2 p-2 bg-green-100 border-l-4 border-green-500 text-green-700">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p>Copied to clipboard!</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
