import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerWhereInput = {
  address?: StringNullableFilter;
  email?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  phone?: StringNullableFilter;
  surname?: StringFilter;
};
