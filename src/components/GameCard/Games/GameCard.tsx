import React, { memo, useState } from "react";
import { Game } from "../../../types";
// import { Game } from "../../types/index";

interface ProductProps {
  product: Game;
  onNavigate: (id: number) => void;
}

export const Product = memo(({ product, onNavigate }: ProductProps) => {
  const [details, setDetails] = useState(false);

  const btnBgClassName = details ? "bg-yellow-400" : "bg-blue-400";

  const btnClasses = [`py px-4 border ${btnBgClassName}`];
  ///
  console.log("Render");
  return (
    <div className="border py-2 px-4 reounded flex flex-col items-center mb-2">
      <div
        onClick={() => onNavigate(product.id)}
        className="flex flex-col items-center mb-2"
      >
        {product.name}
        <img
          src={
            product.background_image ?product.background_image:
            "https://img.freepik.com/fotos-premium/ein-weisser-hintergrund-mit-einem-weissen-hintergrund-auf-dem-das-wort-quote-steht_1034303-472199.jpg?semt=ais_hybrid&w=740"
          }
          className="w-1/6"
          alt=""
        />
        <span className="font-bold">{product.released}</span>
      </div>
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
});
