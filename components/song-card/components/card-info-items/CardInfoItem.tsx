export default  function CardInfoItem ({icon, value}: {icon: React.ReactNode, value: string}) {
    return  <div className="flex flex-row gap-2 items-center">
        {icon}
    <p className="text-zinc-400 text-sm p-0 m-0">{value}</p>
  </div>
}