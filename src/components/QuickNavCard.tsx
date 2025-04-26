import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface QuickNavCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  className?: string;
}

const QuickNavCard = ({
  title,
  description,
  icon: Icon,
  href,
  className,
}: QuickNavCardProps) => {
  return (
    <Link
      to={href}
      className={cn(
        "flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 card-hover text-center",
        className
      )}
    >
      <div className="p-3 bg-edu-light rounded-full mb-4">
        <Icon className="h-6 w-6 text-edu" />
      </div>
      <h3 className="font-medium text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </Link>
  );
};

export default QuickNavCard;