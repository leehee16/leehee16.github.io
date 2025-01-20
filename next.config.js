/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages 배포를 위한 설정
  output: 'export',  // 정적 HTML 내보내기 활성화
  distDir: 'out',    // 출력 디렉토리 지정
  images: {
    unoptimized: true, // GitHub Pages에서는 이미지 최적화 서버를 실행할 수 없으므로 비활성화
  },
  basePath: '',      // 베이스 경로를 빈 문자열로 설정
  assetPrefix: './', // 에셋 프리픽스 설정
  trailingSlash: true, // URL 끝에 슬래시 추가
}

module.exports = nextConfig 