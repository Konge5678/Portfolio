import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  return (
    <header className="w-full h-16 flex items-center px-4 fixed top-0 left-0 z-50 mb-6">
      <HamburgerMenu />
    </header>
  );
}