import { supabase } from "@/auth/supabase-adapter";
import { NextRequest } from "next/server";
import { NextResponse } from 'next/server';

function getRandomColorCode(): string {
    const colorCodes: string[] = [
        'FF0000', // Red
        '00FF00', // Green
        '0000FF', // Blue
        'FFFF00', // Yellow
        '00FFFF', // Cyan
        'FF00FF', // Magenta
        '800080', // Purple
        '008080', // Teal
        '808080', // Gray
        '008000', // Dark Green
        '800000', // Maroon
        '000080', // Navy
        '808000', // Olive
        '800080', // Indigo
        '008080'  // Turquoise
      ];
    return colorCodes[Math.floor(Math.random() * colorCodes.length)];
  }
  

export async function POST(request: Request )  {

    const { firstName, lastName, email, password } = await request.json();

    console.log(firstName);
    const randomColor = getRandomColorCode();

    const { data, error } = await supabase
    .from('users')
    .insert({ name: firstName, email: email, image: "https://example.com/" + firstName + ".jpg", password: password, picture: "https://singlecolorimage.com/get/" + randomColor + "/100x100", color: "#" + randomColor, document:null })
    .select()

    console.log(data);
    
    if (error) {
      console.error('Username already exists or Wrong password!', error);
      NextResponse.json({ message: 'Signup not successful' });
    }

    return NextResponse.json({ message: 'Signup successful' });
}