const Hamburger = () => {
  const blockClass = `flex items-center px-2 py-2 `;
  const iconClass = `w-8 h-0.5 bg-gray-400 group-hover:bg-gray-200 `;

  return (
    <div className={blockClass}>
      <div className="space-y-2">
        <div className={iconClass}></div>
        <div className={iconClass}></div>
        <div className={iconClass}></div>
      </div>
    </div>
  );
};

export default Hamburger;
