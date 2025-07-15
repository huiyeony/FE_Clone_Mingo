import { useNavigate } from "react-router-dom";
import UserMenu from "./user-menu";
// ✅ 있어야 할 코드
import React from "react";

function Header() {
  const nav = useNavigate();

  return (
   
      {/* <-- 헤더영역 --> */}
      <header className="fixed top-0 w-full z-20 bg-[#121212] flex items-center text-sm">
        {/* <-- 로고 영역 --> */}
        <div className="flex justify-between w-full h-13 items-center px-6">
          <div className="flex gap-4">
            <div
              className="flex items-center justify-center w-[36px] h-[36px]"
              onClick={() => {
                nav("/");
              }}
            >
              <img src="/small.svg" alt="@logo" className="w-full h-full" />
            </div>
            {/* <-- 숨겨진 메뉴바 --> */}
            <div className="hidden lg:flex gap-5 items-center font-semibold ">
              <div className=" flex pr-3 ">
                <div>클래스</div>
                <div>배움 노트</div>
              </div>
              <span>|</span>
              <div
                onClick={() => {
                  nav("/topics");
                }}
              >
                토픽 인사이트{" "}
              </div>
              <span>|</span>
              <div className="flex pr-3">
                <div>밍랩</div>
                <div>밍고 스테이지</div>
              </div>
              <span>|</span>
              <div className="flex pr-3">
                <div>밍고 스토어</div>
                <div>밍거진</div>
              </div>
            </div>
          </div>
          {/* <--오른쪽 영역 --> */}
          <div className="flex gap-4 items-center">
            {/* <-- 프로필 드롭다운 --> */}
            <UserMenu />
            {/* <--  버튼  영역 --> */}
            <button className="cursor-pointer text-[#fafafa] font-medium hover:text-white">
              우리가 하는 일
            </button>
          </div>
        </div>
      </header>

  );
}
export default Header;
