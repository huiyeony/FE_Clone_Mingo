import { useState } from "react";
import ReactMarkDown from "react-markdown";
function Editor() {
  const [content, setContent] = useState<string>();
  return (
    // 컨텐츠 전체 영역
    <div>
      <input placeholder="토픽 제목을 입력하세요." className="p-2" />
      {/* ----------- */}
      <div className="flex w-full gap-4">
        {/* <--실제로 마크다운 문법 적는 부분 --> */}
        <textarea
          className="w-1/2 min-h-[500px] rounded-md p-4"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          placeholder="여기에 마크다운을 입력하세요"
        ></textarea>
        {/* <--마크다운 미리보기 --> */}
        <div className="w-1/2 prose prose-invert">
          <ReactMarkDown>{content}</ReactMarkDown>
        </div>
      </div>
    </div>
  );
}

export default Editor;
