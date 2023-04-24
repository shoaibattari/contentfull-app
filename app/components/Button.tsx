import { FC } from "react";
import Link from "next/link";

const Button: FC<{ text: string; link: string }> = ({ text, link }) => {
  return (
    <button className=" mx-4 my-4 text-1xl font-bold p-5 w-36 rounded-lg bg-black text-white hover:cursor-pointer  hover:bg-orange-500 hover:scale-125 hover: duration-500 ">
      <Link href={link}  target='_blank' >{text} </Link>
    </button>
  );
};
export default Button;