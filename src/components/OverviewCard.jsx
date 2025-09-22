export default function OverviewCard({title, amount}) {
  return (
    <div className="bg-white rounded-lg p-5 flex flex-col justify-between h-36 border border-gray-200 shadow-sm">
      <h3 className="text-gray-500 text-sm pb-8">{title}</h3>
      <p className='text-2xl font-bold text-gray-800'>{amount}</p>
    </div>
  );
}
