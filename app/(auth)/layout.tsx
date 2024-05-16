export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen w-full bg-violet-500 flex items-center justify-center">
        {children}
    </div>
  );
}
