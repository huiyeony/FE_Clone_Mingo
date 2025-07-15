import { ArrowDown, Heart } from "lucide-react";
import Badge from "./badge";

function ClassCard({
  title,
  badges,
  discountBadge,
  price,
  like,
}: {
  title: string;
  badges: string[];
  discountBadge: string;
  price: string;
  like: number;
}) {
  return (
    // <-- 전체 영역 -->
    <div className="min-w-[236px] flex flex-col gap-4 ">
      {/* <-- 이미지 영역 --> */}
      <img src="/class.jpg" alt="" className="w-full h-[133px] rounded-lg" />
      {/* <-- 태그박스--> */}
      <div className="flex gap-2">
        {badges.map((item, index) => (
          // 태그
          <Badge key={index} item={item} />
        ))}
      </div>

      {/* <-- 제목--> */}
      <h4>{title}</h4>
      <div className="flex justify-between">
        {/* <-- 돈 텍스트 --> */}
        <div className="flex gap-4">
          {/* <-- 할인 텍스트 --> */}
          <span className="flex gap-1 items-center text-sm">
            <ArrowDown size={16} />
            {discountBadge}
          </span>
          {/* <-- 가격 텍스트--> */}
          <span>{price}</span>
        </div>
        {/* <-- 좋아요 --> */}
        <div className="flex gap-1 items-center">
          <Heart size={16} color="red" /> {like}
        </div>
      </div>
    </div>
  );
}

export default ClassCard;
