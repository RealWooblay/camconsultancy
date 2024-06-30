import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        "text-white flex min-h-[80px] w-full rounded-md border border-gray-200 bg-customGray px-3 py-2 text-sm ring-offset-white placeholder:text-customWhite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-customGray focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
