import Button from "@/components/button";
import Layout from "@/components/layout";
import {
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Image,
  Italic,
  Link,
  Quote,
  Underline,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import ReactMarkdown from "react-markdown";

function New() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  const buttons = [
    { icon: <Heading1 /> },
    { icon: <Heading2 /> },
    { icon: <Heading3 /> },
    { icon: <Heading4 /> },
    { icon: <Bold /> },
    { icon: <Italic /> },
    { icon: <Underline /> },
    { icon: <Quote /> },
    { icon: <Link /> },
    { icon: <Image /> },
    { icon: <Code /> },
  ];
  //   #868E96
  // #12B886
  return (
    // 레이아웃
    <Layout>
      {/* <--컨텐트 영역--> */}
      <main className="pt-13">
        {/* <-- 가로 플레스 박스 --> */}
        <div className="flex flex-row w-full">
          {/* -- 왼쪽 박스  --*/}
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col gap-4 w-1/2 p-6 pb-0 overflow-hidden"
          >
            {/* -- 제목 -- */}
            <input
              className="p-4"
              placeholder="제목을 입력하세요.."
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            {/* -- 태그 -- */}
            {/* -- 버튼(태그) 박스 -- */}
            <div className="flex gap-4 px-4 overflow-x-scroll">
              {buttons.map((item, index) => (
                <button key={index}>{item.icon}</button>
              ))}
            </div>

            {/* -- 텍스트입력창 -- */}
            <textarea
              className="min-h-[500px] p-4"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
            {/* <-- 버튼 박스 -- > */}
            <div className="flex justify-between h-16 items-center">
              {/* -- 나가기 -- */}
              <Button bg="#FFFFFF00" color="#000">
                나가기
              </Button>
              <div className="flex gap-2">
                {/* --임시저장 -- */}
                <Button bg="#fff" color="#000">
                  임시저장
                </Button>
                {/* -- 출간하기 -- */}
                <Button bg="#12B886" color="white" type="submit">
                  출간하기
                </Button>
              </div>
            </div>
          </form>
          {/* -- 오른쪽 박스 -- */}
          <div className="w-1/2">
            <div className="pt-25">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default New;
