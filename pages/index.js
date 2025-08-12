import Image from "next/image";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import axios from '../lib/axios';

export default function IndexPage() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        console.log('useEffect is running');
        // 백엔드 API를 호출하여 세션 유효성을 확인
        await axios.get('http://localhost:8080/api/auth');
        setIsLoggedIn(true);
      } catch (err) {
        setIsLoggedIn(false);
        alert('세션만료~');
        router.push('/login');
      } 
    };
    checkLoginStatus();
  }, [router]);

  // 로그인 상태가 아닐 때 로딩 화면을 보여줍니다.
  if (!isLoggedIn) {
    return <div>로그인 중...</div>;
  }


  return (
    <>
      <Head>
        <title>메인 페이지</title>
      </Head>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">환영합니다!</h1>
        <p>이곳은 로그인한 사용자만 접근할 수 있는 페이지입니다.</p>
        <button
          onClick={() => {
            localStorage.removeItem('token'); // 토큰 삭제
            router.push('/login'); // 로그아웃 후 로그인 페이지로 이동
          }}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          로그아웃
        </button>
      </div>
    </>
  );
}
