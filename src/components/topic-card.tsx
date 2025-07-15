function TopicCard({
  title,
  profile,
}: {
  title: string;
  profile: { icon: string; name: string; domains: string[] };
}) {
  return (
    // <-- 카드 전체 영역 -->
    <div className="flex flex-col gap-4 sm:gap-6">
      {/* <-- 이미지 박스 -->  */}
      <div className="flex flex-col gap-6 w-[232px] h-[288px] relative">
        {/*  <-- 카드 이미지 영역 -->  */}
        <img
          src="/card_.jpg"
          alt="@"
          className="absolute inset-0 bg-gradient-to-t 
          from-black/100 via-black/50 to-transparent rounded-xl w-full h-full "
        />
        {/* <-- 카드 제목 -->  */}
        <p className="flex items-center text-lg font-semibold absolute bottom-0 left-3 line-clamp-3 w-[156px] h-[96px]">
          {title}
        </p>
      </div>

      {/* <-- 프로필 영역 -->  */}
      <div className="flex gap-4">
        {/* <-- 프로필 아이콘 --> */}
        <img src="/small.svg" alt="@" className="w-9 h-9 rounded-full " />
        <div>
          {/* <-- 희망 직종 -->  */}
          {profile.domains.map((item, index) => (
            <span key={index} className="text-xs text-[#fafafa]">
              {item},
            </span>
          ))}
          {/* <-- 이름 -->  */}
          <div className="text-sm">{profile.name}</div>
        </div>
      </div>
    </div>
  );
}

export default TopicCard;
