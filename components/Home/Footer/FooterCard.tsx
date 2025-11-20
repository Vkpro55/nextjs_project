type Props = {
  data: {
    id: number;
    title: string;
    items: string[];
  };
};

export default function FooterCard({ data }: Props) {
  return (
    <div className="space-y-6">
      <h1 className="text-lg font-bold text-gray-800 dark:text-gray-200">{data.title}</h1>
      <div className="space-y-6">
        {data.items.map((footerlink) =>{
            return <p key={`${footerlink}_footer`} className="footer_link">{footerlink}</p>
        })}
      </div>
    </div>
  );
}
