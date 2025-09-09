import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!);
}

//
// import { createClient } from '@supabase/supabase-js'
//
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
//
// if (!supabaseUrl || !supabaseKey) {
//   throw new Error('Отсутствуют переменные Supabase env!')
// }
//
// export const supabase = createClient(supabaseUrl, supabaseKey)
