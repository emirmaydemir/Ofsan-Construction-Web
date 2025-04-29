import Image from "next/image";
import React from "react";
import Award from "@/public/award.png";
import { Badge } from "@/components/Badge";

export const ContactDetails = () => {
  return (
    <div>
      <div className="relative w-24 h-24">
        <Image src={Award} alt="award" fill className="object-cover rounded-full" />
      </div>

      <h2 className="my-4">Contact Us</h2>
      <p className="text-lg mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cupiditate iure animi perspiciatis molestias sapiente repellendus porro non velit dolorem quasi magnam voluptas, quam consectetur aliquid architecto est? Veniam, ducimus!
        <br />
        <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi unde aspernatur dolorum possimus eveniet nostrum molestias. Quos, molestiae praesentium magni exercitationem eos ut similique dolorem. Nam sequi tenetur ducimus excepturi.
        <br />
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi pariatur nesciunt dolorum similique voluptas, eveniet aut vero, incidunt eligendi laborum aliquid quibusdam corrupti dignissimos id, blanditiis nemo impedit odio totam.
      </p>

      <Badge />
    </div>
  );
};
