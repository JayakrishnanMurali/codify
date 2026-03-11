"use client";

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
import { setBackgroundColor } from "@/redux/config-slice";

export const ColorPopup = () => {
  const dispatch = useAppDispatch();
  const { backgroundColor } = useAppSelector((state) => state.config);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="h-8 w-8 p-1" title="Background">
          <div
            style={{ background: backgroundColor }}
            className="h-full w-full rounded-sm"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <Tabs defaultValue="gradient">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="gradient">Gradient</TabsTrigger>
            <TabsTrigger value="solid">Solid</TabsTrigger>
          </TabsList>
          <TabsContent value="gradient">
            <div className="grid grid-cols-8 gap-2 py-2">
              {wrapperColors.gradients.map((gradientColor, index) => (
                <button
                  key={index}
                  style={{ background: gradientColor }}
                  className="h-6 w-6 cursor-pointer rounded-full transition-transform duration-150 hover:scale-110 focus:outline-none focus:ring-1 focus:ring-ring"
                  onClick={() => dispatch(setBackgroundColor(gradientColor))}
                  aria-label={`Gradient ${index + 1}`}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="solid">
            <div className="grid grid-cols-8 gap-2 py-2">
              {wrapperColors.solid.map((solidColor, index) => (
                <button
                  key={index}
                  style={{
                    background: solidColor,
                    border:
                      solidColor === "#ffffff" || solidColor === "#f8fafc"
                        ? "1px solid #e2e8f0"
                        : undefined,
                  }}
                  className="h-6 w-6 cursor-pointer rounded-full transition-transform duration-150 hover:scale-110 focus:outline-none focus:ring-1 focus:ring-ring"
                  onClick={() => dispatch(setBackgroundColor(solidColor))}
                  aria-label={`Color ${index + 1}`}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </PopoverContent>
    </Popover>
  );
};
