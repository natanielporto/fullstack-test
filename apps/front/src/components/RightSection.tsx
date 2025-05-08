export const RightSection = () => {
  const commonTdStyle = "pl-1 w-1/3";

  return (
    <section className="w-[50%] overflow-auto">
      <div className="border-2 border-blue-500 flex flex-col h-full overflow-auto">
        <div className="flex-none">
          <table className="w-full text-left text-gray-500">
            <thead>
              <tr className="border-b-2 border-gray-400 h-10">
                <th className={commonTdStyle}>Name</th>
                <th className={commonTdStyle}>Country</th>
                <th className={commonTdStyle}>Birthday</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(20)].map((_, i) => (
                <tr
                  key={i}
                  className={`h-10 ${
                    i !== Array.length - 1 ? "border-b border-gray-300" : ""
                  }`}
                >
                  <td className={commonTdStyle}>Pessoa {i + 1}</td>
                  <td className={commonTdStyle}>País</td>
                  <td className={commonTdStyle}>01/01/1990</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
