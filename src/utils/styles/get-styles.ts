import {Variant, VariantPrefix} from "@/types";

const PRIMARY_VARIANT_COUNT = 2;

export const getStyleVariant = (index: number, prefix: VariantPrefix, primaryCount = PRIMARY_VARIANT_COUNT) => {
  return index < primaryCount ? `${prefix}${Variant.Primary}` : `${prefix}${Variant.Secondary}`;
};