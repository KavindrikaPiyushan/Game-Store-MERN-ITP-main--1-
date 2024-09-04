import React, { useEffect, useState } from "react";
import { CardBody, Chip } from "@nextui-org/react";

export default function CardBodyHome() {
//   const [discountedPrice, setDiscountedPrice] = useState(stock.UnitPrice);

//   useEffect(() => {
//     const originalPrice = stock.UnitPrice;
//     const discount = stock.discount;
//     const newDiscountedPrice =
//       discount > 0
//         ? originalPrice - (originalPrice * discount) / 100
//         : originalPrice;
//     setDiscountedPrice(newDiscountedPrice);
//   }, [stock]);

//   const originalPrice = stock.UnitPrice;
//   const discount = stock.discount;

  return (
    // <div>
    //   <CardBody className="p-2 text-white">
    //     {/* Reduced padding */}
    //     <h2 className="text-lg font-primaryRegular text-white mb-1">
    //       {stock.AssignedGame.title}
    //     </h2>
    //     <p className="font-primaryRegular text-white mb-1">
    //       {discount > 0 && (
    //         <>
    //           <Chip
    //             color="danger"
    //             radius="none"
    //             className="font-primaryRegular mr-1"
    //             size="sm"
    //           >
    //             -{stock.discount}% off
    //           </Chip>
    //           <span className="line-through mr-1 text-editionColor">
    //             LKR.{originalPrice}
    //           </span>
    //         </>
    //       )}
    //       <span>LKR.{discountedPrice}</span>
    //     </p>
    //     <div className="flex flex-wrap mb-1 text-white">
    //       {stock.AssignedGame.Genre.flatMap((genre) =>
    //         genre.includes(",") ? genre.split(",") : genre
    //       ).map((genre, index) => (
    //         <Chip
    //           variant="dot"
    //           size="sm"
    //           radius="none"
    //           className="font-primaryRegular"
    //           color="danger"
    //           key={index}
    //         >
    //           {(() => {
    //             const genreName =
    //               genre.trim().charAt(0).toUpperCase() + genre.trim().slice(1);
    //             if (genreName === "Action") return `Action ⚔️`;
    //             if (genreName === "Adventure") return `Adventure 🐾`;
    //             if (genreName === "Racing") return `Racing 🏎️`;
    //             if (genreName === "Puzzle") return `Puzzle 🧩`;
    //             if (genreName === "Fighting") return `Fighting 🥷🏻`;
    //             if (genreName === "Strategy") return `Strategy 🙄`;
    //             if (genreName === "Sport") return `Sport 🏅`;
    //             return genreName; // Fallback in case no match is found
    //           })()}
    //         </Chip>
    //       ))}
    //     </div>
    //   </CardBody>
    // </div>
    <div>
        <p className="text-[40px] text-white">Helloooooo</p>
    </div>
  );
}