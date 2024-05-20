export default function triangle({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent">
            {children}
        </div>
    );
}