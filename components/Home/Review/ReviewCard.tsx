import Image from "next/image";

type Props = {
  image: string;
  title: string;
  userName: string;
  userRole: string;
};

export default function ReviewCard({
  image,
  title,
  userName,
  userRole,
}: Props) {
  return (
    <div className="w-full lg:w-[60%] mx-auto">
      <Image
        src={image}
        alt="image"
        width={80}
        height={80}
        className="object-cover mx-auto"
      />
      <h1 className="text-center mt-4 text-lg font-bold text-blue-600 dark:text-white">
        {title}
      </h1>
      <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
        reprehenderit expedita dolor harum inventore mollitia quidem sunt,
        adipisci atque quos? Quo illo eligendi ex rem quas dolorem harum amet,
        pariatur aliquam est architecto neque. Inventore.
      </p>

      <div className="mt-8 text-center">
        <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">{userName}</h1>
        <p className="text-sm text-gray-600 mt-2 dark:text-gray-400">{userRole}</p>
      </div>
    </div>
  );
}
