import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PanelLayout({ children }: Props) {
  return (
    <div className="container mx-auto flex px-2">
      <div className="grow-0">
        <ul className="menu bg-base-200 w-56 rounded-box">
          <li>
            <Link href={"/account"}>اکانت شخصی</Link>
          </li>

          <li>
            <Link href={"/account/products"}>محصولات</Link>
          </li>

          <li>
            <Link href={"/account/orders"}>سفارشات</Link>
          </li>

          <li>
            <Link href={"/account/users"}>کاربران</Link>
          </li>
        </ul>
      </div>

      <div className="grow ml-3">{children}</div>
    </div>
  );
}
