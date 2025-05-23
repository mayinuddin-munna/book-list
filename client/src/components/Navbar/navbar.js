// icons
import logo from "@/assets/icons/logo.png";
import dua from "@/assets/icons/AllDuas.png";
import book from "@/assets/icons/Book.png";
import bookmark from "@/assets/icons/Bookmark.png";
import duaQA from "@/assets/icons/DuaQA.png";
import home from "@/assets/icons/Home.png";
import support from "@/assets/icons/IWantToSupport.png";
import memorize from "@/assets/icons/Memorize.png";
import ruqyah from "@/assets/icons/Ruqyah.png";

import Image from "next/image";

export default function Navbar() {
  return (
    <section className="w-[6rem] col-span-1 bg-background shadow-md rounded-sm flex justify-center items-center">
      <div className="flex flex-col justify-between items-center gap-y-5 py-16">
        <div className="pb-6">
          <Image src={logo} alt="logo" className="w-20 h-20" />
        </div>

        <Image src={home} alt="home" />
        <Image src={dua} alt="dua" />
        <Image src={memorize} alt="memorize" />
        <Image src={bookmark} alt="bookmark" />
        <Image src={ruqyah} alt="ruqyah" />
        <Image src={duaQA} alt="duaQA" />
        <Image src={book} alt="book" />

        <div className="pt-6">
          <Image src={support} alt="support" className="w-20 h-20" />
        </div>
      </div>
    </section>
  );
}
