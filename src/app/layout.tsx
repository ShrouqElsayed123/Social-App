import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto flex justify-between ">
          <div className="px-2 xsm:px-4 xxl:px-8 ">< LeftBar /></div>
          <div className="bg-green-200 lg:min-w-[600px] border-x-[1px] border-yellow-500 h-screen flex-1">{children}</div>
          <div className="hidden lg:flex bg-blue-200 h-screen "><RightBar /></div>

        </div>
      </body>
    </html>
  );
}
