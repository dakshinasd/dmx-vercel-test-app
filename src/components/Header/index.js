const { default: Link } = require('next/dist/client/link');

const Header = () => {
  if (process.browser) {
    const root = document.documentElement;
    root.style.setProperty('--color-fill', '#cccccc');
  }
  return (
    <div className="bg-skin-nav">
      <Link href="/">
        <a className="p-3 text-white inline-block">Home</a>
      </Link>
      <Link href="/products">
        <a className="p-3 text-white inline-block">Products</a>
      </Link>
    </div>
  );
};

export default Header;
