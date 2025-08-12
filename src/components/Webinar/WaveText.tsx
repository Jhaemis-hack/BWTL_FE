import React, { isValidElement, type ReactNode } from "react";
import "../index.css";

function wrapTextWithWave(text: string) {
  return text.split("").map((char, i) => (
    <span
      key={i}
      style={{
        animation: `wave 0.6s ease-in-out ${i * 0.05}s infinite`,
        display: "inline-block",
      }}
    >
      {char}
    </span>
  ));
}

interface WaveTextProps {
  children: ReactNode;
}

export default function WaveText({ children }: WaveTextProps) {
  return (
    <h1 className="flex gap-1 font-bold text-white">
      {React.Children.map(children, (child: any) => {
        if (typeof child === "string") {
          return wrapTextWithWave(child);
        }

        if (isValidElement(child)) {
          const element = child as React.ReactElement<{ children?: ReactNode }>;
          return React.cloneElement(element, {
            children: <WaveText>{element.props.children}</WaveText>,
          });
        }

        return child;
      })}
    </h1>
  );
}
