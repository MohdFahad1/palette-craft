import React, { useEffect, useRef, useState } from "react";
import ColorThief from "colorthief";

function DisplayImage({ image }) {
  const imageRef = useRef(null);
  const [palettes, setPalettes] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded && imageRef.current) {
      const colorThief = new ColorThief();
      try {
        const palette = colorThief.getPalette(imageRef.current, 5);
        setPalettes(palette);
        console.log(palette);
      } catch (err) {
        console.error("Error extracting colors:", err);
      }
    }
  }, [image, loaded]);

  return (
    <main className="flex items-center justify-center p-5">
      <div className="relative h-[400px] w-[500px]">
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
          className={loaded ? "" : "hidden"}
          onLoad={() => setLoaded(true)}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
    </main>
  );
}

export default DisplayImage;
