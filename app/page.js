import { ScrollTrigger, SplitText } from "gsap/all";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger, SplitText);


const App = () => {
  return(
    <div className={"flex-center h-screen noisy"}>
      <div className={"text-gradient"}>test</div>
    </div>
  )
}
export default App;