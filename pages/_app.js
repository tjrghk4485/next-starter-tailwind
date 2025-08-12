import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import "../css/index.css";
import Layout from "@components/layout";

// 로그인 없이 접근 가능한 페이지 경로를 배열로 정의
const publicPaths = ['/login']; 

function MyApp({ Component, pageProps }) {
  const router = useRouter();
 

  // 레이아웃 조건부 렌더링 로직 (이전 답변 참고)
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;