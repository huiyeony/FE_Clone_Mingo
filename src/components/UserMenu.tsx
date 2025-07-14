import { ChevronDown, LogOut, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function UserMenu() {
  // <-- 드롭다운 메뉴 열기 -->
  const [isOpen, setIsOpen] = useState(false);
  // <-- DOM 루트 요소 -->
  const rootRef = useRef<HTMLDivElement>(null);
  function handleClick() {
    setIsOpen((prev) => !prev);
  }
  // <-- 드롭다운 메뉴 닫기 -->
  function handleClickOutside(e: MouseEvent) {
    // 루트가 존재하고
    if (rootRef.current) {
      // 루트의 안족이 아닌, 바깥쪽을 클릭
      if (!rootRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
  }
  //   브라우저가 생성한 DOM 은 document 객체를 통해 접근할 수 있다
  //  document 객체는 전체 HTML 코드 트리를 반환한다
  useEffect(() => {
    // 브라우저가 생성한 DOM 에 이벤트 리스너 생성하기
    // 이벤트가 발생하면 정해진 동작을 수행하는 함수
    document.addEventListener("mousedown", handleClickOutside);
    // 브라우저가 생성한 DOM 에 정해진 동작을 수행했던 리스너 함수를 삭제한다
    // 더이상 이벤트 발생시 동작을 수행할 수 없다
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    // <-- 전체 영역 -->
    <div ref={rootRef} className="relative">
      {/* <-- 아이콘 영역 -->  */}
      <div className="text-sm flex items-center" onClick={handleClick}>
        양희연님
        <ChevronDown size={18} />
      </div>
      {/* <--드롭다운 영역 --> */}
      {isOpen && (
        <div className="w-[224px] h-[150px] border-1 rounded-md absolute right-0 z-10 flex flex-col mt-2 bg-[#171717]">
          <div className="w-full border-b-1 p-3">
            <div className="flex flex-col">
              {/* <-- 유저 이름 --> */}
              <div>양희연</div>
              {/* <-- 유저 계정 --> */}
              <div className="whitespace-nowrap text-xs text-gray-500">
                양희연@naver.com
              </div>
            </div>
          </div>
          <div className="w-full border-b-1 p-3">
            {/* <-- 프로필 --> */}
            <div className="flex gap-2">
              <User size={18} />
              프로필
            </div>
          </div>
          <div className="w-full p-3 flex items-center">
            {/* <-- 로그아웃 --> */}
            <div className="flex gap-2 ">
              <LogOut size={18} />
              로그아웃
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
