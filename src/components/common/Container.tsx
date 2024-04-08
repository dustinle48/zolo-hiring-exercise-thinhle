import { ReactNode } from "react";

export const PageContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};
