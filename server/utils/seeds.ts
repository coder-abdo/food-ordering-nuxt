import { prisma } from "./prisma";
async function main() {
  await prisma.category.createMany({
    data: [
      {
        slug: "pastas",
        title: "Italian Pastas",
        description:
          "Savor the taste of perfection with our exquisite Italian handmade pasta menu.",
        img: "/temporary/m1.png",
        color: "white",
      },
      {
        slug: "burgers",
        title: "Juicy Burgers",
        description:
          "Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.",
        img: "/temporary/m2.png",
        color: "black",
      },
      {
        slug: "pizzas",
        title: "Cheesy Pizzas",
        description:
          "Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.",
        img: "/temporary/m3.png",
        color: "white",
      },
    ],
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
