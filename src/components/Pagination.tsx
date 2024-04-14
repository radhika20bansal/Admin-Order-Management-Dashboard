import { useEffect, useMemo } from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

interface PropsType {
  currentPage: number;
  dataCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  dataCount,
  pageSize,
  onPageChange,
}: PropsType) => {
  const totalPageCount = useMemo(() => {
    return Math.ceil(dataCount / pageSize);
  }, [dataCount, pageSize]);

  useEffect(() => {
    totalPageCount < currentPage
      ? onPageChange(totalPageCount)
      : onPageChange(currentPage);
  }, [currentPage, totalPageCount]);

  const handleFirstPage = () => {
    if (currentPage === 1) return;
    onPageChange(1);
  };
  const handlePrevious = () => {
    if (currentPage === 1) return;
    onPageChange(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage === totalPageCount) return;
    onPageChange(currentPage + 1);
  };
  const handleLast = () => {
    if (currentPage === totalPageCount) return;
    onPageChange(totalPageCount);
  };

  return (
    <div>
      <ul className="flex items-center justify-between text-sm">
        <li className="p-2 cursor-pointer" onClick={handleFirstPage}>
          <MdKeyboardDoubleArrowLeft color="gray" />
        </li>
        <li className="px-4 py-2 cursor-pointer" onClick={handlePrevious}>
          <MdKeyboardArrowLeft color="gray" />
        </li>
        <li className="px-4 py-2 bg-blue-500 text-white rounded-md">
          {totalPageCount < currentPage ? totalPageCount : currentPage}
        </li>
        <li className="px-4 py-2 cursor-pointer" onClick={handleNext}>
          <MdKeyboardArrowRight color="gray" />
        </li>
        <li className="p-2 cursor-pointer" onClick={handleLast}>
          <MdKeyboardDoubleArrowRight color="gray" />
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
