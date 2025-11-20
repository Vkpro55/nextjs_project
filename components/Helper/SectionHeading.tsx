type Props ={
    heading: string;
    subheading: string;
}

export default function SectionHeading({heading, subheading}: Props) {
  return <div>
    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 text-center">{heading}</h1>
    <p className="mt-3 text-gray-500 dark:text-gray-400 text-center">{subheading}</p>
  </div>;
}
