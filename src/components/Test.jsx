function Test() {
  return (
    <div className="perspective-1000 h-48 w-72 border border-gray-200">
      <div className="transform-style-preserve-3d relative h-full w-full text-center transition-transform">
        <div className="flip-card-front absolute flex h-full w-full items-center justify-center bg-gray-300">
          <img
            src="img_avatar.png"
            alt="Avatar"
            className="h-48 w-48 object-cover"
          />
        </div>
        <div className="flip-card-back rotate-y-180 absolute flex h-full w-full transform flex-col items-center justify-center bg-blue-500 text-white">
          <h1 className="text-xl font-bold">John Doe</h1>
          <p className="text-sm">Architect & Engineer</p>
          <p className="text-sm">We love that guy</p>
        </div>
      </div>
    </div>
  );
}

export default Test;
