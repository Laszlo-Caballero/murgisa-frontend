"use client";

import { useTable } from "@/hooks/useTable";
import { ColumnDef } from "@/interfaces/table.interface";
import cx from "@/libs/cx";

interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  className?: string;
}

export default function Table<T>({ data, columns, className }: TableProps<T>) {
  const table = useTable({ columns, data });
  return (
    <div className={cx("border border-gray-200 rounded-lg", className)}>
      <table className={cx("w-full")}>
        <thead>
          <tr className="border-b border-gray-200 hover:bg-gray-100 transition-colors">
            {table.getHeaders().map((header, i) => {
              return (
                <th
                  key={i}
                  className="font-medium text-sm text-gray-500 text-left p-4"
                >
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {table.getCells().map((row, index) => {
            return (
              <tr key={index}>
                {row.map((cell, i) => {
                  return (
                    <td
                      key={i}
                      className={cx(
                        "p-4 border-gray-200",
                        i != row.length - 1 && "border-b"
                      )}
                    >
                      {cell}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>

        <tfoot>
          <tr>
            {table.getFooter().map((footer, i) => {
              return <td key={i}>{footer}</td>;
            })}
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
