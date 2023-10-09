import Image from "next/image";

export type category = "Reaction" | "Memory" | "Visual" | "Verbal";

export interface Props {
  icon: string;
  score: number;
  category: category;
}

export default function SummaryInfo({ score, category, icon }: Props) {
  function categoryClass(category: category): string {
    switch (category) {
      case "Memory":
        return "bg-yellow-50 text-yellow-700";
      case "Visual":
        return "bg-purple-50 text-purple-700";
      case "Verbal":
        return "bg-green-50 text-green-700";
      case "Reaction":
        return "bg-red-50 text-red-700";
      default:
        return "bg-blue-50 text-blue-700";
    }
  }
  return (
    <div
      className={
        categoryClass(category) +
        " flex flex-row flex-nowrap gap-4 p-4 rounded-xl "
      }
    >
      <Image src={icon} alt={category} width={16} height={16} />
      <span className="font-medium">{category}</span>
      <span className="ml-auto">
        <span className="text-blue-950 font-bold">{score}</span>
        <span className="text-gray-500">&nbsp;/&nbsp;100</span>
      </span>
    </div>
  );
}
