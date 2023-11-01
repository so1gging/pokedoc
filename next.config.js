/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'raw.githubusercontent.com',
        pathname: '/PokeAPI/**/**',
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      oneOf: [
        {
          loader: '@svgr/webpack',
          resourceQuery: { not: [/url/] },
          options: {
            // SVG 파일 컴파일 시 viewBox를 포함하도록 설정
            dimensions: false,
          },
        },
        {
          type: 'asset',
          resourceQuery: /url/, // svg 끝에 ?url 을 붙으면 asset 으로 모듈로 번들링합니다.
        },
      ],
    })

    return config
  },
}

module.exports = nextConfig
