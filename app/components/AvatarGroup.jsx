import Image from "next/image";

const AvatarGroup = () => {
  const users = [
    { id: 1, src: "/Bitmap (1).png", alt: "User 1" },
    { id: 2, src: "/Bitmap.png", alt: "User 2" },
    { id: 3, src: "/Bitmap (1).png", alt: "User 3" },
  ];

  return (
    <div className="flex items-center">
      {users.map((user) => (
        <div
          key={user.id}
          className="w-10 h-10 rounded-full border-2 border-white -ml-3 shadow overflow-hidden"
        >
          <Image
            src={user.src}
            alt={user.alt}
            width={40} 
            height={40} 
            layout="fixed" 
            objectFit="cover" 
          />
        </div>
      ))}
      <div className="w-10 h-10 rounded-full bg-transparent border-2 border-gray-300 text-gray-600 flex items-center justify-center text-lg font-semibold ml-3 shadow cursor-pointer">
        +
      </div>
    </div>
  );
};

export default AvatarGroup;
