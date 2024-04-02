import Image from "next/image";

export const Loader = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image 
        src="/logo.png"
        alt="Logo"
        fill
        />
      </div>
      <p className="texp-sm text-muted-foreground">
        NextAI is Thinking...
      </p>
    </div>
  );
};