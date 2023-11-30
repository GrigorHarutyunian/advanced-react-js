import "./Header.css";

export function Header({ menuNames, className }) {
  return (
    <header className={className}>
      <div className="logo-nav">Logo</div>

      <div className="nav-bar">
        {menuNames.map((name) => {
          return (
            <a href="#" className="menu-nav-bar">
              {name}
            </a>
          );
        })}
      </div>
    </header>
  );
}
