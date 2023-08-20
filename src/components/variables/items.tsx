//All the available items in the website

const items = [
  { name: "coverpage generator", tag: "project", link: "/coverpage-generator" },
  { name: "text-2-handwriting", tag: "project", link: "/text2hw" },
  { name: "syllabus", tag: "syllabus", link: "/syllabus" },
  { name: "class routine", tag: "routine", link: "/routine" },
  { name: "java course", tag: "note", link: "/java-course" },
];

//For sorting searchable items
items.sort((a, b) => a.name.localeCompare(b.name));

export default items;
