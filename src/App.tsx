import "./App.css";
import { Search } from "lucide-react";
import MiniCard from "./components/MiniCard";
import TopicCard from "./components/TopicCard";
import ClassCard from "./components/ClassCard";
import UserMenu from "./components/UserMenu";
function App() {
  const cardItems = [
    {
      title: "클래스",
      content:
        "배우고 싶은 수업이 있으신가요?\n 여러분의 열정을 더욱 탄탄하게!",
    },
    {
      title: "클래스",
      content:
        "배우고 싶은 수업이 있으신가요?\n 여러분의 열정을 더욱 탄탄하게!",
    },
    {
      title: "클래스",
      content:
        "배우고 싶은 수업이 있으신가요?\n 여러분의 열정을 더욱 탄탄하게!",
    },
    {
      title: "클래스",
      content:
        "배우고 싶은 수업이 있으신가요?\n 여러분의 열정을 더욱 탄탄하게!",
    },
    {
      title: "클래스",
      content:
        "배우고 싶은 수업이 있으신가요?\n 여러분의 열정을 더욱 탄탄하게!",
    },
  ];
  const topicItems = [
    {
      title: "Atomic Design vs FSD, 프런트엔드 구조 설계의 길",
      profile: {
        icon: "/small.svg",
        name: "밍고 TEAM",
        domains: ["IT및 기술 분야", "교육", "비지니스"],
      },
    },
    {
      title: "Atomic Design vs FSD, 프런트엔드 구조 설계의 길",
      profile: {
        icon: "/small.svg",
        name: "밍고 TEAM",
        domains: ["IT및 기술 분야", "교육", "비지니스"],
      },
    },
    {
      title: "Atomic Design vs FSD, 프런트엔드 구조 설계의 길",
      profile: {
        icon: "/small.svg",
        name: "밍고 TEAM",
        domains: ["IT및 기술 분야", "교육", "비지니스"],
      },
    },
    {
      title: "Atomic Design vs FSD, 프런트엔드 구조 설계의 길",
      profile: {
        icon: "/small.svg",
        name: "밍고 TEAM",
        domains: ["IT및 기술 분야", "교육", "비지니스"],
      },
    },
    {
      title: "Atomic Design vs FSD, 프런트엔드 구조 설계의 길",
      profile: {
        icon: "/small.svg",
        name: "밍고 TEAM",
        domains: ["IT및 기술 분야", "교육", "비지니스"],
      },
    },
    {
      title: "Atomic Design vs FSD, 프런트엔드 구조 설계의 길",
      profile: {
        icon: "/small.svg",
        name: "밍고 TEAM",
        domains: ["IT및 기술 분야", "교육", "비지니스"],
      },
    },
  ];
  const classItems = [
    {
      title: "백엔드의 새로운 패러다임, Nest.js 커뮤니티 서비스 만들기",
      badges: ["프로그래밍", "프론트엔드", "초급"],
      discountBadge: "25%",
      price: "79000원",
      like: 10,
    },
    {
      title: "백엔드의 새로운 패러다임, Nest.js 커뮤니티 서비스 만들기",
      badges: ["프로그래밍", "프론트엔드", "초급"],
      discountBadge: "25%",
      price: "79000원",
      like: 10,
    },
    {
      title: "백엔드의 새로운 패러다임, Nest.js 커뮤니티 서비스 만들기",
      badges: ["프로그래밍", "프론트엔드", "초급"],
      discountBadge: "25%",
      price: "79000원",
      like: 10,
    },
    {
      title: "백엔드의 새로운 패러다임, Nest.js 커뮤니티 서비스 만들기",
      badges: ["프로그래밍", "프론트엔드", "초급"],
      discountBadge: "25%",
      price: "79000원",
      like: 10,
    },
    {
      title: "백엔드의 새로운 패러다임, Nest.js 커뮤니티 서비스 만들기",
      badges: ["프로그래밍", "프론트엔드", "초급"],
      discountBadge: "25%",
      price: "79000원",
      like: 10,
    },
    {
      title: "백엔드의 새로운 패러다임, Nest.js 커뮤니티 서비스 만들기",
      badges: ["프로그래밍", "프론트엔드", "초급"],
      discountBadge: "25%",
      price: "79000원",
      like: 10,
    },
  ];
  return (
    <>
      <div className="w-full  max-x-[1328px] flex flex-col  bg-[#121212]">
        {/* <-- 헤더영역 --> */}
        <header className="fixed top-0 w-full z-20 bg-[#121212] flex items-center text-sm">
          {/* <-- 로고 영역 --> */}
          <div className="flex justify-between w-full h-13 items-center px-6">
            <div className="flex gap-4">
              <div className="flex items-center justify-center w-[36px] h-[36px]">
                <img src="/small.svg" alt="@logo" className="w-full h-full" />
              </div>
              {/* <-- 숨겨진 메뉴바 --> */}
              <div className="hidden lg:flex gap-5 items-center font-semibold ">
                <div className=" flex pr-3 ">
                  <div>클래스</div>
                  <div>배움 노트</div>
                </div>
                <span>|</span>
                <div>토픽 인사이트 </div>
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
        <main className="pt-13 ">
          {/* <-- 컨텐츠 영역  -->  */}
          <section className="p-6 w-full flex flex-col gap-16">
            {/* <-- 컨텐츠 헤더 -->  */}
            <section className="flex justify-between mt-10 h-16 items-end">
              {/* <-- 텍스트 박스 --> */}
              <div className="flex flex-col lg:items-start justify-end text-xl ">
                <h3>나의 학습 영역이,</h3>
                <h3>나만의 창작영역으로 이어지는 플랫폼</h3>
              </div>
              {/* <-- 검색바 영역 --> */}
              <section className="flex items-center gap-2 text-[#fafafa] ">
                {/* <-- 아이콘 --> */}
                <Search size={24} />
                <input
                  type="text"
                  placeholder="관심있는 주제의 클래스를 검색하세요"
                  className="w-full lg:min-w-[300px] px-3 py-2 border-[0.3px] rounded-lg text-sm"
                />
                <button className="rounded-md px-2 py-1 border-[0.3px] border-[#fafafa] color-[#fafafa] whitespace-nowrap text-sm">
                  <span>버튼</span>
                </button>
              </section>
            </section>
            {/* <-- 링크박스 영역--> */}
            <section className="flex gap-4 overflow-x-scroll mt-6">
              {cardItems.map((item, index) => (
                <MiniCard key={index} {...item} />
              ))}
            </section>
            {/* <-- 핫토픽 --> */}
            <section className="flex flex-col gap-4">
              <h3>🔥 핫 토픽</h3>
              <p>
                지금 가장 주목받는 주제들을 살펴보고, 다양한 관점의 인사이트를
                얻어보세요.
              </p>
              {/* <-- 가로 스크롤 박스 --> */}
              <div className="flex overflow-x-scroll gap-4 sm:gap-6">
                {topicItems.map((item, index) => (
                  <TopicCard key={index} {...item} />
                ))}
              </div>
            </section>

            {/* <-- 실시간 인기 클래스 --> */}
            <section className="flex flex-col gap-4">
              {/* <-- 섹션 헤더 --> */}
              <h4 className="font-semibold">실시간 인기 클래스</h4>
              {/* <-- 섹션 부제목 --> */}
              <p>
                현재 학습자들이 가장 많이 참여하고 있는 인기 클래스예요. 함께
                배워볼까요?
              </p>
              {/* <-- 스크롤 박스 --> */}
              <div className="flex gap-4 overflow-x-scroll">
                {classItems.map((item, index) => (
                  <ClassCard key={index} {...item} />
                ))}
              </div>
            </section>
            {/* <-- 신규 클래스 --> */}
            <section className="flex flex-col gap-4">
              {/* <-- 섹션 헤더 --> */}
              <h4 className="font-semibold">신규 클래스</h4>
              {/* <-- 섹션 부제목 --> */}
              <p>
                새롭게 오픈된 따끈따끈한 클래스들을 만나보세요. 지금 바로 시작할
                수 있어요!
              </p>
              {/* <-- 스크롤 박스 --> */}
              <div className="flex gap-4 overflow-x-scroll">
                {classItems.map((item, index) => (
                  <ClassCard key={index} {...item} />
                ))}
              </div>
            </section>
          </section>
        </main>
        {/* <--푸터 영역 --> */}
        <footer className="p-6 bg-[#121212]">
          {/* <-- 컨텐츠 영역-->  */}
          <div className="text-[#fafafa] text-sm">
            {/* <-- 링크 영역 --> */}
            <div className="pb-6 border-b-1 border-[#e5e7eb] flex gap-2">
              <p>이용약관</p>
              <div>|</div>
              <p>개인정보처리방침</p>
              <div>|</div>
              <p>클래스 론칭 문의</p>
            </div>
            {/*<--  로고 --> */}
            <img src="/large.svg" alt="" className="w-20 my-4" />
            {/* <-- 텍스트 영역 --> */}
            <div className="pb-4 flex gap-2 flex justify-between">
              {/* <-- 왼쪽 영역  */}
              <div className="flex flex-wrap w-[666px]">
                <span className="whitespace-nowrap">대표이사 : 박성재</span>
                <span className="whitespace-nowrap">
                  | 사업자 번호 : 696-48-01248
                </span>
                <span className="whitespace-nowrap">
                  | 통신판매신고번호 : 2025-서울서초-1014
                </span>

                <span className="whitespace-nowrap">
                  | 대표번호 : 070-8080-4429
                </span>
                <span className="whitespace-nowrap">
                  | 주소 : 서울특별시 서초구 서초대로 15길 33
                </span>

                <span className="whitespace-nowrap">
                  | © Mingo Team all rights reserved
                </span>
              </div>
              {/* <-- 오른쪽 영역  */}
              <div>
                <div className="whitespace-nowrap">고객센터</div>
                <p className="whitespace-nowrap">평일 오전 10시 ~ 오후 6시</p>
                <p className="whitespace-nowrap">문의 : mingoteam@naver.com</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
