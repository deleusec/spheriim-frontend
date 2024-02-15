import { createClient } from '@supabase/supabase-js'

function getSupabase() {
  // Get env variables
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY as string
  const supabase = createClient(supabaseUrl, supabaseKey)
  return supabase
}

export default getSupabase
