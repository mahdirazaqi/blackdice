"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

interface Props {
  className?: string;
  totalPages: number;
}

interface ItemProps {
  value: string;
  disabled?: boolean;
  onClickFunc?: (e: any) => void;
}

const Item = ({ value, disabled, onClickFunc }: ItemProps) => {
  return (
    <button
      className={`join-item btn btn-sm font-normal ${
        disabled ? "btn-disabled" : ""
      }`}
      onClick={onClickFunc}
    >
      {value}
    </button>
  );
};

const Pagination = ({ className, totalPages }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") || 1);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const navigatePage = (e: any) => {
    router.push(pathname + "?" + createQueryString("page", e.target.innerHTML));
  };

  const items = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i < page - 2) {
      if (i === 1) {
        items.push(<Item key={i} value="..." disabled />);
      }

      continue;
    }

    if (i > page + 2) {
      if (totalPages > page + 2) {
        items.push(<Item key={i} value="..." disabled />);
      }

      break;
    }

    items.push(
      <Item
        key={i}
        value={String(i)}
        disabled={page === i}
        onClickFunc={navigatePage}
      />
    );
  }

  return (
    <div dir="ltr" className="join block text-center mt-4">
      {items}
    </div>
  );
};

export default Pagination;
