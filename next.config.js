/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages 배포를 위한 설정
  output: 'export',  // 정적 HTML 내보내기 활성화
  images: {
    unoptimized: true, // GitHub Pages에서는 이미지 최적화 서버를 실행할 수 없으므로 비활성화
  },
  basePath: process.env.NODE_ENV === 'production' ? '/leehee16.github.io' : '', // GitHub Pages의 베이스 경로 설정
}

module.exports = nextConfig 