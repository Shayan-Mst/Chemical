import type { ProductRange } from "../types/type";
import acid from "../assets/acid.jpg";
import oil from "../assets/oil.jpg";
import chemical from "../assets/cleaner.jpg"; // <-- add an image for this category

export const productRange: ProductRange[] = [
  {
    image: acid,
    title: "اسید های صنعتی",
    description:
      "اسیدهای سولفوریک، هیدروکلریک، نیتریک و فسفریک با خلوص بالا برای تولید و فرآوری",
    products: [
      "اسید سولفوریک (H₂SO₄)",
      "هیدروکلریک اسید (HCl)",
      "نیتریک اسید (HNO₃)"
    ]
  },
  {
    image: oil,
    title: "حلال ها & روغن ها",
    description:
      "روغن کرچک ممتاز، پارافین‌ها و حلال‌های صنعتی برای کاربردهای مختلف",
    products: [
      "روغن کرچک سولفونه",
      "پارافین‌ مایع و جامد",
      "حلال های صنعتی"
    ]
  },
  {
    image: chemical,
    title: "مواد شیمیایی تخصصی",
    description:
      "مواد و ترکیبات ویژه ضد خوردگی و ضد عفونی و شوینده های صنعتی",
    products: ["مورفولین", "فرمالین", "شوینده های صنعتی"]
  }
];
