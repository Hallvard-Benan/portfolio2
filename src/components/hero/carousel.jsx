import EmblaCarousel from "../ui/EmblaCarousel";

const projects = [
  {
    title: "Auction House",
    desktopImg: "/public/images/Auctionhouse-desktop-.webp",
    mobileImg: "/public/images/Auctionhouse-mobile.webp",
  },
  {
    title: "Beyond Pace",
    desktopImg: "/public/images/beyond-pace-desktop.webp",
    mobileImg: "/public/images/beyond-pace-mobile.webp",
  },
];

function Carousel() {
  return <EmblaCarousel slides={projects} options={{ loop: true }} />;
}

export default Carousel;
