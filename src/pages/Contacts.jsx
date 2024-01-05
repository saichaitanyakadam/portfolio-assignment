import { RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri";
import { BsFillEnvelopeFill } from "react-icons/bs";

const Contacts = () => {
  return (
    <div className="mb-8 flex flex-col gap-6" id="contacts">
      <div className="flex gap-8 justify-center mt-20">
        <RiInstagramFill size={30} />
        <RiLinkedinBoxFill size={30} />
        <BsFillEnvelopeFill size={30} />
      </div>
      <p className="font-serif text-[1rem] text-[#828282] text-center">
        Copyright © 2024. All rights reserved
      </p>
    </div>
  );
};

export default Contacts;
