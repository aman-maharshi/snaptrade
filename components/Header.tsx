import Link from "next/link"
import Image from "next/image"
import NavItems from "@/components/NavItems"
import UserDropdown from "@/components/UserDropdown"

const Header = async () => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/images/logo.png"
            alt="SnapTrade logo"
            width={45}
            height={45}
            className="h-8 w-auto cursor-pointer"
          />
          <span className="text-2xl text-white font-medium">SnapTrade</span>
        </Link>
        <nav className="hidden sm:block">
          <NavItems />
        </nav>

        <UserDropdown />
      </div>
    </header>
  )
}
export default Header
