import { TOPIC_CATEGORY } from "@/constants/category.constant";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex flex-col items-start gap-2 text-[#a1a1a1] w-full">
      {/* <--제목 부분 --> */}

      <div
        className="flex justify-start items-center"
        onClick={() => {
          // <-- 접었다 폈다 구현 -->
          setIsOpen((prev) => !prev);
        }}
      >
        {/* <-- 텍스트 --> */}
        {/* <-- 모바일에서는 보이지 않고, 큰 화면에서만 보이도록 한다 --> */}
        <div className="whitespace-nowrap hidden md:block">카테고리</div>
        {/* <-- 아이콘 --> */}
        <ChevronDown
          size={16}
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {/* <-- 컨텐츠 --> */}
      <div
        className={`overflow-hidden ease-in-out flex flex-col gap-2 ${
          isOpen ? "max-h-1000px" : "max-h-0"
        }`}
      >
        {/* <-- 메뉴들 -->  */}
        {TOPIC_CATEGORY.map((item) => (
          <div className="flex gap-2 px-2 py-1 pl-0 hover:pl-3 transition-all duration-300">
            <span>{item.icon}</span>
            {/* 모바일에서는 보이지 않고 */}
            <span className="hidden md:block whitespace-nowrap">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
