const Footer = () => {
  return (
    <>
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
    </>
  );
};
export default Footer;
