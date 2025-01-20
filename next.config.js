/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages 배포를 위한 설정
  output: 'export',  // 정적 HTML 내보내기 활성화
  images: {
    unoptimized: true, // GitHub Pages에서는 이미지 최적화 서버를 실행할 수 없으므로 비활성화
  },
  basePath: '/leehee16.github.io',  // GitHub Pages의 레포지토리 이름을 basePath로 설정
  assetPrefix: '/leehee16.github.io/',  // 에셋 프리픽스를 레포지토리 이름으로 설정
}

module.exports = nextConfig 