import ImageSlider from "./ImageSlider";
import image1 from './img1.jpeg'
import image2 from './img3..jpeg'
import image3 from './img4..jpg'
import image4 from './img5..jpeg'
import image5 from './img4..jpg'
const App = () => {
  const slides = [
    { url: image1, title: "beach" },
    { url: image2, title: "boat" },
    { url: image3, title: "forest" },
    { url: image4, title: "city" },
    { url: image5, title: "italy" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>
      <h1>Image Slider</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App;