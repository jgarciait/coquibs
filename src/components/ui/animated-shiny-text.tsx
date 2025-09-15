import { ComponentPropsWithoutRef, CSSProperties, FC } from "react";
 
import { cn } from "@/lib/utils";
 
export interface AnimatedShinyTextProps
  extends ComponentPropsWithoutRef<"span"> {
  shimmerWidth?: number;
}
 
export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
  ...props
}) => {
  return (
    <span
      style={
        {
          "--shiny-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        "inline-block text-black dark:text-white relative",
 
        // Shine effect
        "animate-shiny-text bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%]",
 
        // Shine gradient - mantiene el texto visible con brillo blanco encima
        "bg-gradient-to-r from-current via-white via-50% to-current",
 
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};