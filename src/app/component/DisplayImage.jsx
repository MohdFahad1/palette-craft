import React, { useEffect, useRef, useState } from "react";
import ColorThief from "colorthief";

function DisplayImage({ image }) {
  const imageRef = useRef(null);
  const [palettes, setPalettes] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [text, setText] = useState("");

  const rgbToHex = (r, g, b) =>
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("");

  useEffect(() => {
    if (loaded && imageRef.current) {
      const colorThief = new ColorThief();
      try {
        const palette = colorThief.getPalette(imageRef.current, 6);
        const hexPalette = palette.map((color) =>
          rgbToHex(color[0], color[1], color[2])
        );
        setPalettes(hexPalette);
      } catch (err) {
        console.error("Error extracting colors:", err);
      }
    }
  }, [image, loaded]);

  const handleCopyClick = async (hex) => {
    try {
      await window.navigator.clipboard.writeText(hex);
      alert(`Copied: ${hex}`);
    } catch (error) {
      console.log("Unable to copy to clipboard: ", error);
      alert("Copy to clipboard failed");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center p-5">
      <div className="relative md:h-[400px] h-[300px] md:w-[500px] w-full">
        {!loaded && (
          <div className="flex flex-col items-center justify-center text-center">
            <iframe
              src="https://lottie.host/embed/2023701b-57f2-4e67-8003-f9d212f1b0bc/I0CTYOgfWK.json"
              className="w-full h-96"
              frameborder="0"
            ></iframe>
            <h1 className="text-xl">
              Upload an Image to get the Color Palettes
            </h1>
          </div>
        )}
        <img
          src={image}
          alt="Uploaded"
          ref={imageRef}
          className={loaded ? "w-full h-full" : "hidden"}
          onLoad={() => setLoaded(true)}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="flex flex-col gap-10 mt-0 md:mt-5 md:flex-row">
        {palettes.map((hex, index) => (
          <div
            key={index}
            style={{
              backgroundColor: hex,
            }}
            className="flex justify-between flex-col items-center h-[150px] w-[180px] rounded-xl cursor-pointer"
            onClick={() => handleCopyClick(hex)}
          >
            <div className="flex items-center justify-center h-full text-2xl font-semibold">
              <h1>{hex}</h1>
            </div>
            <div className="flex items-center justify-center w-full h-8 border-t-2 border-white">
              Click to Copy
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default DisplayImage;
