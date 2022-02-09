import { Children } from "react/cjs/react.production.min";

export default function Button( {children} ) {
    return (
        <div className="w-3/12">
        <div className="button">
          <button className="border-2 rounded-full px-6 border-white bg-white text-rose-600 font-semibold  mx-32">
            {children}
          </button>
        </div>
        </div>
    )
}