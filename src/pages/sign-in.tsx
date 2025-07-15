import Layout from "@/components/layout";
import { supabase } from "@/supabase";
import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 이메일 패스워드로 로그인하자
  const handleLogin = async () => {
    // 이메일과 패스워드로 로그인하는 내장함수는
    // signInWithPassword
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error(error);
      return;
    }
    console.log("로그인성공", data);
    // 홈페이지로 리다이렉트
    return data;
  };
  // 제출 버튼을 누르면 데이터베이스에 계정을 전달하자
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const data = await handleLogin();
    // 데이터베이스에 저장된 이메일과 패스워드를 찍어보자
    console.log(data?.user);
    console.log(data?.session);
    alert("로그인에 성공하셨습니다~🧚");
  };
  //전체 플렉스 박스
  return (
    <>
      <Layout>
        {/* <-- 페이지 내용 --> */}
        <div className="pt-13">
          {/* -- 컨텐츠 영역 -- */}
          <div className="flex flex-col items-center">
            {/* -- 인사말-- */}
            <div className="w-full text-center">
              <div>안녕하세요 👩‍🦰 </div>
              <div>
                제 <span className="!text-[#fc969b]">포트폴리오</span>에 방문해
                주셔서 감사합니다.
              </div>
              <span>서비스를 이용하려면 로그인을 진행해주세요.</span>
            </div>
            {/* -- 박스 -- */}
            <div className="flex flex-col w-[400px]">
              {/* -- 제목 -- */}
              <div>👩‍🦰 로그인</div>
              <span className="text-xs">로그인을 위한 정보를 입력하세요</span>
              {/* #03C75A */}
              {/* #FEE500 */}
              {/* -- 소셜 로그인 -- */}
              <div className="my-2 w-full bg-[#03C75A] !text-[#000] h-9  flex items-center justify-center rounded-md">
                네이버
              </div>

              <div className="my-2 w-full bg-[#FEE500] !text-[#FFF] h-9 flex items-center justify-center rounded-md">
                카카오
              </div>

              {/* -- 그냥 로그인 -- */}
              <form className="form w-full text-sm" onSubmit={handleSubmit}>
                {/* --이메일 -- */}
                <div className="w-full">🔗이메일</div>
                {/* -- 레이블/폼 -- */}
                <input
                  autoComplete="off"
                  className="w-full p-2"
                  name="email"
                  type="email"
                  placeholder="이메일을 입력하세요.."
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
                {/* 비밀번호를 잊으셨나요? --underline */}

                <div className="underline flex justify-end">
                  <Link to={"/reset-password"}> 비밀번호를 잊으셨나요?</Link>
                </div>
                {/* -- 패스워드 --unseen -- */}
                <div className="w-full">비밀번호</div>
                <input
                  autoComplete="off"
                  className="w-full p-2"
                  type="password"
                  name="password"
                  placeholder="비밀번호를 입력하세요.."
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />

                {/* -- 로그인 버튼 -- */}
                <div className="my-2 w-full bg-[#ff5f3f] text-[#fff] h-9 flex items-center justify-center rounded-md">
                  로그인
                </div>
                {/* -- 계정이 없으신가요 ? */}
                <span>계정이 없으신가요?</span>
                {/* 회원가입 --underline 텍스트 링크  */}
                <span className="underline">회원가입</span>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default SignIn;
