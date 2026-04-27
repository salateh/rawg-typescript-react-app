import React, { useState } from "react";
import { Game } from "../../types/index";

interface ProductProps {
  product: Game;
  nav: () => void;
}

export function Product({ product, nav }: ProductProps) {
  const [details, setDetails] = useState(false);

  const btnBgClassName = details ? "bg-yellow-400" : "bg-blue-400";

  const btnClasses = [`py px-4 border ${btnBgClassName}`];
  ///

  return (
    <div
      className="border py-2 px-4 reounded flex flex-col items-center mb-2"
      onClick={nav}
    >
      {product.name}
      <img src={product.background_image} className="w-1/6" alt="" />
      <span className="font-bold">{product.released}</span>
      <button
        onClick={() => setDetails((prev) => !prev)}
        className={btnClasses.join("")}
      >
        {details ? "Hide details" : "Show details"}
      </button>

      {details && (
        <div>
          <p>{product?.description}</p>
          <p>
            Rate <span style={{ fontWeight: "bold" }}>{product?.rating}</span>
          </p>
        </div>
      )}
    </div>
  );
}
