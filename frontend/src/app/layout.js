import "./globals.css";
import Navbar from "@/components/navbar/navbar";

export default function RootLayout({ children }) {
    return (
        <html>
            <body className="flex flex-col gap-8">
                <Navbar></Navbar>
                <main>{children}</main>
            </body>
        </html>
    );
}
