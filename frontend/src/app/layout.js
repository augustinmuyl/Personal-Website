import "./globals.css";
import Header from "@/components/header/header";

export default function RootLayout({ children }) {
    return (
        <html>
            <body className="flex-col gap-4">
                <Header></Header>
                <main>{children}</main>
            </body>
        </html>
    );
}
