import React from "react";
import { FiHome } from "react-icons/fi";
import { TbMap2 } from "react-icons/tb";
import { TbBuildingWarehouse } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { PiForkKnife } from "react-icons/pi";
import { PiNewspaperClipping } from "react-icons/pi";
import { TbDiscount2 } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaFileExportSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const LeftMenu = () => {
  return (
    <div className="w-20 p-4 h-screen shadow-md shadow-gray-300 rounded-md">
      <div>
        <img
          src="https://s3-alpha-sig.figma.com/img/b21c/8759/5394a13e5ebff15cc92349cfc30ad6ea?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gSthAwWVWdo3tnKxUsrTA6fp8p4E7oOOhWM82RYhCstGS1C3jTV3b1~Le-3bU0~Otz1zIQsUm8oxa-K35~co5-ZH7H8oMZeUPtasoPCsb8jWaW8i52oWuqpo31cCmfIBQz7r8cM7CMAwci5a4uELOKlfArJ51bCG0DTGED7kmrXnV-QlGSho7EgwXCq6wvDfHrQazfuLSlFONmGkGQ76E4JAiGYPJcMcrsVrqU39w8p4RwPj70Oe0plimBFB~i8BfDhDJ0iAbquyHxCnqFw9C4xArTUn2vGO1XvPUqW6hTP8hm8Qm8ni3UyQFMTxKQuvMOo5bSduvsBW1CbU7KTwTw__"
          className="w-9 h-9 rounded-full"
        />
        <div className='my-16 flex flex-col items-center'>
        <Link to='' className='mb-9 block'><FiHome size={'24px'}/></Link>
        <Link to='' className='mb-9 block'><TbMap2 size={'24px'}/></Link>
        <Link to='' className='mb-9 block bg-blue-500 p-2 rounded-md'><TbBuildingWarehouse size={'24px'} color="white"/></Link>
        <Link to='' className='mb-9 block'><GoPeople size={'24px'}/></Link>
        <Link to='' className='mb-9 block'><PiForkKnife size={'24px'}/></Link>
        <Link to='' className='mb-9 block'><PiNewspaperClipping size={'24px'}/></Link>
        <Link to=''><TbDiscount2 size={'24px'}/></Link>
        </div>
        <div className="flex flex-col items-center">
        <Link to='' className='mb-9 block'><IoSettingsOutline size={'24px'}/></Link>
        <Link to=''><LiaFileExportSolid size={'24px'}/></Link>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
