import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowDownToLine, Copy, Sparkles } from "lucide-react";

export const Toolbar = () => {
  return (
    <div className=" rounded-lg bg-accent/70 p-2">
      <div className="grid grid-cols-4 gap-3">
        <Select defaultValue="material">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="material">Material</SelectItem>
            <SelectItem value="xq-light">Light</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="js">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="js">Javascript</SelectItem>
            <SelectItem value="html">HTML</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex flex-row gap-x-3">
          <Button variant="outline" className="w-full items-center gap-x-1 p-1">
            <div className="h-full w-full rounded-md bg-green-400"></div>
          </Button>

          <Button variant="outline" className="items-center gap-x-1">
            <Sparkles className="h-4 w-4" />
          </Button>

          <Button variant="outline" className="items-center gap-x-1">
            <Copy className="h-4 w-4" />
          </Button>
        </div>

        <Button variant="default" className="items-center gap-x-1">
          <ArrowDownToLine className="h-4 w-4" />
          Export
        </Button>
      </div>
    </div>
  );
};
