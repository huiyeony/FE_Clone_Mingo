import { School } from "lucide-react";

function MiniCard({ title, content }: { title: string; content: string }) {
  return (
    // <-- 전체 영역 -->
    <div className="p-6 border-1 border-[#fafafa] rounded-md min-w-[236px] flex flex-col gap-2">
      {/* <-- 제목 영역 --> */}
      <span className="flex gap-1">
        <School size={24} />
        <h2>{title}</h2>
      </span>
      {/* <-- 컨텐츠 영역 --> */}
      <p className="text-sm">{content}</p>
      {/* --줄바꿈 -- */}
    </div>
  );
}

export default MiniCard;
