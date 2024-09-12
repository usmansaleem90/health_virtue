import { Link } from "react-router-dom";

const Card = ({ icon, text, to, color, onClick }) => {
  
  return (
   <>
    <style>
        {`

          @media (max-width: 400px) {
            .custom-card {
              width: 130px;
            }
          }
            @media (max-width: 340px and min-width:280px) {
            .custom-card {
              width: 100px;
            }
          }
        `}
      </style>
   
   <Link
      onClick={onClick}
      style={{ color: color }}
      to={to}
      className={`bg-white  shadow-2xl text-gradient-1 custom-card  rounded-lg  overflow-hidden hover:scale-105 transition-all p-2 md:w-[30%] lg:w-[20%]   w-[160px] h-[130px] hover:bg-blue-300 hover:text-white`}
    >
      <div className=" flex flex-col  items-center">
        <div className="flex justify-end  w-full ">
          <img src="svgs/active.svg" alt="" />
        </div>

        <img src={icon} alt="" />
        <p className={`text-lg font-semibold mt-3 text-blu-300`}>{text} </p>
      </div>
    </Link></>
  );
};

export default Card;
