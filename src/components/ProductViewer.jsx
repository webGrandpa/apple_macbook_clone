import useMacbookStore from "../store"

const ProductViewer = () => {

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
                MacBook Pro 16" in Silver / Space Black
            </p>
            <div
            className="flex-center gap-5 mt-5">
                <div 
                className="color-control flex-between bg-neutral-800 rounded-full px-6 py-3 gap-4">
                    <div className="bg-neutral-300 size-7 rounded-full cursor-pointer"></div>
                    <div className="bg-neutral-900 size-7 rounded-full cursor-pointer"></div>
                </div>
                <div
                className="size-control small-medium flex-between bg-neutral-800 rounded-full px-6 py-2.5 gap-2">
                    <div 
                    className="size-8 rounded-full cursor-pointer bg-white text-black flex-center">
                        <p>14"</p>
                    </div>
                    <div 
                    className="size-8 rounded-full cursor-pointer bg-white text-black flex-center">
                        <p>16"</p>
                    </div>
                </div>
            </div>
        </div>
        <p className="text-white text-4xl">Render Canvas</p>
    </section>
  )
}

export default ProductViewer