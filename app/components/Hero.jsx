"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);
const Hero = () => {
    useGSAP(() => {
        const heroSplit = new SplitText(".title", {type:"chars words"});
        const paraSplit = new SplitText(".subtitle", {type:"lines"});

        heroSplit.chars.forEach((char) => {char.classList.add("text-gradient")});
        gsap.from(heroSplit.chars, {
            yPercent:100,
            duration:1.8,
            ease:"expo.out",
            stagger:0.09
        });
        gsap.from(paraSplit.lines,{
            opacity:0,
            yPercent:100,
            duration:0.9,
            ease:"expo.out",
            stagger:0.06,
            delay:1
        });
        
        // leafs animation

        gsap.timeline({
            scrollTrigger: {
                trigger:"#hero",
                start:"top top",
                end:"bottom top",
                scrub:true,
            },
        }).to(".right-leaf",{
            y:200,

        }, 0).to(".left-leaf",{
            y:-200,
        }, 0)
    },[])
    return(
        <>
            <section id="hero" className="noisy">
                <h1 className="title">MOJITO</h1>

                {/* leaf */}
                <img src="/images/hero-left-leaf.png" alt="leaf" className="left-leaf"/>
                <img src="/images/hero-right-leaf.png" alt="leaf" className="right-leaf"/>

                {/* body */}
                <div className="body">
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p>Cool. Crisp. Calssic</p>
                            <p className="subtitle">
                                Sib the Sprit <br /> of Summer 
                            </p>
                        </div>
                        <div className="view-cocktails">
                            <p className="subtitle">Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses. </p>
                            <a href="#cocktails">view cocktails</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Hero;