import Link from "next/link";
export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-600 text-white">
        <div className="text-lg font-bold">Examen Final David Henrique</div>
        <nav className="space-x-10 p-4">
            <Link href="/movieExplorer">Movie Explorer</Link>
            <Link href="/about">About</Link>
        </nav>


    </header>
  );
}