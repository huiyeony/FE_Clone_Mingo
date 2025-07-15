import Button from "@/components/button";
import Layout from "@/components/layout";
import { supabase } from "@/supabase";
import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  //--회원가입 폼--
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signUpWithEmailPassword = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      console.log(error);
      return;
    }
    //데이터 출력
    console.log(data);
    return data;
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("handlesubmit 호출");
    const data = await signUpWithEmailPassword();

    console.log(data);
    // 🔥 향후 이 데이터는 zustand 에 저장 하자
  };
  return (
    <>
      <Layout>
        <div className="pt-13">
          <div className="w-auto m-auto max-w-[400px]">
            {/* -- 인사말-- */}
            <div className="text-center">
              <div>안녕하세요 👩‍🦰 </div>
              <div>
                제 <span className="!text-[#fc969b]">포트폴리오</span>에 방문해
                주셔서 감사합니다.
              </div>
              <span>서비스를 이용하려면 로그인을 진행해주세요.</span>
            </div>
            {/* --회원가입 폼 -- */}
            <form
              className="flex flex-col gap-6 justify-center m-auto"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col">
                {/* <-- 제목 --> */}
                <span>회원가입</span>
                {/* <-- 부제목 --> */}
                <span className="text-xs">
                  회원가입을 위한 정보를 입력해주세요
                </span>
              </div>
              <div className="flex flex-col gap-4">
                {/* <-- 이메일 --> */}
                <div>이메일 </div>
                <div className="flex flex-row gap-2 justify-around">
                  <input
                    className="flex-1"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    placeholder="이메일을 입력하세요.."
                    value={email}
                    autoComplete="off"
                  />
                </div>

                {/* <-- 비밀번호 --> */}
                <div>비밀번호 </div>
                <div className="flex flex-row gap-2">
                  <input
                    className="flex-1"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                    type="password"
                    placeholder="비밀번호를 입력하세요.."
                    autoComplete="off"
                  />
                </div>
                {/* <-- 비밀번호 확인 --> */}
                <div>비밀번호 확인 </div>
                <div className="flex flex-row gap-2">
                  <input
                    className="flex-1"
                    type="password"
                    placeholder="비밀번호 확인을 입력하세요.."
                    autoComplete="off"
                  />
                </div>
                {/* <-- 버튼 박스 --> */}
                <div className="flex justify-around">
                  {/* <-- 취소 버튼 --> */}
                  {/* <-- 회원가입 버튼 --> */}
                  <Button bg="#FFFFFF00" color="#000">
                    취소
                  </Button>
                  <Button bg="#03C75A" color="white" type="submit">
                    회원가입
                  </Button>
                </div>
                {/* 이미 계정이 있으신가요? 로그인 */}
                <div className="text-xs">
                  이미 계정이 있으신가요? <Link to={"/sign-in"}>로그인</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default SignUp;
