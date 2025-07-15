import { ChartColumn, Heart } from "lucide-react";

interface GridCardProps {
  icon: string;
  title: string;
  content: string;
  user: {
    icon: string;
    domains: string[];
    name: string;
  };
  views: string;
  likes: string;
}
function GridCard(props: GridCardProps) {
  return (
    // <-- 전체영역 -->
    <div className="flex flex-col p-4 border-1 rounded-md text-sm gap-2">
      {/* <-- 컨텐츠영역 --> */}
      <section className="flex gap-2">
        {/* <-- 이미지 --> */}

        <img
          src={props.icon}
          alt="@thumbnail"
          className="w-[60px] md:w-[120px] rounded-md object-cover"
        />

        <div className="flex flex-col justify-between">
          {/* <-- h3 영역--> */}
          <h3 className="line-clamp-2 text-[#fafafa] text-base font-bold">
            {props.title}
          </h3>
          {/* <-- p 영역 --> */}
          <p className="line-clamp-3 text-[#a1a1a1]">{props.content}</p>
        </div>
      </section>
      {/* <-- 밑에 영역 --> */}
      <section className="flex w-full items-center justify-between">
        {/* <-- 유저 영역 --> */}
        <div className="flex flex-1 gap-2">
          {/* <--유저 아이콘 --> */}

          <img
            src={props.user.icon}
            alt="@profileIcon"
            className="w-[36px] h-[36px] rounded-full"
          />

          {/* <-- 유저 텍스트 박스 --> */}
          <div className="flex flex-col">
            {/* <--유저 도메인 --> */}
            {props.user.domains.map((item) => (
              <span className="line-clamp-1 text-[#a1a1a1">{item}</span>
            ))}
            {/* <-- 유저 이름 --> */}
            <span>{props.user.name}</span>
          </div>
        </div>
        {/* <-- 통계 박스 --> */}
        <div className="hidden md:flex gap-2 items-center">
          {/* <--조회수--> */}
          <div className="flex gap-1 items-center">
            <ChartColumn size={12} />
            {props.views}
          </div>
          <div className="flex gap-1 items-center">
            {/* <-좋아요 --> */}
            <Heart size={12} />
            {props.likes}
          </div>
        </div>
      </section>
    </div>
  );
}

export default GridCard;
