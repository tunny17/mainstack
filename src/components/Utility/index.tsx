import { UtilityItem, UtilityProps } from '../../types';

const utils: UtilityItem[] = [
  {
    id: 1,
    img: '/navigation/icon-a.svg'
  },
  {
    id: 2,
    img: '/navigation/icon-b.svg'
  },
  {
    id: 3,
    img: '/navigation/icon-c.svg'
  },
  {
    id: 4,
    img: '/navigation/icon-d.svg'
  }
];

const Utility = ({ position = '' }: UtilityProps) => {
  // const handleUtilClick = (e: React.MouseEvent<HTMLButtonElement>) => {};

  return (
    <section className={`flex flex-col gap-4 items-center p-4 rounded-full ${position}`}>
      {utils.map((item) => (
        <button
          type="button"
          key={item.id}
          // onClick={handleUtilClick}
          className="flex items-center justify-center w-5"
        >
          <img
            src={item.img}
            alt={`Utility icon ${item.id}`}
            className="w-full h-full filter grayscale hover:scale-125 transition-all duration-300"
          />
        </button>
      ))}
    </section>
  );
};

export default Utility;
