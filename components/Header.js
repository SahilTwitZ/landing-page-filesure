import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-purple-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Landing Page</h1>
        <nav>
          <Link href="#hero" className="mx-2">Home</Link>
          <Link href="#features" className="mx-2">Features</Link>
          <Link href="#contact" className="mx-2">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
