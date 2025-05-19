
import {getRequestConfig} from 'next-intl/server';
import { cookies } from 'next/headers';
 
export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const cookieStorage = await cookies();
  const locale = cookieStorage.get("NEXT_LOCALE")?.value || "pt"
  

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});