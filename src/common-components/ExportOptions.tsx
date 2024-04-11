import { AiOutlineFilePdf } from "react-icons/ai";
import { PiMicrosoftExcelLogo } from "react-icons/pi";

const ExportOptions = () => {
  return (
    <div className="flex items-center">
      <span className="flex items-center justify-center mr-6 w-9 h-9 rounded-md border-2 border-gray-400">
        <PiMicrosoftExcelLogo size={"24px"} />
      </span>
      <span className="flex items-center justify-center w-9 h-9 rounded-md border-2 border-gray-400">
        <AiOutlineFilePdf size={"24px"} />
      </span>
    </div>
  );
};

export default ExportOptions;
