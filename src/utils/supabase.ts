import { supabase } from '../config/db/supabase'

export const signInSupabase = async ({email, password}: {email: string, password: string}) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    return {data, error}
  } catch (error) {
    return {data: '', error}
  }
}
