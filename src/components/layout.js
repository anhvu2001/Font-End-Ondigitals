import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}