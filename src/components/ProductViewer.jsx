import clsx from "clsx";
import useMacbookStore from "../store"
import { Canvas } from "@react-three/fiber";
import MacBookModel14 from "./models/Macbook-14";
import MacBookModel16 from "./models/Macbook-16";
import StudioLights from "./three/StudioLights";
import ModelSwitcher from "./three/ModelSwitcher";
import { useMediaQuery } from "react-responsive";

const ProductViewer = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
    const { color, scale, setColor, setScale } = useMacbookStore();
  return (
    <section 
    className="container relative min-h-[93vh] mx-auto px-5 2xl:px-0 mt-40"
    id="product-viewer">
        <h2
        className="text-white font-semibold text-3xl lg:text-6xl"
        >Take a closer look.</h2>
        <div 
        className="controls absolute z-50 bottom-40 lg:bottom-40 2xl:bottom-52 left-1/2 translate-x-1/2">
            <p 
            className="info text-xs text-white bg-black/20 px-2 py-1 rounded-lg">
                MacBook Pro {scale} in {color}
            </p>
            <div
            className="flex-center gap-5 mt-5">
                <div 
                className="color-control flex-between bg-neutral-800 rounded-full px-6 py-3 gap-4">
                    <div onClick={() => setColor ('#adb5db')} 
                    className={clsx(`bg-neutral-300 size-7 rounded-full cursor-pointer`, color === '#adb5db' && 'active')}/>
                    <div onClick={() => setColor ('#2e2c2e')} 
                    className={clsx(`bg-neutral-900 size-7 rounded-full cursor-pointer`, color === '#2e2c2e' && 'active')}/>
                </div>
                <div
                    onClick={() => setScale (0.06)} 
                    className={clsx(scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white',
                    "size-control small-medium flex-between bg-neutral-800 rounded-full px-6 py-2.5 gap-2")}>
                        <p>14"</p>
                </div>
                <div
                    onClick={() => setScale (0.08)} 
                    className={clsx(scale === 0.08 ? 'bg-white text-black' : 'bg-transparent text-white',
                    "size-control small-medium flex-between bg-neutral-800 rounded-full px-6 py-2.5 gap-2")}>
                        <p>16"</p>
                </div>
            </div>
        </div>
        <Canvas id="canvas"
        camera={{position: [0, 2, 5], fov: 50,  near: 0.1, far: 100}}
        >
            <StudioLights/>
            <ModelSwitcher scale={isMobile ? 0.03 : scale} isMobile={isMobile}/>
        </Canvas>
    </section>
  )
}

export default ProductViewer