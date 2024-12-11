"use client";
import {
  Dialog,
  DialogContent,
  //   DialogDescription,
  //   DialogHeader,
  DialogTitle,
  //   DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

import { getCartProducts } from "@/utils/actions";
import { AllLikedProps } from "@/utils/types";

import React, { Dispatch, SetStateAction } from "react";
import { CartCard } from "../MainCard";

interface TestDialogProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const MyCartDialog = ({ open, setOpen }: TestDialogProps) => {
  const getAllproductsCart: AllLikedProps[] = getCartProducts();

  return (
    <Dialog defaultOpen={true} open={open} onOpenChange={setOpen}>
      <DialogContent className="grid grid-cols-2 p-0 overflow-hidden min-w-[1000px] min-h-[600px]">
        <div className="bg-[#E3ECFF] px-5 py-6 space-y-6">
          <DialogTitle>
            <button
              onClick={() => setOpen(false)}
              className="flex items-center space-x-2 outline-none  hover:opacity-75 ease-in-out duration-300"
            >
              <svg
                width={27}
                height={24}
                viewBox="0 0 27 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width={27} height={24} fill="url(#pattern0_84_1101)" />
                <defs>
                  <pattern
                    id="pattern0_84_1101"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                  >
                    <use
                      xlinkHref="#image0_84_1101"
                      transform="matrix(0.00987654 0 0 0.0111111 0.0555556 0)"
                    />
                  </pattern>
                  <image
                    id="image0_84_1101"
                    width={90}
                    height={90}
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACc0lEQVR4nO3dvWoUURiH8WeE6IiFNq6iNtYDahovYdOol2FhigQsBDvBGxARe6/BImCvlcEvRESxEcWgiIViYyIDM7gO+zXrmdds9vnB22XPybyQ+Z/ZOZyAJEmSJLVzoOXPq0VjrwLPgF/ADvAauA4cnHYQjXcGeFE1d1i9A05PGENjZMA68HNMk+t6AxwZN5iGOw5sTNHgwbo5YiyNcAHYatnkst6OGlB/K0PtDrA9Q5PryhtjquHshMCbpsp7+VJzYLUPvEn1uBpTDT3gfoIG17XanEDMHHij6jmw38amDbxmPQFODcyx8ArgacIGl3UPOLTwnR0IvMvA94QNLm87F+sJRPLAK+sBcMLm/rECfEjY4HIJeA3YNzDHQsuBW4kD7yVw7n9f2G5SGHgxgffDwOtOz8Dr3oqB163cwOteYeB1KzPwutcz8GIC76NPeN3JDbzuGXgBgbeW6B3ejl9pDmfgBTDwOmbgBe1v20x4L96uXry6jXbAUuImb1VbCNSwmrDJG9Vfh4Z4lOgd3nq1JNQI33yHF+NrgkYvB/2uc+2ht44YVwzDuOVduZ/Y5V0AH1j2wCP4cuRFzJO+2wbi+DXpHtjLfCnyIuaJr7IC5QZlrL5BGafnBpo4mUEZq3CTY5zcoIzVNyjj9AzKOJlBGaswKOPkBmWsvkEZp2dQxskMyliFQTnfR/1sen5H3OFVr9wunPb80XF1Y8xcCy9LGJTl8cbubA0KysOTJhJJgvKYjez+ifJTizn0D0F5t/6wujuJ9wtwsuX4avnPFD4D55sf0uz7udeqlUkdlu+B28DRGcfUBOWhry7jJEmSJHav3wZiMzpyij7QAAAAAElFTkSuQmCC"
                  />
                </defs>
              </svg>

              <p className="text-[18px]">Back to dashboard</p>
            </button>
          </DialogTitle>

          {getAllproductsCart.length > 0 ? (
            <div className="pl-8 space-y-2">
              <div className="">
                <h1 className="text-[20px] font-bold text-black">
                  Product Information & Review
                </h1>
                <p className="text-[12px]">
                  By placing your order, you agree to storelo in’s Privacy and
                  policy .{" "}
                </p>
              </div>
              <ScrollArea className="h-[600px] w-full py-4 hide-scrollbar">
                <div className="space-y-4">
                  {getAllproductsCart.map((product, index) => (
                    <CartCard
                      key={index}
                      brandId={product.brandId}
                      brandName={product.brandName}
                      id={product.product.id}
                      imageUrl={product.product.pictures[0]}
                      price={product.product.price}
                      productName={product.product.name}
                      description={product.product.description}
                    />
                  ))}
                </div>
              </ScrollArea>
            </div>
          ) : (
            <p>Not product in your cart yet</p>
          )}
        </div>
        <div></div>
      </DialogContent>
    </Dialog>
  );
};

export default MyCartDialog;