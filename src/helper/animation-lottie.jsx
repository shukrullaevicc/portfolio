import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath }) => {
   const defoultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationPath,
   }

   return (
      <Lottie {...defoultOptions} />
   )
};

export default AnimationLottie;