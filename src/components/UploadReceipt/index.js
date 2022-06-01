import React, { useState } from "react";
import axios from "axios";
import { FaPlusCircle } from "react-icons/fa";

export const UploadReceipt = ({ receiptData, setReceiptData, className }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    let reader = new FileReader();
    let image64 = 0;
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        console.log(e.target.result);
        setIsLoading(() => true);
        axios
          .post(
            process.env.NEXT_PUBLIC_ENDPOINT_URL + "/receiptAnalyzer",
            { imageString: e.target.result },
            {
              headers: {
                "Content-Type": "application/json",
                "Ocp-Apim-Subscription-Key": "a143b32d9ba747f8b927d3f5d2be7db1",
              },
            }
          )
          .then((respons) => {
            console.log(respons);

            const receiptValue = respons.data.values;
            setReceiptData(() => receiptValue);
            setIsLoading(() => false);
          })
          .catch((err) => {
            {
              console.log(err);
              setIsLoading(() => false);
            }
          });
      };
    }
  };

  return (
    <div
      className={`border-4 flex flex-col relative border-gray-600 rounded-lg h-80 w-80 items-center justify-center cursor-pointer ${className}`}
    >
      <input
        type="file"
        accept="image/*"
        className="w-full h-full absolute opacity-0"
        onChange={handleInputChange}
      />
      <FaPlusCircle className="w-9 h-9" />
      <h2 className="font-bold text-xl">Import Nota</h2>

      {isLoading && (
        <div className="w-full h-full absolute bg-gray-400 opacity-50">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};
