import React from "react";

export default function Desktop() {
  return (
    <div className="relative bg-[url('/img/Desktop.jpg')] bg-no-repeat bg-cover bg-center h-full text-white pl-10">
      <div className="absolute inset-0 bg-black/50 filter contrast-50 z-0"></div>
      <div className="relative z-10">
        <p className="font-poppins text-base font-semibold pt-9 tracking-[0.2em] slide-up">
          WEDDING ANNOUNCEMENT
        </p>
        <div className="font-butler text-[70px] leading-[72px] py-8 uppercase">
          <h2>Tiffany &</h2>
          <h2>Jared</h2>
        </div>
        <p className="font-newsreader text-base pr-40 italic slide-up">
          "Aku ingin mencintaimu dengan sederhana; dengan kata yang tak sempat
          diucapkan kayu kepada api yang menjadikannya abu. Aku ingin
          mencintaimu dengan sederhana; dengan isyarat yang tak sempat
          disampaikan awan kepada hujan yang menjadikannya tiada."
          <br />— Sapardi Djoko Damono
        </p>
      </div>
    </div>
  );
}
