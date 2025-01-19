import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const typographyVariants = cva("", {
  variants: {
    variant: {
      "body-lg": "text-[#3C454C] text-base font-normal font-ubuntu",
      "body-md": "text-base font-normal font-ubuntu text-[#1F236299]",
      h3: "font-unbounded text-5xl text-[#3C454C] font-light",
      h4: "font-unbounded text-3xl text-[#3C454C] font-medium",
      h5: "font-unbounded text-2xl text-[#3C454C] font-medium",
      h6: "font-unbounded text-base text-[#3C454C] font-medium",
      "body-sm": "text-sm font-normal font-ubuntu text-[#3C454C]",
      link: "text-sm font-normal font-ubuntu text-[#4D57F6]",
      error: "text-xs font-normal text-red-500 font-ubuntu",
      nav: "text-base font-unbounded font-semibold text-[#3C454C]",
      overline: "font-ubuntu font-normal text-xs leading-[31.92px] text-[#1F236299] tracking-[1px]",
      subtitle1: "font-ubuntu text-base font-medium leading-7 tracking-[0.15px]",
      file: "font-roboto text-sm font-normal text-[#1F236299] tracking-[0.17px]",
      alert: "font-unbounded font-medium text-base tracking-[0.15px] text-[#1E4620]"
    },
  },
  defaultVariants: {
    variant: "body-md",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {}

const Typography: React.FC<TypographyProps> = ({
  variant,
  className,
  ...props
}) => {
  const Comp = "p";

  return (
    <Comp
      className={cn(typographyVariants({ variant, className }))}
      {...props}
    />
  );
};

export { Typography };