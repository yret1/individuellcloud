import Image from "next/image";

interface PostcardProps {
  createdAt: string;
  user: string;
  message: string;
  id: string;
}

const Postcard: React.FC<PostcardProps> = ({
  id,
  user,
  createdAt,
  message,
}) => {
  const dateToLocale = new Date(createdAt).toLocaleDateString();
  const timeToLocale = new Date(createdAt).toLocaleTimeString();
  return (
    <section
      id={id}
      className="w-full bg-cardbg p-4 flex flex-col justify-between gap-4 items-start mb-8 relative"
    >
      <p className="text-slate-900 text-opacity-60 text-sm font-pt">
        {dateToLocale + ", " + timeToLocale}
      </p>
      <p className="text-slate-950 font-medium text-lg font-pt">{message}</p>
      <p className="text-slate-950 font-bold font-pt text-xl">-{user}</p>

      <div className="w-8 h-8 absolute top-full right-0 flex justify-center items-center">
        <Image src={"/cardTag.svg"} width={32} height={32} alt="cardtag" />
      </div>
    </section>
  );
};

export default Postcard;
