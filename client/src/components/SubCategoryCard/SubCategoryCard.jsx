"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import feverIcon from "@/assets/icons/fever.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "@/config";

const SubCategoryCard = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(categories);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${config.base_url}/categories`);

        setCategories(response.data.data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <section>
      <Accordion type="single" collapsible className="w-full">
        {categories.map((category) => (
          <AccordionItem key={category.id} value={`cat-${category.id}`}>
            <AccordionTrigger>
              <div className="flex gap-4 bg-[#E8F0F5] p-3 rounded-md w-full items-center justify-between">
                <div className="flex gap-4 items-center">
                  <div className="bg-[#CFE0E5] rounded-md w-14 h-14 flex items-center justify-center">
                    <Image className="w-10 h-10" src={feverIcon} alt="icon" />
                  </div>
                  <div className="space-y-1 text-left">
                    <p className="text-primary font-semibold">
                      {category.cat_name_en}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {category.no_of_subcat} Subcategories |
                    </p>
                  </div>
                </div>
                <div className="text-right space-y-1">
                  {/* <p className="font-semibold">|</p> */}
                  <p className="text-muted-foreground mt-8 text-sm">
                    {category.no_of_dua} Duas
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Coming soon: Subcategories or duas...
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default SubCategoryCard;
