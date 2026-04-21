import Skeleton from "../ui/Skeleton";

function LoadingMenuCard() {
  return (
    <div className="rounded-3xl bg-white p-4 ring-1 ring-black/5 shadow-[0_18px_45px_-22px_rgba(19,41,26,0.15)]">
      <Skeleton rounded="2xl" className="h-40 w-full" />
      <div className="space-y-2 mt-4">
        <Skeleton rounded="md" className="h-4 w-3/4" />
        <Skeleton rounded="md" className="h-3 w-1/2" />
      </div>
      <div className="flex items-center justify-between mt-4">
        <Skeleton rounded="full" className="h-5 w-16" />
        <Skeleton rounded="full" className="h-8 w-8" />
      </div>
    </div>
  );
}

export default LoadingMenuCard;
