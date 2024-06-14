function Button({ 
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-[15px] outline-none font-semibold text-white ${bgColor} ${textColor} ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button