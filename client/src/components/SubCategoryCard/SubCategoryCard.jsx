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
  const [duas, setDuas] = useState([]);

  console.log(duas);

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

  useEffect(() => {
    const fetchDuas = async () => {
      const response = await axios.get(`${config.base_url}/all`);
      setDuas(response.data.data);
    };
    fetchDuas();
  }, []);

  if (loading) return <p>Loading...</p>;

  const subcatMap = {
    1: "Allah's Guidance",
    2: "Seeking Forgiveness",
    // Add all subcat_id → name_en mappings here
  };

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
            {/* <AccordionContent>
              Coming soon: Subcategories or duas...
            </AccordionContent> */}
            <AccordionContent>
  {Object.entries(
    duas
      .filter((dua) => dua.cat_id === category.cat_id)
      .reduce((acc, dua) => {
        const subcatName = subcatMap[dua.subcat_id] || "Uncategorized";
        if (!acc[subcatName]) acc[subcatName] = [];
        acc[subcatName].push(dua);
        return acc;
      }, {} )
  ).map(([subcatName, duaList]) => (
    <div key={subcatName} className="mb-4">
      <p className="text-primary font-semibold mb-2">{subcatName}</p>
      <ul className="space-y-1 pl-4 border-l-2 border-dashed border-muted">
        {duaList.map((dua) => (
          <li key={dua.dua_id} className="text-sm text-muted-foreground">
            ↳ {dua.dua_name_en}
          </li>
        ))}
      </ul>
    </div>
  ))}
</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default SubCategoryCard;
