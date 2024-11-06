import { NextResponse } from "next/server";
// import { jwtVerify } from "jose";

export const config = {
  matcher: [
    // "/",
    "/Dashboard",
    "/Testimonials/:path*",
    "/GalleryAdmin/:path*",
    "/Menus/:path*",
    "/Contact/:path*",
    "/Query/:path*",
    "/Banner/:path*",
  ],
};

export default async function middleware(req) {
  
  try {
    const token = req.cookies.get("token");

    if (!token) {
      return NextResponse.redirect(`http://localhost:3000/login`);
    }
    const cleanedToken = token.value.replace(/"/g, "");
    // const jwtRes = await jwtVerify(
    //     cleanedToken,
    //     new TextEncoder().encode("igcl123")
    // );
    
    // if (!jwtRes ) {
    //   console.log('Invalid token, redirecting to login page');
    //   return NextResponse.redirect(`http://localhost:3000/login`);
    // }
    return NextResponse.next();
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.redirect(`http://localhost:3000/login`);
  }
}