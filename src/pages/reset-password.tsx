import Button from "@/components/button";
import Layout from "@/components/layout";
import { supabase } from "@/supabase";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function ResetPassword() {
  //🔥 페이지 공유?
  const [params] = useSearchParams();
  useEffect(() => {
    if (params.get("type") == "recovery") {
      //이메일 인증은 거쳤고 이제 비밀번호 재설정 해야 한다
    }
  }, []);
  // 수파베이스에 접속 하는 코드
  const handleResetPassword = async () => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) {
      console.error(error);
    }
    console.log(data);
    return data;
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // -- 새로고침 방지 --
    e.preventDefault();
    await handleResetPassword();
  };
  const [email, setEmail] = useState("");
  return (
    //
    <>
      <Layout>
        {/* 플렉스 박스 */}
        <div className="pt-13">
          <form onSubmit={handleSubmit}>
            <input
              value={email}
              placeholder="계정 이메일을 입력하세요 .."
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Button type="submit" bg="#000" color="#fff">
              제출
            </Button>
          </form>
        </div>
      </Layout>
    </>
  );
}

export default ResetPassword;
