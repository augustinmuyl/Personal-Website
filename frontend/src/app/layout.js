import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html>
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </head>
            <body className="bg-slate-950">{children}</body>
        </html>
    );
}
