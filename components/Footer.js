import { RiCopyrightLine } from "react-icons/ri";

function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0">
      <div className="flex flex-row justify-center text-white p-4">
        <div className="bg-gradient-to-r from-gray-500 to-white h-0.5 w-5/6 mx-auto">
          {" "}
          <p className="flex gap-2 justify-center items-center py-3">
            <RiCopyrightLine className="inline-block" /> Jon Sundin 2023
          </p>
        </div>
        <p className="flex gap-1 justify-center items-center py-4"> </p>
      </div>
    </footer>
  );
}

export default Footer;
