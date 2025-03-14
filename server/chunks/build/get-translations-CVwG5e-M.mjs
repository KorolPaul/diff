import { z as useRuntimeConfig } from './server.mjs';
import 'vue';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'pinia';
import 'vue-router';
import 'dayjs';
import 'dayjs/plugin/updateLocale.js';
import 'dayjs/plugin/relativeTime.js';
import 'dayjs/plugin/utc.js';
import '@vueuse/core';
import 'zod';
import 'humps';

const getTranslations = async (locale) => {
  const config = useRuntimeConfig();
  const responce = await fetch(`${config.public.baseURL}/api/translations?lang=${locale}`);
  const data = await responce.json();
  for (const [key, value] of Object.entries(data.data)) {
    data.data[key] = value == null ? void 0 : value.replace("@", "{'@'}");
  }
  return data.data;
};

export { getTranslations as default };
//# sourceMappingURL=get-translations-CVwG5e-M.mjs.map
