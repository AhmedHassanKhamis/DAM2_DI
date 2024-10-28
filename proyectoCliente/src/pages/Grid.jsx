import React from "react";
import IMAGES from '../images/Images'

function Grid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-4 p-6 bg-gray-900">
      <div className="bg-gray-800 shadow-lg p-6 text-white rounded-lg">
        <img className="rounded-lg" src="https://picsum.photos/700/400?grayscale" alt="" />
      </div>
      <div className="bg-gray-800 shadow-lg p-6 text-white rounded-lg">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex culpa ipsam cum libero minima atque corrupti nisi incidunt quasi dolores. Eligendi laborum corrupti odit, aliquid laudantium similique error quia beatae.</p>
      </div>
      <img className="rounded-lg" src={IMAGES.image1} alt="" />
    </div>
  )
}

export default Grid;
