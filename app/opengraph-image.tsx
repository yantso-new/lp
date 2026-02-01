
import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Yaniv Tsoref | Fractional Product Designer & Builder";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    background: "#111", // Dark background
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "sans-serif",
                    color: "white",
                    padding: "80px",
                    textAlign: "center",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "40px",
                        // Simulating a logo or icon if needed, or just text
                    }}
                >
                    {/* Visual abstract shape or initials */}
                    <div
                        style={{
                            width: "80px",
                            height: "80px",
                            borderRadius: "50%",
                            border: "4px solid rgba(255,255,255,0.2)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "40px",
                            fontWeight: "bold",
                            background: "linear-gradient(to bottom right, #333, #000)",
                        }}
                    >
                        Y
                    </div>
                </div>

                <h1
                    style={{
                        fontSize: "64px",
                        fontWeight: "bold",
                        margin: "0 0 20px 0",
                        letterSpacing: "-0.02em",
                        backgroundImage: "linear-gradient(90deg, #fff, #aaa)",
                        backgroundClip: "text",
                        color: "transparent",
                        lineHeight: 1.1,
                    }}
                >
                    Yaniv Tsoref
                </h1>

                <p
                    style={{
                        fontSize: "32px",
                        color: "#888",
                        margin: "0",
                        maxWidth: "800px",
                    }}
                >
                    Fractional Product Designer & Builder
                </p>
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    );
}
