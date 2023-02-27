import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Crousel() {
  return (
    <div
      className="crousel_container"
    >
      <Carousel 
      autoPlay={true}
      showArrows={false}
      showThumbs={false}
      showStatus={false}
        className="crousel_wrapper"
        useKeyboardArrows={false}
        showIndicators={false}
        animationHandler="fade"  
        swipeable={false} 
        interval={1500}
        transitionTime={500} 
          >
        <div>
          <img src="ss1.png" className="crousel_image"/>
        </div>
        <div >
          <img src="ss2.png" className="crousel_image" />
        </div>
        <div >
          <img src="ss3.png" className="crousel_image" />
        </div>
        <div >
          <img src="ss4.png" className="crousel_image" />
        </div>
      </Carousel>
    </div>
  )
}

export default Crousel