import Cookies from "universal-cookie";
const cookies = new Cookies();

type FormType = {
  [key: string]: string;
};

export const cookiesSetFormData = (value: FormType): void =>
  cookies.set("form_data", value, { path: "/" });

export const cookiesGetFormData = (): FormType => cookies.get("form_data");

export const cookiesRemoveFormData = (): void =>
  cookies.remove("form_data", { path: "/" });

export const cookiesGetCompletedForm = (): FormType =>
  cookies.get("completed_form");

export const cookiesSetCompletedForm = (value: FormType): void => {
  const date = new Date();
  date.setTime(date.getTime() + 24 * 60 * 60 * 1000);

  cookies.set("completed_form", value, {
    path: "/",
    expires: new Date(date),
    sameSite: "none",
    secure: true,
  });
};
