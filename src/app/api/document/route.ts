import { supabase } from '@/auth/supabase-adapter';
import { NextResponse } from 'next/server';

export async function POST(request: Request )  {

    
    const { name, document } = await request.json();
    console.log(document);

    const { data, error } = await supabase
    .from('users')
    .update({ document: document })
    .eq('name', name)

    
    if (error) {
      console.error('Document wasnt updated!', error);
      NextResponse.json({ message: 'Document wasnt uploaded' });
    }

    return NextResponse.json({ message: 'Document upload successful' });
}

export async function GET(request: Request )  {

    
    const name = request.headers.get('name');

    const { data, error } = await supabase
    .from('users')
    .select()
    .eq('name', name)
    

    
    if (error) {
      console.error('Document wasnt fetched!', error);
      NextResponse.json({ message: 'Document wasnt fetched' });
    }

    return NextResponse.json({ message: 'Document fetch successful', data: data });
}