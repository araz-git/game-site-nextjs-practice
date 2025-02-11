import React from "react";

type Props = {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
};

const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      Page{slug} {sortOrder}
    </div>
  );
};

export default ProductPage;
