import { useRef } from "react";
import gsap from "gsap";
import { PresentationControls } from "@react-three/drei";
import MacBookModel14 from "../models/Macbook-14";
import MacBookModel16 from "../models/Macbook-16";
import { useGSAP } from "@gsap/react";

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMeshes = (group, opacity) => {
    if(!group) return;
    group.traverse((child) => {
        if(child.isMesh){
            child.material.transparent = true;
            gsap.to(child.material, {opacity, duration : ANIMATION_DURATION});
        }
    })
}

const moveGroup = (group , x) => {
    if(!group) return;
    gsap.to(group.position, {
        x,
        duration: ANIMATION_DURATION,
        ease: "power2.inOut"
    });
}

const ModelSwitcher = ({scale, isMobile}) => {
    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();
    const showLargeMacbook = scale === 0.08 || scale === 0.05;
    const showSmallMacbook = scale === 0.06 || scale === 0.03;

    useGSAP(() => {

        if(showLargeMacbook){
            moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE);
            moveGroup(largeMacbookRef.current, 0);

            fadeMeshes(smallMacbookRef.current, 0);
            fadeMeshes(largeMacbookRef.current, 1);
        } else if (showSmallMacbook){
            moveGroup(smallMacbookRef.current, 0);
            moveGroup(largeMacbookRef.current, OFFSET_DISTANCE);

            fadeMeshes(smallMacbookRef.current, 1);
            fadeMeshes(largeMacbookRef.current, 0);
        }
    }, [scale])

    const controlsConfig = {
        snap: false,
        polar: [-Math.PI / 2, Math.PI / 2],
        azimuth: [-Math.PI / 2, Math.PI / 2],
        zoom: 1,
        polarSpeed: 0.5,
        azimuthSpeed: 0.5,
        snapThreshold: 0.1,
        
    }
    return (
        <>
        <PresentationControls {...controlsConfig}>
            <group ref={largeMacbookRef}>
                <MacBookModel16 scale={isMobile ? 0.05 : 0.08} />
            </group>
        </PresentationControls>
        <PresentationControls {...controlsConfig}>
            <group ref={smallMacbookRef}>
                <MacBookModel14 scale={isMobile ? 0.03 : 0.06} />
            </group>
        </PresentationControls>
        </>
    )
}

export default ModelSwitcher