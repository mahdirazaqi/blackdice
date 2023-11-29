import Link from "next/link";
import CartIcon from "./icons/CartIcon";
import Image from "next/image";
import MenuIcon from "./icons/MenuIcon";

interface Props {
  className?: string;
}

const Header = ({ className }: Props) => {
  const menuItems = [
    {
      title: "خانوادگی",
      url: "/products?tag=خانوادگی",
    },
    {
      title: "استراتژی",
      url: "/products?tag=استراتژی",
    },
    {
      title: "مهمانی",
      url: "/products?tag=مهمانی",
    },
    {
      title: "همکاری",
      url: "/products?tag=همکاری",
    },
    {
      title: "انتزاعی",
      url: "/products?tag=انتزاعی",
    },
  ];

  return (
    <header
      className={`navbar sticky top-0 z-50 bg-base-300 bg-opacity-90 ${className}`}
    >
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />

      <div className="modal" role="dialog">
        <div className="modal-box p-20">
          <h3 className="text-lg font-bold text-center mb-8">
            ورود به بلک دایس
          </h3>

          <div className="join w-full my-3" dir="ltr">
            <div className="flex join-item border items-center px-5 bg-base-200">
              +98
            </div>

            <input
              className="input input-bordered join-item w-full focus:outline-none"
              placeholder="9123456789"
            />
          </div>

          <button className="btn w-full btn-primary">ورود با تلفن همراه</button>
        </div>

        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>

      <div className="w-full md:container m-auto">
        <div className="flex flex-1 items-center">
          <div className="dropdown md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <MenuIcon />
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems.map((item, i) => (
                <li key={i}>
                  <Link href={item.url}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <Link className="btn btn-ghost text-xl" href={"/"}>
            بلک دایس
          </Link>

          <ul className="menu menu-horizontal px-1 hidden md:flex">
            {menuItems.map((item, i) => (
              <li key={i}>
                <Link href={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center">
          <Link className="btn btn-ghost btn-circle" href={"/account/cart"}>
            <div className="indicator">
              <CartIcon />

              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </Link>

          <label htmlFor="my_modal_7" className="btn btn-primary btn-sm">
            ورود / ثبت نام
          </label>

          <Link className="btn btn-ghost btn-circle avatar" href={"/account"}>
            <div className="w-10 rounded-full">
              <Image
                src="/default-user-placeholder.png"
                alt=""
                width={40}
                height={40}
              />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
