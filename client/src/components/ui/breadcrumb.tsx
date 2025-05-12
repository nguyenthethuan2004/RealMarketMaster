import { Link } from "wouter";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="bg-gray-50 border-t border-b border-gray-200">
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-wrap items-center text-sm">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            
            if (isLast || !item.href) {
              return (
                <span
                  key={index}
                  className={`${isLast ? 'text-gray-500' : 'breadcrumb-item text-red-600 hover:underline'}`}
                >
                  {item.label}
                </span>
              );
            }
            
            return (
              <Link
                key={index}
                href={item.href}
                className="breadcrumb-item text-red-600 hover:underline"
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
