import { extendVariants, Button } from "@nextui-org/react";
import { curely_green } from "../colors";

export const CurelyButton = extendVariants(Button, {
  variants: {
    color: {
      curely_green: `text-[${curely_green}] border-[${curely_green}]`,
    },
  },
});
