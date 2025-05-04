// import { poppins, roboto } from "@/utils/fonts";
// import React from "react";

// const Dataupload = () => {
//   return (
//     <div>
//       <div className="mb-6">
//         <h1
//           className={`${poppins.className} font-semibold text-sectionHeading`}
//         >
//           Dashboard
//         </h1>
//         <p className={`${roboto.className} text-para`}>Hi, John</p>
//       </div>
//     </div>
//   );
// };

// export default Dataupload;

"use client";
import React from "react";
import { Upload } from "lucide-react";
import { poppins, roboto } from "@/utils/fonts";

const PDFUploadPage = () => {
  return (
    <div>
      <div className="mb-6">
        <h1
          className={`${poppins.className} font-semibold text-sectionHeading`}
        >
          Dashboard
        </h1>
        <p className={`${roboto.className} text-para`}>Hi, John</p>
      </div>
      <div className="p-6 w-full mx-auto">
        <div className="flex justify-between items-center">
          <h1
            className={`${poppins.className} font-semibold text-sectionHeading mb-4`}
          >
            Upload PDF Data File
          </h1>

          {/* Upload Button */}
          <label
            htmlFor="pdf-upload"
            className="flex items-center gap-2 px-4 py-1 border border-black rounded-md cursor-pointer hover:bg-black hover:text-white transition-all w-fit"
          >
            <Upload className="w-4 h-4" />
            Upload PDF
          </label>
          <input
            type="file"
            id="pdf-upload"
            accept="application/pdf"
            className="hidden"
          />
        </div>
        {/* Preview / Fallback Card */}
        <div className="mt-8 border border-dashed border-black rounded-md p-6 text-center text-gray-500 italic bg-gray-50">
          No data to show
        </div>
      </div>
    </div>
  );
};

export default PDFUploadPage;
