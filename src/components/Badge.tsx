function Badge({ item }: { item: string }) {
  return (
    <div className="flex py-1 px-2 h-6 text-[#a1a1a1] border-1 text-xs rounded-md">
      {item}
    </div>
  );
}

export default Badge;
