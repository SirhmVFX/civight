import Navbar from "@/components/Navbar";

function RootLayout({ children }) {
  return (
    <>
      <div>{children}</div>
      <Navbar />
    </>
  );
}

export default RootLayout;
