import './globals.css';

/** 根 layout 只负责全局样式，不包含 html/body 标签 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
