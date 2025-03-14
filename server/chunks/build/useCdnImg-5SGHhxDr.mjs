import { inject } from 'vue';
import { generateUrl } from '@imgproxy/imgproxy-js-core';
import { n as PROVIDE_KEY, D as DEFAULT_BASE_URL, o as DEFAULT_OPTIONS, q as PROXY_PREFIX } from './server.mjs';

function isAbsoluteUrl(url) {
  return url.startsWith("http");
}
function isCMSImage(src) {
  return src.startsWith("/cms");
}
function getPath(src) {
  if (isAbsoluteUrl(src))
    return src;
  return `s3:/${src}`;
}
function isRelativeNonCdnImage(src) {
  return !isCMSImage(src) && !isAbsoluteUrl(src);
}
function isNonProxySrc(src) {
  return /(.)+\.(mp4|svg|gif)$/.test(`${src}`);
}
function validateSize(size) {
  if (size === void 0)
    return void 0;
  const parsedSize = typeof size === "string" ? Number.parseInt(size, 10) : size;
  return Number.isNaN(parsedSize) ? void 0 : parsedSize;
}
function useCdnImg() {
  const options = inject(PROVIDE_KEY);
  const baseUrl = (options == null ? void 0 : options.baseURL) || DEFAULT_BASE_URL;
  function generateNonProxyUrl(src) {
    return isAbsoluteUrl(src) ? src : `${baseUrl}${src}`;
  }
  function generateProxyUrl(src, options2) {
    const imgproxyURL = generateUrl(
      { value: getPath(src), type: "plain" },
      { ...DEFAULT_OPTIONS, ...options2 }
    );
    return `${baseUrl}${PROXY_PREFIX}${imgproxyURL}`;
  }
  const generateUrl$1 = (src, options2) => {
    if (isRelativeNonCdnImage(src))
      return src;
    if (isNonProxySrc(src))
      return generateNonProxyUrl(src);
    return generateProxyUrl(src, options2);
  };
  return {
    generateUrl: generateUrl$1
  };
}

export { useCdnImg as u, validateSize as v };
//# sourceMappingURL=useCdnImg-5SGHhxDr.mjs.map
