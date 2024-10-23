import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const ProductsTableSkeleton = () => {
  return (
    <div className="min-h-screen flex flex-col gap-3 p-5 w-full z-10">
      <div className="bg-background rounded-sm">
        <div className="p-5 bg-background border animate-pulse rounded-sm shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">
                  <div className="h-4 w-12 bg-secondary rounded-sm" />
                </TableHead>
                <TableHead>
                  <div className="h-4 w-8 bg-secondary rounded-sm" />
                </TableHead>
                <TableHead>
                  <div className="h-4 w-32 bg-secondary rounded-sm" />
                </TableHead>
                <TableHead>
                  <div className="h-4 w-32 bg-secondary rounded-sm" />
                </TableHead>
                <TableHead>
                  <div className="h-4 w-24 bg-secondary rounded-sm" />
                </TableHead>
                <TableHead>
                  <div className="h-4 w-16 bg-secondary rounded-sm" />
                </TableHead>
                <TableHead>
                  <div className="h-4 w-10 bg-secondary rounded-sm" />
                </TableHead>
                <TableHead>
                  <div className="h-4 w-10 bg-secondary rounded-sm" />
                </TableHead>
                <TableHead>
                  <div className="h-4 w-20 bg-secondary rounded-sm" />
                </TableHead>
                <TableHead className="w-22">
                  <div className="h-4 w-12 bg-secondary rounded-sm" />
                </TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <TableRow key={item}>
                  <TableCell className="font-medium">
                    <div className="size-14 bg-secondary rounded-sm" />
                  </TableCell>
                  <TableCell>
                    <div className="h-4 w-14 bg-secondary rounded-sm" />
                  </TableCell>
                  <TableCell>
                    <div className="h-4 w-24 bg-secondary rounded-sm" />
                  </TableCell>
                  <TableCell className="min-w-[20rem]">
                    <div className="h-10 w-56 bg-secondary rounded-sm" />
                  </TableCell>
                  <TableCell>
                    <div className="h-4 w-24 bg-secondary rounded-sm" />
                  </TableCell>
                  <TableCell>
                    <div className="h-4 w-16 bg-secondary rounded-sm" />
                  </TableCell>
                  <TableCell>
                    <div className="h-4 w-10 bg-secondary rounded-sm" />
                  </TableCell>
                  <TableCell>
                    <div className="h-4 w-10 bg-secondary rounded-sm" />
                  </TableCell>
                  <TableCell>
                    <div className="h-4 w-10 bg-secondary rounded-sm" />
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <div className="h-8 w-14 bg-secondary rounded-sm" />
                      <div className="h-8 w-20 bg-secondary rounded-sm" />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ProductsTableSkeleton;
