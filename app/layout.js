import Layout from "./components/Layout";
import ToasterContext from "./context/ToasterContext";
import "./globals.css";

export const metadata = {
  title: "Box Scheduler",
  description: "Kasinoki Box Scheduler",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToasterContext />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
