interface ButtonProps {
  text: string;
  className?: string;
  onClick: () => void;
  isActive?: boolean; // Add this prop
}

const Button = ({ text, onClick, className, isActive }: ButtonProps) => {
  return (
    <button
      onClick={() => onClick()}
      className={`flex items-center ${className} p-2 bg-transparent ${isActive ? 'text-yellow-300' : 'hover:text-white'} group`}
    >
      <span className={`w-10 h-0.5 ${isActive ? 'bg-yellow-300 w-20' : 'bg-zinc-500'} mr-2 transition-all duration-300 group-hover:bg-white group-hover:w-20`}></span>
      <span className={`text-lg font-medium ${isActive ? 'text-yellow-300' : 'text-zinc-500'} transition-all duration-300 group-hover:text-white`}>
        {text}
      </span>
    </button>
  );
};

export default Button;
