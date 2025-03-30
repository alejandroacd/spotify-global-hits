export default async function Loading() {
    return (
      <div className="flex w-full absolute top-1/2 items-center justify-center">
        <div className="flex space-x-2">
          <div className="h-5 w-5 animate-bounce rounded-full bg-gradient-to-r from-green-400 to-emerald-600 [animation-delay:-0.3s]"></div>
          <div className="h-5 w-5 animate-bounce rounded-full bg-gradient-to-r from-green-400 to-emerald-600 [animation-delay:-0.15s]"></div>
          <div className="h-5 w-5 animate-bounce rounded-full bg-gradient-to-r from-green-400 to-emerald-600"></div>
        </div>
      </div>
    );
  }