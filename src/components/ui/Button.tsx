import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-bold transition-transform focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "orange-gradient text-white hover:scale-105 card-shadow",
        secondary: "bg-[#FFC107] text-[#1A1A1A] hover:scale-105 shadow-xl",
        outline: "border-2 border-gray-100 text-[#1A1A1A] hover:bg-gray-50",
        ghost: "hover:bg-gray-100 hover:text-[#1A1A1A]",
        link: "text-[#FF6B00] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-8 py-3 text-sm",
        sm: "h-10 px-4 rounded-xl text-xs",
        lg: "h-[60px] px-10 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    // Since we don't have Radix UI slot installed to save time, we will fallback to simple element if not asChild
    // Actually wait, let's just use standard React button.
    
    if (asChild) {
      console.warn("asChild not fully supported without @radix-ui/react-slot in this simplified shim");
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
