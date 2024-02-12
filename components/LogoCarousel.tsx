import Image from "next/image";

import gentech from "@/public/logocarousel/gentech.png";
import dataspace from "@/public/logocarousel/dataspace.png";
import thevirtualco from "@/public/logocarousel/the virtualcto.png";
import access from "@/public/logocarousel/Access-BG.png";
import sastra from "@/public/logocarousel/Sastra-BG.png";
import mavorion from "@/public/logocarousel/Mavorion-BG.png";
import ideajar from "@/public/logocarousel/ideajar-logo.png";

export default function LogoCarousel() {
  const logos = [
    { src: gentech, alt: "gentech" },
    { src: thevirtualco, alt: "ntc" },
    { src: dataspace, alt: "dataspace" },
    { src: access, alt: "access" },
    { src: sastra, alt: "adbl" },
    { src: mavorion, alt: "kendra" },
    { src: ideajar, alt: "nitc12345" },
  ];

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_img]:max-w-60 animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_img]:max-w-60 animate-infinite-scroll"
        aria-hidden="true"
      >
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
}
