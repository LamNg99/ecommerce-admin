"use client";

import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ColorColumn, columns } from "./column";
import { DataTable } from "@/components/data-table";
import { ApiList } from "@/components/api-list";

interface ColorClientProps {
  data: ColorColumn[];
}

export const ColorClient = ({ data }: ColorClientProps) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Colors (${data.length})`}
          description="Manage colors for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/colors/new`)}>
          <Plus className="h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} />
      <Heading title="API" description="API calls for colors" />
      <Separator />
      <ApiList entityIdName="colorId" entityName="colors" />
    </>
  );
};
