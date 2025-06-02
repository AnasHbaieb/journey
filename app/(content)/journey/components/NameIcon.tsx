interface NameIconProps {
    name: string
    size?: "sm" | "md" | "lg"
  }
  
  export default function NameIcon({ name, size = "md" }: NameIconProps) {
    const initials = name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2)
  
    const sizeClasses = {
      sm: "w-8 h-8 text-xs",
      md: "w-12 h-12 text-sm",
      lg: "w-16 h-16 text-lg",
    }
  
    return (
      <div
        className={`${sizeClasses[size]} bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg`}
      >
        {initials}
      </div>
    )
  }
  