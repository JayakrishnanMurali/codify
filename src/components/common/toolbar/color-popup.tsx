import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { wrapperColors } from "../snippet/wrapper-colors";
import { useAppDispatch, useAppSelector } from "@/redux/redux-hooks";
import { setColor } from "@/redux/config-slice";

export const ColorPopup = () => {
  const dispatch = useAppDispatch();

  const { color } = useAppSelector((state) => state.config);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full items-center gap-x-1 p-1">
          <div
            style={{ background: color }}
            className="h-full w-full rounded-md"
          ></div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <Tabs defaultValue="account">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="gradient">Gradient</TabsTrigger>
            <TabsTrigger value="color">Color</TabsTrigger>
          </TabsList>
          <TabsContent value="gradient">
            <div className="grid grid-cols-6 gap-2 py-2">
              {wrapperColors.gradients.map((color, index) => (
                <div
                  role="button"
                  key={index}
                  style={{ background: color }}
                  className="h-8 w-8 cursor-pointer rounded-full transition-all duration-300 ease-in-out hover:scale-110"
                  onClick={() => dispatch(setColor(color))}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="color">
            <div className="grid grid-cols-6 gap-2 py-2">
              {wrapperColors.solid.map((color, index) => (
                <div
                  role="button"
                  key={index}
                  style={{ background: color }}
                  className="h-8 w-8 cursor-pointer rounded-full transition-all duration-300 ease-in-out hover:scale-110"
                  onClick={() => dispatch(setColor(color))}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </PopoverContent>
    </Popover>
  );
};
