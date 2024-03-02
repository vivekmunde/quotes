import { ActionFunctionArgs, json } from "@remix-run/node";
import { setUserPreferences as _setUserPreferences } from "~/utils/server/user-preferences";

export type TResponse = {
  fields?: {
    theme?: FormDataEntryValue | null;
  };
  errors?: {
    message?: string;
  };
};

async function setUserPreferences({ request }: ActionFunctionArgs) {
  const form = await request.formData();
  const theme = form.get("theme");

  const themeToSet =
    typeof theme === "string" && (theme === "dark" || theme === "light")
      ? theme
      : undefined;

  const fields = { theme };

  const preferences = await _setUserPreferences({ theme: themeToSet });

  return json(
    { fields, errors: { message: undefined } },
    {
      headers: {
        "Set-Cookie": preferences,
      },
    }
  );
}

const action = async (args: ActionFunctionArgs) => {
  return setUserPreferences(args);
};

export default action;
