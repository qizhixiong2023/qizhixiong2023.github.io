export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <div className="mb-4 inline-block size-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent" />
        <p className="text-sm text-muted-foreground">加载中...</p>
      </div>
    </div>
  );
}
