const Card = ({ title, mainContent, additionalInfo, children }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-3xl font-bold text-gray-800">{mainContent}</p>
      {additionalInfo && (
        <p className="text-gray-400 mt-2 text-sm">{additionalInfo}</p>
      )}
      {children}
    </div>
  );
};
