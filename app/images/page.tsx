import { supabase } from '@/utils/supabase/supabase-storage';

async function Images() {
    const { data } = supabase.storage.from('w2trusttrade-furniture').getPublicUrl('Firefox_wallpaper.png')
    return data;
}

export default async function view() {
    const imageUrl = await Images();
    return (
     <>
      <h1>hello World</h1>
      <img src={imageUrl.publicUrl} alt="An image" />
     </>
    );
  }
  